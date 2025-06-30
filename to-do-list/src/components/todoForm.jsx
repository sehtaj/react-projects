import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Add } from '@mui/icons-material';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit}
      sx={{ display: 'flex', gap: 1, mb: 3 }}
    >
      <TextField
        fullWidth
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
        size="small"
      />
      <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#000',
            borderRadius: '12px',
            minWidth: '48px',
            height: '40px',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          <Add />
      </Button>
    </Box>
  );
};

export default TodoForm; 