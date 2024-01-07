import { useParams } from "react-router-dom";
import { mockAuth } from "../mock-auth-server";


const UserDetails = () => {
  const { id } = useParams();
  const  user  = mockAuth.getUser(id);

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
