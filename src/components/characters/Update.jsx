import React from 'react';
import PropTypes from 'prop-types';

const Update = ({
  name,
  affiliation,
  origin,
  race,
  imageUrl,
  onChange,
  onSubmit
}) => (
  <>
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        
      />
      <label htmlFor="affiliation">Affiliation</label>
      <input
        id="affiliation"
        type="text"
        name="affiliation"
        value={affiliation}
        onChange={onChange}
      />
      <label htmlFor="origin">Origin</label>
      <input
        id="origin"
        type="text"
        name="origin"
        value={origin}
        onChange={onChange}
      />
      <label htmlFor="race">Race</label>
      <input
        id="race"
        type="text"
        name="race"
        value={race}
        onChange={onChange}
      />
      <label htmlFor="imageUrl">Image</label>
      <input
        id="imageUrl"
        type="url"
        name="imageUrl"
        value={imageUrl}
        onChange={onChange}
      />
      <button>Update</button>
    </form>

  </>
);

Update.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Update;
