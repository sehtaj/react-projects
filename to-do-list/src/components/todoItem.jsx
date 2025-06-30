import React from 'react';
import { 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton,
  Checkbox
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const TodoItem = ({ todo, index, toggleComplete, deleteTodo }) => {
  return (
    <ListItem
      sx={{
        bgcolor: 'background.paper',
        mb: 1,
        borderRadius: 1,
        boxShadow: 1
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
        color="primary"
      />
      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'text.secondary' : 'text.primary'
        }}
      />
      <ListItemSecondaryAction>
        <IconButton 
          edge="end" 
          onClick={() => deleteTodo(index)}
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;