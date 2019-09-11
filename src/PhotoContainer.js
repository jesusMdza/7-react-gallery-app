import React from 'react';
import Photo from './Photo';

const PhotoContainer = ({ data }) => {

  let photoKey = 1;
  const photos = data.map(photo => 
  <Photo 
    farm={photo.farm}
    serverID={photo.server}
    id={photo.id}
    secret={photo.secret}
    title={photo.title}
    key={photoKey++}
  />
  );

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default PhotoContainer;