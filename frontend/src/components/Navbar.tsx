"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

interface NavbarProps {
  onLogout?: () => void;
  onOpenAudit: () => void;
}

export default function Navbar({ onLogout, onOpenAudit }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={`${styles.container} container`}>
          {/* Logo Area (Link to Home) */}
          <Link href="/" className={styles.logoArea} onClick={() => setIsMobileMenuOpen(false)}>
            <Logo size="small" />
          </Link>

          {/* Desktop Nav Links */}
          <div className={styles.navLinks}>
            <Link
              href="/"
              className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${styles.navLink} ${isActive("/about") ? styles.navLinkActive : ""}`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`${styles.navLink} ${isActive("/services") ? styles.navLinkActive : ""}`}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`${styles.navLink} ${isActive("/portfolio") ? styles.navLinkActive : ""}`}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={`${styles.navLink} ${isActive("/contact") ? styles.navLinkActive : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* Action Area */}
          <div className={styles.actionArea}>

            {/* Logout Button */}
            {onLogout && (
              <button className={styles.iconBtn} onClick={onLogout} title="Log Out">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            )}

            {/* Free Audit Button */}
            <button className={styles.ctaBtn} onClick={onOpenAudit}>
              FREE AUDIT
            </button>

            {/* Hamburger Button for Mobile */}
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`${styles.mobileMenuOverlay} ${
          isMobileMenuOpen ? styles.mobileMenuOverlayVisible : ""
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <Logo size="small" />
          <button
            className={styles.mobileCloseBtn}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={styles.mobileNavLinks}>
          <Link
            href="/"
            className={`${styles.mobileNavLink} ${isActive("/") ? styles.mobileNavLinkActive : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${styles.mobileNavLink} ${isActive("/about") ? styles.mobileNavLinkActive : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`${styles.mobileNavLink} ${isActive("/services") ? styles.mobileNavLinkActive : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={`${styles.mobileNavLink} ${isActive("/portfolio") ? styles.mobileNavLinkActive : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={`${styles.mobileNavLink} ${isActive("/contact") ? styles.mobileNavLinkActive : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <button
          className={`${styles.ctaBtn} ${styles.mobileCtaBtn}`}
          onClick={() => {
            setIsMobileMenuOpen(false);
            onOpenAudit();
          }}
        >
          Book Free Audit
        </button>
      </div>
    </>
  );
}
