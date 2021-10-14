import { combineReducers } from 'redux';
import { reducer as teamList } from './TeamListRedux';
import { reducer as scheduleList } from './ScheduleRedux';

const reducers = combineReducers({
  teamList,
  scheduleList
});

export default reducers;
