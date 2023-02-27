import { Home, About, Gallery, Contact } from "../pages/index.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about-the-artist" element={<About/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contact-me" element={<Contact/>} />
            <Route path="/*" element={<Navigate replace to="/"/>} />
        </Routes>
    </BrowserRouter>
  )
}