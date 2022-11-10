import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {ContextProvider} from './contexts/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      {/* We can use all the context provider values in the inners components - In this case in the entire application */}
      <App />
    </ContextProvider>
  </React.StrictMode>
);
