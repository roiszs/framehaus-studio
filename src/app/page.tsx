import type { Metadata } from "next";

import HomeExperience from "@/components/sections/HomeExperience";

export const metadata: Metadata = {
  title: "Premium Photography & Video Studio",
  description:
    "FrameHaus Studio is a premium bilingual website concept for a professional photography and video studio offering brand photography, product photography, event coverage, portraits, lifestyle sessions, and video content.",
};

export default function Home() {
  return <HomeExperience />;
}
