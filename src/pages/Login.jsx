// src/pages/Login.jsx
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(username, password)) {
        navigate("/admin"); // redirige al panel admin
        } else {
        alert("Usuario o contraseña incorrectos");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "2rem auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        </form>
    );
    }
