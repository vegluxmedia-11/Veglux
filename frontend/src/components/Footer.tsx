"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        {/* Brand Information */}
        <div className={styles.brandCol}>
          <div className={styles.logoArea}>
            <Logo size="small" />
          </div>
          <p className={styles.brandDesc}>
            Udaipur's luxury digital marketing agency. Driving client growth, scaling performance marketing, and executing transparent campaigns since inception.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/vegluxmedia?igsh=MWU0bGN1OGs0bmtzNA=="
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/vegluxmedia?igsh=MWU0bGN1OGs0bmtzNA=="
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Facebook"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.linksList}>
            <li className={styles.linkItem}>
              <Link href="/about">About Us</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services">Services</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services Summary Links */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.linksList}>
            <li className={styles.linkItem}>
              <Link href="/services/performance-marketing">Performance Marketing</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services/social-media-management">Social Media Management</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services/search-engine-optimization">SEO Optimisation</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services/website-development">Web Development</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services/branding-and-identity">Branding & Design</Link>
            </li>
          </ul>
        </div>

        {/* Contact Details Matching Lucky's Business Card */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Office Info</h4>
          <div className={styles.contactItem}>
            <svg className={styles.contactIcon} width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className={styles.contactText}>
              Udaipur, Rajasthan, India
            </span>
          </div>
          <div className={styles.contactItem}>
            <svg className={styles.contactIcon} width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className={styles.contactText}>
              luckyjoshi@vegluxmedia.com
            </span>
          </div>
          <div className={styles.contactItem}>
            <svg className={styles.contactIcon} width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.996.808H12a1 1 0 01.996.808l.548 2.2a1 1 0 01-.94.725H11a2 2 0 01-2-2h-.09A1.65 1.65 0 009 9.09V9a2 2 0 012-2h.09A1.65 1.65 0 0013 5.4v-.09A2 2 0 0115 3h.09A1.65 1.65 0 0017 4.6V5a2 2 0 01-2 2h-.09A1.65 1.65 0 0013 8.6V9a2 2 0 012 2h.09A1.65 1.65 0 0017 9.4V11a2 2 0 01-2 2h-.09A1.65 1.65 0 0013 14.6V15a2 2 0 012 2h.09A1.65 1.65 0 0017 15.4V17a2 2 0 01-2 2" />
            </svg>
            <a href="https://wa.me/919772624506" target="_blank" rel="noopener noreferrer" className={styles.contactText}>
              +91 97726 24506
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.bottomBar} container`}>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} Veglux Media. All Rights Reserved. Designed by Antigravity.
        </span>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
