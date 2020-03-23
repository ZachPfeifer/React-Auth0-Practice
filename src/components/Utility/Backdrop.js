import React from 'react';

const backdrop = ({ click }) => {
  return (
    <div className="backdrop" onClick={click} />
  );
}

export default backdrop;