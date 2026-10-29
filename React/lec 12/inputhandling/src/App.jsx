// import {useState } from "react"

// function  ChillerTodo({todo, del}){

//   return(
//     <div>
//       <p>{todo.name}</p>
//       <button onClick={() => del(todo.id)}>Delete</button>
//     </div>
//   )
  
// }

// function App() {
//   const [count, setCount] = useState(0)
//   const [todos, setTodos] = useState([{
//     id: 1, "name": "React padhna hai"
//   }, {
//     id: 2, "name": "Js Revise karni hai"
//   }
//   ]);

//   function hadleDelete(id){
//     setTodos(todos.filter((todo) => todo.id !== id));
//   }

//   return (
//     <>
//       {/* todo application */}
//       <button onClick={() => setCount(count + 1)}>count : {count}</button>

//       {
//         todos.map((items)=>(
//           <ChillerTodo 
//             todo={items}
//             del={hadleDelete}
//           />
//         ))
//       }
//     </>
//   )
// }

// export default App

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  

  const items = [
    { name: "Apple", price: 100 },
    { name: "Banana", price: 40 },
    { name: "Mango", price: 80 },
    { name: "Orange", price: 60 },
  ];

  return (
    <div>
      <input
        placeholder="Search item..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {items
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((item) => (
          <p key={item.name}>
            {item.name} - ₹{item.price}
          </p>
        ))}
    </div>
  );
}

export default App;