
import { Stack, Typography } from '@mui/material'
import React from 'react'
import TodoItem from './TodoItem'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
const Todo = () => {
  return (
 
 <Stack
    direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={1}
  sx={{width:"40%", padding:"2rem", bgcolor:"#fff9c4", position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow:"0 5px 15px rgba(0, 0, 0, 0.1)"}}
>
 
<Typography variant="h3" component="h6">Todo List with Redux</Typography>
    <Stack flexDirection={"row"}>
    <TextField id="outlined-basic" label="Add New Task" variant="outlined" />
    <Button variant="outlined" type='submit'>Add</Button>
    </Stack>
    
    <Stack>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        {/* {todoList.map((item)=> <TodoItem/>)} */}
    </Stack>
    <Button variant="outlined">Clear</Button>
    <Fab color="#2e7d32" aria-label="add" sx={{position:"relative", bottom:"0"}} >
  <AddIcon />
</Fab>
   </Stack>
  
   
  )
}

export default Todo