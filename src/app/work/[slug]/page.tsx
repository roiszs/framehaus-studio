import type { Metadata } from "next";

import WorkDetailExperience from "@/components/pages/WorkDetailExperience";
import { portfolioItems } from "@/lib/data/portfolio";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  return {
    title: project
      ? `${project.title.en} | FrameHaus Studio`
      : "Project | FrameHaus Studio",
    description: project
      ? project.description.en
      : "Portfolio project by FrameHaus Studio.",
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;

  return <WorkDetailExperience slug={slug} />;
}
