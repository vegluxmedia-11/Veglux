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
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A2.396 2.396 0 0118.604 15.65H16.03V22h-3.41v-6.35h-2.52v-2.91h2.52v-2.07c0-2.5 1.52-3.87 3.75-3.87 1.07 0 2 .08 2.27.12v2.62h-1.55c-1.21 0-1.45.58-1.45 1.42v1.88h2.91l-.38 2.91z" />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a9 9 0 019-9h0a9 9 0 019 9v6a9 9 0 01-9 9h0a9 9 0 01-9-9V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
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
