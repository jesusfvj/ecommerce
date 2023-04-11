import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { About } from "../pages/About.jsx";
import { Gallery } from "../pages/Gallery.jsx";
import { LogIn } from "../pages/Login.jsx";
import { Cart } from "../pages/Cart.jsx";
import { Contact } from "../pages/Contact.jsx";
import { ScrollTop } from "../components/index.js";
import PrivateRoutes from "./PrivateRoutes";

export const Router = () => {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-the-artist" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:collection" element={<Gallery />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
        <Route path="/cart" element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
        />
      </Routes>
    </>
  )
}