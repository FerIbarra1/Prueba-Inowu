import { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';


const initialTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

type DeleteTodo = (selectedTodo: Todo) => void;


function App() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
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

  const deleteTodo: DeleteTodo = (selectedTodo) => {
    const newTodos = todos.filter((todo) => todo !== selectedTodo);
    setTodos(newTodos);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const completedTodos = todos.filter((todo) => todo.complete).length;
  const remainingTodos = todos.filter((todo) => !todo.complete).length;
  const totalTodos = todos.length;

  return (
    <>
    <h1>TO DO LIST</h1>
      <div className='body'>
        <p>Completadas: {completedTodos}</p>
        <p>Faltan por cumplir: {remainingTodos}</p>
        <p>Total: {totalTodos}</p>
        <button onClick={deleteAllTodos}>Eliminar todas las tareas</button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;