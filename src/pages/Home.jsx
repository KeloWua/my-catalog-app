// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
return (
<div style={{ textAlign: "center", padding: "2rem" }}>
    <h1>Bienvenido al Catálogo de Gatos</h1>
    <p>Explora los diferentes gatos disponibles y conoce más sobre ellos.</p>
    <Link
    to="/catalog"
    className="button" 
    >
    Ir al catálogo
    </Link>
</div>
);
}
