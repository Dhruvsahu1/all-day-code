// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// there is the problem in this app this will re rendr whoke components abd we think this will re reder only that component which i want so the solution is on app.jsx file go to there for solution

import { useState } from "react"

function App() {
  const [title,setTitle] = useState("my name is dhruv")

  function changeText(){
    setTitle("my name is"+Math.random());
  }
  return (
    <div>
      <button onClick={changeText}> click me to change te title</button>
      <Header title={title}></Header>
      <Header title='My name is raman'></Header>
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
