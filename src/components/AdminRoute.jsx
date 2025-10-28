// src/components/AdminRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function AdminRoute({ children }) {
    const { user } = useContext(UserContext);

    if (!user || user.role !== "admin") {
        return <Navigate to="/login" />;
    }

    return children;
}
