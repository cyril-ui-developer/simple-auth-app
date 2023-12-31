import { Link } from "react-router-dom";
import { mockAuth } from "../mock-auth-server";

const Dashboard = () => {
  const  users  = mockAuth.getUsers();

  return (
    <div>
      <h4>Dashboard page</h4>

      <table>
        <thead>
          <tr>
            <th>UserID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id} </td>
              <td>{user.firstName} </td>
              <td>{user.lastName}</td>
              <td>
                {" "}
                <Link to={`/userdetails/${user.id}`}>View Details </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
