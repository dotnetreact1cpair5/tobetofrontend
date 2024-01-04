import { Outlet } from "react-router-dom";
import App from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
}
export default Layout;
