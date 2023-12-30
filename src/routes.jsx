import { useLocation, Navigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";

function ProtectedRoute(props) {
  const { children } = props;
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  return !isAuthenticated() ? (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  ) : (
    children
  );
}

function RoutesSetup() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/userdetails/:id"
        element={
          <ProtectedRoute>
            <UserDetails />
          </ProtectedRoute>
        }
      />

      {/* <Route path="*" element={ <ProtectedRoute>
      <NotFoundPage /></ProtectedRoute>} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RoutesSetup;
