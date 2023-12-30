import { useState, useContext } from 'react'
import { AuthContext } from './mock-auth'
import './App.css'
import RoutesSetup from "./routes";

import Nav from './components/Nav'

function App() {
  const { authState, isAuthenticated, logout} = useContext(AuthContext);
  console.log("authState", authState)
  const [count, setCount] = useState(0)

  return (
    <div className="app">
          {isAuthenticated() && <Nav username={authState?.user?.firstName} logout={logout}/>}
    <RoutesSetup />
  </div>
  )
}

export default App
