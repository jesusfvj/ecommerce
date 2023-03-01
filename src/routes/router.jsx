import { Home, Completed, Pending, InProgress } from "../pages/index.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { InputProvider } from "../context/InputContext.jsx";

export const Router = () => {
  return (
    <InputProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/in-progress" element={<InProgress />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </InputProvider>
  )
}
