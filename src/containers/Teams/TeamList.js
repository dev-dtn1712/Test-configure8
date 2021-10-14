import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import Team from './Team.js';
import TeamListActions, { TeamListSelectors } from '../../redux/TeamListRedux';
import { LoadingContainer } from '../../components/common';
import { HeaderTitle } from '../../components/custom';

function TeamList() {
  const loading = useSelector(TeamListSelectors.selectLoading);
  const teams = useSelector(TeamListSelectors.selectTeamList);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTeams = () => {
      dispatch(TeamListActions.loadTeamList());
    }
    loadTeams()
  }, [dispatch]);

  const sortTeams = () => {
    dispatch(TeamListActions.sortTeamList());
  }

  return (
    <LoadingContainer loading={loading}>
      <HeaderTitle title={teams?.name} subTitle="EPL Champions League Teams" />
      Filters: <IconButton aria-label="delete" onClick={sortTeams}>
        <SortByAlphaIcon />
      </IconButton>
      <Box mt={3}>
        <Grid container spacing={1}>
          {teams?.clubs?.length === 0 && <Typography varient="body1">No Teams</Typography>}
          {!!teams?.clubs?.length && teams?.clubs.map(club => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={club.name}>
              <Team team={club} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </LoadingContainer>
  );
}

export default TeamList;
