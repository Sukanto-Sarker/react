import React from 'react'
import { useReducer } from 'react'
const initialState = {
  name : "Ankit",
  age : 20
}
export default function UsereducerHook2() {

  const[state,dispatch]= useReducer(reducer,initialState);

  function reducer (state,action){
    switch(action.type){
      case "CHANGE NAME":
        return {...state,name:action.payload};
      case "CHANGE AGE":
        return {...state, age: state.age + action.payload};
    }
  }
  return (
    <>
    <h1>Example of UseReducer Hook object State</h1>
    <h1>Name : {state.name}</h1>
    <h2>Age : {state.age}</h2>
    <button onClick={()=>{dispatch({type:"CHANGE NAME",payload:"John"})}}>Change Name</button>
    <button onClick={()=>{dispatch({type:"CHANGE AGE",payload:5})}}>Change Age</button>
    </>
  )
}
