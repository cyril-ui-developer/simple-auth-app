import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";

import { mockAuth } from "./mock-auth-server";

const initialUserState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    id: 0,
  },
};

const AuthContext = createContext({
  authState: initialUserState,
  setAuthState: () => initialUserState,
  isUserAuthenticated: () => false,
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState({});
  const [isError, setIsError] = useState(false);

  const isUserAuthenticated = () =>
    authState && Object.keys(authState)?.length > 0 ? true : false;

  const login = (username) => {
    const user = mockAuth.login(username);
    setAuthState(user);
    setIsError(!isUserAuthenticated());
  };

  const logout = () => {
    setAuthState({});
    setIsError(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        isUserAuthenticated,
        login,
        logout,
        isError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
