/*
  This file is mainly used to display the header of the page.
  AppBar, Toolbar and Button components of Material UI has been
  used over here.
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    alignItems: "center",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.menuButton} position="static">
        <Toolbar>
          <Button variant="h6" color="inherit">
            Button 1
          </Button>
          <Button variant="h6" color="inherit">
            Button 2
          </Button>
          <Button variant="h6" color="inherit">
            Button 3
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
