// src/context/UserContext.jsx
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // leer de localStorage al iniciar
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    });

    const login = (username, password) => {
        // ⚡ login falso: si el usuario es "admin" y contraseña "123"
        if (username === "admin" && password === "123") {
        const userData = { username, role: "admin" };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
        {children}
        </UserContext.Provider>
    );
};
