"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Services.module.css";

interface ServiceItem {
  id: string;
  slug: string;
  category: "performance" | "social" | "tech" | "branding";
  title: string;
  desc: string;
  subservices: string[];
  icon: React.ReactNode;
}

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const servicesData: ServiceItem[] = [
    {
      id: "performance",
      slug: "performance-marketing",
      category: "performance",
      title: "Performance Marketing",
      desc: "Engineered campaigns to drive leads, acquire customers, and generate massive ROAS using advanced paid media strategies.",
      subservices: [
        "Meta Ads (Facebook & Instagram)",
        "Google Ads & Search Campaigns",
        "YouTube Ads & Video Targeting",
        "High-Intent Lead Generation",
        "Conversion Rate Optimization (CRO)",
      ],
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "social",
      slug: "social-media-management",
      category: "social",
      title: "Social Media Management",
      desc: "Organic scale and community building to turn social media scrolls into brand loyalty and organic customer acquisition.",
      subservices: [
        "Content Creation & Scriptwriting",
        "Post Designing & Aesthetics",
        "Reels & Short-form Video Production",
        "Monthly Structured Content Calendars",
        "Community & Audience Engagement",
      ],
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      id: "seo",
      slug: "search-engine-optimization",
      category: "tech",
      title: "Search Engine Optimization",
      desc: "Technical audits, authority building, and content optimizations to secure top rankings on Google and capture inbound traffic.",
      subservices: [
        "Keyword Research & Competitor Audit",
        "On-Page Content Architecture",
        "Technical SEO & Core Web Vitals",
        "Quality Link Acquisition",
        "Local SEO & Google Business Profile",
      ],
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: "webdev",
      slug: "website-development",
      category: "tech",
      title: "Website Development",
      desc: "Creating visually stunning, lightning-fast web applications and e-commerce platforms optimized for conversion.",
      subservices: [
        "Next.js & React Applications",
        "Headless CMS Integrations",
        "E-Commerce & Shopify Engineering",
        "Custom APIs & Integrations",
        "Responsive, Blazing Fast Page Speeds",
      ],
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: "branding",
      slug: "branding-and-identity",
      category: "branding",
      title: "Branding & Identity",
      desc: "Defining your brand's voice, visuals, and premium positioning to stand out in crowded competitive spaces.",
      subservices: [
        "Logo Design & Monograms",
        "Visual Identity Guidelines",
        "Typography & Color Palettes",
        "Creative Ad Layout Layouts",
        "Brand Guidelines & Handbooks",
      ],
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "email",
      slug: "email-marketing",
      category: "performance",
      title: "Email Marketing",
      desc: "Nurturing subscribers, building brand trust, and driving automated sales backflows through smart drip funnels.",
      subservices: [
        "Newsletter Design & Copywriting",
        "Abandoned Cart Recovery Flows",
        "Welcome & Purchase Automation Sequences",
        "Audience Cohort Segmentation",
        "Deliverability Audits & Tracking",
      ],
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5" />
        </svg>
      ),
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === activeFilter);

  return (
    <section id="services" className={styles.services}>
      <div className={`${styles.container} container`}>
        {/* Title Block */}
        <div className={styles.titleArea}>
          <p>Our Offerings</p>
          <h2>Precision Services</h2>
        </div>

        {/* Filter Navigation */}
        <div className={styles.filterBar}>
          <button
            className={`${styles.filterBtn} ${activeFilter === "all" ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Services
          </button>
          <button
            className={`${styles.filterBtn} ${activeFilter === "performance" ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveFilter("performance")}
          >
            Performance Marketing
          </button>
          <button
            className={`${styles.filterBtn} ${activeFilter === "social" ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveFilter("social")}
          >
            Social SMM
          </button>
          <button
            className={`${styles.filterBtn} ${activeFilter === "tech" ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveFilter("tech")}
          >
            SEO & Tech
          </button>
          <button
            className={`${styles.filterBtn} ${activeFilter === "branding" ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveFilter("branding")}
          >
            Branding
          </button>
        </div>

        {/* Grid List */}
        <div className={styles.servicesGrid}>
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className={styles.serviceCard}
            >
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <ul className={styles.subserviceList}>
                {service.subservices.map((sub, idx) => (
                  <li key={idx} className={styles.subserviceItem}>
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.detailBtn}>
                <span>Explore Full Details</span>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
