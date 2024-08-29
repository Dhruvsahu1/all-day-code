import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from "axios";
import { useMemo } from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  const [inputValuee,setinputValue] = useState(1);
  let count = useMemo(()=>{
    let count = 0;
  for(let i = 0;i<=inputValuee;i++){
    count += i;
  }
  return count;
  
  },{inputValuee});


  return <div>
    <input onChange={function(e){
      setinputValue(e.target.value);
    }} placeholder = {"Find the sum from 1 to n"}></input>
    <br />
    sum from 1 to {inputValuee} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter+1);
    }}>Counter ({counter})</button>
  </div>
}


export default App;
