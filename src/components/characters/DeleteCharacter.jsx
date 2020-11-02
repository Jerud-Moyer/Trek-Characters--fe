import React from 'react';
import PropTypes from 'prop-types';


const DeleteCharacter = ({
  onClick
}) => (
  <div>
    <button onClick={onClick}>Delete</button>
  </div>
);

DeleteCharacter.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DeleteCharacter;
