import { useState } from "react"


const buttons = [
  'AC', 'DEL', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
];

function App() {
  const [input, setInput] = useState("");

  function handleClick(button) {
    if (button === 'AC') {
      setInput("");
    }
    else if (button === 'DEL') {
      setInput(input.slice(0, -1));
    }
    else if (button === '=') {
      try{
        const res = Function(
          `return ${input}`
        )();

        // if(res ==='number'){
          setInput(String(Number(Number(res).toFixed(10))));
        // }
      }
      catch(err){
        console.log(err)
      }



    }
    else {
      setInput(input + button);
    }
  }

  return (
    <div className="flex items-center justify-center p-4">

      <div className="rounded-2xl bg-amber-800 p-4" >

        {/* heading */}
        <div className="text-white font-bold text-center mb-2 text-2xl">
          Calculator
        </div>

        {/* input field */}
        <div className="h-20 rounded-xl bg-amber-50 flex justify-end font-bold text-3xl p-3 mb-3">
          {input || 0}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 text-white gap-3">
          {buttons.map((button) => (
            <button className={`p-4 rounded-xl 
            ${button === 'AC' ? "bg-red-700" : button === 'DEL' ? "bg-red-700" : "bg-amber-900"}
            ${button == '0' ? "col-span-2" : ""}
            `}
              onClick={() => (handleClick(button))}
            >
              {button === '/' ? "÷" : button}
            </button>
          ))

          }
        </div>

      </div>
    </div>
  )
}

export default App
//  ${['%', '/','*','+','-'].includes(buttons)?"bg-amber-900":"bg-amber-900"}