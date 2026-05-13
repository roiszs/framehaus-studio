import fs from "node:fs";
import path from "node:path";

const outputDir = path.join(process.cwd(), "public", "framehaus");

fs.mkdirSync(outputDir, { recursive: true });

const assets = [
  {
    file: "hero-card.svg",
    title: "FrameHaus Studio",
    subtitle: "EDITORIAL PHOTO / VIDEO",
    label: "STUDIO",
    accent: "#C8A96A",
    secondary: "#F5F1EA",
    shape: "camera",
  },
  {
    file: "brand-session.svg",
    title: "Brand Session",
    subtitle: "PERSONAL BRANDING",
    label: "BRAND",
    accent: "#C8A96A",
    secondary: "#E8D8B6",
    shape: "portrait",
  },
  {
    file: "product-photography.svg",
    title: "Product Photography",
    subtitle: "COMMERCIAL PRODUCT",
    label: "PRODUCT",
    accent: "#B88A4A",
    secondary: "#F5F1EA",
    shape: "product",
  },
  {
    file: "event-coverage.svg",
    title: "Event Coverage",
    subtitle: "PRIVATE EVENTS",
    label: "EVENT",
    accent: "#D6B675",
    secondary: "#F5F1EA",
    shape: "event",
  },
  {
    file: "studio-portrait.svg",
    title: "Studio Portrait",
    subtitle: "PROFESSIONAL PORTRAIT",
    label: "PORTRAIT",
    accent: "#C8A96A",
    secondary: "#EFE6D6",
    shape: "portrait",
  },
  {
    file: "lifestyle-session.svg",
    title: "Lifestyle Session",
    subtitle: "NATURAL EDITORIAL",
    label: "LIFESTYLE",
    accent: "#BFA06A",
    secondary: "#F5F1EA",
    shape: "lifestyle",
  },
  {
    file: "video-production.svg",
    title: "Video Production",
    subtitle: "SOCIAL CONTENT",
    label: "VIDEO",
    accent: "#C8A96A",
    secondary: "#F5F1EA",
    shape: "video",
  },
  {
    file: "portfolio-branding.svg",
    title: "Founder Session",
    subtitle: "BRANDING PORTFOLIO",
    label: "WORK / BRAND",
    accent: "#C8A96A",
    secondary: "#F5F1EA",
    shape: "portrait",
  },
  {
    file: "portfolio-product.svg",
    title: "Minimal Product",
    subtitle: "PRODUCT CAMPAIGN",
    label: "WORK / PRODUCT",
    accent: "#B88A4A",
    secondary: "#F5F1EA",
    shape: "product",
  },
  {
    file: "portfolio-event.svg",
    title: "Private Event",
    subtitle: "EVENT STORY",
    label: "WORK / EVENT",
    accent: "#D6B675",
    secondary: "#F5F1EA",
    shape: "event",
  },
  {
    file: "portfolio-portrait.svg",
    title: "Portrait Series",
    subtitle: "STUDIO WORK",
    label: "WORK / PORTRAIT",
    accent: "#C8A96A",
    secondary: "#EFE6D6",
    shape: "portrait",
  },
  {
    file: "portfolio-lifestyle.svg",
    title: "Lifestyle Story",
    subtitle: "EDITORIAL LIFESTYLE",
    label: "WORK / LIFESTYLE",
    accent: "#BFA06A",
    secondary: "#F5F1EA",
    shape: "lifestyle",
  },
  {
    file: "content-day.svg",
    title: "Content Day",
    subtitle: "PHOTO / VIDEO / CAMPAIGN",
    label: "PRODUCTION",
    accent: "#C8A96A",
    secondary: "#F5F1EA",
    shape: "desk",
  },
];

function shapeMarkup(shape, accent, secondary) {
  const commonOpacity = ".14";

  const shapes = {
    camera: `
      <rect x="290" y="390" width="620" height="430" rx="82" fill="#0D0D0D" opacity=".58" stroke="${secondary}" stroke-opacity=".12" stroke-width="3"/>
      <rect x="405" y="340" width="250" height="88" rx="44" fill="${accent}" opacity=".16"/>
      <circle cx="600" cy="605" r="142" fill="#0D0D0D" opacity=".76" stroke="${accent}" stroke-opacity=".48" stroke-width="5"/>
      <circle cx="600" cy="605" r="72" fill="${secondary}" opacity=".14"/>
      <circle cx="775" cy="480" r="34" fill="${accent}" opacity=".22"/>
    `,
    portrait: `
      <circle cx="600" cy="450" r="120" fill="${secondary}" opacity=".13"/>
      <path d="M430 820 C455 670 515 600 600 600 C685 600 745 670 770 820 Z" fill="${secondary}" opacity=".11"/>
      <rect x="318" y="300" width="564" height="670" rx="250" fill="none" stroke="${accent}" stroke-opacity=".22" stroke-width="4"/>
      <path d="M320 1030 C455 930 745 930 880 1030" fill="none" stroke="${secondary}" stroke-opacity=".18" stroke-width="3"/>
    `,
    product: `
      <rect x="405" y="520" width="390" height="330" rx="42" fill="${secondary}" opacity=".10" stroke="${accent}" stroke-opacity=".28" stroke-width="4"/>
      <rect x="465" y="455" width="270" height="90" rx="45" fill="${accent}" opacity=".18"/>
      <ellipse cx="600" cy="875" rx="260" ry="42" fill="#000" opacity=".28"/>
      <path d="M385 390 L815 390 L750 515 L450 515 Z" fill="${accent}" opacity=".12"/>
      <circle cx="600" cy="665" r="78" fill="#0D0D0D" opacity=".58" stroke="${secondary}" stroke-opacity=".10"/>
    `,
    event: `
      <circle cx="430" cy="555" r="70" fill="${secondary}" opacity=".10"/>
      <circle cx="600" cy="520" r="92" fill="${accent}" opacity=".14"/>
      <circle cx="770" cy="575" r="70" fill="${secondary}" opacity=".10"/>
      <path d="M300 820 C390 710 500 690 600 760 C700 690 810 710 900 820" fill="none" stroke="${secondary}" stroke-opacity=".17" stroke-width="5"/>
      <path d="M260 410 C470 250 740 260 940 430" fill="none" stroke="${accent}" stroke-opacity=".16" stroke-width="3"/>
      <circle cx="290" cy="390" r="8" fill="${accent}" opacity=".8"/>
      <circle cx="910" cy="390" r="8" fill="${accent}" opacity=".8"/>
    `,
    lifestyle: `
      <path d="M250 840 C360 650 480 610 600 720 C720 610 840 650 950 840" fill="none" stroke="${secondary}" stroke-opacity=".17" stroke-width="5"/>
      <circle cx="520" cy="470" r="90" fill="${secondary}" opacity=".10"/>
      <rect x="650" y="360" width="230" height="360" rx="115" fill="${accent}" opacity=".12"/>
      <path d="M330 1010 C480 910 720 910 870 1010" fill="none" stroke="${accent}" stroke-opacity=".18" stroke-width="4"/>
    `,
    video: `
      <rect x="320" y="430" width="470" height="330" rx="64" fill="#0D0D0D" opacity=".62" stroke="${secondary}" stroke-opacity=".12" stroke-width="3"/>
      <path d="M790 535 L970 455 L970 735 L790 655 Z" fill="${accent}" opacity=".18" stroke="${accent}" stroke-opacity=".18"/>
      <circle cx="480" cy="595" r="84" fill="${secondary}" opacity=".14" stroke="${accent}" stroke-opacity=".28" stroke-width="4"/>
      <rect x="390" y="810" width="420" height="22" rx="11" fill="${secondary}" opacity=".12"/>
    `,
    desk: `
      <rect x="295" y="390" width="610" height="390" rx="58" fill="#0D0D0D" opacity=".55" stroke="${secondary}" stroke-opacity=".12" stroke-width="3"/>
      <rect x="360" y="460" width="240" height="160" rx="28" fill="${secondary}" opacity=".14"/>
      <rect x="635" y="455" width="190" height="245" rx="34" fill="${accent}" opacity=".14"/>
      <circle cx="462" cy="690" r="54" fill="${accent}" opacity=".16"/>
      <path d="M290 845 L910 845" stroke="${secondary}" stroke-opacity=".18" stroke-width="5"/>
      <path d="M420 935 C530 890 670 890 780 935" fill="none" stroke="${accent}" stroke-opacity=".20" stroke-width="4"/>
    `,
  };

  return shapes[shape] ?? `
    <circle cx="600" cy="580" r="170" fill="${secondary}" opacity="${commonOpacity}"/>
  `;
}

function createSvg(asset) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">
  <defs>
    <linearGradient id="bg-${asset.file}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2A211A"/>
      <stop offset="42%" stop-color="#0D0D0D"/>
      <stop offset="100%" stop-color="${asset.accent}"/>
    </linearGradient>
    <radialGradient id="glow-${asset.file}" cx="35%" cy="22%" r="58%">
      <stop offset="0%" stop-color="${asset.secondary}" stop-opacity=".32"/>
      <stop offset="52%" stop-color="${asset.accent}" stop-opacity=".15"/>
      <stop offset="100%" stop-color="#0D0D0D" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid-${asset.file}" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#F5F1EA" stroke-opacity=".065" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="1500" fill="url(#bg-${asset.file})"/>
  <rect width="1200" height="1500" fill="url(#glow-${asset.file})"/>
  <rect width="1200" height="1500" fill="url(#grid-${asset.file})" opacity=".7"/>

  <circle cx="1020" cy="190" r="330" fill="${asset.accent}" opacity=".14"/>
  <circle cx="160" cy="1220" r="340" fill="${asset.secondary}" opacity=".09"/>

  <text x="90" y="115" fill="${asset.accent}" opacity=".85" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="13">${asset.label}</text>

  ${shapeMarkup(asset.shape, asset.accent, asset.secondary)}

  <rect x="76" y="1190" width="1048" height="210" rx="42" fill="#0D0D0D" opacity=".48" stroke="#F5F1EA" stroke-opacity=".09"/>

  <text x="105" y="1290" fill="${asset.secondary}" opacity=".9" font-family="Georgia, 'Times New Roman', serif" font-size="76" letter-spacing="-4">${asset.title}</text>
  <text x="110" y="1358" fill="${asset.accent}" opacity=".78" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="12">${asset.subtitle}</text>

  <path d="M88 1430 L1112 1430" stroke="${asset.secondary}" stroke-opacity=".12" stroke-width="2"/>
</svg>`;
}

for (const asset of assets) {
  fs.writeFileSync(path.join(outputDir, asset.file), createSvg(asset), "utf8");
  console.log(`Generated ${asset.file}`);
}
