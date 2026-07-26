"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Services.module.css";
import { getServices } from "@/lib/services";
import { servicesList, ServiceData } from "@/data/servicesData";

const defaultIcons: Record<string, React.ReactNode> = {
  performance: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  social: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  ),
  tech: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  branding: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  )
};

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await getServices();
        if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices(servicesList);
        }
      } catch (err) {
        setServices(servicesList);
      } finally {
        setLoading(false);
      }
    }
    loadServices();
  }, []);

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((service) => service.category === activeFilter);

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
          {filteredServices.map((service, idx) => {
            const serviceIcon = defaultIcons[service.category] || defaultIcons.performance;
            const descriptionText = service.desc || service.summary || '';
            const subserviceItems = service.subservices || service.whyItMatters || [];

            return (
              <Link
                key={service.slug || service._id || idx}
                href={`/services/${service.slug}`}
                className={styles.serviceCard}
              >
                <div className={styles.cardIcon}>{serviceIcon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{descriptionText}</p>
                {subserviceItems.length > 0 && (
                  <ul className={styles.subserviceList}>
                    {subserviceItems.slice(0, 5).map((sub: string, subIdx: number) => (
                      <li key={subIdx} className={styles.subserviceItem}>
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
                )}
                <div className={styles.detailBtn}>
                  <span>Explore Full Details</span>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
