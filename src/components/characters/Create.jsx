import React from 'react';
import PropTypes from 'prop-types';
import styles from './Create.css';

const Create = ({
  name,
  affiliation,
  origin,
  race,
  imageUrl,
  onChange,
  onSubmit
}) => (
  <div className={styles.formDiv}>
    <form onSubmit={onSubmit} className={styles.form}>
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
      <label htmlFor="imageUrl">Image url</label>
      <input
        id="imageUrl"
        type="url"
        name="imageUrl"
        value={imageUrl}
        onChange={onChange}
      />
      <button>Submit</button>
    </form>

  </div>
);

Create.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Create;
