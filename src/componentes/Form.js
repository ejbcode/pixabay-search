import React, { useState } from 'react';
import Error from './Error';

const Form = ({ setSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState(false);
  const findImage = (event) => {
    event.preventDefault();

    if (keyword.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setSearch(keyword);
  };

  return (
    <form onSubmit={findImage}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Find a image"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            value="Find"
          />
        </div>
      </div>
      {error && <Error error="Please fill the input with a keyword" />}
    </form>
  );
};

export default Form;
