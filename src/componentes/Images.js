import React from 'react';

const Images = ({ ...item }) => {
  // const { previewURL, tags, likes, views, largeImageURL } = item;
  const { tags, webformatURL } = item;

  return (
    <div className="card">
      <img src={webformatURL} alt={tags} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{tags}</p>
      </div>
    </div>
  );
};

export default Images;
