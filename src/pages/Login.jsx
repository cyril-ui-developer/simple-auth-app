import { useLocation, useNavigate } from "react-router";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { mockAuth } from "../mock-auth"
import { useState, useContext, } from 'react'
import { users } from '../mock-data'
import { AuthContext } from '../mock-auth'


const  Login = ()=> {
    const authContext = useContext(AuthContext);
    const [username, setUsername] = useState('Choose user')
    const navigate = useNavigate();
    const { state } = useLocation();
    const handleLogin = (e) => {
        e.preventDefault()
        const data = mockAuth.login(username);
        authContext.setAuthState(data);
        console.log("user",  username, mockAuth.login(username))
        navigate(state?.path || "/");
     // navigate("/");
      };

      const onLoginChange = (value) => {
        setUsername(value)
       // const user = e.target.value;
        console.log("value",  value)

      };
    return (
        <div>
          <h1>Login page</h1>
          <form
              aria-label="Default select example"
              onSubmit={handleLogin}
            >
                                <select value={username} onChange={ (e) => onLoginChange(e.target.value) }>
                    <option value={username} disabled>
                     {username}
                    </option>
              {Object.values(users).map((user) => {
                
                return (
   
                  <option value={user.email} key={user.id}>
                    {user.email}
                  </option>
               
                );
              })}
              </select>
              <button disabled={username === 'Choose user'}>Login</button>
            </form>
        </div> 
    )
  }
  
  export default Login