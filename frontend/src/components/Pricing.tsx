"use client";

import React, { useState, useEffect } from "react";
import styles from "./Pricing.module.css";
import { getPricingPlans, getCustomServices, PricingPackage, CustomServiceItem } from "@/lib/services";

interface PricingProps {
  onOpenAudit: (customNotes?: string) => void;
}

const defaultPackages: PricingPackage[] = [
  {
    title: "Starter",
    desc: "Perfect for local businesses looking to establish their online presence.",
    price: "₹25,000",
    featured: false,
    ctaText: "Get Started",
    features: [
      { name: "Social Media (12 Posts/mo)", included: true },
      { name: "Google Business Optimization", included: true },
      { name: "Basic SEO Keyword Audit", included: true },
      { name: "Monthly Performance Report", included: true },
      { name: "Meta & Google Ads Campaign", included: false },
      { name: "Premium Website Development", included: false },
      { name: "Dedicated Account Manager", included: false },
    ],
  },
  {
    title: "Professional",
    desc: "Accelerate leads and revenue. Our most popular scaling program.",
    price: "₹55,000",
    featured: true,
    ctaText: "Scale My Business",
    features: [
      { name: "Social Media (24 Posts + 8 Reels)", included: true },
      { name: "Meta Ads (Facebook & Insta)", included: true },
      { name: "Google Search Ads setup", included: true },
      { name: "Full SEO Optimization & Backlinks", included: true },
      { name: "Bi-Weekly Strategy Sync Calls", included: true },
      { name: "Premium Website Development", included: false },
      { name: "Dedicated Account Manager", included: true },
    ],
  },
  {
    title: "Premium",
    desc: "Complete digital dominance for brands looking to expand exponentially.",
    price: "₹95,000",
    featured: false,
    ctaText: "Secure Dominance",
    features: [
      { name: "Unlimited Content Creation & Reels", included: true },
      { name: "Meta, Google & YouTube Ads", included: true },
      { name: "Full-Scale SEO & PR Backlinks", included: true },
      { name: "Next.js Custom Web Development", included: true },
      { name: "Advanced CRO Funnel Design", included: true },
      { name: "Weekly Executive Strategy Briefs", included: true },
      { name: "Dedicated Director-Level Manager", included: true },
    ],
  },
];

const defaultCustomServices: CustomServiceItem[] = [
  { id: "meta", name: "Meta Ads Management", price: 15000, desc: "Lead generation & Catalog sales" },
  { id: "google", name: "Google & YT Ads", price: 15000, desc: "Search intent & Video hooks" },
  { id: "seo", name: "SEO Optimization", price: 20000, desc: "On-page rank & Backlink acquisition" },
  { id: "smm", name: "Social Media & Reels", price: 25000, desc: "Content calendar & video editing" },
  { id: "webdev", name: "Next.js Web Dev", price: 30000, desc: "Bespoke custom-coded web portal" },
  { id: "email", name: "Email Marketing Automation", price: 12000, desc: "Abandoned flows & Newsletters" },
];

export default function Pricing({ onOpenAudit }: PricingProps) {
  const [packages, setPackages] = useState<PricingPackage[]>(defaultPackages);
  const [customServices, setCustomServices] = useState<CustomServiceItem[]>(defaultCustomServices);
  const [selectedServices, setSelectedServices] = useState<string[]>(["meta", "smm"]);
  const baseFee = 15000;

  useEffect(() => {
    async function loadPricingData() {
      try {
        const plans = await getPricingPlans();
        if (plans && plans.length > 0) {
          setPackages(plans);
        }
        const cServices = await getCustomServices();
        if (cServices && cServices.length > 0) {
          setCustomServices(cServices);
          if (cServices[0]?.id) {
            setSelectedServices([cServices[0].id]);
          }
        }
      } catch (err) {
        console.warn("Using default pricing fallbacks", err);
      }
    }
    loadPricingData();
  }, []);

  const handleServiceToggle = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((sId) => sId !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    const servicesCost = customServices
      .filter((s) => selectedServices.includes(s.id))
      .reduce((sum, s) => sum + s.price, 0);
    return baseFee + servicesCost;
  };

  const handleInquireCustom = () => {
    const selectedNames = customServices
      .filter((s) => selectedServices.includes(s.id))
      .map((s) => s.name)
      .join(", ");
    const note = `Custom Package Request: Base + [${selectedNames}]. Estimated total: ₹${calculateTotal().toLocaleString()}/mo`;
    onOpenAudit(note);
  };

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={`${styles.container} container`}>
        {/* Title Area */}
        <div className={styles.titleArea}>
          <p>Investment Plans</p>
          <h2>Pricing Packages</h2>
        </div>

        {/* Package Grid */}
        <div className={styles.pricingGrid}>
          {packages.map((pkg, idx) => (
            <div
              key={pkg._id || idx}
              className={`${styles.pkgCard} ${pkg.featured ? styles.featuredCard : ""}`}
            >
              {pkg.featured && <span className={styles.featuredBadge}>Recommended</span>}
              <h3 className={styles.pkgTitle}>{pkg.title}</h3>
              <p className={styles.pkgDesc}>{pkg.desc}</p>
              <div className={styles.priceWrapper}>
                <span className={styles.priceVal}>{pkg.price}</span>
                <span className={styles.pricePeriod}>/ month</span>
              </div>
              {pkg.features && (
                <ul className={styles.featuresList}>
                  {pkg.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className={`${styles.featureItem} ${!feat.included ? styles.featureDisabled : ""}`}
                    >
                      {feat.included ? (
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span>{feat.name}</span>
                    </li>
                  ))}
                </ul>
              )}
              <button
                className={`${styles.pkgBtn} ${pkg.featured ? styles.pkgBtnFeatured : ""}`}
                onClick={() => onOpenAudit(`Inquiring about standard package: [${pkg.title}] - price: ${pkg.price}/mo`)}
              >
                {pkg.ctaText || "Get Started"}
              </button>
            </div>
          ))}
        </div>

        {/* Custom Package Builder */}
        <div className={styles.builderSection}>
          <h3 className={styles.builderTitle}>Interactive Package Builder</h3>
          <p className={styles.builderDesc}>
            Select the services you need. Our system will generate a custom fee breakdown on the fly.
          </p>

          <div className={styles.builderGrid}>
            {/* Options List */}
            <div className={styles.optionsColumn}>
              {customServices.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                return (
                  <div
                    key={service.id}
                    className={`${styles.optionCard} ${isSelected ? styles.optionSelected : ""}`}
                    onClick={() => handleServiceToggle(service.id)}
                  >
                    <div className={styles.optionInfo}>
                      <span className={styles.optionName}>{service.name}</span>
                      <span className={styles.optionPrice}>
                        +₹{service.price.toLocaleString()} / mo
                      </span>
                    </div>
                    <div
                      className={`${styles.checkboxWrapper} ${isSelected ? styles.checkboxSelected : ""}`}
                    >
                      {isSelected && (
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Calculations Summary */}
            <div className={styles.summaryColumn}>
              <div>
                <h4 className={styles.summaryTitle}>Monthly Breakdown</h4>
                <div className={styles.itemsList}>
                  <div className={styles.summaryItem}>
                    <span>Base Account Management</span>
                    <span>₹{baseFee.toLocaleString()}</span>
                  </div>
                  {customServices
                    .filter((s) => selectedServices.includes(s.id))
                    .map((s) => (
                      <div key={s.id} className={styles.summaryItem}>
                        <span>{s.name}</span>
                        <span>+₹{s.price.toLocaleString()}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <div className={styles.summaryTotalRow}>
                  <span className={styles.totalLabel}>Monthly Total</span>
                  <span className={styles.totalVal}>
                    ₹{calculateTotal().toLocaleString()}
                  </span>
                </div>
                <button className={styles.builderBtn} onClick={handleInquireCustom}>
                  Request Custom Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
