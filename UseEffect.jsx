import React from 'react'
import { useEffect,useState } from 'react'


export default function UseEffect() {
const [count, setCount] = useState(0);
const [name, setName] = useState("Sukanto");

useEffect(() => {
  console.log("UseEffect Hook Called");
},[]);

  return (
    <>
    <h1>UseEffect Hook</h1>
    <p>Count: {count}</p>
    <p>Name: {name}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  <button onClick={() => setName("John")}>Set Name</button>
    </>
  )
}
