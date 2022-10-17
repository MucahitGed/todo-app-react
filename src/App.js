import React from "react";
import "./App.css";


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <button variant="outline-success" className="doneBtn" onClick={() => markTodo(index)}>✓</button>{' '}
        <button variant="outline-danger" className="deleteBtn" onClick={() => removeTodo(index)}>✕</button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <header className="header">
    <form onSubmit={handleSubmit}> 
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}  />
    <button className="addBtn" type="submit">
      Submit
    </button>
  </form>
  </header>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="container">
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <div className="card">
              
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;