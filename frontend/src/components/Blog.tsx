"use client";

import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { getBlogs, BlogPost } from "@/lib/services";

const defaultPosts: BlogPost[] = [
  {
    id: "post-1",
    tag: "Marketing Tips",
    date: "July 12, 2026",
    title: "5 Copywriting Hooks That Instantly Double Click-Through Rates",
    excerpt: "Diluted hooks bleed ad budgets. Learn the direct-response formulas we deploy at Veglux to capture immediate attention.",
    content: `In modern digital marketing, attention is the highest priced currency. The average internet user scrolls past 300 feet of content daily. If your ad's first line doesn't capture them in 1.5 seconds, you are wasting budgets.

1. The 'Accidental Discovery' Hook
Example: "I stumbled on this Udaipur-based villa layout by mistake... now I can't look at standard flats anymore." This hook works because it feels organic and non-promotional.

2. The 'Consequence First' hook
Example: "Stop wasting ₹15,000 monthly on broken Meta ad bidding algorithms." Lead with financial leakage to trigger immediate concern.

3. The 'Contrarian Statement' hook
Example: "Why generic SEO is actually hurting your brand conversions." Challenging standard practices makes users pause and click.`
  },
  {
    id: "post-2",
    tag: "SEO Guides",
    date: "June 28, 2026",
    title: "Mastering Core Web Vitals for Modern Search Rankings",
    excerpt: "Google ranks fast sites. Discover how we optimize LCP and CLS values inside Next.js to secure search dominance.",
    content: `Google's ranking algorithms prioritize page experience. If your website takes more than 2.8 seconds to load, your search engine rankings will decay, regardless of keyword densities or backlinks.

Largest Contentful Paint (LCP): Measures loading performance. For a premium user experience, LCP should occur within 2.5 seconds of when the page first starts loading.

Cumulative Layout Shift (CLS): Measures visual stability. Pages should maintain a CLS of less than 0.1 to prevent layout jumping when rendering.`
  },
  {
    id: "post-3",
    tag: "Social Media",
    date: "May 15, 2026",
    title: "How to Build a Structured Organic Reels Strategy in 2026",
    excerpt: "Viral views are useless without structured paths. Here is how we turn 60-second video hooks into actual CRM inquiries.",
    content: `Short-form video is the quickest vehicle for organic brand exposure. However, most brands make the mistake of chasing views instead of conversion funnels.

1. The Hook (0-3s): A text visual overlay combined with an active opening statement.
2. The Core Value (3-45s): 3 actionable steps presented with quick transitions.
3. The CTA (45-60s): Directing users to comment a keyword to receive an audit tool.`
  }
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(defaultPosts);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await getBlogs();
        if (data && data.length > 0) {
          setPosts(data);
        }
      } catch (err) {
        console.warn("Using default blog fallback", err);
      }
    }
    loadBlogs();
  }, []);

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
          {posts.map((post, idx) => {
            const key = post._id || post.id || idx;
            return (
              <div key={key} className={styles.card} onClick={() => setActivePost(post)}>
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
            );
          })}
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
            <div className={styles.modalBody}>
              {typeof activePost.content === "string" ? (
                activePost.content.split("\n\n").map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))
              ) : (
                activePost.content
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
