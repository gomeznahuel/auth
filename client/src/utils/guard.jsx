import { Navigate, Outlet } from "react-router-dom";

const PublicRoutesCheck = ({ isLogged }) => {
  if (isLogged) return <Navigate to="/list" />;
  return <Outlet />;
};

const PrivateRoutesCheck = ({ isLogged }) => {
  if (!isLogged) return <Navigate to="/" />;
  return <Outlet />;
};

export { PrivateRoutesCheck, PublicRoutesCheck };