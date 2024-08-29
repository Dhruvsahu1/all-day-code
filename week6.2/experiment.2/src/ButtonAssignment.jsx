import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);  // Corrected setter function name

  useEffect(() => {
    console.log("its working");
    axios.get("https://sum-server.100xdevs.com/todo?id=%22")
      .then(function(response) {
        setTodos(response.data.todos);  // Corrected setter function usage
      })
      .catch(function(error) {
        console.error("Error fetching todos:", error);
      });
  }, []);

  return (
    <>
      {todos.map(todo => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
