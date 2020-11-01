import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Update from '../components/characters/Update';
import { updateCharacter, getCharacterById } from '../services/trek-api';

export default class UpdatePage extends Component {
  state = {
    name: '',
    affiliation: '',
    origin: '',
    race: '',
    imageUrl: ''
    
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount = async() => {
    const data = await getCharacterById(this.props.match.params.id);
     

    await this.setState({
      name: data.name,
      affiliation: data.affiliation,
      origin: data.origin,
      race: data.race,
      imageUrl: data.imageUrl
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    console.log(this.props.match.params.id);
    const { name, affiliation, origin, race, imageUrl } = this.state;
    const updatedCharacter = { name, affiliation, origin, race, imageUrl };
    // this.setState(updatedCharacter);
    await updateCharacter(this.props.match.params.id, updatedCharacter);
  }
  render() {
    const { name, affiliation, origin, race, imageUrl } = this.state;
    return (
      <div>
        <Update
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
