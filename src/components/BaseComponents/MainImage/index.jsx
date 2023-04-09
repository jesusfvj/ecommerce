import './index.css';
import { Triangle } from '../Triangle';
import { Rights } from '../Rights';
import { Parallax, Background } from 'react-parallax';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const MainImage = ({location, classAttribute}) => {
  const {collection} = useParams();
  const [collectionName, setCollectionName] = useState(collection)

  if(collectionName==180){
    setCollectionName("rumania")
  }

  return (
    <>
      <Parallax blur={10} strength={500} className="main-image-container">
        <Background className={`main-image-rights-container ${collection ? `${collectionName}`: `${location}`}`}>
          <Rights classAttribute = 'rights-text rights-main-image'/>
        </Background>
      </Parallax>
      <Triangle classAttribute={classAttribute}/>
    </>
  )
}