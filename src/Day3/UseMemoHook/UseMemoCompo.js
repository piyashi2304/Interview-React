import React, { useState ,useMemo} from "react";
function UseMemoCompo(){
    const [add,setAdd] = useState(0)
    const [sub, setSub] = useState(100)

    const callMemo = useMemo (function AddFive(){
        console.log("Calladd...")
        return add*5;
    },[add]);
    return(
        <>
        <h3>Add Function : {callMemo}</h3>
        <h3>Add : {add}</h3>
        <button onClick = {() => setAdd (add+1)}>Increament</button>
        <h3>Sub : {sub}</h3>
        <button onClick = {() => setSub (sub-1)}>Increament</button>
        </>
    )
}
export default UseMemoCompo