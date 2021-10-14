import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EPLImage from '../../assets/image/epl.png';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 24
  },
  scheduleBtn: {
    borderRadius: 24
  }
});

function Team({ team }) {
  const classes = useStyles();
  const history = useHistory();

  const goToSchedule = (name) => () => {
    history.push(`/schedule/${name}`);
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box display="flex" m={2}>
          <img src={EPLImage} alt="epl" />
        </Box>

        <Box p={2}>
          <Typography variant="subtitle1" align="center">
            {team.name}
          </Typography>
          <Typography variant="body2" align="center">
            {team.country}
          </Typography>            
        </Box>
      </CardContent>
      <CardActions>
        <Box mb={3}>
          <Button
            className={classes.scheduleBtn}
            variant="outlined"
            color="primary"
            onClick={goToSchedule(team.name)}
          >
            Schedule
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

Team.propTypes = {
  team: PropTypes.object
};

export default Team;
