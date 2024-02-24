import axios from 'axios'
import React, {useEffect, useState} from 'react'

function UserList() {
    const [users,setUsers]=useState ([])
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(data=>setUsers(data))
    })
    return (
    <div>
        {users.map(e=><h2>{e.name}</h2>)}
    </div>
    )
}
export default UserList