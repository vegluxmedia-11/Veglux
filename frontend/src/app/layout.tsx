import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veglux Media | Elevate • Connect • Grow",
  description: "Veglux Media is a premium digital marketing agency based in Udaipur, Rajasthan. We provide Meta Ads, Google Ads, SEO, Social Media, and Web Development services designed to scale your business.",
  keywords: ["Digital Marketing", "Veglux Media", "Performance Marketing", "Meta Ads", "Google Ads", "SEO", "Web Development", "Dikshant Joshi", "Udaipur Marketing Agency"],
  authors: [{ name: "Dikshant Joshi", url: "https://vegluxmedia.com" }],
};

import PageWrapper from "@/components/PageWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
