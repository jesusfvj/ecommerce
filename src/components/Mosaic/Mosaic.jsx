import "./Mosaic.css";
import { useEffect, useContext } from 'react';
import { NavLink } from "react-router-dom";
import { mainImagesData } from "../../data/data.js";
import FetchContext from '../../context/FetchContext.jsx';

export const Mosaic = () => {
    const url = 'http://localhost:3000/imagesMain';
    const { dataFetch, setDataFetch } = useContext(FetchContext);
    
    const handleMouseEnter = (e) => {
        e.target.nextSibling.style.display = 'flex';
    };
    const handleMouseLeave = (e) => {
        e.target.style.display = 'none';
    };
    
    useEffect(() => {
        const fetchImages = async () => {
            try {
            const response = await fetch(url);
            const data = await response.json();
            setDataFetch(data)
            } catch(error) {
        console.log(error);
            }
        }
    fetchImages();
        }, [])
    
    return (
        dataFetch.map(({ id, title }) => {
            if(id<=15){
                return (
                    <>
                    {id==1&&
                            <div className="black-background"></div>
                        }
                        <div
                            className={`mosaic-image-${id}`}
                            key={`image-${new Date().getTime()}`}
                            onMouseEnter={handleMouseEnter}>
                        </div>
                        <NavLink to={`/gallery/${title}`}
                            onMouseLeave={handleMouseLeave}
                            className={`mosaic-hover-all mosaic-hover-${id}`}
                            key={`hover-${new Date().getTime()}`}
                            >
                            <p
                                className={`mosaic-hover-text-all mosaic-hover-text-${id}`}
                                key={`hover-text-${new Date().getTime()}`}
                                >{title}
                            </p>
                        </NavLink>
                    </>
                )
            } else {
                return (
                        <div
                            className={`mosaic-image-text-all mosaic-image-text-${id}`}
                            key={`image-text-${new Date().getTime()}`}
                        ></div>
                        )
            }
        })
    )
}