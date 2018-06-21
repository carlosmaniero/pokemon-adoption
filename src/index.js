import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './store';
import { actions } from './species/actions';
import { Provider } from 'react-redux';

const store = configureStore();
store.dispatch(actions.addPokemons(['bulbasaur', 'pikachu']));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
