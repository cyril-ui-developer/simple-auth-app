import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import Protected from "./components/Protected";
import Nav from "./components/Nav";

function App() {
  const { authState, isUserAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="app">
      {isUserAuthenticated() && (
        <Nav username={authState?.firstName} logout={logout} />
      )}
  <Routes>
      <Route
        path="/"
        element={
          <Protected>
            <Dashboard />
          </Protected>
        }
      />
      <Route
        path="/userdetails/:id"
        element={
          <Protected>
            <UserDetails />
          </Protected>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
