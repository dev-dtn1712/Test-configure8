import { createReducer, createActions } from 'reduxsauce';
import teamApiCreate from '../services/teamApi';

/* --------------------- Types and Action Creators ---------------- */
const { Types, Creators } = createActions({
  setScheduleList: ['list'],
  setScheduleListLoading: ['loading']
});

export const ScheduleListTypes = Types;

Creators.loadScheduleList = () => {
  return async dispatch => {
    const api = teamApiCreate('en.2.json');
    dispatch(Creators.setScheduleListLoading(true));
    const resp = await api.list();

    if (resp.ok) {
      dispatch(Creators.setScheduleList(resp.data));
      dispatch(Creators.setScheduleListLoading(false));
      return resp.data;
    } else {
      dispatch(Creators.setScheduleListLoading(false));
      throw new Error('There was problem loading data');
    }
  };
};

export default Creators;

/* --------------------- Selectors ---------------- */
export const ScheduleListSelectors = {
  selectLoading: state => state.scheduleList.loading,
  selectScheduleList: state => state.scheduleList.list
};

/* --------------------- Initial State ----------------- */
export const INITIAL_STATE = {
  loading: false,
  list: []
};

/* ------------------- Reducers --------------------- */
export const setScheduleList = (state, { list }) => ({
  ...state,
  list
});

export const setScheduleListLoading = (state, { loading }) => ({
  ...state,
  loading
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SCHEDULE_LIST_LOADING]: setScheduleListLoading,
  [Types.SET_SCHEDULE_LIST]: setScheduleList
});
