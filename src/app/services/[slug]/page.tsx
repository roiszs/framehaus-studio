import type { Metadata } from "next";

import ServiceDetailExperience from "@/components/pages/ServiceDetailExperience";
import { services } from "@/lib/data/services";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return {
    title: service
      ? `${service.title.en} | FrameHaus Studio`
      : "Service | FrameHaus Studio",
    description: service
      ? service.description.en
      : "Photography and video services by FrameHaus Studio.",
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;

  return <ServiceDetailExperience slug={slug} />;
}
