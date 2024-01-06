import { useLocation, Navigate } from "react-router";
import { useContext } from "react";

import { AuthContext } from "../AuthContext";

const ProtectRoute = ({ children }) => {
  const { isUserAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  return isUserAuthenticated() ? (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  ) : (
    children
  );
};

export default ProtectRoute;
