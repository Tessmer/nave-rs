import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'

import App from './App';

const theme = {
  colors: { 
    primary: '#61dafb',
    dark: '#20232a',
    light: '#f1f1f1'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);