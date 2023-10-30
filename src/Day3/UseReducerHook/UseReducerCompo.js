import React, { useReducer, useState } from "react";

const initialstate = {
    balance : 0
}

const reducer = (state,action) => {
    switch (action.type){
    case 'deposit' :
        return{balance : state.balance +action.amount}
        case 'withdraw' :
        return{balance : state.balance - action.amount}
        default :
        return state.balance
    }


}
 function UseReducerCompo(){
const [state, dispatch] = useReducer(reducer, initialstate);
const [amount, setAmount] = useState(0)


const handleDepo = () =>{
    dispatch ({type: "deposit" ,amount :amount })

}
 const handleWith = () =>{
    dispatch ({type: "withdraw" ,amount :amount })

 }
    return(
        <>
        <h2>Account Balance : {state.balance}</h2>
        <input type ="number" placeholder=" Enter your Amount" name = "amount" onChange ={(e) =>setAmount(e.target.value)} />
        <button onClick={handleDepo}>Deposit</button>
        <button onClick={handleWith}>Withdraw</button>
        </>
    )
 }
 export default UseReducerCompo