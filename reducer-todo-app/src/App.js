import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  banner: {
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "rgba(128, 128, 128, 0.1)", 
  },
  box1: {
    padding: 30,
    display: "flex",
    flexFlow: "row", 
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box2: {
    display: "flex",
    justifyContent: "center",
  },
  leftCont: {
    display: "flex",
    width: "100%",
    fontSize: "1.7rem"
  },
  mainTitle: {
    color: "white",
    margin: 20,
    width: "100%",
  },
});

function App() {

  const classes = useStyles();

  return (
    <div className="BannerBG1">
      <div className={classes.banner}>
          <div className={classes.box1}>
            <div className={classes.leftCont}>
              <h1 className={classes.mainTitle}>The Todo App </h1>
            </div>
          </div>
          <div className={classes.box2}>
            <TodoList />
          </div>
      </div>
    </div>
  );
}

export default App;