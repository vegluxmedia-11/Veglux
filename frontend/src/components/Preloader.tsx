"use client";

import React, { useEffect, useState } from "react";
import styles from "./Preloader.module.css";
import Logo from "./Logo";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Show preloader for 2.5s, then trigger fade out
    const fadeTimeout = setTimeout(() => {
      setLoading(false);
    }, 2400);

    // Completely remove preloader from DOM after transition finishes (3.2s)
    const removeTimeout = setTimeout(() => {
      setShouldRender(false);
      if (onComplete) onComplete();
    }, 3200);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div className={`${styles.preloaderContainer} ${!loading ? styles.fadeOut : ""}`}>
      <div className={styles.logoWrapper}>
        <Logo size="large" variant="stacked" />
      </div>

      <div className={styles.progressBar}>
        <div className={styles.progressFill}></div>
      </div>
    </div>
  );
}
