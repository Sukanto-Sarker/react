import React from 'react'
import{useContext} from 'react'
import { CounterContext } from '../context/CounterContext.jsx'


export default function Display3() {
  const{decrement} = useContext(CounterContext)
  return (
    <>
    <h1>Display3</h1>
    <p>This is the display3 component.child</p>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}
