// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   const addTodo = () => {
//     if (input.trim()) {
//       setTodos([...todos, input]);
//       setInput('');
//     }
//   };

//   const clearAddTodo=()=>{
//     setTodos([]);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Todo List</h1>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Add a new todo"
//         />
//         <button onClick={addTodo}>Add Todo</button>
//         <button onClick={clearAddTodo}>Clear Todo</button>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>{todo}</li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const clearAddTodo = () => {
    setTodos([]);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, border:'1px solid #333', borderRadius:'16px' }}>
      <Typography variant="h4" gutterBottom mt={4}>
        Todo List
      </Typography>
      <TextField
        label="Add a new todo"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addTodo}
        style={{ marginBottom: "20px", marginRight: "10px" }}
      >
        Add Todo
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={clearAddTodo}
        style={{ marginBottom: "20px" }}
      >
        Clear Todo
      </Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          >
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
