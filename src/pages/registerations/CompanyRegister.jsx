import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

// Validation schema for the entire form
const schema = yup.object().shape({
  company: yup.object().shape({
    name: yup.string().required("Company name is required"),
    address: yup.string().required("Address is required"),
    contactEmail: yup
      .string()
      .email("Must be a valid email")
      .required("Contact email is required"),
  }),
  employee: yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Employee email is required"),
  }),
  user: yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  }),
});

export default function CompanyRegister() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Company Details", "Employee Details", "User Details"];

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      company: { name: "", address: "", contactEmail: "" },
      employee: { firstName: "", lastName: "", email: "" },
      user: { username: "", password: "" },
    },
  });

  const onSubmit = (data) => {
    console.log("Registration Data:", data);
    // Add your API call for registration here.
  };

  // Validate fields of the current step before moving to next
  const handleNext = async () => {
    let valid = false;
    if (currentStep === 0) {
      valid = await trigger([
        "company.name",
        "company.address",
        "company.contactEmail",
      ]);
    } else if (currentStep === 1) {
      valid = await trigger([
        "employee.firstName",
        "employee.lastName",
        "employee.email",
      ]);
    } else if (currentStep === 2) {
      valid = await trigger(["user.username", "user.password"]);
    }
    if (valid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const inputClass =
    "block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm";

  return (
    <div className="flex min-h-full flex-col justify-center items-center w-full">
      <div className="sm:mx-auto w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register Your Company
        </h1>
        {/* Stepper Bar */}
        <div className="mb-8">
          <div className="flex items-baseline justify-around">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${
                    index <= currentStep
                      ? "bg-indigo-600 text-white"
                      : "bg-neutral-300 text-neutral-700"
                  }`}
                >
                  {index + 1}
                </div>
                <p className="mt-2 text-sm text-center">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {currentStep === 0 && (
            <div>
              {/* Company Details */}
              <div className="mb-4">
                <label
                  htmlFor="company.name"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Company Name
                </label>
                <div className="mt-2">
                  <input
                    id="company.name"
                    {...register("company.name")}
                    type="text"
                    placeholder="Company Name"
                    className={inputClass}
                  />
                </div>
                {errors.company?.name && (
                  <p className="text-red-500 text-sm">
                    {errors.company.name.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company.address"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Address
                </label>
                <div className="mt-2">
                  <input
                    id="company.address"
                    {...register("company.address")}
                    type="text"
                    placeholder="Address"
                    className={inputClass}
                  />
                </div>
                {errors.company?.address && (
                  <p className="text-red-500 text-sm">
                    {errors.company.address.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company.contactEmail"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Contact Email
                </label>
                <div className="mt-2">
                  <input
                    id="company.contactEmail"
                    {...register("company.contactEmail")}
                    type="email"
                    placeholder="Email"
                    className={inputClass}
                  />
                </div>
                {errors.company?.contactEmail && (
                  <p className="text-red-500 text-sm">
                    {errors.company.contactEmail.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              {/* Employee Details */}
              <div className="mb-4">
                <label
                  htmlFor="employee.firstName"
                  className="block text-sm font-medium text-neutral-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="employee.firstName"
                    {...register("employee.firstName")}
                    type="text"
                    placeholder="First Name"
                    className={inputClass}
                  />
                </div>
                {errors.employee?.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.employee.firstName.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="employee.lastName"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="employee.lastName"
                    {...register("employee.lastName")}
                    type="text"
                    placeholder="Last Name"
                    className={inputClass}
                  />
                </div>
                {errors.employee?.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.employee.lastName.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="employee.email"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Employee Email
                </label>
                <div className="mt-2">
                  <input
                    id="employee.email"
                    {...register("employee.email")}
                    type="email"
                    placeholder="Email"
                    className={inputClass}
                  />
                </div>
                {errors.employee?.email && (
                  <p className="text-red-500 text-sm">
                    {errors.employee.email.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              {/* User Details */}
              <div className="mb-4">
                <label
                  htmlFor="user.username"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="user.username"
                    {...register("user.username")}
                    type="text"
                    placeholder="Username"
                    className={inputClass}
                  />
                </div>
                {errors.user?.username && (
                  <p className="text-red-500 text-sm">
                    {errors.user.username.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="user.password"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="user.password"
                    {...register("user.password")}
                    type="password"
                    placeholder="Password"
                    className={inputClass}
                  />
                </div>
                {errors.user?.password && (
                  <p className="text-red-500 text-sm">
                    {errors.user.password.message}
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-between">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 bg-neutral-300 text-neutral-700 rounded-md"
              >
                Back
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-4 py-2 bg-indigo-600 text-white rounded-md cursor-pointer"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-4 py-2 bg-primary-600 text-white rounded-md cursor-pointer"
              >
                Register
              </button>
            )}
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-neutral-500">
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
