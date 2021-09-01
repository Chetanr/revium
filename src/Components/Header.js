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
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    alignItems: "center",
  },
}));

function Header(props) {
  const { history } = props;
  const classes = useStyles();

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.menuButton} position="static">
        <Toolbar>
          <Button onClick={() => handleButtonClick("/")} variant="h6" color="inherit">
            Link 1
          </Button>
          <Button onClick={() => handleButtonClick("/Body2")} variant="h6" color="inherit">
            Link 2
          </Button>
          <Button onClick={() => handleButtonClick("/Body3")} variant="h6" color="inherit">
            Link 3
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);