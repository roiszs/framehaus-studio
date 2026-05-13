import type { Metadata } from "next";

import ServicesPageExperience from "@/components/pages/ServicesPageExperience";

export const metadata: Metadata = {
  title: "Photography & Video Services",
  description:
    "Explore FrameHaus Studio services including brand photography, product photography, event coverage, studio portraits, lifestyle sessions, and video content.",
};

export default function ServicesPage() {
  return <ServicesPageExperience />;
}
