import { useState } from "react";

export default function CompoB({count, setCount}){
    // const [count, setCount] = useState(0);
    return(
        <>
            <button onClick={()=>setCount(count + 1)}> CountB : {count}</button>
            <br /> 
            hello from CompoB
        </>
    )
}