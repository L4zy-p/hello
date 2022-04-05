import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { DarkThemeProvider } from './context/DarkThemeContext'

ReactDOM.render(
  <DarkThemeProvider>
    <App />
  </DarkThemeProvider>,
  document.getElementById('root')
);

