import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';
import './App.css';

// Create a container.
const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <App tab="app" />
);