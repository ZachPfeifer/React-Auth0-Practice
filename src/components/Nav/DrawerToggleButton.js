import React from 'react';

const drawToggleButton = ({ click }) => {
  return (
    <button className="toggle-button" onClick={click}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
}

export default drawToggleButton;