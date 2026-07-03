import React from 'react'
import { useEffect,useState } from 'react'
export default function UseEffect2() {
  const[datas,setData] = useState([]);
const[count,setCount] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data) => setData(data));
    console.log("useEffect called");
  },[]);

  return (
    <>
    <h1>UseEffect2 example</h1>
    
  <div>
      {datas.map((data) => (
        <p key={data.id}>{data.name}</p>
      ))}
    </div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}
