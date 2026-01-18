import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Captain Rank Certification | NauticEd Advanced | VIYB",
  description: "Achieve Captain rank with NauticEd's highest certification level. Advanced sailing skills, leadership, and comprehensive maritime knowledge for experienced sailors.",
  keywords: [
    "Captain rank certification",
    "NauticEd Captain",
    "advanced sailing certification",
    "master sailor qualification",
    "professional sailing credentials",
    "captain sailing license",
  ],
  openGraph: {
    title: "Captain Rank Certification | NauticEd Advanced | VIYB",
    description: "Achieve NauticEd's highest certification level. Advanced sailing skills and leadership for experienced sailors.",
    url: "https://services.virginislandsyachtbroker.com/training/nauticed/captain-rank",
    siteName: "Virgin Islands Yacht Broker",
    images: [
      {
        url: "https://services.virginislandsyachtbroker.com/hero/day-skipper.jpg",
        width: 1200,
        height: 630,
        alt: "Captain Rank sailing certification - NauticEd advanced",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Captain Rank | NauticEd Advanced Certification",
    description: "Highest level NauticEd sailing certification.",
    images: ["https://services.virginislandsyachtbroker.com/hero/day-skipper.jpg"],
  },
  alternates: {
    canonical: "https://services.virginislandsyachtbroker.com/training/nauticed/captain-rank",
  },
};

export default function CaptainRankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
