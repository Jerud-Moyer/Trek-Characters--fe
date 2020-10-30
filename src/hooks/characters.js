import { useEffect, useState } from 'react';
import { getCharacters } from '../services/trek-api';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    getCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .then(console.log)
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    characters
  };
};
