import { Navigate, Outlet } from "react-router-dom";
import tokenService from "../core/services/tokenService";

const PrivateRoutes = () => {
  const isAuthenticated = tokenService.hasToken();
  console.log(isAuthenticated);

  if (!isAuthenticated) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
