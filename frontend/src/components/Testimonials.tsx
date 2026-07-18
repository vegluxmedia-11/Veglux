"use client";

import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

interface ReviewItem {
  name: string;
  company: string;
  stars: number;
  text: string;
  initials: string;
}

interface VideoTestimonial {
  id: string;
  name: string;
  company: string;
  subtitles: string[];
}

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const [subIdx, setSubIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  const reviews: ReviewItem[] = [
    {
      name: "Amit Sharma",
      company: "Rajasthan Realities",
      stars: 5,
      text: "Veglux Media managed our campaigns for luxury villas. Their Meta ads funnels were extremely precise, driving the cost per qualified lead down to a third. Highly recommended!",
      initials: "AS",
    },
    {
      name: "Priyal Sen",
      company: "Aura Luxury Fashion",
      stars: 5,
      text: "Our Shopify conversions jumped by 44% in less than two months. The catalog setup and email retrieval automations designed by Veglux are state-of-the-art.",
      initials: "PS",
    },
    {
      name: "Rohit Mehta",
      company: "Heritage Palace Resorts",
      stars: 5,
      text: "Lucky and his team are data-driven. They don't report generic metrics; they report return on investment. Their local SEO optimizations put us on top of local maps.",
      initials: "RM",
    },
  ];

  const videos: VideoTestimonial[] = [
    {
      id: "vid-1",
      name: "Karan Singh",
      company: "Udaipur Devs Group",
      subtitles: [
        "Hey everyone! Karan here from Udaipur Devs Group.",
        "We partnered with Veglux Media to scale our SaaS product client acquisition.",
        "In our first month itself, we observed a massive 3.2x increase in demo bookings.",
        "Their reporting dashboards are clean, and client managers are highly responsive.",
        "If you are looking to scale your B2B services, Veglux Media is the team!",
      ],
    },
    {
      id: "vid-2",
      name: "Meera Vyas",
      company: "Chai & Co. Chain",
      subtitles: [
        "Meera here from Chai & Co. We operate outlets across Rajasthan.",
        "Social media reels designed by Veglux went viral, bringing thousands of walk-ins.",
        "Their monthly content calendar is extremely structured and aligned with our brand.",
        "It feels like we have an in-house media house working for us.",
        "Outstanding content and reels management!",
      ],
    },
  ];

  // Simulating video playback progress and subtitles
  useEffect(() => {
    if (activeVideo) {
      setSubIdx(0);
      setProgress(0);
      
      const interval = 2200; // time per subtitle line
      let progressTimer: NodeJS.Timeout;
      
      const updateProgress = () => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            return 100;
          }
          return prev + 1;
        });
      };
      
      progressTimer = setInterval(updateProgress, (activeVideo.subtitles.length * interval) / 100);
      
      const subtitleTimer = setInterval(() => {
        setSubIdx((prev) => {
          if (prev < activeVideo.subtitles.length - 1) {
            return prev + 1;
          } else {
            clearInterval(subtitleTimer);
            return prev;
          }
        });
      }, interval);

      return () => {
        clearInterval(progressTimer);
        clearInterval(subtitleTimer);
      };
    }
  }, [activeVideo]);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={`${styles.container} container`}>
        {/* Title Area */}
        <div className={styles.titleArea}>
          <p>Client Endorsements</p>
          <h2>Testimonials</h2>
        </div>

        {/* Google Score Banner */}
        <div className={styles.googleScoreCard}>
          <svg className={styles.googleIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#EA4335"
              d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.2-5.136 4.2A5.85 5.85 0 018.1 12.75a5.85 5.85 0 015.89-5.85c1.47 0 2.8.54 3.82 1.425l3.15-3.15C19.02 3.39 16.59 2.25 13.99 2.25 8.475 2.25 4 6.725 4 12.24s4.475 9.99 9.99 9.99c5.78 0 9.61-4.06 9.61-9.79 0-.66-.06-1.29-.17-1.89H12.24z"
            />
          </svg>
          <div className={styles.scoreDetails}>
            <div className={styles.scoreStars}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className={styles.scoreText}>
              <strong>4.9 / 5.0</strong> based on 145+ Google Business reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className={styles.reviewsGrid}>
          {reviews.map((rev, idx) => (
            <div key={idx} className={styles.reviewCard}>
              <div className={styles.clientMeta}>
                <div className={styles.clientAvatar}>{rev.initials}</div>
                <div className={styles.clientInfo}>
                  <span className={styles.clientName}>{rev.name}</span>
                  <span className={styles.clientCompany}>{rev.company}</span>
                </div>
              </div>
              <div className={styles.starsRow}>
                {[...Array(rev.stars)].map((_, i) => (
                  <svg key={i} width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className={styles.reviewText}>"{rev.text}"</p>
            </div>
          ))}
        </div>

        {/* Video Testimonials Showcase */}
        <div>
          <h3 className={styles.videoSectionTitle}>Video Feedback</h3>
          <div className={styles.videosGrid}>
            {videos.map((vid) => (
              <div key={vid.id} className={styles.videoCard} onClick={() => setActiveVideo(vid)}>
                <div className={styles.videoThumbnailBg}></div>
                <div className={styles.playBtn}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className={styles.videoOverlayText}>
                  <span className={styles.videoClientName}>{vid.name}</span>
                  <span className={styles.videoClientCompany}>{vid.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Screen */}
      {activeVideo && (
        <div className={styles.videoModal} onClick={() => setActiveVideo(null)}>
          <div className={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h4 className={styles.modalTitle}>
                {activeVideo.name} — {activeVideo.company}
              </h4>
              <button className={styles.closeBtn} onClick={() => setActiveVideo(null)}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mock Player UI */}
            <div className={styles.mockPlayer}>
              <div className={styles.mockPlayerText}>VEGLUX MOCK PLAYER</div>
              <div className={styles.mockSubtitles}>
                {activeVideo.subtitles[subIdx]}
              </div>

              {/* Progress bar container */}
              <div className={styles.progressBarContainer}>
                <div
                  className={styles.progressBarFill}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
