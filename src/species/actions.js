export const types = {
  ADD_POKEMONS: '@@species/ADD_POKEMONS',
}


export const actions = {
  addPokemons: (pokemons) => ({
    type: types.ADD_POKEMONS,
    payload: pokemons
  }),
}
