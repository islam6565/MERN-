import React from 'react'
import Card from 'react-bootstrap/Card';
import { deleteuser } from '../redux/userslice';
import { useDispatch } from 'react-redux';
import Edituser from './Edituser';
function UserCard({ user, ping,setping
 }) {
  const dispatch = useDispatch();
  return (

    <Card style={{ width: '18rem',margin:"20px" }}>
    <Card.Body>
      <Card.Title> 
        {user?.name} {user?.lastname}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {user.email}
      </Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <button onClick={()=>{dispatch(deleteuser(user._id));setping(!ping)}}>x</button>
      <Edituser user={user} ping={ping} setping={setping}/>
    </Card.Body>
  </Card>
  )
}

export default UserCard