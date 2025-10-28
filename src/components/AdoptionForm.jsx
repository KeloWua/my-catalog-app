import React, { useState } from "react";

export default function AdoptionForm({ cat, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    livesWith: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/adoptions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ catId: cat.id, ...formData }),
    })
      .then(res => res.json())
      .then(() => onSuccess());
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} />
      <input name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} />
      <input name="age" placeholder="Edad" value={formData.age} onChange={handleChange} />
      <input name="livesWith" placeholder="Vive solo o con familia" value={formData.livesWith} onChange={handleChange} />
      <button type="submit">Aceptar</button>
      <button type="button" onClick={() => onSuccess(false)}>Cancelar</button>
    </form>
  );
}
