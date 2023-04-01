import React, { useState } from 'react'
import { useTodoLayerValue } from './context/TodoContext'
import TodoList from "./components/TodoList"
import "./App.css"

function App() {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setcontent] = useState("");


  const handlesubmit = (event) => {
    event.preventDefault();

    if (!content) return;

    const newTodo = {
      id: Math.floor(Math.random() * 428374324),
      content,
      isCompleted: false,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setcontent(" ");
  };

  return (<>
    <div className='container'>
      <form onSubmit={handlesubmit} className='todo.form'>
        <input type='text' className='todo.input' onChange={(event => setcontent(event.target.value))} value={content}></input>
        <button className='todo-button'>
          Ekle
        </button>
      </form>

      {/* Todo List */}
      <TodoList todos={todos}></TodoList>

    </div>
  </>)
}

export default App