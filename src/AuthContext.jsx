import { createContext } from "react";

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

export { AuthContext };
