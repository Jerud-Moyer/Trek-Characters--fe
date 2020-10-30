import React from 'react';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';

const CharacterList = () => {
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Nomad Loading!</h1>;
  
  const charcacterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="characters">
      {charcacterElements}
    </ul>
  );

};

export default CharacterList;
