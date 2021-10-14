import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  positionFixed: {
    left: 0,
    bottom: 0,
    position: 'fixed',
    backgroundColor: 'white'
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <AppBar className={classes.positionFixed} position="static" color="transparent">
      <Toolbar variant="dense">
        <Typography variant="caption" color="inherit">
          &copy; 2021 Configure8
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
