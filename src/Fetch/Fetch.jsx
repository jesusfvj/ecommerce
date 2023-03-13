import FetchContext from '../context/FetchContext.jsx';
import { useContext, useEffect } from 'react';
const urlJson = `http://localhost:3000/gallery`;

export const Fetch = () => {
    const { setDataFetchGallery } = useContext(FetchContext);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(urlJson);
                const data = await response.json();
                localStorage.setItem("fetch-gallery", JSON.stringify(data));
                return setDataFetchGallery(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchImages();
    }, [])
  return (
    <>
    </>
  )
}
