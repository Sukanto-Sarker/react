import React from 'react'
import{useState, useMemo} from 'react'



export default function UseMemo() {
 const [count, setCount] = useState(0);


  function expensiveCalculation(num){
    console.log("Calculating...");
    return num * num;
  }
  const result =useMemo(() => expensiveCalculation(5), []);


  return (
    <>
    <h1 class="text-2xl pt-4 pb-4">This is about UseMemo</h1>
     <p>Result: {result}</p>
      <h1 class="text-2xl pt-4 pb-4">Count: {count}</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}
