import { Outlet, Link, useLocation } from "react-router-dom";
import { UserIcon, BuildingOffice2Icon } from "@heroicons/react/24/solid";

const RegisterLayout = () => {
  const location = useLocation();
  const showChoices = location.pathname === "/register";

  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
      {showChoices ? (
        <>
          <div className="w-full max-w-5xl mx-auto text-center mb-6 md:mb-10 px-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl mb-3">
              Choose Registration Type
            </h1>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
              Select the appropriate registration option based on your needs
            </p>
          </div>

          <div className="w-full max-w-4xl px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 md:gap-8">
              <Link
                to="/register/company"
                className="block transition-transform hover:scale-105"
              >
                <div className="group h-full border-1 border-primary-500 rounded-lg shadow-md hover:border-accent-200 hover:shadow-xl max-w-xs transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="text-center p-4 md:p-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-100 group-hover:bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all duration-300">
                      <BuildingOffice2Icon className="h-7 w-7 md:h-8 md:w-8 text-primary-500 group-hover:text-accent-500 transition-all duration-300" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold">
                      Company Registration
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      Register your business or organization
                    </p>
                  </div>
                  <div className="text-center px-4 md:px-6 pb-4">
                    <p className="text-gray-500 text-sm md:text-base">
                      Create a company account to manage employees, projects,
                      and business operations.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/register/employee"
                className="block transition-transform hover:scale-105"
              >
                <div className="group h-full border-1 border-primary-500 rounded-lg shadow-md hover:border-accent-500 hover:shadow-xl max-w-xs transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="text-center p-4 md:p-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-100 group-hover:bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4  transition-all duration-300 ">
                      <UserIcon className="h-7 w-7 md:h-8 md:w-8 text-primary-500 group-hover:text-accent-500 transition-all duration-300" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold">
                      Employee Registration
                    </h2>
                    <p className="text-neutral-500 text-sm mt-1">
                      Register as an employee or individual
                    </p>
                  </div>
                  <div className="text-center px-4 md:px-6 pb-4">
                    <p className="text-neutral-500 text-sm md:text-base">
                      Create an employee account to access work resources and
                      collaborate with your team.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default RegisterLayout;
