import { Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./store/TodoReducer";
const TodoItem = ({ id, text, completed,handleEdit }) => {
  const dispatch = useDispatch();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={5}
      sx={{ padding: "1rem" }}
    >
      <Stack direction={"row"}>
        <CheckRoundedIcon
          sx={{ cursor: "pointer", color: "#A5A697",marginRight:"1rem" }}
          onClick={() => dispatch(toggleTodo(id))}
        />
        <Typography sx={completed && { textDecoration: "line-through" }}>
          {text}
        </Typography>
      </Stack>
      <Stack direction={"row"}>
        <EditRoundedIcon sx={{ cursor: "pointer", color: "#A5A697" }} onClick={()=>handleEdit(id,text)} />
        <DeleteIcon
          sx={{ cursor: "pointer", color: "#A5A697" }}
          onClick={() => dispatch(deleteTodo(id))}
        />
      </Stack>
    </Stack>
  );
};

export default TodoItem;
