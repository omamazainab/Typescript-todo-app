import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm'

const initialTodos: Todo[] = [

];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo: RemoveTodo = (selectedTodo: Todo) => {

      
       setTodos(
          todos.filter(todo => todo !== selectedTodo)
       );
  

  };


  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
