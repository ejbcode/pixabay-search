import React from 'react';

const Images = ({ ...item }) => {
  // const { previewURL, tags, likes, views, largeImageURL } = item;
  const { tags, likes, views, previewURL, largeImageURL } = item;
  console.log(tags);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top " />
        <p>df</p>
      </div>
    </div>
  );
};

export default Images;
