import React from "react";
import {
  Theme,
  createStyles,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      margin:theme.spacing(3,0)
    },
  })
);

const CreateTaskSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <Button variant="contained">New task</Button>
    </Box>
  );
};

export default CreateTaskSection;
