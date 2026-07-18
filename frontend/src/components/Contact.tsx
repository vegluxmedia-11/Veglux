"use client";

import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import api from "../lib/api";

interface ContactProps {
  prefilledMessage?: string;
  onClearPrefill?: () => void;
}

export default function Contact({ prefilledMessage, onClearPrefill }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("performance");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill message field if passed down
  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
      // Automatically scroll to the contact form container
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
      if (onClearPrefill) onClearPrefill();
    }
  }, [prefilledMessage, onClearPrefill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Please fill in all required fields." });
      return;
    }

    setIsSubmitting(true);

    try {
      // Real API Submission to Node.js
      const { data } = await api.post('/leads', {
        name,
        email,
        phone,
        company,
        service,
        message
      });

      if (data.success) {
        setStatus({
          type: "success",
          text: "Thank you! Lucky Joshi or a dedicated manager will contact you within 2 hours.",
        });
        // Clear form
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setService("performance");
        setMessage("");
      } else {
        setStatus({ type: "error", text: data.error || "Failed to submit inquiry." });
      }
    } catch (err: any) {
      setStatus({ 
        type: "error", 
        text: err.response?.data?.error || "Error connecting to server. Please try again later." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={`${styles.container} container`}>
        {/* Title Area */}
        <div className={styles.titleArea}>
          <p>Get in Touch</p>
          <h2>Contact Section</h2>
        </div>

        {/* Contact Grid */}
        <div className={styles.grid}>
          {/* Left: Info columns, WhatsApp and Map */}
          <div className={styles.infoColumn}>
            <h3 className={styles.infoTitle}>Connect With Us</h3>
            <p className={styles.infoDesc}>
              Ready to scale your EBITDA and eliminate ad waste? Write to us, schedule a direct WhatsApp chat, or visit our Udaipur head office.
            </p>

            <div className={styles.detailsList}>
              <div className={styles.detailRow}>
                <div className={styles.iconBox}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className={styles.detailText}>
                  <h5>Office Address</h5>
                  <p>Udaipur, Rajasthan, India</p>
                </div>
              </div>

              <div className={styles.detailRow}>
                <div className={styles.iconBox}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className={styles.detailText}>
                  <h5>Email Inquiries</h5>
                  <p>luckyjoshi@vegluxmedia.com</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Chat */}
            <div className={styles.whatsappCard}>
              <div className={styles.whatsappInfo}>
                <span className={styles.whatsappTitle}>Direct WhatsApp</span>
                <span className={styles.whatsappDesc}>Chat directly with our specialists.</span>
              </div>
              <a
                href="https://wa.me/919999999999?text=Hi%20Veglux%20Media!%20I'd%20like%20to%20discuss%20our%20digital%20marketing%20strategy."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.whatsappBtn}>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.371a9.936 9.936 0 004.779 1.21h.005c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062C17.198 3.037 14.693 2 12.012 2zm5.795 13.978c-.247.697-1.22 1.272-1.685 1.322-.464.05-1.077.068-1.724-.138-.415-.132-1.01-.355-1.726-.665-3.037-1.317-5.006-4.417-5.158-4.62-.152-.202-1.242-1.652-1.222-3.15.02-1.498.809-2.228 1.092-2.52.284-.293.628-.36.837-.36.208 0 .416.002.597.01.192.008.45.025.688.6.248.6 1.049 2.56 1.13 2.727.082.167.124.385.01.597-.113.212-.17.34-.34.542-.17.202-.358.45-.512.605-.17.17-.348.354-.148.697.2.342.888 1.464 1.902 2.368 1.309 1.166 2.41 1.528 2.748 1.697.338.17.538.148.738-.082.2-.23.864-1.007 1.097-1.353.232-.347.464-.288.784-.17.32.118 2.032.958 2.38 1.129.349.17.581.25.666.398.085.148.085.864-.162 1.562z" />
                  </svg>
                  <span>Chat Now</span>
                </button>
              </a>
            </div>

            {/* Styled Luxury Map Mock */}
            <div className={styles.mapMock}>
              <div className={styles.mapGridOverlay}></div>
              <div className={styles.mapMarker}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <strong>VEGLUX MEDIA OFFICE</strong>
              <span>Udaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Right: Submission Form */}
          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Your Name *</label>
                    <input
                      type="text"
                      className={styles.formInput}
                      placeholder="e.g. Lucky Joshi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email Address *</label>
                    <input
                      type="email"
                      className={styles.formInput}
                      placeholder="e.g. lucky@veglux.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone Number</label>
                    <input
                      type="tel"
                      className={styles.formInput}
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Company Name</label>
                    <input
                      type="text"
                      className={styles.formInput}
                      placeholder="e.g. Veglux Media"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>

                  <div className={styles.formGroupFull}>
                    <label className={styles.formLabel}>Service Required</label>
                    <select
                      className={`${styles.formInput} ${styles.formSelect}`}
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="performance">Performance Marketing (Meta/Google Ads)</option>
                      <option value="social">Social Media SMM & Reels</option>
                      <option value="seo">Search Engine Optimization (SEO)</option>
                      <option value="webdev">Next.js Web Development</option>
                      <option value="branding">Branding & Logo Monograms</option>
                    </select>
                  </div>

                  <div className={styles.formGroupFull}>
                    <label className={styles.formLabel}>Brief Description *</label>
                    <textarea
                      className={`${styles.formInput} ${styles.formTextarea}`}
                      placeholder="Detail your digital goals, target audience, and ad budgets..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
                </button>

                {status && (
                  <div
                    className={styles.statusMessage}
                    style={{ color: status.type === "success" ? "var(--success)" : "var(--error)" }}
                  >
                    {status.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
