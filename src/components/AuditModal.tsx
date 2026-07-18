"use client";

import React, { useState } from "react";
import styles from "./AuditModal.module.css";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [website, setWebsite] = useState("");
  const [spend, setSpend] = useState("");
  const [competitor, setCompetitor] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!website || !email || !phone) return;

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setWebsite("");
        setSpend("");
        setCompetitor("");
        setPhone("");
        setEmail("");
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Request Free Digital Audit</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {success ? (
          <div className={styles.statusText} style={{ color: "var(--success)", padding: "20px 0" }}>
            <svg
              width="48"
              height="48"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ margin: "0 auto 12px", display: "block" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong>Audit Requested Successfully!</strong>
            <p style={{ fontSize: "13px", marginTop: "6px", color: "var(--text-secondary)" }}>
              Lucky Joshi will review your competitors and contact you with the results within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Website URL *</label>
              <input
                type="url"
                className={styles.formInput}
                placeholder="e.g. https://mycompany.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Contact Email Address *</label>
              <input
                type="email"
                className={styles.formInput}
                placeholder="e.g. lucky@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>WhatsApp / Phone Number *</label>
              <input
                type="tel"
                className={styles.formInput}
                placeholder="e.g. +91 99999 99999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Estimated Monthly Ad Spend</label>
              <input
                type="text"
                className={styles.formInput}
                placeholder="e.g. ₹50,000 / month"
                value={spend}
                onChange={(e) => setSpend(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Main Competitor Name/URL</label>
              <input
                type="text"
                className={styles.formInput}
                placeholder="e.g. Competitor Brand Inc."
                value={competitor}
                onChange={(e) => setCompetitor(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? "Generating Request..." : "Request Free Audit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
