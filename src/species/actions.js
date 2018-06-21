import axios from 'axios';

export const types = {
  ADD_POKEMONS: '@@species/ADD_POKEMONS',
}

const fetchPokemons = () => async (dispatch) => {
  const pokemonsReponse = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=200');
  const pokemons = pokemonsReponse.data.results.map(pokemonResponse => pokemonResponse.name);
  dispatch(actions.addPokemons(pokemons));
}

export const actions = {
  addPokemons: (pokemons) => ({
    type: types.ADD_POKEMONS,
    payload: pokemons
  }),
  fetchPokemons
}
