import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Update from '../components/characters/Update';
import {
  deleteCharacter,
  updateCharacter,
  getCharacterById
} from '../services/trek-api';
import DeleteCharacter from '../components/characters/DeleteCharacter';


export default class UpdatePage extends Component {
  state = {
    name: '',
    affiliation: '',
    origin: '',
    race: '',
    imageUrl: ''
    
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
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
    const { name, affiliation, origin, race, imageUrl } = this.state;
    const updatedCharacter = { name, affiliation, origin, race, imageUrl };
    await updateCharacter(this.props.match.params.id, updatedCharacter);
  }

  handleClick = async() => {
    if(window.confirm('Are you sure you wish to delete this entry?')) {
      await deleteCharacter(this.props.match.params.id);
      this.props.history.push('/');
    }
    this.props.history.push('/');
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
        <DeleteCharacter onClick={this.handleClick} />
      </div>
    );
  }
}
