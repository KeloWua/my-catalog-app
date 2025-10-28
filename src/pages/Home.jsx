// src/pages/Home.jsx
import React from "react";
import HeroSlideshow from "../components/HeroSlideshow.jsx";
import { Link } from "react-router-dom";

export default function Home() {
    const images = [
        "https://placekittens.com/1200/500",
        "https://placekittens.com/1201/500",
        "https://placekittens.com/1202/500",
        // añade más o pon rutas a /images/cat1.jpg si las pones en public/
    ];

    return (
        <div>
        <HeroSlideshow images={images} interval={2500} />
        <section style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Bienvenido al Catálogo de Gatos</h1>
            <p>Explora, conoce y aplica para adoptar a tu próximo compañero felino.</p>
            <Link
    to="/catalog"
    className="button" 
    >
    Ir al catálogo
    </Link>
        </section>
        </div>
    );
}
