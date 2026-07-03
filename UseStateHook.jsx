import React from 'react'
import { useState } from "react";

export default function UseStateHook() {

  const[count,setCount]=useState(0);
   
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }
  function reset(){
    setCount(0);
   
    
  }

  return (
    <>
    <h1> This is counter App</h1>
    {count<0?<p>counter is Negative </p>:<p>counter is Positive</p>}
    <p class={count<0?"text-red-500":"text-green-500"}>Counter:{count}</p>
     <div class="flex justify-center mt-4 pb-4">
    <button class="bg-amber-500 text-white px-4 py-2 rounded-md ml-4" onClick={increment}>Increment</button>
    <button class="bg-amber-500 text-white px-4 py-2 rounded-md ml-4"onClick={decrement}>Decrement</button>
    <button class="bg-amber-500 text-white px-4 py-2 rounded-md ml-4" onClick={reset}>Reset</button>
    </div>
    </>
  )
}
