"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
  onLogout?: () => void;
  onOpenAudit: () => void;
}

export default function Navbar({ theme, toggleTheme, onLogout, onOpenAudit }: NavbarProps) {
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
              href="/pricing"
              className={`${styles.navLink} ${isActive("/pricing") ? styles.navLinkActive : ""}`}
            >
              Pricing
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
            {/* Theme Toggle */}
            <button className={styles.iconBtn} onClick={toggleTheme} title="Switch Theme">
              {theme === "dark" ? (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.148.148z" />
                </svg>
              ) : (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

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
        <Link
          href="/"
          className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${styles.navLink} ${isActive("/about") ? styles.navLinkActive : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/services"
          className={`${styles.navLink} ${isActive("/services") ? styles.navLinkActive : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          href="/portfolio"
          className={`${styles.navLink} ${isActive("/portfolio") ? styles.navLinkActive : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          href="/pricing"
          className={`${styles.navLink} ${isActive("/pricing") ? styles.navLinkActive : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className={`${styles.navLink} ${isActive("/contact") ? styles.navLinkActive : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
        <button
          className={styles.ctaBtn}
          style={{ marginTop: "20px" }}
          onClick={() => {
            setIsMobileMenuOpen(false);
            onOpenAudit();
          }}
        >
          FREE AUDIT
        </button>
      </div>
    </>
  );
}
