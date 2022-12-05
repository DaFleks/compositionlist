import { Paper, List } from "@mui/material";

const TodosList = ({ children }) => {
  return (
    <Paper elevation={6} sx={{}}>
      <List>{children}</List>{" "}
    </Paper>
  );
};

export default TodosList;