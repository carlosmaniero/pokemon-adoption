import * as React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';
import './SpecieList.css';


class SpecieListImpl extends React.Component {
  componentWillMount () {
    this.props.dispatch(actions.fetchPokemons());
  }

  render () {
    return <div className="specie-list-wrapper">
      <h1>Choose your Pokémon</h1>

      <ul className="specie-list">
        {this.props.species.map(this.renderPokemon.bind(this))}
      </ul>
    </div>;
  }

  renderPokemon(name) {
    return <li key={name}>
      <h3>{name}</h3>
    </li>;
  }
}

const mapStateToProps = (state) => ({
  species: state.specieList
});

export const SpecieList = connect(mapStateToProps)(SpecieListImpl);
