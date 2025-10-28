import React, { useState, useEffect } from "react";

export default function AdminPanel() {
  const [cats, setCats] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Cargar gatos del backend al iniciar
  useEffect(() => {
    fetch("http://localhost:5000/cats")
      .then(res => res.json())
      .then(data => setCats(data));
  }, []);

  const getRandomImage = () => {
    const catImg = [200, 210, 220, 230, 240, 250, 260, 270, 280, 290];
    const random = catImg[Math.floor(Math.random() * catImg.length)];
    return `https://placekittens.com/${random}/200`;
  };

  const addCat = (e) => {
    e.preventDefault();

    const newCat = {
      name,
      description,
      image: getRandomImage(),
    };

    // POST al backend
    fetch("http://localhost:5000/cats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCat),
    })
      .then(res => res.json())
      .then(cat => setCats([...cats, cat])); // actualizar estado

    setName("");
    setDescription("");
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Panel Admin</h1>
      <form onSubmit={addCat} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Nombre del gato"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción del gato"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Agregar Gato</button>
      </form>

      <h2>Gatos en el catálogo:</h2>
      <ul>
        {cats.map(cat => (
          <li key={cat.id}>
            <strong>{cat.name}</strong>: {cat.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
