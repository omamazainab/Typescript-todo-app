import React from 'react';
import removeImg from './images/delete.png'


interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
    removeTodo: RemoveTodo;
}


const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo }) => {
    return (


        <li className="list-item">

            <input
                id="checkbox"
                className="checkbox"
                type="checkbox"
                checked={todo.complete}
                onClick={() => {
                    toggleTodo(todo);
                }}
            />

            <label
                className="checkbox-label"
                htmlFor='#checkbox'
                style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
            >
                {todo.text}
            </label>



            <div
                className="remove-button"
                onClick={() => {
                    removeTodo(todo)
                    console.log('removed')
                }}
            >
                <img src={removeImg} alt="" />
            </div>
        </li>
    )
}

export default TodoListItem
