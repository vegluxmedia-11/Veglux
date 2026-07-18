"use client";

import React, { useState } from "react";
import styles from "./Blog.module.css";

interface BlogPost {
  id: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
}

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: "post-1",
      tag: "Marketing Tips",
      date: "July 12, 2026",
      title: "5 Copywriting Hooks That Instantly Double Click-Through Rates",
      excerpt: "Diluted hooks bleed ad budgets. Learn the direct-response formulas we deploy at Veglux to capture immediate attention.",
      content: (
        <>
          <p>
            In modern digital marketing, attention is the highest priced currency. The average internet user scrolls past 300 feet of content daily. If your ad's first line doesn't capture them in 1.5 seconds, you are wasting budgets.
          </p>
          <h4>1. The 'Accidental Discovery' Hook</h4>
          <p>
            Example: <em>"I stumbled on this Udaipur-based villa layout by mistake... now I can't look at standard flats anymore."</em> This hook works because it feels organic and non-promotional.
          </p>
          <h4>2. The 'Consequence First' hook</h4>
          <p>
            Example: <em>"Stop wasting ₹15,000 monthly on broken Meta ad bidding algorithms."</em> Lead with the financial leakage to trigger immediate concern and scroll cessation.
          </p>
          <h4>3. The 'Contrarian Statement' hook</h4>
          <p>
            Example: <em>"Why generic SEO is actually hurting your brand conversions."</em> Challenging standard practices makes users pause and click to verify their practices.
          </p>
          <h4>Key Takeaway</h4>
          <p>
            Never start copy with a greeting like "Welcome" or generic statements. Start in the middle of a conflict or with a high-intent statistical hook.
          </p>
        </>
      ),
    },
    {
      id: "post-2",
      tag: "SEO Guides",
      date: "June 28, 2026",
      title: "Mastering Core Web Vitals for Modern Search Rankings",
      excerpt: "Google ranks fast sites. Discover how we optimize LCP and CLS values inside Next.js to secure search dominance.",
      content: (
        <>
          <p>
            Google's ranking algorithms prioritize page experience. If your website takes more than 2.8 seconds to load, your search engine rankings will decay, regardless of keyword densities or backlinks.
          </p>
          <h4>Understanding Key Metrics</h4>
          <p>
            <strong>Largest Contentful Paint (LCP):</strong> Measures loading performance. For a premium user experience, LCP should occur within 2.5 seconds of when the page first starts loading.
          </p>
          <p>
            <strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability. Pages should maintain a CLS of less than 0.1 to prevent layout jumping when rendering.
          </p>
          <h4>How Next.js Solves SEO Speeds</h4>
          <p>
            By leveraging server-side rendering (SSR), image components, and static layout generation, Next.js handles pre-rendering automatically. Combined with clean modular Vanilla CSS, layouts remain lightweight and compile instantly.
          </p>
        </>
      ),
    },
    {
      id: "post-3",
      tag: "Social Media",
      date: "May 15, 2026",
      title: "How to Build a Structured Organic Reels Strategy in 2026",
      excerpt: "Viral views are useless without structured paths. Here is how we turn 60-second video hooks into actual CRM inquiries.",
      content: (
        <>
          <p>
            Short-form video is the quickest vehicle for organic brand exposure. However, most brands make the mistake of chasing views instead of conversion funnels.
          </p>
          <h4>The 3-Part Video Structure</h4>
          <p>
            <strong>The Hook (0-3s):</strong> A text visual overlay combined with an active opening statement. Example: "The biggest mistake e-commerce founders make in SMM."
          </p>
          <p>
            <strong>The Core Value (3-45s):</strong> 3 actionable steps presented with quick transitions and engaging subtitles.
          </p>
          <p>
            <strong>The CTA (45-60s):</strong> Directing users to comment a keyword to receive an automated audit tool in their DMs, moving them from social comments directly into your sales CRM.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="blog" className={styles.blog}>
      <div className={`${styles.container} container`}>
        {/* Title Area */}
        <div className={styles.titleArea}>
          <p>Knowledge Base</p>
          <h2>Marketing Insights</h2>
        </div>

        {/* Blog Grid */}
        <div className={styles.grid}>
          {posts.map((post) => (
            <div key={post.id} className={styles.card} onClick={() => setActivePost(post)}>
              <div className={styles.cardImageMock}>
                <span className={styles.cardTag}>{post.tag}</span>
                <span className={styles.cardImageText}>VL</span>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardDate}>{post.date}</span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.readMoreBtn}>
                  <span>Read Article</span>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activePost && (
        <div className={styles.modal} onClick={() => setActivePost(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalMeta}>
                <span className={styles.modalTag}>{activePost.tag}</span>
                <span className={styles.modalDate}>{activePost.date}</span>
              </div>
              <button className={styles.modalCloseBtn} onClick={() => setActivePost(null)}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h3 className={styles.modalTitle}>{activePost.title}</h3>
            <div className={styles.modalBody}>{activePost.content}</div>
          </div>
        </div>
      )}
    </section>
  );
}
