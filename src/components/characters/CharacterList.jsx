import React from 'react';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';
import styles from './CharacterList.css';

const CharacterList = () => {
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Nomad Loading!</h1>;
  
  const charcacterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="characters" className={styles.list}>
      {charcacterElements}
    </ul>
  );

};

export default CharacterList;
