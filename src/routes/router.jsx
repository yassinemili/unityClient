import { createBrowserRouter } from "react-router-dom";
// import Login from "./pages/auth/Login";
import Layout from "../layouts/layout.jsx";
// import { DashboardLayout } from "./layouts/DashboardLayout.jsx";
// import AuthLayout from "./layouts/AuthLayout.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // { path: "", element: <Home /> },
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
    path: "register",
    element: <Register />,
  },
  { path: "*", element: <NotFound /> },
]);
