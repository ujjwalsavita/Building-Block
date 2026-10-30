import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function ShowDetails(){
    const name = useContext(UserContext);
    return(
        <>
            <p>Hello from user show</p>
            <h1>{name}</h1>
        </>
    );
}