import { useEffect, useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  // const [time, setTime] = useState("")

  const [data, setData] = useState([]);

  useEffect(()=>{
    console.log("yes");

    // https://rickandmortyapi.com/api/character

    fetch("https://fakestoreapi.com/products")
    .then((respone)=>respone)
    .then((respone)=>respone.json())
    .then((respone)=>setData(respone));

  },[data])


  // useEffect(()=>{
  //   // console.log(count);
  //   // setInterval(()=>{
  //   //   console.log("hello")
  //   //   setCount(count + 1);
  //   // }, 1000)
    
  //   // setCount(count + 1)
  //   // let time_d = new Date();
  //   // console.log(time_d.toLocaleString())

  //   // let data = new Date();
  //   // setTime(data.toLocaleString());


  //   setInterval(()=>{
  //     setTime((new Date).toLocaleString());
  //   }, 1000)

  //   console.log((new Date).toLocaleString());
    
  // },[]);
  
  return (
    <>  
      {/* <p>count : {count}</p> */}
      {/* <p className="">Time : {time}</p> */}

      <p>
        {data.map((el)=>
             <img
             key={el.id} 
              src={el.image} />
          )
        }
      </p>
      </>
  )
}

export default App
