import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <Outlet />

      <Footer />
    </main>
  );
}
export default Layout;
