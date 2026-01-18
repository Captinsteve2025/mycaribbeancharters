import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SLC International Sailing License | NauticEd | VIYB",
  description: "Obtain the SLC (Sailing License Certificate) recognized internationally for bareboat chartering. Official documentation for charter companies worldwide.",
  keywords: [
    "SLC sailing license",
    "international sailing license",
    "sailing license certificate",
    "NauticEd SLC",
    "charter sailing license",
    "international sailing credentials",
  ],
  openGraph: {
    title: "SLC International Sailing License | NauticEd | VIYB",
    description: "Obtain the internationally recognized SLC for bareboat chartering. Official documentation accepted worldwide.",
    url: "https://services.virginislandsyachtbroker.com/training/nauticed/slc-license",
    siteName: "Virgin Islands Yacht Broker",
    images: [
      {
        url: "https://services.virginislandsyachtbroker.com/hero/day-skipper.jpg",
        width: 1200,
        height: 630,
        alt: "SLC International Sailing License - NauticEd certification",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLC International Sailing License | NauticEd",
    description: "Internationally recognized sailing license for bareboat charter.",
    images: ["https://services.virginislandsyachtbroker.com/hero/day-skipper.jpg"],
  },
  alternates: {
    canonical: "https://services.virginislandsyachtbroker.com/training/nauticed/slc-license",
  },
};

export default function SLCLicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
