import React from 'react';
import Images from './Images';

const ListOfImages = ({ data }) => {
  return (
    <div className="row col-12 p-5">
      {data.map((item) => (
        <Images key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListOfImages;
