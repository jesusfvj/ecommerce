import "./Mosaic.css";
import { mainImagesData } from "../../data/data.js";

export const Mosaic = () => {
    console.log("mainImagesData");
    const handleMouseEnter = (e) => {
        e.target.nextSibling.style.display = 'flex';
    };
    const handleMouseLeave = (e) => {
        e.target.style.display = 'none';
    };
    
    return (
        mainImagesData.map(({ id, title }) => {
            
            if(id<=15){
                return (
                    <>
                        <div className={`mosaic-image-${id}`}
                            key={`image-${new Date().getTime()}`}
                            onMouseEnter={handleMouseEnter}>
                        </div>
                        <div
                            className={`mosaic-hover-all mosaic-hover-${id}`}
                            key={`hover-${new Date().getTime()}`}
                            onMouseLeave={handleMouseLeave}
                            >
                            <p className={`mosaic-hover-text-all mosaic-hover-text-${id}`}
                            key={`hover-text-${new Date().getTime()}`}
                            >{title}</p>
                        </div>
                    </>
                )
            } else {
                return (
                        <div className={`mosaic-image-text-all mosaic-image-text-${id}`}
                        key={`image-text-${new Date().getTime()}`}
                        ></div>
                )
            }
        })
    )
}