import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoginPage from "../pages/LoginPage";

function Layout() {
  return (
    <>
      {/* <LoginPage /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
