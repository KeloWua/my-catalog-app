// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ItemDetail from "./pages/ItemDetail";
import About from "./pages/About";
import Search from "./components/Search";

function App() {
return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<ItemDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />

    </Routes>
    <Footer />
    </BrowserRouter>
);
}

export default App;
