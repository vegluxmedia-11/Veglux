"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  const router = useRouter();

  const handleOpenAudit = (customNotes?: string) => {
    if (customNotes) {
      router.push(`/contact?msg=${encodeURIComponent(customNotes)}`);
    } else {
      window.dispatchEvent(new CustomEvent("open-veglux-audit"));
    }
  };

  return <Pricing onOpenAudit={handleOpenAudit} />;
}
