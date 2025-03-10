// src/pages/RegisterNested.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// Define a schema with a nested 'user' object including confirmPassword
const schema = yup.object().shape({
  user: yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    employeeId: yup.string().required("Employee ID is required"),
  }),
});

export default function RegisterNested() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    // {
    //   user: {
    //     username: "mili",
    //     password: "12345678999",
    //     confirmPassword: "12345678999",
    //     employeeId: "4"
    //   }
    // }
    console.log("Form submitted:", data);
    // Add your registration logic here (e.g., call an API endpoint)
  };

  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
          Create your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="user.username"
              className="block text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="user.username"
                {...register("user.username")}
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
              {errors.user?.username && (
                <p className="text-red-500 text-sm">
                  {errors.user.username.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="user.password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-2 relative">
              <input
                id="user.password"
                {...register("user.password")}
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
              {errors.user?.password && (
                <p className="text-red-500 text-sm">
                  {errors.user.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="user.confirmPassword"
              className="block text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2 relative">
              <input
                id="user.confirmPassword"
                {...register("user.confirmPassword")}
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
              {errors.user?.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.user.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="user.employeeId"
              className="block text-sm font-medium text-gray-900"
            >
              Employee ID
            </label>
            <div className="mt-2">
              <input
                id="user.employeeId"
                {...register("user.employeeId")}
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
              {errors.user?.employeeId && (
                <p className="text-red-500 text-sm">
                  {errors.user.employeeId.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
