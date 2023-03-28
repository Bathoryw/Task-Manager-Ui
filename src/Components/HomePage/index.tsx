import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core";
import TaskSection from "../TaskSection";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {},
  })
);

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <h1>Task Manager</h1>
      <TaskSection />
    </div>
  );
};

export default HomePage;
