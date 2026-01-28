import React, { useEffect, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const [todos, setTodos] = useState([]);
  function addTodo() {
    setTodos([...todos, todo]);
    saveToLocalStorage([...todos, todo]);
  }

  function deleteTodo(i) {
    let newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  }

  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // useEffect(() => {
  //   let data = localStorage.getItem("todos");
  //   if (data) {
  //     setTodos(JSON.parse(data));
  //   }
  // }, []);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <br />
        <br />
        <button onClick={addTodo}>Add todo</button>
      </div>
      <div>
        {todos.map((todo, i) => (
          <div key={todo.id}>
            <p>{i + 1}</p>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
