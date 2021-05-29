import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';

import AppContext from './context/AppContext';
import initialState from './initialState';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <AppContext>
      <App />
    </AppContext>
  </Provider>,
  document.getElementById('app')
);
