import React from 'react'
import { useReducer } from 'react'  

const initialState = 0;

export default function UseReducerHook() {

const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state,action){
  switch(action.type){
    case "increment":
      return state + action.payload;
      case "decrement":
        return state - action.payload;
        case "reset":
          return initialState;
          default:
            return state;
  }
}

  return (
    <>
    <h1>Example of UseReducer Hook</h1>
    <h2>Counter : {state}</h2>
    <button class="bg-blue-300 ml-2 mb-2 px-2 py-2" onClick={()=>{dispatch({type: "increment", payload: 5})}}>Increment</button>
    <button class="bg-red-300 ml-2 mb-2 px-2 py-2" onClick={()=>{dispatch({type: "decrement",payload : 5})}}>Decrement</button>
    <button class="bg-green-300 ml-2 mb-2 px-2 py-2" onClick={()=>{dispatch({type: "reset"})}}>Reset</button>

    </>
  )
}
