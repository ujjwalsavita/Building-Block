import { useState, useMemo } from "react";

export default function App() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  const square = useMemo(() => {
    console.log("Calculating square");

    return number * number;
  }, [number]);

  // const square = function(){
  //   console.log("Calculating square");

  //   return number * number;
  // }

  return (
    <div>
     
      <h2>Number: {number}</h2>
      <h2>Square: {square}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <hr />

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </div>
  );
}






// import { useState, useCallback } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   const sayHello = useCallback(() => {
//     console.log("Hello React!");
//   }, []);

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase Counter
//       </button>

//       <button onClick={sayHello}>
//         Say Hello
//       </button>
//     </div>
//   );
// }