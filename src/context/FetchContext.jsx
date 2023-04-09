import { useState } from "react";
import React from "react";

export const FetchContext = React.createContext();

export const FetchProvider = ({ children }) => {
  const [dataFetch, setDataFetch] = useState([]);
  const [dataFetchGallery, setDataFetchGallery] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  
  return (
    <FetchContext.Provider value={{ dataFetch, setDataFetch, dataFetchGallery, setDataFetchGallery, cart, setCart}}>
      {children}
    </FetchContext.Provider>
  );
};

export default FetchContext