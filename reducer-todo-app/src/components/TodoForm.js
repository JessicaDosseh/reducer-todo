import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: 20,
  },
  singleField: {
    width: "100%",
    marginBottom: 30,
  },

}));

const TodoForm = ({dispatch}) => {

    const classes = useStyles();

    const  [item, setItem] = useState('')

    const handleChange = e => {
       setItem(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            payload: item
        })
        setItem('')
    }

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_COMPLETED'
        })
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>

              <TextField  
                className={classes.singleField}
                label="Add todo" 
                // variant="outlined"
                type = 'text'
                name = 'todo'
                onChange = {handleChange}
                value = {item} 
              />
                {/* <button>Add Todo</button> */}
              <button className={classes.root}>
                <Fab 
                color="primary" 
                aria-label="add"
                >
                  <AddIcon />
                </Fab>
              </button>

              <button className={classes.root}>
                <Fab 
                color="secondary" 
                aria-label="clear"
                onClick = {clearCompleted}
                >
                  <DeleteIcon />
                </Fab>
              </button>
              
                {/* <button onClick = {clearCompleted}>Clear Completed</button> */}
            </form>
        </div>

    )

}

export default TodoForm; 