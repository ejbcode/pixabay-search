import React, { useState, useEffect } from 'react';
import Form from './componentes/Form';
import ListOfImages from './componentes/ListOfImages';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const imgPerPage = 5;
  const KEY = '17527816-68d8832ae994a8ecc8b573c40';
  const URL = `https://pixabay.com/api/?key=${KEY}&q=${search}&per_page=${imgPerPage}`;

  useEffect(() => {
    const dataFromApi = async () => {
      if (search === '') return;

      const response = await fetch(URL);
      const result = await response.json();
      setData(result.hits);
    };
    dataFromApi();
  }, [URL, search]);
  console.log(data);
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Search for Image</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListOfImages data={data} />
      </div>
    </div>
  );
}

export default App;
