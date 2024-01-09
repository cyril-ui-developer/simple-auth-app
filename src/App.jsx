import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { AuthContext } from "./AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import Protected from "./components/Protected";
import Nav from "./components/Nav";

function App() {
  const { isUserAuthenticated } = useContext(AuthContext);

  return (
    <div className="app">
      {isUserAuthenticated() && (
        <Nav />
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
      <Route path="*" element={<Login />} /> 
      {/* Redirects to Login page if the user tries to enter invalid routes NOT `userID`
      in the UserDetails page */}
    </Routes>
    </div>
  );
}

export default App;
