// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React,{fragment} from "react";
import { useState } from "react"

let counter = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'go to gym',
      description: 'go to gym today',
    },
    {
      id: 2,
      title: 'eat food',
      description: 'eat food today',
    },
    {
      id: 3,
      title: 'go to class',
      description: 'go to class today',
    },
  ]);

  function addTodo() {
    // Cleaner syntax using spread operator
    setTodos([
      ...todos,
      {
        id: counter++, // Ensure unique id
        title: Math.random(), // Using Math.random() as a title example
        description: Math.random(),
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />
      )}
    </div>
  );
}

// Corrected Todo component definition
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App
