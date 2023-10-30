import React, { useCallback, useState } from 'react'
import Child1 from './Child1'
function Parent1(){
    const [data, setData] = useState(0);
    const [count, setCount] = useState(100);

    const Increament = useCallback(() =>{
        console.log("This is called from parent")
        setData(data+10)
    }, [data]) 
    return(
        <>
        <Child1 send = {Increament}/>

        <h1>Data Value: {data}</h1>
        <button onClick={() => setData(data+1)}>Parent Inc</button>
        <h1>Count Value: {data}</h1>
        <button onClick={() => setCount(count-5)}>Parent Dec</button>

        </>
    )
}
export default Parent1