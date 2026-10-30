import { useState } from "react";

export default function CompoA({count, setCount}){
    // const [count, setCount] = useState(0);
    return(
        
        <>
            <button onClick={()=>setCount(count + 1)}> CountA : {count}</button>
            <br /> 
            hello from CompoA
            <hr />
        </>
    )
}