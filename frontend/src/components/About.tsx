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

        {/* Team block */}
        <div className={styles.teamSection}>
          <h3 className={styles.teamTitle}>Leadership Team</h3>
          <div className={styles.teamGrid}>
            <div className={styles.founderCard}>
              <div className={styles.avatarWrapper}>
                {/* Visual Initials placeholder instead of broken image URLs */}
                <span className={styles.avatarFallback}>LJ</span>
              </div>
              <div className={styles.founderInfo}>
                <span className={styles.founderName}>Lucky Joshi</span>
                <span className={styles.founderTitle}>Founder & CEO</span>
                <p className={styles.founderBio}>
                  Lucky oversees strategic vision, media buying, and client relation protocols at Veglux Media. He has managed millions in media spend with a core focus on real estate and e-commerce growth structures.
                </p>
                <div className={styles.founderContact}>
                  <a
                    href="mailto:luckyjoshi@vegluxmedia.com"
                    className={styles.founderContactItem}
                    title="Send Email"
                  >
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>luckyjoshi@vegluxmedia.com</span>
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
