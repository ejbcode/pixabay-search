import React, { useState } from 'react';
import Error from './Error';

const Form = ({ setSearch, setPage }) => {
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (keyword.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setSearch(keyword);
    setPage(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="What are you looking for?"
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
