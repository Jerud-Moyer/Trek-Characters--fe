import React from 'react';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';
import Header from '../header/Header';
import styles from './CharacterList.css';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Nomad Loading!</h1>;
  
  const charcacterElements = characters.map(character => (
    <li key={character.id}>
      <Link to={`/detail/${character.id}`} className={styles.link}>
        <CharacterItem {...character} />
      </Link>
    </li>
  ));

  return (
    <div className={styles.homepage}>
      <Header className={styles.header}/>
      <ul data-testid="characters" className={styles.list}>
        {charcacterElements}
      </ul>
    </div>
  );

};

export default CharacterList;
