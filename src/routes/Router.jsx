import { Home, About, Gallery, Contact, Cart, LogIn } from "../pages/index.js";
import { ScrollTop } from "../components/index.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./PublicRoute/PublicRoute.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-the-artist" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:collection" element={<Gallery />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/private" element={<PublicRoute />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}