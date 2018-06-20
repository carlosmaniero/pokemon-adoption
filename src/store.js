import { createStore, combineReducers } from 'redux';
import { specieListReducer } from './species/reducer';

const reducer = combineReducers({
  specieList: specieListReducer
})

export const configureStore = () => createStore(reducer);

