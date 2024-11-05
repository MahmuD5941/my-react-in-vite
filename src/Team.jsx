import { useState } from "react"

export default function Team (){
    const [Count, setCount] = useState(0);
    const handleAdd=()=>{
        setCount(Count+10);
    }
    const handleReduce=()=>{
        setCount(Count-10);
    }

    const teamStyle ={
        border:'3px dashed purple',
        borderRadius:'20px',
        margin:'30px',
        padding:'30px'
    }
    return(
        <div style={teamStyle}>
            <h1>Team: {Count} </h1>
            <button onClick={handleAdd}>Add player</button>
            <button onClick={handleReduce}>Remove player</button>
        </div>
    )
}