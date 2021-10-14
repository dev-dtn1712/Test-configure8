import React from 'react';
import Box from '@material-ui/core/Box';
import MainLayout from '../../containers/layout/MainLayout';
import TeamList from '../../containers/Teams/TeamList';

function Teams() {
  return (
    <MainLayout title="Champions League">
      <Box mt={3}>
        <TeamList />
      </Box>
    </MainLayout>
  );
}

export default Teams;
