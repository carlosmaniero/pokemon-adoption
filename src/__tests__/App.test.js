import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import moxios from 'moxios'

it('renders without crashing', () => {
  moxios.install();
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={configureStore()}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
