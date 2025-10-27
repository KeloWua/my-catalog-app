import React from "react";
import Catalog from "./Catalog";
import { useParams, useNavigate } from "react-router-dom";
import { items } from "../data/items";



export default function ItemDetail() {

    const navigate = useNavigate();

    const { id } = useParams();
    const item = items.find(i => i.id === Number(id));

    if (!item) return <div>Item no encontrado</div>;

    return (
    <div>
            <div className="item-detail">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            </div>
            <button className="button" onClick={() => navigate('/catalog')}>Volver al Catálogo</button>
    </div>
    );

}
