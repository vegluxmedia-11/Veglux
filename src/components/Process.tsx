"use client";

import React from "react";
import styles from "./Process.module.css";

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export default function Process() {
  const steps: ProcessStep[] = [
    {
      num: "01",
      title: "Consultation",
      desc: "Deep-dive audit into current ad spends, CRM pipelines, and revenue margins.",
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Creating media buying frameworks, audience segmentation blueprints, and copy hooks.",
    },
    {
      num: "03",
      title: "Campaign Setup",
      desc: "Pixel setups, attribution tags, clean copy matrices, and design assets delivery.",
    },
    {
      num: "04",
      title: "Execution",
      desc: "Launching cohorts, scaling high-performing hooks, and tracking daily spend ratios.",
    },
    {
      num: "05",
      title: "Optimization",
      desc: "A/B testing landing copy, cleaning target segments, and stabilizing bidding models.",
    },
    {
      num: "06",
      title: "Reporting",
      desc: "Weekly syncs and real-time portal updates mapping campaign spend directly to ROI.",
    },
  ];

  return (
    <section id="process" className={styles.process}>
      <div className={`${styles.container} container`}>
        {/* Title Area */}
        <div className={styles.titleArea}>
          <p>Our Execution Path</p>
          <h2>Workflow Process</h2>
        </div>

        {/* Timeline Container */}
        <div className={styles.timeline}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepNode}>
              <div className={styles.stepBubble}>{step.num}</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
