import React from 'react'
import {useState,useCallback} from 'react'


export default function UseCallBack() {
  const [count, setCount] = useState(0)

const HandleClick=useCallback(()=>{
  console.log("Button is clicked");
},[])

console.log("component is rendered");

  return (
    <>
    <h1>This is about Usecallback</h1>
    <h1 class="text-2xl pt-4 pb-4">Count: {count}</h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>Increment</button>
    
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={HandleClick}>Click Me</button>
    </>
  )
}
