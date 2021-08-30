import React from 'react'
import Todoitem from "./Todoitem"
import todosData from  "./todosData"

 
function App() {
const todoItems = todosData.map(item => <Todoitem key={item.id} item ={item}/>)
 
 return(
   <div  className= "todo-list">
    {todoItems}

   </div>

 )


}

export default App
 