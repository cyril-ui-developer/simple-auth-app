import { useLocation, Navigate } from "react-router";
import { useContext } from "react";

import { AuthContext } from "../AuthContext";

function Protected({ children }) {
  const { isUserAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  return !isUserAuthenticated() ? (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  ) : (
    children
  );
}

export default Protected;
