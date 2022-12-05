import { Container, Grid, Button } from '@mui/material';
import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddIcon from '@mui/icons-material/Add';
import useTodos from '../hooks/useTodos';
import TodosList from '../components/TodosList';
import Todo from '../components/Todo';

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return {
    props: { data: data.splice(0, 3) },
  };
};

export default function Home({ data }) {
  //  Hooks
  const [todos, deleteTodo, addTodo] = useTodos(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target.newTodo.value);
    e.target.newTodo.value = '';
  }

  return (
      <Container maxWidth="sm" sx={{ py: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        <Grid container>
          <Grid item xs={12}>
            <Header icon={<ListAltIcon />} text="NextJS Todos" />
          </Grid>
        </Grid>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={9}>
              <InputTodo id="newTodo" name="newTodo" label="Add new todo.." />
            </Grid>
            <Grid item xs={3}>
              <Button type="submit" variant="contained" fullWidth={true} sx={{ py: 2 }}><AddIcon /></Button>
            </Grid>
          </Grid>
        </form>

        <Grid container sx={{flexGrow: 1}}>
          <Grid item xs={12}>
            <TodosList>
              {todos.map(todo => (
                <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} deleteTodo={deleteTodo} />
              ))}
            </TodosList>
          </Grid>
        </Grid>

      </Container>
  )
}
