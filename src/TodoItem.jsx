import { Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
const TodoItem = () => {
  return (
<Stack
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={5}
>
    <Typography>hiiddddddddddddddddd</Typography>
    <Stack direction={"row"}>
        <CheckRoundedIcon/>
        <EditRoundedIcon/>
       <DeleteIcon/>
    </Stack>
 </Stack>
  )
}

export default TodoItem