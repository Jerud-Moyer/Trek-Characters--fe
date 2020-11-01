import React, { Component } from 'react';
import { getCharacterById } from '../services/trek-api';
import PropTypes from 'prop-types'; 

export default class Detail extends Component {
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
    

    this.setState({
      name: data.name,
      affiliation: data.affiliation,
      origin: data.origin,
      race: data.race,
      imageUrl: data.imageUrl
    });
  }

  render() {
    return (
      <div>
        <h1 className="char-name">{this.state.name}</h1>
        <h1>Affiliation: {this.state.affiliation}</h1>
        <h1>Origin: {this.state.origin}</h1>
        <h1>Race: {this.state.race}</h1>
        <img src={this.state.imageUrl} alt={this.state.name}/>
        
      </div>
    );
  }
}
