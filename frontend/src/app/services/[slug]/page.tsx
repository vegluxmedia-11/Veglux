import React from "react";
import { notFound } from "next/navigation";
import { getServiceBySlug, servicesList } from "@/data/servicesData";
import ServiceDetail from "@/components/ServiceDetail";

export function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
