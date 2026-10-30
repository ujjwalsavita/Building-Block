import { useState } from "react"
import CompoA from "./components/CompoA"
import CompoB from "./components/CompoB"


function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
   <>
      
      <button onClick={()=>setCount(count + 1)}> Count : {count}</button>
      <hr />
      <br /> 
      <CompoA count={count} setCount={setCount}/>
      <br /> 
      <CompoB count={count} setCount={setCount}/>
    </>
  )
}

export default App
