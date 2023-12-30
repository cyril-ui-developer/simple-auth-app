import {
  useParams
    } from 'react-router-dom'
    import { useContext } from 'react';
    import { AuthContext } from '../mock-auth'

    const NotFoundUser = ({id})=> <h3>{`The userID "${id}"" is invalid. Click Home to view vaild UserID.`}  </h3>
const  UserDetails = ()=> {
  const { authState, usersData} = useContext(AuthContext);

  const { id } = useParams();
 const user = usersData.find(user => user.id ===id)
  if(!user){
    return <NotFoundUser  id= {id} />
    }
    return (
        <div>
          <p><strong>User ID: </strong>  {user.id} </p>
          <p><strong>Firstname: </strong>  {user.firstName} </p>
          <p><strong>Lastname: </strong>  {user.lastName} </p>
          <p><strong>Status: </strong>  {user.status} </p>
        </div> 
    )
  }
  
  export default UserDetails