import React from 'react';
import Box from '@material-ui/core/Box';
import { Switch, Route, Redirect } from 'react-router-dom';
import Teams from './pages/Teams';
import Schedules from './pages/Schedules';

function App() {

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {() => (
        <Switch>
          <Route exact path="/" component={Teams} />
          <Route exact path="/schedule" component={Schedules} />
          <Route exact path="/schedule/:name" component={Schedules} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      )}
    </Box>
  );
}

export default App;
