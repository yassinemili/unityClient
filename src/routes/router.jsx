import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/layout.jsx";
import RegisterLayout from "../layouts/RegisterLayout.jsx";

import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/login.jsx";
import Profiledit from "../pages/profile/page.jsx";
import CompanyRegister from "../pages/registerations/CompanyRegister.jsx";
import EmployeeRegister from "../pages/registerations/EmployeeRegister.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/profile/edit",
        element: <Profiledit />
      }
      // {
      //   path: "dashboard",
      //   element: <ProtectedRoute element={<DashboardLayout />} />,
      //   children: [
      //     { path: "", element: <Dashboard /> },
      //   ],
      // },
      // {
      //   path: "company",
      //   element: <ProtectedRoute element={<DashboardLayout />} />,
      //   children: [
      //     { path: "employees/:employeeId", element: <EmployeeDetails /> },
      //   ],
      // },
      // {
      //   path: "announcements",
      //   element: <ProtectedRoute element={<DashboardLayout />} />,
      //   children: [
      //     { path: "", element: <Announcements /> },
      //     {
      //       path: "create",
      //       element: (
      //         <ProtectedRoute
      //           element={<CreateAnnouncement />}
      //           roles={["owner", "admin"]}
      //         />
      //       ),
      //     },
      //   ],
      // },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "profileedit",
    element: <Profiledit />,
  },
  {
    path: "register",
    element: <RegisterLayout />,
    children: [
      { path: "company", element: <CompanyRegister /> },
      { path: "employee", element: <EmployeeRegister /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
