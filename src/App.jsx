import React, { useState, useMemo } from "react";
import TodoList from "./TodoList";
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState(["Learn React", "Learn useMemo"]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const memoizedTodoList = useMemo(() => {
    return <TodoList todos={todos} addTodo={addTodo} />;
  }, [todos]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment Counter</button>
      {memoizedTodoList}
    </div>
  );
};

export default App;
