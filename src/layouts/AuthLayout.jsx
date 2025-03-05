import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 shadow-md rounded-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
