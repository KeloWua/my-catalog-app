import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdoptionForm from "../components/AdoptionForm";

export default function ItemDetail() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/cats`)
        .then(res => res.json())
        .then(data => {
            const found = data.find(cat => cat.id === Number(id));
            setItem(found);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div>Cargando...</div>;
    if (!item) return <div>Item no encontrado</div>;

    return (
        <div className="item-detail">
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} />
        <p>{item.description}</p>

        <button
    className="button"
    onClick={() => setShowForm(!showForm)}
    >
    {showForm ? "Cancelar" : "Adoptar"}
    </button>

    {showForm && (
    <AdoptionForm
        cat={item}
        onSuccess={() => {
        setShowForm(false);
        alert(`Gracias por tu interés en ${item.name}. Te contactaremos pronto!`);
        }}
    />
    )}
        <button className="button" onClick={() => navigate("/catalog")} style={{ marginTop: "1rem" }}>
            Volver al Catálogo
        </button>
        </div>
    );
    }
