import React,{memo} from 'react'

function Child1(props){
    console.log("Child Component.....")
    return(
       <button onClick={ props.send}>Child inc</button>
    )
}
export default memo(Child1)