import { React, useState } from 'react'

import Button from '../Button'

import { func } from 'prop-types'

const TodoForm = ({ onSubmit}) => {
    const [value, setValue] = useState('')
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const todo = {
        id: Date.now(),
        name: value,
        isCompleted: false
      }
  
      onSubmit(todo)  
    }
  
    const handleChange = (event) => {
      setValue(event.target.value)
    }
  
    return (
     <form onSubmit={handleSubmit}>
          <label htmlFor="todo">Todo:</label>
          <input type="text" id="todo" name="todo" onChange={handleChange} value={value} />
          <Button type="submit" al="4px">Criar</Button>
        </form>
    )
  }

  TodoForm.propTypes = {
    onCreate: func
  }

export default TodoForm