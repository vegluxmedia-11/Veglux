"use client";

import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.container} container`}>
        {/* Title Block */}
        <div className={styles.titleArea}>
          <p>Who We Are</p>
          <h2>Crafting Premium Growth Journeys</h2>
        </div>

        {/* Content Grid */}
        <div className={styles.aboutGrid}>
          <div className={styles.introCol}>
            <h3>Redefining Performance & Branding Standards</h3>
            <p>
              Based in the historic city of Udaipur, Rajasthan, Veglux Media is a elite boutique digital agency. We serve ambitious clients worldwide, delivering full-funnel digital marketing solutions that convert.
            </p>
            <p>
              We believe marketing shouldn't be a gamble. Every campaign we launch is backed by sound conversion heuristics, rigorous copywriting, and direct attribution tracking to maximize client EBITDA.
            </p>
          </div>

          <div className={styles.highlights}>
            <div className={styles.highlightCard}>
              <h4>Our Mission</h4>
              <p>To bridge the gap between premium companies and their ideal clients using highly trackable, scalable performance channels.</p>
            </div>
            <div className={styles.highlightCard}>
              <h4>Our Vision</h4>
              <p>To establish Veglux Media as the standard of ROI-focused performance and luxury software design in Western India.</p>
            </div>
            <div className={styles.highlightCard}>
              <h4>Why Choose Us</h4>
              <p>No generic plans. We customize funnel architecture, write unique hooks, and offer absolute clarity via transparent real-time analytics.</p>
            </div>
            <div className={styles.highlightCard}>
              <h4>Our Commitment</h4>
              <p>We work as an extension of your board. If a channel doesn't produce an ROI, we refine it immediately to protect client margins.</p>
            </div>
          </div>
        </div>

        {/* Executive Leadership Section (Option 1) */}
        <div className={styles.teamSection}>
          <p className={styles.teamSubhead}>Executive Leadership</p>
          <h3 className={styles.teamTitle}>Driven by Vision & ROI Excellence</h3>
          <div className={styles.teamGrid}>
            <div className={styles.founderCard}>
              <div className={styles.avatarWrapper}>
                <span className={styles.avatarFallback}>DJ</span>
              </div>
              <div className={styles.founderInfo}>
                <span className={styles.founderBadge}>FOUNDER & CEO</span>
                <h4 className={styles.founderName}>Dikshant Joshi</h4>
                <span className={styles.founderTitle}>Managing Director, Veglux Media</span>
                <p className={styles.founderBio}>
                  Dikshant oversees strategic vision, performance media buying, and client growth protocols at Veglux Media. He has engineered multi-crore media strategies with a relentless focus on high-converting sales structures.
                </p>
                <blockquote className={styles.founderQuoteBlock}>
                  "Our guarantee is absolute performance, zero fluff, and scalable revenue growth."
                </blockquote>
                <div className={styles.founderContact}>
                  <a
                    href="mailto:luckyjoshi@vegluxmedia.com"
                    className={styles.founderContactItem}
                    title="Send Email"
                  >
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email Direct</span>
                  </a>
                  <a
                    href="https://wa.me/919772624506"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.founderContactItem}
                    title="Chat on WhatsApp"
                  >
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
