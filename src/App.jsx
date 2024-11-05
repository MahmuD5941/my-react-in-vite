import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Teacher from './Teacher'
 import BookStor from './BookStor'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)
  // const actors = ['Shakib khan', 'Manna vai', 'Bapparaj'];

  const books = [
    {Name:'math', Price:300},
    {Name:'physics', Price:330},
    {Name:'chemistry', Price:350},
    {Name:'chemistry', Price:350},
  ]

  const Teachers =[
    {ID: 1, Name:'Khalil', Age:'24'},
    {ID: 2, Name:'Shakibur', Age:'21'},
    {ID: 3, Name:'Al amin', Age:'24'},
    {ID: 4, Name:'Shakil', Age:'27'}
  ]

    function handleEvent(){
      alert('clicked')
    }
    const handleEvent2 = () =>{
      alert('clicked2')
    }
    const AddToTen = (value) =>{
      alert(value+10)
    }
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Core Concepts</h1>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

        <button onClick={handleEvent}>click</button>
        <button onClick={handleEvent2}>click2</button>
        <button onClick={()=>{alert('clickde3')}}>click3</button>
        <button onClick={()=>{AddToTen(30)}}>click4</button>


        {/* <BookStor books ={books}></BookStor>
       
         {
          Teachers.map(teacher =><Teacher className='teacher' teacher={teacher}></Teacher>)
        } */}


        {/* {
        actors.map(actor => <Actor name={actor}></Actor>)
       } */}
      


      {/* <Todo task = 'Learn react' isDone = {true}></Todo>
      <Todo task = 'Core concept' isDone = {false}></Todo>
      <Todo task = 'Learn jsx' isDone = {true}></Todo>
        */}
    </>
  )

}
 

export default App
