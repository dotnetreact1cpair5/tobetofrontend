import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="">
        <Navbar />

        <Outlet />

        <Footer />
      </div>
    </main>
  );
}
export default Layout;
