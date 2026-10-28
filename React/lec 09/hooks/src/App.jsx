import { useEffect, useState } from 'react'
import React from 'react';


function Chiller(){
  function fun(){
    console.log("hum child hai")
  }
  fun();
  return(
    <>
      <p>child</p>
    </>
  )
}


const El = React.memo(Chiller);


function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(()=>{
    console.log("mount");
    const timeout_id = setTimeout(()=>{
    console.log("update")},1000)

    return ()=>{
      clearTimeout(timeout_id);
      console.log("unmount");
    }
  },[count]);


  function sumfinder(){
    let sum = 0
    for(let i = 0 ; i< 1000; i++){
      sum += i;
      console.log(sum);
    }

    setSum(sum);
  }

  // sumfinder();


  return (
    <>
      <p>cout : {count}</p>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <El/>
      <p onClick={sumfinder}>sum :{sum}</p>

    </>
  )
}

export default App
