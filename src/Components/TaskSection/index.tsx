import React from "react";
import { Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core";
import TaskColumn from "./TaskColumn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      border: "1px solid black",
      display: "flex",
      justifyContent: "space-around",
      gap: theme.spacing(4),
    },
  })
);

const sections = [
  { columnName: "to do", id: "abc1" },
  { columnName: "in progress", id: "abc2" },
  { columnName: "done", id: "abc3" },
];

const TaskSection: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      {sections.map((section) => (
        <TaskColumn key={section.id} title={section.columnName} />
      ))}
    </Box>
  );
};

export default TaskSection;
