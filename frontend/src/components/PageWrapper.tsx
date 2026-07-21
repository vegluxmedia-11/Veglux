"use client";

import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import AuthScreen from "./AuthScreen";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AuditModal from "./AuditModal";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  useEffect(() => {
    // 1. Theme initialization - Force Dark Luxury Theme
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("veglux_theme", "dark");

    // 2. Auth state initialization
    const authState = localStorage.getItem("veglux_logged_in") === "true";
    setIsLoggedIn(authState);

    // 3. Custom event listener to open audit modal globally
    const handleOpenAudit = () => {
      setIsAuditOpen(true);
    };

    window.addEventListener("open-veglux-audit", handleOpenAudit);
    return () => {
      window.removeEventListener("open-veglux-audit", handleOpenAudit);
    };
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem("veglux_logged_in", "true");
  };

  const handleLogout = () => {
    localStorage.removeItem("veglux_logged_in");
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* 1. Preloader Screen */}
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <>
          {!isLoggedIn ? (
            /* 2. Login & Signup Gateway Screen (Unauthenticated) */
            <AuthScreen
              onLoginSuccess={handleLoginSuccess}
            />
          ) : (
            /* 3. Fully Unlocked Site Shell (Authenticated) */
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
              {/* Header Navigation */}
              <Navbar
                onLogout={handleLogout}
                onOpenAudit={() => setIsAuditOpen(true)}
              />

              {/* Page Content */}
              <main style={{ flexGrow: 1, marginTop: "80px" }}>
                {children}
              </main>

              {/* Footer Panel */}
              <Footer />

              {/* Pop-up Interactive Business Audit Modal */}
              <AuditModal isOpen={isAuditOpen} onClose={() => setIsAuditOpen(false)} />
            </div>
          )}
        </>
      )}
    </>
  );
}
