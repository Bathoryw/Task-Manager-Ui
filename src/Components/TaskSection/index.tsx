import React from "react";
import { Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core";
import TaskColumn from "./TaskColumn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      gap: theme.spacing(4),
    },
  })
);

const sections = [
  { columnName: "to do" },
  { columnName: "in progress" },
  { columnName: "done" },
];

const TaskSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      {sections.map((section) => (
        <TaskColumn title={section.columnName} />
      ))}
    </Box>
  );
};

export default TaskSection;
