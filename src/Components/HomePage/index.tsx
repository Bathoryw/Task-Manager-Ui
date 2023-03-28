import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core";
import TaskSection from "../TaskSection";
import CreateTaskSection from "../CreateTaskSection";

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
      <CreateTaskSection />
      <TaskSection />
    </div>
  );
};

export default HomePage;
