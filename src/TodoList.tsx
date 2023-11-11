import React from 'react';

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    deleteTodo: (selectedTodo: Todo) => void;
}



export const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <input
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => toggleTodo(todo)}
                    />
                    <span style={{textDecoration: todo.complete ? 'line-through' : undefined }}>
                        {todo.text}
                    </span>
                    <button style={{marginLeft: 10}} onClick={() => deleteTodo(todo)}>Borrar</button>
                </li>
            ))}
        </ul>
    );
};