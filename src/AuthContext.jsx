import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";

import { mockAuth } from "./mock-auth-server";

const initialState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    id: 0,
  },
};

const AuthContext = createContext({
  authState: initialState,
  setAuthState: () => initialState,
  isUserAuthenticated: () => false,
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState({});
  const [path, setPath] = useState("");
  const [isError, setIsError] = useState(false);

  const isUserAuthenticated = () =>
    authState && Object.keys(authState)?.length > 0 ? true : false;

  const login = (username) => {
    const data = mockAuth.login(username);
    setAuthState(data);
    setIsError(!isUserAuthenticated());
  };

  const logout = () => {
    setAuthState({});
    setPath(location.pathname);
    navigate("/login", { state: { path: location.pathname } });
    setIsError(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        isUserAuthenticated,
        login,
        logout,
        urlPath: path,
        isError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
