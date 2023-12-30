import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { users, mockAuth } from "./mock-data";

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
  isAuthenticated: () => false
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authState, setAuthState] = useState({});
  
    const login = (username)=>{
      const data = mockAuth.login(username);
      setAuthState(data);
    }

  const logout = () => {
    setAuthState({});
    console.log("logout")
    navigate("/login");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
