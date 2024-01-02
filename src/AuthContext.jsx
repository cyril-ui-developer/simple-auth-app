import { useState } from "react";
import { useNavigate, } from "react-router-dom";
import { createContext } from "react";

import { users, mockAuth } from "./mock-auth-server";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState({});
  const [path, setPath] = useState("");
  const [isError, setIsError] = useState(false);
  
  const isAuthenticated = () =>
  authState && Object.keys(authState)?.length > 0 ? true : false;

    const login = (username)=>{
      const data = mockAuth.login(username);
      setAuthState(data);
      setIsError(!isAuthenticated())
    }

  const logout = () => {
    setAuthState({});
    setPath(location.pathname  )
    navigate("/login",  {state: { path: location.pathname } });
    setIsError(false)
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        authState,
        isAuthenticated,
        login,
        logout,
        urlPath: path,
        isError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
