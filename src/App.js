import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import Todo from './components/Todo';
import TodoApi from './components/TodoApi';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO APP
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/todo">Todo</Button>
          <Button color="inherit" component={Link} to="/todo-api">Todo Api</Button>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '2rem' }}>
        <Box my={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/todo-api" element={<TodoApi />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
