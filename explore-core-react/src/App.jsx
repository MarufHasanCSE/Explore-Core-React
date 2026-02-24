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
        <Sports></Sports>
        <Person></Person>
        <Sports></Sports>
        <Person></Person>
        <Sports></Sports>

        <Student></Student>
        <Student></Student>
    
    </>
  )
}

function Person(){
  const age= 26;
  const name = "Maruf";

  const personStyle = {
    color: 'red',
    fontSize : 18 ,
    textAlign: 'center'
  }

  return(
    <p style={personStyle}>I am a Person! Name: {name} & Age : {age}</p>
  )
}

function Sports(){

  return(
    <div>
      <p>Playing and Loosing! in:</p>
      <h3>PUBG</h3>
    </div>
  )
}

function Student(){
  return(
  <div className='student'>
    <p>Name: </p>
    <p>Dept: </p>
  </div>


  )
}

export default App
