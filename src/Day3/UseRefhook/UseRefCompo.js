import React, { useRef } from "react";
function UseRefCompo(){
    const inputRef = useRef(null);
    console.log(inputRef)

    function getData(){
        console.log(inputRef.current.value)
        inputRef.current.focus();
        inputRef.current.style.background = "green"
    }
    return(
        <>
        <input  type="text" ref = {inputRef} placeholder="write Something"/>
        <button onClick={getData}>Submit</button>
        </>
    )
}
export default UseRefCompo