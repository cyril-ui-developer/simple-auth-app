import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";


const UserDetails = () => {
  const { users } = useContext(AuthContext);
  const { id } = useParams();
  const user = users.find((user) => user.id === id);

  if (!user) {
    return   <h3>{`The userID "${id}"" is invalid. Click Home to view vaild UserID.`} </h3>;
  }

  return (
    <div>
      <p>
        <strong>User ID: </strong> {user.id}{" "}
      </p>
      <p>
        <strong>Firstname: </strong> {user.firstName}{" "}
      </p>
      <p>
        <strong>Lastname: </strong> {user.lastName}{" "}
      </p>
      <p>
        <strong>Status: </strong> {user.status}{" "}
      </p>
    </div>
  );
};

export default UserDetails;
