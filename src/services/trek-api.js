const url = process.env.API_URL;


export const getCharacters = async() => {
  const res = await fetch(url);
  const json = await res.json();

  if(!res.ok) throw 'ERROR NOMAD CANNOT COMPUTE!';

  return json.map(character => ({
    id: character.id,
    name: character.name,
    affiliation: character.affiliation,
    origin: character.origin,
    race: character.race,
    imageUrl: character.imageUrl
  }));
};
