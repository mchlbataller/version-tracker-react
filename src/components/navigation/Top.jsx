import {
  AppBar as AppBarContainer,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";

import React from "react";
import { Settings } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    fontWeight: 600
  },
  toolbar: {
      minHeight: 80,
  },
  settings: {
    alignSelf: 'flex-start'
  }
}));

export default function AppBar({ pageTitle }) {
  const styles = useStyles();
  return (
    <AppBarContainer position="static" color="transparent" elevation="0">
      <Toolbar className={styles.toolbar}>
        <Typography variant="h4" className={styles.title}>
          Progress Tracker
        </Typography>
      </Toolbar>
    </AppBarContainer>
  );
}
