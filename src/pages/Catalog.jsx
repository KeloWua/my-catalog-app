// src/pages/Catalog.jsx
import React, { useState } from "react";
import ItemCard from "../components/ItemCard";
import { items } from "../data/items";



    export default function Catalog() {

        const [searchTerm, setSearchTerm] = React.useState("");

        const filteredItems = items.filter(item =>
item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
    <div>
        <h1>Catálogo de Gatos</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map(item => (
            <ItemCard key={item.id} item={item} />
        ))}
        </div>
    </div>
    );
}
