import type { Metadata } from "next";

import CaseStudyPageExperience from "@/components/pages/CaseStudyPageExperience";

export const metadata: Metadata = {
  title: "Case Study",
  description:
    "FrameHaus Studio case study: a premium bilingual website developed as a FronteraCode portfolio project for a photography and video studio.",
};

export default function CaseStudyPage() {
  return <CaseStudyPageExperience />;
}
