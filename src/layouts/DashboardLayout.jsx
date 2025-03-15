import { Outlet } from "react-router-dom";
import { useState, useCallback } from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Optimized state toggle using useCallback
  const toggleSidebar = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      {/* Main Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
