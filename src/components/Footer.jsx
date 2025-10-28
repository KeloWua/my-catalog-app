import React from 'react';
import '../styles/Footer.css';  // Crearemos este archivo después

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
            <h4>Mi Catálogo</h4>
            <p>Tu destino para encontrar los mejores productos.</p>
            </div>
            
            <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
                <li><a href="/about">Sobre Nosotros</a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/terms">Términos</a></li>
                <li><a href="/privacy">Privacidad</a></li>
            </ul>
            </div>

            <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
                </a>
            </div>
            </div>
        </div>
        
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Mi Catálogo. Todos los derechos reservados.</p>
        </div>
        </footer>
    );
}

export default Footer;