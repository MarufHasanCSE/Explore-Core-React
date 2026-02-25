import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ToDo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const [count, setCount] = useState(0);
  const time = 50;

  const actors = ["Bappa Raj", "Omor Sunny", "Salman Shah", "Jasim", "Anwar"];

  const singers = [
    { id: 1, name: "Dr. Mahfuz", age: 68 },
    { id: 2, name: "Tahsan", age: 45 },
    { id: 3, name: "shuvro Deb", age: 57 },
  ];
  return (
    <>
      <h1>Vite + React</h1>

      {singers.map((singer) => (
        <Singer key={singer.id} singer={singer}></Singer>
      ))}
      {actors.map((actor) => (
        <Actor actor={actor}></Actor>
      ))}

      {/* <ToDo 
        task = "Learn React" 
        isDone = {true} 
        time = {time}>
        </ToDo>
        <ToDo task = "Revise JS" isDone = {false}></ToDo>
        <ToDo task = "Eat Dinner" isDone = {false} time = 'Need 10'></ToDo>
        <ToDo task = "Eat Sehri" isDone = {true} time = ''></ToDo> */}
      {/* <Person></Person>
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
        <Player name = "Maruf Hasan" run="10000"></Player>
        <Player name = "Hasan" run="5000"></Player>
        <Salami event = "Roja Eid" amount="5000"></Salami>
        <Salami event = "Kurbani Eid"></Salami> */}
    </>
  );
}
function Salami({ event, amount = 0 }) {
  return (
    <div className="student">
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  );
}
function Player({ name, run }) {
  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <p>Runs: {run}</p>
    </div>
  );
}

function Developer(pops) {
  return (
    <div
      style={{
        border: "3px solid green",
        borderRadius: "15px",
        margin: 5,
      }}
    >
      <h3>Developer: {pops.name}</h3>
      <p>Technology: {pops.tech} </p>
    </div>
  );
}

function Person() {
  const age = 26;
  const name = "Maruf";

  const personStyle = {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  };

  return (
    <p style={personStyle}>
      I am a Person! Name: {name} & Age : {age}
    </p>
  );
}

function Sports() {
  return (
    <div>
      <p>Playing and Loosing! in:</p>
      <h3>PUBG</h3>
    </div>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  );
}

export default App;
