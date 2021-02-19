import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './containers/Chat/Chat.jsx';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Chat />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

