import React from "react";
import { createStyles, makeStyles, Box } from "@material-ui/core";
import TaskSection from "../TaskSection";
import CreateTaskSection from "../CreateTaskSection";

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      background: "#061739",
    },
    title: {
      margin: 0,
    },
  })
);

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <h1 className={classes.title}>Task Manager</h1>
      <CreateTaskSection />
      <TaskSection />
    </Box>
  );
};

export default HomePage;
