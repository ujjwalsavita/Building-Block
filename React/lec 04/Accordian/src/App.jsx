import { useState } from "react"
import './App.css'
let data = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library used to build interactive user interfaces."
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension that allows us to write HTML-like code inside JavaScript."
  },
  {
    id: 3,
    question: "What are React Hooks?",
    answer:
      "React Hooks are functions that let functional components use state and other React features."
  },
  {
    id: 4,
    question: "What is useState?",
    answer:
      "useState is a React Hook that allows components to store and update state."
  },
  {
    id: 5,
    question: "What are props in React?",
    answer:
      "Props are inputs passed from a parent component to a child component."
  }
]

export default function App(){  
  const [open, setOpen] = useState(null);
  function handelOpen(index){
    setOpen(open === index ? null:index);
  }
  return(
    <div className="app">
      {
        data.map((element ,index)=>{
          return <div className="item">
            <button onClick={()=>handelOpen(index)} >
              {element.question}
              </button>

              {open === index && <p>{element.answer}</p>}
            </div>
        })
      }
    </div>
  )
}

















// import { useState } from 'react'

// import './App.css'

// function App() {
//   let [count, setCount] = useState(0)

//   // let count = 0;
//   function handChange(){
//     // count++;
//     console.log(count);
//     setCount(count+1)
//   };

//   return (
//     <>
//       <section id="center">
      
//         <button
//           type="button"
//           className="counter"
//           onClick={handChange}
//         >
//           Count is {count}
//         </button>
//       </section>

      
//     </>
//   )
// }

// export default App
