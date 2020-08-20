import React from 'react';
import  TodoListItem  from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};