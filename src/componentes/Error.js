import React from 'react';

const Error = ({ error }) => {
  return (
    <p className="alert alert-danger" role="alert">
      {error}
    </p>
  );
};

export default Error;
