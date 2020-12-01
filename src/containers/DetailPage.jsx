import React, { Component } from 'react';
import { getCharacterById } from '../services/trek-api';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import styles from './DetailPage.css';

export default class Detail extends Component {
  state = {
    id: '',
    name: '',
    affiliation: '',
    origin: '',
    race: '',
    imageUrl: ''
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
  }

  componentDidMount = async() => {
    const data = await getCharacterById(this.props.match.params.id);
    

    this.setState({
      id: data.id,
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
        <Header className={styles.header}/>
        <div data-testid="detail" className={styles.Detail}>
          <h1 className="char-name">{this.state.name}</h1>
          <h1>Affiliation: {this.state.affiliation}</h1>
          <h1>Origin: {this.state.origin}</h1>
          <h1>Race: {this.state.race}</h1>
          <img src={this.state.imageUrl} alt={this.state.name}/>
          <Link to={`/update/${this.state.id}`}>
            <h2>Update or Delete this Character</h2>
          </Link>
        </div>
      </div>
    );
  }
}
