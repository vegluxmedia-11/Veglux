"use client";

import React, { useState } from "react";
import styles from "./Portfolio.module.css";

interface CaseStudy {
  tag: string;
  roi: string;
  title: string;
  desc: string;
  stats: { label: string; value: string }[];
  chartHeights: number[]; // percentages for bars
}

export default function Portfolio() {
  const [activeCompTab, setActiveCompTab] = useState<"before" | "after">("after");

  const caseStudies: CaseStudy[] = [
    {
      tag: "E-Commerce",
      roi: "8.5x ROAS",
      title: "Scaling Direct-to-Consumer Jewelry Brand",
      desc: "Architected a custom Meta and Google Catalog funnel to scale purchase volumes globally. Focused heavily on high-converting product hooks and post-click email flows.",
      stats: [
        { label: "Ad Spend", value: "₹2.8L" },
        { label: "Revenue", value: "₹23.8L" },
        { label: "Purchase CRO", value: "+44%" },
      ],
      chartHeights: [20, 35, 60, 95],
    },
    {
      tag: "Real Estate",
      roi: "7.2x ROI",
      title: "Premium Residential Villa Lead Generation",
      desc: "Developed direct-response lead generation funnels for a luxury builder in Rajasthan. Targeted high-net-worth individuals utilizing specific intent-based search filters.",
      stats: [
        { label: "Qualified Leads", value: "340+" },
        { label: "Cost Per Lead", value: "₹280" },
        { label: "Bookings", value: "11 Villas" },
      ],
      chartHeights: [15, 45, 75, 90],
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={`${styles.container} container`}>
        {/* Title Block */}
        <div className={styles.titleArea}>
          <p>Our Achievements</p>
          <h2>Case Studies & ROI</h2>
        </div>

        {/* Case Studies Grid */}
        <div className={styles.casesGrid}>
          {caseStudies.map((item, idx) => (
            <div key={idx} className={styles.caseCard}>
              <div className={styles.caseVisual}>
                <span className={styles.caseTag}>{item.tag}</span>
                <span className={styles.roiBadge}>{item.roi}</span>

                {/* Simulated ROI Chart */}
                <div className={styles.chartSimulator}>
                  {item.chartHeights.map((h, i) => (
                    <div
                      key={i}
                      className={`${styles.chartBar} ${i === item.chartHeights.length - 1 ? styles.chartBarActive : ""}`}
                      style={{ height: `${h}%` }}
                    >
                      {i === item.chartHeights.length - 1 && (
                        <span className={styles.chartBarLabel}>{item.roi}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.caseContent}>
                <h3 className={styles.caseTitle}>{item.title}</h3>
                <p className={styles.caseDetails}>{item.desc}</p>
                <div className={styles.caseStats}>
                  {item.stats.map((st, sIdx) => (
                    <div key={sIdx} className={styles.statItem}>
                      <span className={styles.statValue}>{st.value}</span>
                      <span className={styles.statLabel}>{st.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before vs After Interactive Panel */}
        <div className={styles.comparisonPanel}>
          <h3 className={styles.compTitle}>How Veglux Media Compares</h3>

          <div className={styles.compTabs}>
            <button
              className={`${styles.compTabBtn} ${activeCompTab === "before" ? styles.compTabActive : ""}`}
              onClick={() => setActiveCompTab("before")}
            >
              Standard Setup
            </button>
            <button
              className={`${styles.compTabBtn} ${activeCompTab === "after" ? styles.compTabActive : ""}`}
              onClick={() => setActiveCompTab("after")}
            >
              Veglux Engine
            </button>
          </div>

          <div className={styles.compBody}>
            {activeCompTab === "before" ? (
              <>
                <div className={styles.compInfo}>
                  <h4>Generic Marketing Setup</h4>
                  <p>
                    Most businesses work with agencies relying on standard templated structures, generic copywriting, and static landing layouts that dilute ad budgets.
                  </p>
                  <ul className={styles.compPoints}>
                    <li className={styles.compPoint}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--error)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>High ad waste with loose keyword groups</span>
                    </li>
                    <li className={styles.compPoint}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--error)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Templeted stock creatives and standard copy</span>
                    </li>
                    <li className={styles.compPoint}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--error)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Manual reports delivered at the end of the month</span>
                    </li>
                  </ul>
                </div>
                <div className={styles.compStats}>
                  <div className={styles.compStatRow}>
                    <span className={styles.compStatLabel}>Average CTR</span>
                    <span className={styles.compStatVal} style={{ color: "var(--error)" }}>1.2%</span>
                  </div>
                  <div className={styles.compStatRow}>
                    <span className={styles.compStatLabel}>Cost Per Lead</span>
                    <span className={styles.compStatVal} style={{ color: "var(--error)" }}>₹840</span>
                  </div>
                  <div className={styles.compStatRow}>
                    <span className={styles.compStatLabel}>Budget Waste</span>
                    <span className={styles.compStatVal} style={{ color: "var(--error)" }}>42%</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.compInfo}>
                  <h4>Veglux Optimized Campaigns</h4>
                  <p>
                    Our setups focus on tailored conversion structures. We code specialized landing pages, deploy precise attribution tracking, and write hooks designed to convert.
                  </p>
                  <ul className={styles.compPoints}>
                    <li className={styles.compPoint}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--success)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Hyper-segmented targets minimizing ad waste</span>
                    </li>
                    <li className={styles.compPoint}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--success)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom-coded fast conversion frameworks</span>
                    </li>
                    <li className={styles.compPoint}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--success)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Real-time dashboard reporting client margins</span>
                    </li>
                  </ul>
                </div>
                <div className={styles.compStats}>
                  <div className={styles.compStatRow}>
                    <span className={styles.compStatLabel}>Average CTR</span>
                    <span className={styles.compStatVal} style={{ color: "var(--success)" }}>4.8%</span>
                  </div>
                  <div className={styles.compStatRow}>
                    <span className={styles.compStatLabel}>Cost Per Lead</span>
                    <span className={styles.compStatVal} style={{ color: "var(--success)" }}>₹280</span>
                  </div>
                  <div className={styles.compStatRow}>
                    <span className={styles.compStatLabel}>Budget Waste</span>
                    <span className={styles.compStatVal} style={{ color: "var(--success)" }}>&lt; 5%</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
