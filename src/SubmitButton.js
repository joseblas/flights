import React from 'react';

const SubmitButton = ({ value, disabled, onClick }) => {

  return (
    <button className="standard-button" disabled={ disabled } onClick={ onClick }>
      { value }
    </button>
  );

};

export default SubmitButton;
