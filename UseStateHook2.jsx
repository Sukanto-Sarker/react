import React from 'react'
import { useState } from 'react'
export default function UseStateHook2() {
  const[name,setName]=useState('Sukanto');
  const[age,setAge]=useState(25);
  const[city,setCity]=useState('Dhaka');


  return (
    <>
    <h1 className='text-2xl pt-4 pb-4'> Example of UseState Hook Multiple States</h1>
    <p className='text-black text-2xl'>Name: {name}</p>
    <p className='text-black text-2xl'>Age: {age}</p>
    <p className='text-black text-2xl'>City: {city}</p>

    <button class='bg-blue-200 px-4 py-2 rounded-md mb-2 mt-2 ml-2 'onClick={()=>setName('Dipu')}>Chage Namae</button>
    <button class='bg-blue-200 px-4 py-2 rounded-md mb-2 mt-2 ml-2' onClick={()=>setAge(age+1)}>Chage Age</button>
    <button class='bg-blue-200 px-4 py-2 rounded-md mb-2 mt-2 ml-2' onClick={()=>setCity('Chittagong')}>Chage City</button>

    </>
  )
}
