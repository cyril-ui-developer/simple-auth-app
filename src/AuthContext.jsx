import { createContext, useState } from "react";
import { useNavigate, useLocation  } from "react-router-dom";

import { users, mockAuth } from "./mock-data-server";

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
  isAuthenticated: () => false,
  urlPath: '',
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
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

export { AuthContext, AuthProvider };
