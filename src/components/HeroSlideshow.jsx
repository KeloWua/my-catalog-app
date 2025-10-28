// src/components/HeroSlideshow.jsx
import React, { useEffect, useState, useRef } from "react";
import styles from '../styles/HeroSlideshow.module.css';

export default function HeroSlideshow({ images = [], interval = 4000 }) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;
        if (!images || images.length <= 1) return;

        const id = setInterval(() => {
        if (!paused && mounted.current) {
            setIndex((i) => (i + 1) % images.length);
        }
        }, interval);

        return () => {
        mounted.current = false;
        clearInterval(id);
        };
    }, [images, interval, paused]);

    if (!images || images.length === 0) return null;

    return (
        <div
        className={styles['hero-slideshow']}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label="Slideshow de imágenes de gatos"
        >
        {images.map((src, i) => (
            <img
            key={i}
            src={src}
            alt={`Gato ${i + 1}`}
            className={`${styles.slide} ${i === index ? styles.visible : ""}`}
            loading="lazy"
            />
        ))}

        {/* controles opcionales mínimos */}
        <div className={styles['hero-controls']}>
            {images.map((_, i) => (
            <button
                key={i}
                className={`${styles.dot} ${i === index ? styles.active : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
            />
            ))}
        </div>
        </div>
    );
}
