import { useContext } from "react";
import { AuthContext } from "./AuthContext";

import "./App.css";
import RoutesSetup from "./routes";
import Nav from "./components/Nav";

function App() {
  const { authState, isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="app">
      {isAuthenticated() && (
        <Nav username={authState?.firstName} logout={logout} />
      )}
      <RoutesSetup />
    </div>
  );
}

export default App;
