import { useLocation, Navigate } from "react-router";
import { useContext } from "react";

import { AuthContext } from "../AuthContext";

const ProtectRoute = ({children})=> {;
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  return isAuthenticated() ? (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  ) : (
    children
  );
}

export default ProtectRoute;
