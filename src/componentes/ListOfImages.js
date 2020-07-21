import React from 'react';
import Images from './Images';

const ListOfImages = ({ data }) => {
  return (
    <div className="card-columns">
      {data.map((item) => (
        <a
          key={item.id}
          href={item.largeImageURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Images {...item} />
        </a>
      ))}
    </div>
  );
};

export default ListOfImages;
