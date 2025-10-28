import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function Catalog({ searchTerm }) {
    const [cats, setCats] = useState([]);

    // Obtener gatos del backend al montar el componente
    useEffect(() => {
        fetch("http://localhost:5000/cats")
        .then(res => res.json())
        .then(data => setCats(data));
    }, []);

    // Filtrar según el searchTerm
    const filteredItems = cats.filter(
        (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
        <h1>Catálogo de Gatos</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {filteredItems.length > 0 ? (
            filteredItems.map((item) => <ItemCard key={item.id} item={item} />)
            ) : (
            <p>No se encontraron gatos...</p>
            )}
        </div>
        </div>
    );
}
