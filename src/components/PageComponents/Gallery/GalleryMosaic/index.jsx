import "./GalleryMosaic.css";
import "./GalleryMosaicManu.css";
import "./GalleryMosaicTara.css";
import { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import { FramesChoice } from '../FramesChoice';
import FetchContext from '../../../../context/FetchContext.jsx';

/* const urlJson = `http://localhost:3000/gallery`; */
const arrayFrames = ["20 x 30cm", "25 x 30cm", "28 x 35cm", "50 x 75cm", "100 x 150cm"];

export const GalleryMosaic = () => {
    let objectStyle = {};
    let gridCounter = 12;
    let level = 1;
    const [isClicked, setIsClicked] = useState(false)
    const [urlState, setUrlState] = useState("")
    const [idState, setIdState] = useState("")
    const { collection } = useParams();
    const [collectionName, setCollectionName] = useState(collection)
    const {cart, setCart, dataFetchGallery, setDataFetchGallery} = useContext(FetchContext);

    if (collection) {
        switch (collectionName) {
            case "manu rico":
                setCollectionName("manu")
                break;
            case "cry me a river":
                setCollectionName("cry")
                break;
            default:
                break;
        }
    }

    const handleMouseEnter = (e) => {
        e.target.nextSibling.style.display = 'flex';
    };
    const handleMouseLeave = (e) => {
        e.target.style.display = 'none';
    };

    const handleClick = (url, id) => {
        !isClicked?setIsClicked(true):setIsClicked(false);
        setUrlState(url);
        setIdState(id);
    }

    const addToCart = () => {
        const filteredCart = cart.filter((product)=>{
            return product.quantity!=0;
        })
        setCart(filteredCart)
        localStorage.setItem("cart", JSON.stringify(filteredCart));
    }

/*     useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(urlJson);
                const data = await response.json(); */
                /* if (collection) {
                    const dataFiltered = data.filter((data) => data.artist === collectionName)
                    return setDataFetchGallery(dataFiltered)
                } */
/*                 return setDataFetchGallery(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchImages();
    }, []) */

    useEffect(() => {
      if (collection) {
          const dataFiltered = dataFetchGallery.filter((data) => data.artist === collectionName)
          return setDataFetchGallery(dataFiltered)
      }
    }, [])
    
    

    return (
        <>
            {/* {`${collection}` ??
                <div className="artist-gallery-title-container">
                    <p className="artist-gallery-title">
                        {collection}
                    </p>
                </div>
            } */}
            {dataFetchGallery.map(({ id, url }) => {

                if (collection === undefined) {
                    if (level === 1) {
                        objectStyle = {
                            position: "relative",
                            gridColumn: `1 / span 5`,
                            gridRow: `${gridCounter} / span 10`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundImage: `url('/images/${url}')`,
                            zIndex: "100"
                        }
                        level = 2;
                    } else if (level === 2) {
                        objectStyle = {
                            position: "relative",
                            gridColumn: `6 / span 5`,
                            gridRow: `${gridCounter} / span 10`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundImage: `url('/images/${url}')`,
                            zIndex: "100"
                        }
                        level = 3;
                    } else if (level === 3) {
                        objectStyle = {
                            backgroundImage: `url('/images/${url}')`,
                            position: "relative",
                            gridColumn: `11 / span 5`,
                            gridRow: `${gridCounter} / span 10`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            zIndex: "100"
                        }
                        gridCounter += 10;
                        level = 1;
                    }
                }

                return (
                    <>
                        <div
                            className={`all-collection-images ${collectionName ? `gallery-image-${collectionName}-${id}` : `all-gallery-images gallery-image-${id}`}`}
                            key={`gallery-image-${new Date().getTime()}`}
                            onMouseEnter={handleMouseEnter}
                            style={objectStyle}
                        >
                        </div>
                        <div
                            onMouseLeave={handleMouseLeave}
                            className={`gallery-mosaic-hover-all gallery-mosaic-hover-${id}`}
                            key={`hover-expand-${new Date().getTime()}`}
                            onClick={() => handleClick(url, id)}
                        >
                            <p
                                key={`expand-hover-text-${new Date().getTime()}`}
                            >expand
                            </p>
                        </div>
                    </>
                )
            })
            }
            {isClicked &&
            <div className="expand-div-container">
                <div className="expand-image-container">
                    <img src={`/images/${urlState}`} className="expand-img-child" alt="image detail"/>
                    <div className="exit-x" onClick={()=>handleClick()}></div>
                </div>
                <div className="frames-choice-container-form">
                {arrayFrames.map((frame) => {
                    return <FramesChoice frameSize={frame} idState={idState} collection={collection}/>
                })}
                    <button className="button-add-to-cart" onClick={addToCart}></button>
                </div>
            </div>
            }
        </>
    )
}