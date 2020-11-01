const url = process.env.API_URL;


export const getCharacters = async() => {
  const res = await fetch(url);
  const json = await res.json();

  if(!res.ok) throw 'ERROR NOMAD CANNOT COMPUTE!';

  return json;
};

export const addCharacter = (newCharacter) => {
  console.log(newCharacter);
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCharacter)
  })
    .then(res => res.json());
};
