import { Stack, Typography} from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearTodo, editTodo } from "./store/TodoReducer";
const Todo = () => {
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing && editingId) {
      dispatch(editTodo({ id: editingId, text }));
      setEditingId(null);
    } else {
      dispatch(addTodo(text));
    }
    setText("");
    setIsEditing(false);
  };
  const handleEdit = (id, newText) => {
    setIsEditing(true);
    setEditingId(id);
    setText(newText);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todoList));
  }, [todoList]);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{
        width: {
          xs: "90%",  // Ekran boyutu < 600px
          sm: "60%",  // Ekran boyutu >= 600px
          md: "50%",  // Ekran boyutu >= 960px
          lg: "40%",  // Ekran boyutu >= 1280px
          xl: "30%",  // Ekran boyutu >= 1920px
        },
        padding: {
          xs:"1rem",
          sm:"1.5rem",
          md:"5rem"
        },
   
        bgcolor: "#fff9c4",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      
      }}
    >
      <Fab
        aria-label="add"
        sx={{ position: "absolute", bottom: 0, right: 0, bgcolor: "#A5A697" }}
      >
        <AddIcon sx={{ color: "white" }} />
      </Fab>
      <Typography variant="h3" component="h6" color={"#A5A697"} width={"100%"} sx={{ fontSize: {
      xs: "1.5rem", // Ekran boyutu < 600px
      sm: "2rem", // Ekran boyutu >= 600px
    },}}>
        Todo List with Redux
      </Typography>
      <Stack flexDirection={"row"} sx={{ width: "100%"}}>
        <form onSubmit={handleSubmit} style={{ width: "100%", display:"flex" }}>
          <TextField
            id="outlined-basic"
            label={isEditing ? "Edit task" : "Add New Task"}
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ width: "80%" }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "20%", height: "100%", color: "white"}}
          >
            {isEditing ? "edit" : "Add"}
          </Button>
        </form>
      </Stack>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {todoList.map((item) => (
          <TodoItem key={item.id} {...item} handleEdit={handleEdit} />
        ))}
      </Stack>
      <Button
        variant="contained"
        onClick={() => dispatch(clearTodo())}
        sx={{ width: "100%", color: "white" }}
      >
        Clear all
      </Button>
    </Stack>
  );
};

export default Todo;
