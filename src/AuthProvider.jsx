import { useState } from "react";
import { useNavigate, } from "react-router-dom";

import { users, mockAuth } from "./mock-auth-server";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState({});
  const [path, setPath] = useState("");
  
    const login = (username)=>{
      const data = mockAuth.login(username);
      setAuthState(data);
    }

  const logout = () => {
    setAuthState({});
    setPath(location.pathname  )
    navigate("/login",  {state: { path: location.pathname } });
  };

  const isAuthenticated = () =>
  Object.keys(authState)?.length > 0 ? true : false;

  return (
    <AuthContext.Provider
      value={{
        users,
        authState,
        isAuthenticated,
        login,
        logout,
        urlPath: path,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
