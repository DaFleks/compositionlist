import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ id, title, completed, deleteTodo }) => {
  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={title} secondary={completed ? "Completed" : "Not Completed"} />
    </ListItem>
  );
};

export default Todo;
