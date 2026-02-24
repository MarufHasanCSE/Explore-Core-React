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
        <Developer> </Developer>
        <Person></Person>
        <Sports></Sports>

        <Student></Student>
        <Student></Student>

        <Developer name= "Maruf" tech = "React"></Developer>
        <Developer name= "Hasan" tech = "JS"></Developer>
        <Developer name= "Mozumder" tech = "JAVA"></Developer>
        
    
    </>
  )
}

function Developer(pops){
  
  return(
    <div style={{
      border: '3px solid green',
      borderRadius: '15px',
      margin: 5
      
    }}>
      <h3>Developer: {pops.name}</h3>
      <p>Technology: {pops.tech} </p>
    </div>
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
