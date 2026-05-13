import type { Metadata } from "next";

import PackagesPageExperience from "@/components/pages/PackagesPageExperience";

export const metadata: Metadata = {
  title: "Photography Packages",
  description:
    "Review FrameHaus Studio packages for portraits, brand sessions, content production days, and event coverage.",
};

export default function PackagesPage() {
  return <PackagesPageExperience />;
}
