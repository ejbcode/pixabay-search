import React, { useState, useEffect } from 'react';
import Form from './componentes/Form';
import ListOfImages from './componentes/ListOfImages';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const imgPerPage = 20;
  const KEY = '17527816-68d8832ae994a8ecc8b573c40';
  const URL = `https://pixabay.com/api/?key=${KEY}&q=${search}&per_page=${imgPerPage}&page=${page}`;

  useEffect(() => {
    const dataFromApi = async () => {
      if (search === '') return;

      const response = await fetch(URL);
      const result = await response.json();
      setData(result.hits);
      setTotalPages(Math.ceil(result.totalHits / imgPerPage));

      const top = document.querySelector('#top');
      top.scrollIntoView({ block: 'end', behavior: 'smooth' });
    };
    dataFromApi();
  }, [URL, page, search]);

  const handlePreviousClick = () => {
    const actualPage = page - 1;
    if (actualPage === 0) return;
    setPage(actualPage);
  };
  const handleNextClick = () => {
    const actualPage = page + 1;
    if (actualPage > totalPages) return;
    setPage(actualPage);
  };
  return (
    <div className="container">
      <div id="top" className="jumbotron py-2 text-center">
        <h2>Pixabay</h2>
        <p className="lead te">Stunning free images & royalty free stock</p>
        <Form setSearch={setSearch} setPage={setPage} />
      </div>
      <div className="row justify-content-center p-3">
        <ListOfImages data={data} />
      </div>
      <div className="row justify-content-center">
        {page === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={handlePreviousClick}
          >
            &laquo; Previous
          </button>
        )}

        {page === totalPages ? null : (
          <button
            type="button"
            className="btn btn-info "
            onClick={handleNextClick}
          >
            Next &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
