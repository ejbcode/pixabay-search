import React from 'react';
import Images from './Images';

const ListOfImages = ({ data }) => {
  return (
    <div className="card-columns">
      {data.map((item) => (
        <a href={item.largeImageURL} target="_blank" rel="noopener noreferrer">
          <Images key={item.id} {...item} />
        </a>
      ))}
    </div>
  );
};

export default ListOfImages;
