import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  subTitle: {
    opacity: .5
  }
}));

function HeaderTitle ({ title, subTitle }) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" gutterBottom className={classes.subTitle}>
        {subTitle}
      </Typography>
    </>
  )
}

HeaderTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default HeaderTitle;