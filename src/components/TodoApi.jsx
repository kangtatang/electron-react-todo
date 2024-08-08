import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';

const TodoApi = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response.data);
        setTodos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the todos!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {todos.slice(0, 10).map(todo => (
        <Card key={todo.id} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {todo.title}
            </Typography>
            <Typography color="textSecondary">
              {todo.completed ? "Completed" : "Pending"}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default TodoApi;
