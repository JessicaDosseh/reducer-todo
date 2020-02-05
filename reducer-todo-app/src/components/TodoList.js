import React, {useReducer} from 'react';
import {todo, reducer} from '../reducers/reducer';
import TodoForm from './TodoForm';
import Todo from './Todo'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: '10px',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    width: "100%",
    padding: 5,
    textAlign: 'center',
  },
  container: {
    // border: "2px solid red",
    width: "60%",
    padding: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: 'left'
  }

}));

const TodoList = () => {

  const classes = useStyles();

    const [state, dispatch] = useReducer(reducer, todo);

    return (
        <Card className={classes.card}>
          <AppBar 
            position="static" 
            color="default"
            className={classes.appBar}
          >
            <p>Add a todo!</p>
          </AppBar>
          <div className={classes.container}>
            {state.map(todo => {
              return <Todo 
                  key = {todo.id} 
                  todo = {todo} 
                  dispatch = {dispatch} />
            })}
            <TodoForm dispatch = {dispatch} />
          </div>
        </Card>
    )
}

export default TodoList;