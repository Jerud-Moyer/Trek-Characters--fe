const url = process.env.API_URL;


export const getCharacters = async() => {
  const res = await fetch(url);
  const json = await res.json();

  if(!res.ok) throw 'ERROR NOMAD CANNOT COMPUTE!';

  return json;
};

export const getCharacterById = async(id) => {
  const res = await fetch(`${url}/${id}`);
  const json = await res.json();

  if(!res.ok) throw 'ERROR, ERROR';

  return {
    id: json.id,
    name: json.name,
    affiliation: json.affiliation,
    origin: json.origin,
    race: json.race,
    imageUrl: json.imageUrl
  };
};

export const addCharacter = (newCharacter) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCharacter)
  })
    .then(res => res.json());
};

export const updateCharacter = (id, character) => {
  console.log(id, character);
  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  });
};
