// src/components/ItemCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
    return (
    <div className="item-card" style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem" }}>
        <img 
        src={item.image} 
        alt={item.name} 
        style={{ width: "100%", height: "150px", objectFit: "cover" }} 
        />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <Link to={`/catalog/${item.id}`}>Ver más</Link>
    </div>
    );
}
