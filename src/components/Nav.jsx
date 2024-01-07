import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../AuthContext";

const Nav = () => {
  const { authState, logout } = useContext(AuthContext);

  return (
    <header>
      <h2>
          <Link className="navbar-brand" to={"/"} alt="logo">
            How to handle redirecting to the last requested page in React
          </Link>
        </h2>

        <p>Hi {authState.firstName}, You are logged in.</p>
          <nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          >
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
            {" "} |    {" "}
            <Link
              className="nav-link"
              to={"/login"}
              onClick={() => logout()}
            >
              Logout
            </Link> 

      </nav>
    </header>
  );
};
export default Nav;