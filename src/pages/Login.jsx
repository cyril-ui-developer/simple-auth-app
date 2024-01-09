import { useLocation, useNavigate } from "react-router";

import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

const dummyUsers = [
  'john.thomas@test.com',
   'rebecca.grace@test.com',
  'peter.dan@test.com',
  'invalid.username@test.com'
  ]
  
const Login = () => {
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState("Choose user");
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    authContext.login(username);
    navigate(state?.path || "/");
  };

  const onLoginChange = (value) => {
    setUsername(value);
  };

  return (
    <div>
      <h1>Login page</h1>
     {authContext.isError && <p style={{color: "red"}}>Failed: Invalid username!</p>} 
      <form aria-label="Default select example" onSubmit={handleLogin}>
        <select
          value={username}
          onChange={(e) => onLoginChange(e.target.value)}
        >
          <option value={username} disabled>
            {username}
          </option>
          {dummyUsers.map((el) => {
            return (
              <option value={el} key={el}>
                {el}
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
