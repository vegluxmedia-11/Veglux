"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const msg = searchParams.get("msg") || "";

  return (
    <>
      <Contact prefilledMessage={msg} />
      <FAQ />
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ padding: "100px", textAlign: "center", color: "var(--gold-primary)" }}>Loading contact panel...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
