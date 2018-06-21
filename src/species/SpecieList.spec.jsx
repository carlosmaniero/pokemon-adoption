import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { SpecieList } from './SpecieList';
import { actions } from './actions';
import moxios from 'moxios'


describe('SpecieList', () => {
  let store;
  let wrapper;

  const pokemons = () =>
    wrapper.find('li');

  const pokemonName = (index) =>
    pokemons().at(index).find('h3').text();

  beforeEach(() => {
    store = configureStore();
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('renders the given list', async () => {
    moxios.stubRequest('https://pokeapi.co/api/v2/pokemon/?limit=200', {
      status: 200,
      response: {
        results: [
          { name: 'bulbasaur' },
          { name: 'pikachu' },
        ]
      }
    });

    wrapper = mount(
      <Provider store={store}>
        <SpecieList />
      </Provider>);

    await ensureRender(wrapper);

    expect(pokemons().length).toBe(2);
    expect(pokemonName(0)).toBe('bulbasaur');
    expect(pokemonName(1)).toBe('pikachu');
  });
})
