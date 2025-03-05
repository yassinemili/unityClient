import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/*put the side bar here*/}
      <div className="flex flex-col flex-1">
        {/*put the nav bar of dashboard here*/}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
