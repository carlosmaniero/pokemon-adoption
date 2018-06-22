import axios from 'axios';

export const types = {
  ADD_TO_CART: '@@cart/ADD_TO_CART',
}

export const actions = {
  addToCart: (pokemon) => ({
    type: types.ADD_TO_CART,
    payload: pokemon
  })
}
