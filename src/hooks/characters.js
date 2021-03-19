import { useEffect, useState } from 'react';
import { addCharacter } from '../services/trek-api';
import { getCharacters } from '../services/trekdex-api';


export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    getCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    characters
  };
};

export const useAddCharacter = () => {
  const [loading, setLoading] = useState(true);
  const [newCharacter, setNewCharacter] = useState({});

  useEffect(() => {
    addCharacter()
      .then(addedCharacter => setNewCharacter(addedCharacter))
      .finally(() => setLoading(false));
  });

  return {
    loading,
    newCharacter
  };
};
