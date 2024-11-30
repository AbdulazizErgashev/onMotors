import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </React.Fragment>
  );
}
