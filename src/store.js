import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { specieListReducer } from './species/reducer';
import { cartReducer } from './cart/reducer';

const reducer = combineReducers({
  specieList: specieListReducer,
  cart: cartReducer
})

export const configureStore = () => createStore(reducer, applyMiddleware(thunk));

