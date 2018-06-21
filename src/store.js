import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { specieListReducer } from './species/reducer';

const reducer = combineReducers({
  specieList: specieListReducer
})

export const configureStore = () => createStore(reducer, applyMiddleware(thunk));

