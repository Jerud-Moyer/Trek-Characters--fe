import React from 'react';
import PropTypes from 'prop-types';
import styles from './DeleteCharacter.css';


const DeleteCharacter = ({
  onClick
}) => (
  <div className={styles.Delete}>
    <button onClick={onClick}>Delete</button>
  </div>
);

DeleteCharacter.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DeleteCharacter;
