
import './Box.css'
export default function User({user}){
    console.log(user)
    const {name, email,phone} = user;
    return(
        <div className="box">
            <h3>Name: {name} </h3>
            <h3>Email: {email} </h3>
            <h3>Phone: {phone} </h3>
          </div>
    )
}