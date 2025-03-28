// src/pages/Login.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../hooks/useAuth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

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

  const { user, login } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      console.log("Login successful:", response);
      navigate("/");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* Logo can be added here */}
        <h2 className="mt-10 text-center text-2xl font-bold text-neutral-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto w-full max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-neutral-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                {...register("username")}
                type="text"
                placeholder="Username"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-900"
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
                placeholder="Password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-neutral-500 hover:text-neutral-700 cursor-pointer"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {onSubmit && <p className="text-red-500 text-sm">{login.error}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
              Sign in
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
