// src/components/Header.jsx
import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function Header({ searchTerm, setSearchTerm }) {
    const location = useLocation();
    const { user, logout } = useContext(UserContext);
    const showSearch = location.pathname.startsWith("/catalog");

    return (
        <header
        style={{
            backgroundColor: "#fff",
            padding: "1rem",
            marginBottom: "2rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}
        >
        {/* Links de navegación */}
        <nav>
            <NavLink to="/" className={({ isActive }) =>
    isActive ? "navlink active" : "navlink"
} style={{ marginRight: "1rem" }}>
            Home
            </NavLink>
            <NavLink to="/catalog" className={({ isActive }) =>
    isActive ? "navlink active" : "navlink"
} style={{ marginRight: "1rem" }}>
            Catálogo
            </NavLink>
            <NavLink to="/about" className={({ isActive }) =>
    isActive ? "navlink active" : "navlink"
}>About</NavLink>
{user ? (
          <>
            <Link to="/admin">Admin</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        </nav>

        {/* Buscador solo visible en /catalog */}
        {showSearch && (
            <input
            type="text"
            placeholder="Buscar gato..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "200px",
            }}
            />
        )}
        </header>
    );
    }
