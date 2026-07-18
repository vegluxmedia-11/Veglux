"use client";

import React from "react";
import styles from "./Industries.module.css";

interface IndustryItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Industries() {
  const industriesList: IndustryItem[] = [
    {
      title: "Real Estate",
      desc: "Acquiring qualified property buyers with high-intent Meta search and local lead capture flows.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Healthcare",
      desc: "Scaling patient appointments for clinics and hospitals via local SEO maps and Google search triggers.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Education",
      desc: "Driving high student admissions using digital admission consulting funnels and institutional branding.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      title: "E-Commerce",
      desc: "Maximizing Shopify ROAS with custom catalogs, product hooks, and email retrieval automations.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      title: "Restaurants",
      desc: "Increasing restaurant covers and footfalls with regional video hooks and geotargeted map triggers.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Fashion & Retail",
      desc: "Establishing luxury visual aesthetics, high-end styling guides, and strategic digital lookbooks.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7h7m-7-7a5 5 0 11-10 0 5 5 0 0110 0z" />
        </svg>
      ),
    },
    {
      title: "Local Businesses",
      desc: "Capturing local markets in Udaipur and Rajasthan with focused Google business profile ranking.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Services & B2B",
      desc: "Generating consistent consulting and service appointments via LinkedIn outreach and Meta lead forms.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A2.396 2.396 0 0118.604 15.65H16.03V22h-3.41v-6.35h-2.52v-2.91h2.52v-2.07c0-2.5 1.52-3.87 3.75-3.87 1.07 0 2 .08 2.27.12v2.62h-1.55c-1.21 0-1.45.58-1.45 1.42v1.88h2.91l-.38 2.91z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="industries" className={styles.industries}>
      <div className={`${styles.container} container`}>
        {/* Title Area */}
        <div className={styles.titleArea}>
          <p>Sectors We Scale</p>
          <h2>Industries We Serve</h2>
        </div>

        {/* Grid Area */}
        <div className={styles.grid}>
          {industriesList.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
