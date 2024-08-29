import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from "axios";
import { response } from 'express';

function App() {
    const [SelectedId,setSelectedId] = useState(1);
    return <div>
        <button onClick={function(){
            setSelectedId(1);
        }}></button>
        <button onClick={function(){
            setSelectedId(2);
        }}></button>
        <button onClick={function(){
            setSelectedId(3);
        }}></button>
        <Todo id = {SelectedId} />
    </div>
}
function Todo({id}){
    const[todo,setTodos]  =useState({});
    useEffect(() => {
        axios.get(` https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(response =>{
            setTodos(response.data.todo)
        })
    },[id]) 

    return (
        <div>
          <h1>{todo.title}</h1>
          <h5>{todo.description}</h5>
        </div>
      );
}

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h5>{description}</h5>
//     </div>
//   );
// }

export default App;
