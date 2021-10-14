import React from 'react';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import MainLayout from '../../containers/layout/MainLayout';
import ScheduleList from '../../containers/Schedules/ScheduleList';

function Schedules({ match }) {
  const { name } = match.params;

  return (
    <MainLayout title="Champions League">
      <Box mt={3}>
        <ScheduleList name={name} />
      </Box>
    </MainLayout>
  );
}

export default withRouter(Schedules);
