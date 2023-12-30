import { useLocation, useNavigate } from "react-router";

import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

const Login = () => {
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState("Choose user");
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    authContext.login(username);
    navigate(authContext.urlPath || state?.path || "/");
  };

  const onLoginChange = (value) => {
    setUsername(value);
  };

  return (
    <div>
      <h1>Login page</h1>
      <form aria-label="Default select example" onSubmit={handleLogin}>
        <select
          value={username}
          onChange={(e) => onLoginChange(e.target.value)}
        >
          <option value={username} disabled>
            {username}
          </option>
          {Object.values(authContext.users).map((user) => {
            return (
              <option value={user.email} key={user.id}>
                {user.email}
              </option>
            );
          })}
        </select>
        <button disabled={username === "Choose user"}>Login</button>
      </form>
    </div>
  );
};

export default Login;
