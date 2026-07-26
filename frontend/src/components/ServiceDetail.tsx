"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./ServiceDetail.module.css";
import { ServiceData, servicesList } from "@/data/servicesData";
import { getServiceBySlug, getServices } from "@/lib/services";

interface ServiceDetailProps {
  service: ServiceData;
}

export default function ServiceDetail({ service: initialService }: ServiceDetailProps) {
  const [service, setService] = useState<ServiceData>(initialService);
  const [allServices, setAllServices] = useState<any[]>(servicesList);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    async function loadDynamicData() {
      try {
        if (initialService?.slug) {
          const apiService = await getServiceBySlug(initialService.slug);
          if (apiService) {
            setService((prev) => ({ ...prev, ...apiService }));
          }
        }
        const apiServicesList = await getServices();
        if (apiServicesList && apiServicesList.length > 0) {
          setAllServices(apiServicesList);
        }
      } catch (err) {
        console.warn("Using default fallback service data", err);
      }
    }
    loadDynamicData();
  }, [initialService]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleOpenAudit = () => {
    window.dispatchEvent(new CustomEvent("open-veglux-audit"));
  };

  return (
    <div className={styles.wrapper}>
      {/* 1. Hero Banner */}
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <Link href="/services" className={styles.backLink}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to All Services</span>
            </Link>

            <div>
              <span className={styles.badge}>{service.categoryLabel || service.category}</span>
            </div>

            <h1 className={`${styles.heroTitle} gold-text`}>{service.title}</h1>
            <p className={styles.heroTagline}>{service.tagline}</p>
            <p className={styles.heroSummary}>{service.summary || service.desc}</p>

            {/* Metrics */}
            {service.heroMetrics && service.heroMetrics.length > 0 && (
              <div className={styles.heroMetricsGrid}>
                {service.heroMetrics.map((metric, idx) => (
                  <div key={idx} className={styles.metricCard}>
                    <div className={styles.metricValue}>{metric.value}</div>
                    <div className={styles.metricLabel}>{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Hero CTAs */}
            <div className={styles.heroCtaGroup}>
              <button className={styles.primaryCta} onClick={handleOpenAudit}>
                GET FREE AUDIT & STRATEGY
              </button>
              <Link href="/contact" className={styles.secondaryCta}>
                TALK TO OUR EXPERTS
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Service Sticky Switcher Bar */}
      <nav className={styles.switcherBar}>
        <div className="container">
          <div className={styles.switcherList}>
            {allServices.map((item, idx) => (
              <Link
                key={item.id || item.slug || idx}
                href={`/services/${item.slug}`}
                className={`${styles.switcherItem} ${
                  item.slug === service.slug ? styles.switcherItemActive : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 3. Deep Dive Overview */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div>
              <p className={styles.sectionTag}>Service Overview</p>
              <h2 className={styles.sectionTitle} style={{ marginBottom: "20px" }}>
                Transforming Your Digital Presence
              </h2>
              <p className={styles.overviewText}>{service.overview || service.summary || service.desc}</p>
            </div>

            {service.whyItMatters && service.whyItMatters.length > 0 && (
              <div className={styles.whyBox}>
                <h3 className={styles.whyBoxTitle}>Key Advantages</h3>
                <ul className={styles.whyList}>
                  {service.whyItMatters.map((point, idx) => (
                    <li key={idx} className={styles.whyItem}>
                      <svg
                        className={styles.checkIcon}
                        width="18"
                        height="18"
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
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Core Pillars & Deliverables */}
      {service.pillars && service.pillars.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>Core Framework</p>
              <h2 className={styles.sectionTitle}>What We Deliver</h2>
            </div>

            <div className={styles.pillarsGrid}>
              {service.pillars.map((pillar, idx) => (
                <div key={idx} className={styles.pillarCard}>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                  {pillar.deliverables && pillar.deliverables.length > 0 && (
                    <>
                      <div className={styles.deliverablesTitle}>Deliverables Included</div>
                      <ul className={styles.deliverableList}>
                        {pillar.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className={styles.deliverableItem}>
                            <span className={styles.bulletDot}></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Step-by-Step Execution Process */}
      {service.process && service.process.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>Execution Roadmap</p>
              <h2 className={styles.sectionTitle}>How We Execute</h2>
            </div>

            <div className={styles.processGrid}>
              {service.process.map((step, idx) => (
                <div key={idx} className={styles.processCard}>
                  <div className={styles.stepNumber}>{step.step || `0${idx + 1}`}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Tech Stack & Tools */}
      {service.technologies && service.technologies.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>Tech & Stack</p>
              <h2 className={styles.sectionTitle}>Tools We Master</h2>
            </div>

            <div className={styles.techWrap}>
              {service.technologies.map((tech, idx) => (
                <div key={idx} className={styles.techPill}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQs Accordion */}
      {service.faqs && service.faqs.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>Questions & Answers</p>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            </div>

            <div className={styles.faqList}>
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className={styles.faqItem}>
                    <button className={styles.faqHeader} onClick={() => toggleFaq(idx)}>
                      <span>{faq.q}</span>
                      <svg
                        className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                  </div>
                );
              })}
            </div>

            {/* Bottom Call to Action */}
            <div className={styles.ctaBanner}>
              <h2 className={styles.ctaTitle}>Ready to Scale with {service.title}?</h2>
              <p className={styles.ctaText}>
                Claim a complimentary strategy audit with Dikshant Joshi and the Veglux Media team today.
              </p>
              <button className={styles.primaryCta} onClick={handleOpenAudit}>
                CLAIM YOUR FREE AUDIT NOW
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
