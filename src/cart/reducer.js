import { types } from "./actions";

export const cartReducer = (state = [], action) => {
  if (action.type === types.ADD_TO_CART) {
    return [...state, action.payload];
  }
  return state;
}
