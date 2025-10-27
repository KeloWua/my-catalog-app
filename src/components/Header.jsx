import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Header</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    
    );
}
