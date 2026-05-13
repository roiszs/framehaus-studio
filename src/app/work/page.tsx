import type { Metadata } from "next";

import WorkPageExperience from "@/components/pages/WorkPageExperience";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the FrameHaus Studio portfolio with visual projects across branding, product photography, events, portraits, and lifestyle sessions.",
};

export default function WorkPage() {
  return <WorkPageExperience />;
}
