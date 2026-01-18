import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NauticEd Sailing Courses | Professional Certifications | VIYB",
  description: "NauticEd sailing certifications in the British Virgin Islands. From Bareboat Charter Master to Captain rank, get internationally recognized sailing credentials.",
  keywords: [
    "NauticEd courses BVI",
    "sailing certification Caribbean",
    "NauticEd training",
    "professional sailing courses",
    "international sailing license",
    "NauticEd partner BVI",
  ],
  openGraph: {
    title: "NauticEd Sailing Courses | Professional Certifications | VIYB",
    description: "NauticEd sailing certifications in the BVI. Internationally recognized credentials from Bareboat Charter Master to Captain rank.",
    url: "https://services.virginislandsyachtbroker.com/training/nauticed",
    siteName: "Virgin Islands Yacht Broker",
    images: [
      {
        url: "https://services.virginislandsyachtbroker.com/hero/day-skipper.jpg",
        width: 1200,
        height: 630,
        alt: "NauticEd sailing certification courses in the BVI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NauticEd Courses | BVI Sailing Certifications",
    description: "Professional NauticEd sailing certifications in the Caribbean.",
    images: ["https://services.virginislandsyachtbroker.com/hero/day-skipper.jpg"],
  },
  alternates: {
    canonical: "https://services.virginislandsyachtbroker.com/training/nauticed",
  },
};

export default function NauticEdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
