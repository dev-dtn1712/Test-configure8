import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  props: {
    MuiTextField: {
      fullWidth: true,
      variant: 'outlined',
      margin: 'dense'
    },
    MuiInputLabel: {
      shrink: true
    }
  },
  palette: {
    primary: {
      main: '#62a03f'
    },
    secondary: {
      main: '#E33E7F'
    }
  }
});

export default theme;
