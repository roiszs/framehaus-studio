import type { Metadata } from "next";

import ContactPageExperience from "@/components/pages/ContactPageExperience";

export const metadata: Metadata = {
  title: "Request a Session",
  description:
    "Request a photography or video session with FrameHaus Studio. Share your project details, timeline, budget, and visual needs.",
};

export default function ContactPage() {
  return <ContactPageExperience />;
}
