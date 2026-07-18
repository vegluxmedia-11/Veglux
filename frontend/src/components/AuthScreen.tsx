"use client";

import React, { useState, useEffect } from "react";
import styles from "./AuthScreen.module.css";
import Logo from "./Logo";

interface AuthScreenProps {
  onLoginSuccess: () => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function AuthScreen({ onLoginSuccess, theme, toggleTheme }: AuthScreenProps) {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Set default account when component loads
  useEffect(() => {
    if (typeof window !== "undefined") {
      const defaultUser = {
        name: "Lucky Joshi",
        email: "luckyjoshi@vegluxmedia.com",
        password: "password123",
        company: "Veglux Media",
      };
      if (!localStorage.getItem("veglux_user")) {
        localStorage.setItem("veglux_user", JSON.stringify(defaultUser));
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Bypass check: allow default credentials, OR any input for a seamless prototype test!
    const isDefault = email.toLowerCase() === "luckyjoshi@vegluxmedia.com" && password === "password123";
    const isAnyInput = email.includes("@") && password.length >= 4;

    if (isDefault || isAnyInput) {
      setSuccess("Success! Logging in...");
      setTimeout(() => {
        localStorage.setItem("veglux_logged_in", "true");
        onLoginSuccess();
      }, 1000);
    } else {
      setError("Please enter a valid email address and a password of at least 4 characters.");
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      company: company || "N/A",
    };

    localStorage.setItem("veglux_user", JSON.stringify(newUser));
    setSuccess("Account created successfully! Switching to Login...");
    
    setTimeout(() => {
      setActiveTab("login");
      setEmail(email);
      setPassword(password);
      setSuccess("");
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    setError("");
    setSuccess("Connecting to Google Account...");
    setTimeout(() => {
      localStorage.setItem("veglux_logged_in", "true");
      onLoginSuccess();
    }, 1200);
  };

  return (
    <div className={styles.authWrapper}>
      {/* Decorative Blur Blobs */}
      <div className={styles.decorBlob1}></div>
      <div className={styles.decorBlob2}></div>

      {/* Theme Switcher */}
      <div className={styles.toggleThemeContainer}>
        <button
          onClick={toggleTheme}
          style={{
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--gold-primary)",
            transition: "all 0.3s ease",
          }}
          title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
        >
          {theme === "dark" ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.148.148z" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>

      <div className={styles.container}>
        {/* Left Side: Agency Info & Blurry dashboard preview */}
        <div className={styles.infoColumn}>
          <div style={{ alignSelf: "flex-start", marginBottom: "20px" }}>
            <Logo size="medium" />
          </div>

          <div className={styles.heroText}>
            <h2>
              Elevate. Connect. <span className="gold-text">Grow.</span>
            </h2>
            <p style={{ marginBottom: "20px" }}>
              Scale with Udaipur's premier direct-response agency. Here is a breakdown of our high-end marketing architectures:
            </p>
          </div>

          {/* Fully Visible Detailed Services Overview */}
          <div className={styles.servicesOverviewList}>
            <div className={styles.serviceOverviewCard}>
              <div className={styles.serviceHeaderRow}>
                <span className={styles.serviceNumber}>01</span>
                <h4>Digital Marketing Setup</h4>
              </div>
              <p>Full-funnel growth architecture. We configure cross-channel attribution, clean lead capture structures, and customer conversion pipelines built to scale EBITDA.</p>
            </div>

            <div className={styles.serviceOverviewCard}>
              <div className={styles.serviceHeaderRow}>
                <span className={styles.serviceNumber}>02</span>
                <h4>Performance Marketing</h4>
              </div>
              <p>Precision media buying on Meta Ads, Google search networks, and YouTube. We draft direct-response copywriting and engineer high-ROAS bidding campaigns.</p>
            </div>

            <div className={styles.serviceOverviewCard}>
              <div className={styles.serviceHeaderRow}>
                <span className={styles.serviceNumber}>03</span>
                <h4>Social Media & Reels</h4>
              </div>
              <p>Visual post layouts, short video editing, scripts, and structured monthly content calendars. We build brand assets that turn viewer scrolls into inquiries.</p>
            </div>

            <div className={styles.serviceOverviewCard}>
              <div className={styles.serviceHeaderRow}>
                <span className={styles.serviceNumber}>04</span>
                <h4>SEO & Web Development</h4>
              </div>
              <p>Technical search engine rankings combined with fast Next.js development. We ensure page loading times under 2.5 seconds to maximize conversion ratios.</p>
            </div>
          </div>


        </div>

        {/* Right Side: Tabbed Login/Register Forms */}
        <div className={styles.formColumn}>
          <div className={styles.formCard}>
            <div className={styles.tabs}>
              <button
                className={`${styles.tabButton} ${activeTab === "login" ? styles.tabButtonActive : ""}`}
                onClick={() => {
                  setActiveTab("login");
                  setError("");
                  setSuccess("");
                }}
              >
                Sign In
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === "signup" ? styles.tabButtonActive : ""}`}
                onClick={() => {
                  setActiveTab("signup");
                  setError("");
                  setSuccess("");
                }}
              >
                Register
              </button>
            </div>

            {activeTab === "login" ? (
              <form onSubmit={handleLogin}>
                <h3 className={styles.formTitle}>Welcome Back</h3>
                <p className={styles.formSubtitle}>Sign in to view dashboard and pricing package details.</p>

                {error && <div className={styles.errorMessage}>{error}</div>}
                {success && <div className={styles.successMessage}>{success}</div>}

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email Address</label>
                  <input
                    type="email"
                    className={styles.formInput}
                    placeholder="e.g. luckyjoshi@vegluxmedia.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Password</label>
                  <input
                    type="password"
                    className={styles.formInput}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Sign In
                </button>

                <div className={styles.divider}>
                  <span>or</span>
                </div>

                <button
                  type="button"
                  className={styles.googleButton}
                  onClick={handleGoogleSignIn}
                >
                  <svg className={styles.googleIcon} viewBox="0 0 24 24" width="18" height="18">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </form>
            ) : (
              <form onSubmit={handleSignup}>
                <h3 className={styles.formTitle}>Create Account</h3>
                <p className={styles.formSubtitle}>Create an account to scale your digital presence.</p>

                {error && <div className={styles.errorMessage}>{error}</div>}
                {success && <div className={styles.successMessage}>{success}</div>}

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Full Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email Address</label>
                  <input
                    type="email"
                    className={styles.formInput}
                    placeholder="e.g. john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Company Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="e.g. Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Password</label>
                  <input
                    type="password"
                    className={styles.formInput}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Create Free Account
                </button>

                <div className={styles.divider}>
                  <span>or</span>
                </div>

                <button
                  type="button"
                  className={styles.googleButton}
                  onClick={handleGoogleSignIn}
                >
                  <svg className={styles.googleIcon} viewBox="0 0 24 24" width="18" height="18">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign up with Google
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
