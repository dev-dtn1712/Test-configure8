import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Table } from '../../components/common';
import { HeaderTitle } from '../../components/custom';
import { scheduleColumnes } from '../../constants/schedule';
import ScheduleActions, { ScheduleListSelectors } from '../../redux/ScheduleRedux.js';;

function ScheduleList({ name }) {
  const loading = useSelector(ScheduleListSelectors.selectLoading);
  const schedule = useSelector(ScheduleListSelectors.selectScheduleList);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadSchedules = () => {
      return dispatch(ScheduleActions.loadScheduleList());
    };

    loadSchedules();
  }, [dispatch]);

  const scheduleName = useMemo(() => {
    return name ? name : 'All Schedules';
  }, [name]);

  const schedules = useMemo(() => {
    if (schedule?.matches) {
      if (name)
        return schedule.matches.filter(match => match.team1 === name || match.team2 === name);
      else return schedule.matches;
    }
    return [];
  }, [schedule, name])

  const scheduleSubTitle = useMemo(() => {
    return name? `${name} game schedules and result` : 'All schedules and result';
  }, [name])

  return (
      <Box mt={3}>
        <HeaderTitle title={scheduleName} subTitle={scheduleSubTitle} />

        <Table
          columns={scheduleColumnes}
          title=''
          data={schedules}
          isShowCheckBox={false}
          toolbar
          localization={{
            header: {
              actions: ''
            }
          }}
          loading={loading}
        />
      </Box>
  );
}

ScheduleList.propTypes = {
  name: PropTypes.string
};

export default ScheduleList;
