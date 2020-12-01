import React, { Component } from 'react';
import Create from '../components/characters/Create';
import { addCharacter } from '../services/trek-api';
import Header from '../components/header/Header';
import PropTypes from 'prop-types';
import styles from './CreatePage.css';

export default class CreatePage extends Component {
  state = {
    id: '',
    name: '',
    affiliation: '',
    origin: '',
    race: '',
    imageUrl: '',
    newCharacter: {}
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
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
    this.props.history.push('/');
  }
  render() {
    const { name, affiliation, origin, race, imageUrl } = this.state;
    return (
      <div>
        <Header className={styles.header}/>
        <div className={styles.form}>
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
      </div>
    );
  }
}
