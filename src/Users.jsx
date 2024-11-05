import User from './User'
import './Box.css'
<userStyle className="css"></userStyle>
import { useEffect, useState } from "react"
import './Box.css'

export default function Users(){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div className="box">
            <h1>users:{users.length} </h1>
            {
                users.map(user =><User user={user}></User>)
            }
        </div>
    )
}