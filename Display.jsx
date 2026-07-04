import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext.jsx'
import Display2 from './Display2.jsx'


export default function Display() {
  const { count } = useContext(CounterContext)
  return (
    <>
    <h1>Display</h1>
    <p>This is the display component.child</p>
    <h2>Counter: {count}</h2>
    <Display2 />
    </>
  )
}
