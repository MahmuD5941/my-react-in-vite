// export default function todo({task,isDone}){
//     //conditional rendering 1....
//      if(isDone===true){
//         return <li>Finished at: {task}</li>
//      }
//      else{
//         return <li>Work on: {task}</li>
//      }
// }

// export default function todo({task,isDone}){
//     //conditional rendering 2....
//      if(isDone){
//         return <li>Finished at: {task}</li>
//      }
//      return <li>Work on: {task}</li>
// }

// export default function todo({task,isDone}){
//     //conditional rendering 3....
//      return <li>{isDone ? 'Task is finished at': 'Not finished work on'}: {task}</li>
// }

// export default function todo({task,isDone}){
//     //conditional rendering 4....
//      return (
//         <li> {(isDone===true) && 'Done'}: {task}</li>
//      )
// }

// export default function todo({task,isDone}){
//     //conditional rendering 5....
//      return (
//         <li>{task}: {(isDone===false) && 'work on'}</li>
//      )
// }

export default function todo({task,isDone}){
    //conditional rendering 6 with variable....
      let list;
      if(isDone){
        list = <li>Finished: {task}</li>
      }
      else{
        list = <li>Work on: {task}</li>

      }
      return list;
}