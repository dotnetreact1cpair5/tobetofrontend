import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authh.isAuthenticated
  );

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  // return <Outlet />
};

export default PrivateRoutes;
