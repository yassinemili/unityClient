import { Outlet } from "react-router-dom";
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Navbar */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-6">
        <Outlet /> {/* Renders child routes */}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
