import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxHeight: 'calc(100vh - 64px)'
  }
}));

function MainLayout({ title, children }) {
  const classes = useStyles();
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  }

  return (
    <Box display="flex" flexDirection="column">
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <Typography variant="subtitle1" color="primary" onClick={goHome}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container md={4} className={classes.mainContainer}>
        {children}
      </Container>
    </Box>
  );
}

MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default MainLayout;
