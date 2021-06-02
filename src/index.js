import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { render } from 'react-dom';
import App from './components/app/App';
import { ThemeProvider } from './components/state/ThemeContext';
import './index.css';

render(
  <ThemeProvider>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
