import { TextField } from "@mui/material";

const InputTodo = ({ id, name, label }) => {
  return <TextField id={id} name={name} label={label} variant="outlined" fullWidth sx={{my: 2, backgroundColor: '#ddd'}}/>;
};

export default InputTodo;