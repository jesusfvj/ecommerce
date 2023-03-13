import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavBar, MainImage, Body, Footer, GalleryMosaic } from '../../components/index.js';

export const Gallery = () => {
  const {collection} = useParams();
  const [collectionName, setCollectionName] = useState(collection)

  switch (collectionName) {
    case "manu rico":
      setCollectionName("manu")
      break;
    case "cry me a river":
      setCollectionName("cry")
      break;
    case "180":
      setCollectionName("rumania")
      break;
    default:
      break;
  }

  return (
    <div className="gallery">
      <NavBar />
      <MainImage location="gallery-path" classAttribute="gallery-triangle-body"/>
      <Body containerClassName={`${collectionName ? `all-artists gallery-${collectionName}` : `gallery-body-container`}`}>
        <GalleryMosaic />
      </Body>
      <Footer />
    </div>
  )
}
