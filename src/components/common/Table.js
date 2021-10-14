import React, { useMemo, memo, forwardRef, useRef } from 'react';
import Proptypes from 'prop-types';

import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const theme = createTheme({
  overrides: {
    MuiTableCell: {
      body: {
        '& div': {
          width: 'auto !important',
          wordBreak: 'break-word'
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#4caf50'
    },
    secondary: {
      main: '#ff9100'
    }
  }
});

const Table = ({
  actions,
  onRowClick,
  loading,
  columns,
  data,
  title,
  localization,
  toolbar = true,
  isShowCheckBox = false,
  setFilteredData
}) => {
  const tableRef = useRef();

  return useMemo(() => (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
        isLoading={loading}
        tableRef={tableRef}
        onSearchChange={() => {
          if (setFilteredData) {
            setFilteredData(tableRef.current.state.data)
          }
        }}
        onRowClick={onRowClick}
        title={title}
        actions={actions}
        localization={localization}
        options={{
          searchFieldAlignment: 'right',
          actionsColumnIndex: -1,
          editable: false,
          toolbar,
          pageSize: 10,
          selection: isShowCheckBox,
          rowStyle: rowData => ({
            backgroundColor: rowData.tableData.checked ? '#F2F9FF' : ''
          }),
          cellStyle: {
            maxWidth: 50
          }
        }}
        icons={tableIcons}
        columns={columns}
        data={data}
      />
    </MuiThemeProvider>
  ), [actions, columns, data, isShowCheckBox, loading, localization, onRowClick, setFilteredData, title, toolbar])
};

Table.propTypes = {
  loading: Proptypes.bool,
  title: Proptypes.string,
  columns: Proptypes.array.isRequired,
  onRowClick: Proptypes.func,
  actions: Proptypes.array,
  localization: Proptypes.object,
  toolbar: Proptypes.bool,
  isShowCheckBox: Proptypes.bool,
  setFilteredData: Proptypes.func,
  data: Proptypes.array.isRequired
};

export default memo(Table);
