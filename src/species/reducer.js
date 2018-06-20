import { types } from './actions';

export const specieListReducer = (state = [], action) => {
  if (action.type === types.ADD_POKEMONS) {
    return action.payload;
  }

  return state;
}
