"use client";

import React from "react";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  const handleOpenAudit = () => {
    window.dispatchEvent(new CustomEvent("open-veglux-audit"));
  };

  return (
    <>
      <Hero onOpenAudit={handleOpenAudit} />
      <Process />
      <WhyChooseUs />
    </>
  );
}
