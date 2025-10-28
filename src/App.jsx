// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ItemDetail from "./pages/ItemDetail";
import About from "./pages/About";
import AdminRoute from "./components/AdminRoute";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <BrowserRouter>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
            path="/catalog"
            element={<Catalog searchTerm={searchTerm} />}
            />
            <Route path="/catalog/:id" element={<ItemDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={
            <AdminRoute>
                <AdminPanel />
            </AdminRoute>
            }/>
        </Routes>
        <Footer />
        </BrowserRouter>
    );
}

export default App;
