import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { SpecieList } from './SpecieList';
import { actions } from './actions';


describe('SpecieList', () => {
  let store;
  let wrapper;

  const pokemons = () =>
    wrapper.find('li');

  const pokemonName = (index) =>
    pokemons().at(index).find('h3').text();

  beforeEach(() => {
    store = configureStore();
    store.dispatch(actions.addPokemons(['bulbasaur', 'pikachu']))
  });

  it('renders the given list', () => {
    wrapper = mount(
      <Provider store={store}>
        <SpecieList />
      </Provider>);

    expect(pokemons().length).toBe(2);
    expect(pokemonName(0)).toBe('bulbasaur');
    expect(pokemonName(1)).toBe('pikachu');
  });
})
