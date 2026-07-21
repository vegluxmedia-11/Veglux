"use client";

import React from "react";
import styles from "./WhyChooseUs.module.css";

interface PillarItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const pillars: PillarItem[] = [
    {
      title: "Certified Experts",
      desc: "Our media buyers and designers are officially certified by Google, Meta, and Shopify, ensuring absolute domain compliance.",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "ROI Focused",
      desc: "We don't focus on vanity metrics. Likes and clicks don't pay bills. We target revenue growth, leads, and client EBITDA.",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Transparent Reporting",
      desc: "Instant access to a live tracking dashboard. Inspect ad spend, conversions, and CPA numbers at any hour of the day.",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Dedicated Manager",
      desc: "One point of contact. Your dedicated digital director acts as an extension of your team, providing proactive updates.",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Fast Support",
      desc: "We communicate over dedicated WhatsApp groups. Average response times are under 15 minutes during business hours.",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Direct Founder Oversight",
      desc: "Every account is personally reviewed and strategized by Founder & CEO Dikshant Joshi to guarantee maximum performance and scale.",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="whychooseus" className={styles.whyChooseUs}>
      <div className={`${styles.container} container`}>
        {/* Title Area */}
        <div className={styles.titleArea}>
          <p>Our Core Pillars</p>
          <h2>Why Choose Us</h2>
        </div>

        {/* Pillars Grid */}
        <div className={styles.grid}>
          {pillars.map((pillar, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>{pillar.icon}</div>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Founder's Direct Commitment Banner */}
        <div className={styles.founderBanner}>
          <div className={styles.founderInfo}>
            <span className={styles.founderBadge}>FOUNDER'S DIRECT COMMITMENT</span>
            <p className={styles.founderQuote}>
              "We treat every client's ad spend as if it were our own capital. High ROAS, absolute transparency, and revenue scaling are non-negotiable."
            </p>
            <div className={styles.founderMeta}>
              <span className={styles.founderName}>Dikshant Joshi</span>
              <span className={styles.founderTitle}>Founder & CEO, Veglux Media</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
