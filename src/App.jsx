import { useContext } from "react";
import { AuthContext } from "./AuthContext";

import "./App.css";
import RoutesSetup from "./routes";
import Nav from "./components/Nav";

function App() {
  const { authState, isUserAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="app">
      {isUserAuthenticated() && (
        <Nav username={authState?.firstName} logout={logout} />
      )}
      <RoutesSetup />
    </div>
  );
}

export default App;
