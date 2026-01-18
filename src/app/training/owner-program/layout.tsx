import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Owner Training Program | Catamaran Familiarization | My Caribbean Charters",
  description: "Comprehensive training for new catamaran owners. Learn your boat's systems, handling characteristics, and Caribbean cruising essentials with personalized instruction.",
  keywords: [
    "catamaran owner training",
    "yacht familiarization course",
    "new boat owner training",
    "Bali catamaran training",
    "yacht systems training",
    "Caribbean cruising course",
  ],
  openGraph: {
    title: "New Owner Training Program | Catamaran Training | My Caribbean Charters",
    description: "Comprehensive training for new catamaran owners. Learn your boat's systems and Caribbean cruising essentials.",
    url: "https://mycaribbeancharters.com/training/owner-program",
    siteName: "My Caribbean Charters",
    images: [
      {
        url: "https://mycaribbeancharters.com/hero/day-skipper.jpg",
        width: 1200,
        height: 630,
        alt: "New owner catamaran training program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owner Training Program | Learn Your Catamaran",
    description: "Personalized training for new catamaran owners.",
    images: ["https://mycaribbeancharters.com/hero/day-skipper.jpg"],
  },
  alternates: {
    canonical: "https://mycaribbeancharters.com/training/owner-program",
  },
};

export default function OwnerProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
