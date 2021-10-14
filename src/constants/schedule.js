export const scheduleColumnes = [
  {
    title: 'DATE',
    field: 'date',
    width: '10%',
    headerStyle: {
      fontWeight: 'bold',
      zIndex: 1
    },
    cellStyle: {
      color: '#707683'
    }
  },
  {
    title: 'OPPONENT',
    field: 'team1',
    width: '10%',
    headerStyle: {
      fontWeight: 'bold',
      zIndex: 1
    },
    cellStyle: {
      color: '#707683'
    }
  },
  {
    title: 'ROUND',
    field: 'round',
    width: '10%',
    headerStyle: {
      fontWeight: 'bold',
      zIndex: 1
    },
    cellStyle: {
      color: '#707683'
    }
  },
  {
    title: 'RESULT',
    field: 'score',
    width: '10%',
    headerStyle: {
      fontWeight: 'bold',
      zIndex: 1
    },
    cellStyle: {
      color: '#707683'
    },
    render: rowData => rowData?.score ? `${rowData.score.ft[0]} - ${rowData.score.ft[1]}` : '--'
  },
]