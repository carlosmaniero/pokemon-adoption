import * as React from 'react';


export class SpecieList extends React.Component {
  render () {
    return <ul>
      {['bulbasaur', 'pikachu'].map(this.renderPokemon.bind(this))}
    </ul>;
  }

  renderPokemon(name) {
    return <li key={name}>
      <h3>{name}</h3>
    </li>;
  }
}
