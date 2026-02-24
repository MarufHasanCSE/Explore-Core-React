import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Vite + React</h1>
        <Person></Person>
        <Person></Person>
        <Person></Person>

    
    </>
  )
}

function Person(){
  const age= 26;
  const name = "Maruf";
  return(
    <p>I am a Person! Name: {name} & Age : {age}</p>
  )
}


export default App
