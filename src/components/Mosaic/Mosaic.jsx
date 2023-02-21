import "./Mosaic.css";

export const Mosaic = () => {
    const arrayImages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    return (
        arrayImages.map((count, index) => {
                return <div className={`mosaic-image-${count}`} key={index}></div>;
    })
    )
}


