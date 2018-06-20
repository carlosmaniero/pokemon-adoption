import * as React from 'react';
import { connect } from 'react-redux';


class SpecieListImpl extends React.Component {
  render () {
    return <ul>
      {this.props.species.map(this.renderPokemon.bind(this))}
    </ul>;
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
