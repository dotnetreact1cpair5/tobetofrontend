import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Slide, ToastContainer, toast } from "react-toastify";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
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
