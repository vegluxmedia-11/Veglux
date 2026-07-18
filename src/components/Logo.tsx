"use client";

import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

export default function Logo({ size = "medium" }: LogoProps) {
  return (
    <div className={`${styles.logoWrapper} ${styles[size]}`}>
      <img
        src="/logo.png"
        alt="Veglux Media"
        className={styles.logoImg}
      />
    </div>
  );
}
