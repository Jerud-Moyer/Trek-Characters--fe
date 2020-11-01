import React, { Component } from 'react';
import Create from '../components/characters/Create';
import { addCharacter } from '../services/trek-api';

export default class CreatePage extends Component {
  state = {
    name: '',
    affiliation: '',
    origin: '',
    race: '',
    imageUrl: '',
    newCharacter: {}
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, affiliation, origin, race, imageUrl } = this.state;
    const newCharacter = { name, affiliation, origin, race, imageUrl };
    this.setState({ newCharacter });
    addCharacter(newCharacter);
  }
  render() {
    const { name, affiliation, origin, race, imageUrl } = this.state;
    return (
      <div>
        <Create
          name={name}
          affiliation={affiliation}
          origin={origin}
          race={race}
          imageUrl={imageUrl}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
