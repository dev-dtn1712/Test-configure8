import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';
import App from './App';
import configureStore from './redux/store';
import history from './libs/history';
import reportWebVitals from './reportWebVitals';
import theme from './styles/theme';
import './index.css';

const store = configureStore();

const Main = () => (
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseLine />
          <App />
        </StylesProvider>
      </ThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
