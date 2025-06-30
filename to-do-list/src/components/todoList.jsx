import React from 'react';
import { List, Typography, Box } from '@mui/material';
import TodoItem from './todoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  const remaining = todos.filter(todo => !todo.completed).length;

  return (
    <Box sx={{ width: '100%' }}>
      <List>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </List>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontWeight : 'bold' }}>
        Your remaining todos : {remaining}
      </Typography>
    </Box>
  );
};

export default TodoList;