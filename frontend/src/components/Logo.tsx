"use client";

import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  size?: "small" | "medium" | "large";
  variant?: "inline" | "stacked";
}

export default function Logo({ size = "small", variant = "inline" }: LogoProps) {
  if (variant === "stacked") {
    return (
      <div className={`${styles.logoWrapper} ${styles[size]} ${styles.stacked}`}>
        <img
          src="/logo.png"
          alt="Veglux Media"
          className={styles.logoImg}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.logoWrapper} ${styles[size]} ${styles.inline}`}>
      <img
        src="/logo-icon.png"
        alt="VL Emblem"
        className={styles.logoIcon}
      />
      <img
        src="/logo-text.png"
        alt="VEGLUX MEDIA"
        className={styles.logoTextImg}
      />
    </div>
  );
}
