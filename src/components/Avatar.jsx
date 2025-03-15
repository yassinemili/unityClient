import { useAuth } from "../hooks/useAuth";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router";

const Avatar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const getInitial = (user) => {
    return user.username ? user.username.charAt(0).toUpperCase() : "?";
  };

  return (
    <Popover className="relative">
      {/* Avatar Button */}
      <PopoverButton className="flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full text-lg font-bold uppercase focus:outline-none">
        {getInitial(user)}
      </PopoverButton>

      {/* Popover Panel (Dropdown Menu) */}
      <PopoverPanel className="absolute -right-35 lg:right-0 z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200">
        <div className="p-3">
          <p className="text-sm font-semibold text-gray-900">
            {user?.username}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <Link className="block w-full px-4 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100">
            My Profile
          </Link>
          <Link
            to="dashboard"
            className="block w-full px-4 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100"
          >
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default Avatar;
