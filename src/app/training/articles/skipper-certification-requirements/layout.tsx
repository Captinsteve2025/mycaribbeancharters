import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Charter Companies Look for in Skipper Certification | My Caribbean Charters",
  description:
    "Understand exactly what credentials charter companies require before approving bareboat charters. Sailing resumes, certifications, and experience requirements explained.",
  keywords: [
    "charter skipper certification",
    "bareboat charter requirements",
    "sailing resume for charter",
    "charter company credentials",
    "catamaran charter qualifications",
    "sailing experience for charter",
    "charter approval requirements",
    "skipper qualification charter",
    "what certification for bareboat",
    "charter company requirements",
  ],
  openGraph: {
    title: "What Charter Companies Look for in Skipper Certification",
    description:
      "Understand exactly what credentials charter companies require before approving bareboat charters. Your complete guide to charter approval.",
    url: "https://mycaribbeancharters.com/training/articles/skipper-certification-requirements",
    siteName: "My Caribbean Charters",
    images: [
      {
        url: "https://mycaribbeancharters.com/bali/5-4/5-4-01.jpg",
        width: 1200,
        height: 630,
        alt: "Skipper certification requirements for bareboat charter",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Charter Companies Look for in Skipper Certification",
    description:
      "Credentials, experience, and qualifications charter companies require for bareboat approval.",
    images: ["https://mycaribbeancharters.com/bali/5-4/5-4-01.jpg"],
  },
  alternates: {
    canonical: "https://mycaribbeancharters.com/training/articles/skipper-certification-requirements",
  },
};

export default function SkipperCertificationRequirementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
