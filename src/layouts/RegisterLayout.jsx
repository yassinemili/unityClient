import { Outlet, Link, useLocation } from "react-router-dom";
import { UserIcon, BuildingOffice2Icon } from "@heroicons/react/24/solid";

const RegisterLayout = () => {
  const location = useLocation();
  const showChoices = location.pathname === "/register";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {showChoices ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Register as</h1>
          <div className="flex items-center justify-center flex-wrap gap-8">
            <Link
              to="/register/company"
              className="flex flex-col items-center gap-1 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
            >
              <BuildingOffice2Icon className="h-10 w-10 text-gray-500" />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Company
              </h5>
              <p className="font-normal text-gray-700 ">
                Create new Company now
              </p>
            </Link>
            <Link
              to="/register/employee"
              className="flex flex-col items-center gap-1 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
            >
              <UserIcon className="h-10 w-10 text-gray-500" />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Employee
              </h5>
              <p className="font-normal text-gray-700 ">
                Register as an Company now
              </p>
            </Link>
          </div>
        </>
      ) : (
        // Render the child route (registration form)
        <Outlet />
      )}
    </div>
  );
};

export default RegisterLayout;
