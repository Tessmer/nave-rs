import React from 'react'
import { string, number, oneOfType, bool, func, shape } from 'prop-types'


const TodoListItem = ({ todo, onToggle, onDelete }) => {
  const { name, isCompleted, id } = todo 
  return (
          <li>
            <input 
            type="checkbox" 
            id={name} 
            checked={isCompleted} 
            onChange={(event) => onToggle(event.target.checked, id)}/>
            <label htmlFor="estudar-js">{name}</label>
            {isCompleted && <button onClick={() => onDelete(id)}>Remover</button> }
          </li>
    )
  }

  TodoListItem.propTypes = {
    todo: shape({
      name: string,
      isCompleted: bool,
      id: oneOfType([number, string])
    }).isRequired,
    onToggle: func.isRequired,
    onDelete: func.isRequired
  }
  
  export default TodoListItem