import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// Validation Schema
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        "http://localhost:5001/api/v1/auth/login",
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
      window.location.href = "/";
    },
    onError: (error) => {
      console.error("Login failed:", error.response?.data || error.message);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* put you logo here */}
        <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                {...register("username")}
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  to="/forget-password"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2 relative">
              <input
                id="password"
                {...register("password")}
                type={showPassword ? "text" : "password"}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600 cursor-pointer"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Create your account now
          </Link>
        </p>
      </div>
    </div>
  );
}
