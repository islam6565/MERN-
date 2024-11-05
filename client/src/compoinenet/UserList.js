import React from 'react'
import UserCard from './UserCard'
import { useSelector } from 'react-redux'
import Adduser from './Adduser'

const UserList = ({ ping,setping}) => {
  const users=useSelector((state) => state.user.userlist)


  return (
    <>

    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      }}
    >
      <Adduser
      ping={ping} setping={setping}/>

    </div>
    <div className='containerr'>
        {users?.map((el)=><UserCard user={el} ping={ ping} setping={setping}/>)}
    </div>
    </>
  )
}

export default UserList