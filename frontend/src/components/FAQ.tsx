"use client";

import React, { useState, useEffect } from "react";
import styles from "./FAQ.module.css";
import { getFaqs, FAQItem } from "@/lib/services";

const defaultFaqs: FAQItem[] = [
  {
    q: "What ad budgets do you recommend starting with?",
    a: "For performance marketing campaigns (Meta/Google Ads), we recommend a minimum testing budget of ₹25,000 to ₹35,000 per month. This ensures we collect sufficient data to test copy hooks and audience segments without choking the bidding algorithms.",
  },
  {
    q: "How fast will we see qualified leads or sales?",
    a: "Direct-response campaigns can start generating lead inquiries and pixel events within 24 to 48 hours of launch. However, stabilization of Cost-Per-Lead (CPL) and optimization of campaign margins typically takes between 14 to 30 days.",
  },
  {
    q: "Do you design custom software, or work with standard WordPress?",
    a: "We are custom development specialists. We construct fast, premium Next.js and React web applications, custom databases, and high-end Shopify layouts. We avoid bloated templates to ensure your page loads in under 2.5 seconds, maximizing conversion rates.",
  },
  {
    q: "How does your client reporting structure operate?",
    a: "We give you a dedicated dashboard updating spend and leads hourly. In addition, we coordinate bi-weekly strategy syncs and maintain real-time communications over custom client WhatsApp groups.",
  },
  {
    q: "Where is your office located? Can we schedule an in-person meeting?",
    a: "Our head office is located in Udaipur, Rajasthan. We welcome local clients for strategy consultations. If you are located elsewhere, we can facilitate Zoom or Google Meet calls daily.",
  },
];

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>(defaultFaqs);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useEffect(() => {
    async function loadFaqs() {
      try {
        const data = await getFaqs();
        if (data && data.length > 0) {
          setFaqs(data);
        }
      } catch (err) {
        console.warn("Using default FAQ fallback", err);
      }
    }
    loadFaqs();
  }, []);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={`${styles.container} container`}>
        {/* Title Area */}
        <div className={styles.titleArea}>
          <p>Common Enquiries</p>
          <h2>Frequently Asked Questions</h2>
        </div>

        {/* Accordion List */}
        <div className={styles.accordion}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq._id || idx} className={styles.faqItem}>
                <button className={styles.faqHeader} onClick={() => handleToggle(idx)}>
                  <span className={styles.question}>{faq.q}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconActive : ""}`}>
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M12 4v16m-8-8h16"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`${styles.faqBody} ${isOpen ? styles.faqBodyActive : ""}`}>
                  <div className={styles.answer}>{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
