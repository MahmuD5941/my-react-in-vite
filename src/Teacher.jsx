
export default function Teacher({teacher}){
    const teacherStyle ={
        border:'5px solid purple',
        borderRadius: '30px',
        marginBottom:'10px',
        padding: '10px'
    }
     return(
        <div style={teacherStyle}>
            <h2>ID: {teacher.ID}</h2>

            <h2>Teacher: {teacher.Name}</h2>
            <h2>Age: {teacher.Age}</h2>
        </div>
    )
}