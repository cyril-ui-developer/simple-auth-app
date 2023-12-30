import { users } from "./mock-data";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  logout: () => undefined,
});
export const mockAuth = {
  login(email) {
    console.log("auth email", email);
    const user = users.find((u) => u.email === email);

    return user;
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authState, setAuthState] = useState({});

  const setAuthData = (user) => {
    console.log("user set auth ", user);
    setAuthState({
      user,
    });
  };

  const isAuthenticated = () =>
    Object.keys(authState)?.length > 0 ? true : false;

  const logout = () => {
    setAuthState({});
    console.log("logout")
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        usersData: users,
        authState,
        setAuthState: (authData) => setAuthData(authData),
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
