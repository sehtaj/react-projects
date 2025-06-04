import React, { useState } from 'react';
import type { Todo } from './types';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const remaining = todos.filter(t => !t.completed).length;

  return (
    <div className="container">
      <h1>Your To Do</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <p><strong>Your remaining todos:</strong> {remaining}</p>
      <p className="quote">"Doing what you love is the cornerstone of having abundance in your life." – Wayne Dyer</p>
    </div>
  );
};

export default App;