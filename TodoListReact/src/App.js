import React, {useState} from 'react'

import { TodoForm, TodoListItem } from './components'

const App = () => {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (todo) => {
    setTodos(prevState => [ ...prevState, todo ])
  }

  const handleToggle = (checked, id) => {
    setTodos(prevState => prevState.map(todo => todo.id === id ? { ...todo, isCompleted: checked } : todo ))
    }

  const handleDelete = (id) => {
    setTodos(prevState => prevState.filter(todo => {
      return todo.id !== id
    }))
  }

  return (
    <div>
      <h1>Todo List</h1>

      <TodoForm onSubmit={handleAddTodo}/>

      <ul>
        {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} onToggle={handleToggle} onDelete={handleDelete}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
