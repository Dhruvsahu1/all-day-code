// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React,{fragment} from "react";
import { useState } from "react"

function App() {
  return(
    <div>
    <HeaderWithButton>
    </HeaderWithButton>
    <Header title="Dhruv1"></Header>
    <Header title="Dhruv2"></Header>
    <Header title="Dhruv3"></Header>
    <Header title="Dhruv4"></Header>
    </div>
  ) 
}

function HeaderWithButton(){
  const [title,setTitle] = useState("my name is dhruv")
  function changeText(){
    setTitle("my name is"+Math.random());
  }
  return (
    <div>
      <button onClick={changeText}> click me to change te title</button>
      <Header title={title}></Header>
    </div>
  )
}
// object destructuring this concept is.
function Header({title}){ 
  return <div>
    {title}
  </div>
}
// older way to wite the previous code
// function Header({props}){
//   return <div>
//     {props.title}
//   </div>
// }

export default App
