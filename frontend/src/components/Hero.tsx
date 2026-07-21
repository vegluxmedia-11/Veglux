"use client";

import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  onOpenAudit: () => void;
}

const BACKGROUND_IMAGES = [
  "/hero-bg-1.png", // Executive Night Penthouse Office
  "/hero-bg-2.png", // Night Strategy Boardroom
  "/hero-bg-3.png", // Executive Analytics Workstation
  "/hero-bg-4.png", // Night Metropolis Penthouse Lounge
];

export default function Hero({ onOpenAudit }: HeroProps) {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Auto Switching Background Images */}
      <div className={styles.bgSlider}>
        {BACKGROUND_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`${styles.bgSlide} ${
              index === currentBgIndex ? styles.bgSlideActive : ""
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className={styles.bgOverlay}></div>
      </div>

      {/* Background elements */}
      <div className="bg-grid"></div>
      <div className={styles.glowBlob}></div>

      {/* Floating Sparkles in SVG */}
      <div className={styles.particlesContainer}>
        <svg width="100%" height="100%">
          <circle cx="10%" cy="20%" r="2" fill="#d4af37" opacity="0.3" />
          <circle cx="85%" cy="30%" r="3" fill="#d4af37" opacity="0.25" />
          <circle cx="75%" cy="75%" r="1.5" fill="#d4af37" opacity="0.4" />
          <circle cx="20%" cy="80%" r="2.5" fill="#d4af37" opacity="0.2" />
        </svg>
      </div>

      <div className={`${styles.container} container`}>
        <p className={`${styles.tagline} animate-fade`}>
          Udaipur's Luxury Growth Agency • Founded by Dikshant Joshi
        </p>

        <h1 className={`${styles.headline} animate-fade`}>
          Elevate Your Digital Presence. <br />
          <span className="gold-text">Scale Your Business.</span>
        </h1>

        <p className={`${styles.description} animate-fade`} style={{ animationDelay: "0.2s" }}>
          Veglux Media is an ROI-driven digital marketing agency. We design and execute high-converting performance campaigns, custom software products, and content calendars that turn prospects into loyal advocates.
        </p>

        <div className={`${styles.ctas} animate-fade`} style={{ animationDelay: "0.4s" }}>
          <button className={styles.primaryCta} onClick={onOpenAudit}>
            Book a Free Consultation
          </button>
          <button className={styles.secondaryCta} onClick={onOpenAudit}>
            Get a Free Audit
          </button>
        </div>

        <div className={`${styles.statsGrid} animate-fade`} style={{ animationDelay: "0.6s" }}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>8.5x</div>
            <div className={styles.statLabel}>Average ROI</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>₹4Cr+</div>
            <div className={styles.statLabel}>Ad Spend Managed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>94%</div>
            <div className={styles.statLabel}>Client Retention</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>15+</div>
            <div className={styles.statLabel}>Experts On-Board</div>
          </div>
        </div>
      </div>
    </section>
  );
}
