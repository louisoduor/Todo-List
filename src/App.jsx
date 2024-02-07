import { useState } from 'react'
import './App.css'

function App() {
  const todos = [
    { id: 1, name: "Eat breakfast" },{ id: 2, name: "Do assignment" },{ id: 3, name: "Take a nap" }
  ]

  const [newTodos, setNewTodos] = useState(todos);
  const [newTodo, setNewTodo] = useState("");

  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }

  function addTodo() {
    if (newTodo.trim() !== "") {
      setNewTodos(t => [...t, { id: todos.length + 1, name: newTodo }]);
      setNewTodo("");
    }
  }

  const handleDelete = (id) => {
    const updatedTodos = newTodos.filter(todo => todo.id !== id);
    setNewTodos(updatedTodos);
  };

  return (
    <>
      <div>
        <h1>To-Do-List</h1>
        <input type="text" placeholder="Enter a todo.." value={newTodo} onChange={handleInputChange} />
        <button className="add-button"  onClick={addTodo} >Add </button>
      </div>
      <ul>
        {newTodos.map((todo) => (
          <li key={todo.id}>
            {todo.name}<span onClick={() => handleDelete(todo.id)}> X</span>
          </li>
        ))}
      </ul>


    </>
  );
}

export default App;
