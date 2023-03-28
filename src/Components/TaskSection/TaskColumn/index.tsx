/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Theme, createStyles, makeStyles } from "@material-ui/core";

type Props = {
  title: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {},
  })
);

const TaskColumn: React.FC<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <h1>{title}</h1>
    </div>
  );
};

export default TaskColumn;
