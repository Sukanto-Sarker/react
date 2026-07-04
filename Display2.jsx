import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext.jsx'  
import Display3 from './Display3.jsx'


export default function Display2() {
  const { increment,reset } = useContext(CounterContext)
  return (
    <>
    <h1>Display2</h1>
    <p>This is the display2 component.child</p>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
    <Display3 />
    </>
  )
}
