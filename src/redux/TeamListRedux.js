import { createReducer, createActions } from 'reduxsauce';
import teamApiCreate from '../services/teamApi';

/* --------------------- Types and Action Creators ---------------- */
const { Types, Creators } = createActions({
  setTeamList: ['list'],
  setTeamListLoading: ['loading'],
  setTeamListSort: ['sort']
});

export const TeamListTypes = Types;

Creators.loadTeamList = () => {
  return async dispatch => {
    const api = teamApiCreate('en.2.clubs.json');
    dispatch(Creators.setTeamListLoading(true));
    const resp = await api.list();

    if (resp.ok) {
      dispatch(Creators.setTeamList(resp.data));
      dispatch(Creators.setTeamListLoading(false));
      return resp.data;
    } else {
      dispatch(Creators.setTeamListLoading(false));
      throw new Error('There was problem loading data');
    }
  };
};

Creators.sortTeamList = () => {
  return dispatch => {
    dispatch(Creators.setTeamListSort());
  }
}

export default Creators;

/* --------------------- Selectors ---------------- */
export const TeamListSelectors = {
  selectLoading: state => state.teamList.loading,
  selectTeamList: state => state.teamList.list
};

/* --------------------- Initial State ----------------- */
export const INITIAL_STATE = {
  loading: false,
  list: []
};

/* ------------------- Reducers --------------------- */
export const setTeamList = (state, { list }) => ({
  ...state,
  list
});

export const setTeamListLoading = (state, { loading }) => ({
  ...state,
  loading
});

export const setTeamListSort = (state) => {
  const clubs = state.list.clubs;
  clubs.sort((prevNode, nextNode) => {
    if (prevNode.name > nextNode.name)
        return 1;
    if (prevNode.name < nextNode.name)
        return -1;
    return 0;
  })

  return {
    ...state,
    list: {
      ...state.list,
      clubs
    }
  }
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_TEAM_LIST_LOADING]: setTeamListLoading,
  [Types.SET_TEAM_LIST]: setTeamList,
  [Types.SET_TEAM_LIST_SORT]: setTeamListSort
});
