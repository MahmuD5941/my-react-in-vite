import { useState } from "react";

export default function Counter(){
    const [Count,setCount]= useState(0);
    const  handleAdd=() =>{
        const newCount = Count+1;
        setCount(newCount);
    }
    const handleReduce =()=>{
        const newCount = Count-1;
        setCount(newCount)
    }
    const counterStyle ={
        border:'4px solid red',
        padding:'10px',
        margin:'20px',
        borderRadius:'20px'

    }
     return(
        <div style={counterStyle}>
            <h1>Counter :  {Count}  </h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}