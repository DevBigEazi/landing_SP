import type { Metadata } from "next";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection (NDPR/GDPR)",
  description:
    "Learn how SellerPadi safeguards your merchant data, protects customer privacy with Zero-PII on-chain commitments, and complies with NDPR & GDPR standards.",
  openGraph: {
    ...sharedOpenGraph,
    title: "Privacy Policy & Data Protection | SellerPadi",
    description:
      "Learn how SellerPadi safeguards your merchant data, protects customer privacy with Zero-PII on-chain commitments, and complies with NDPR & GDPR standards.",
    url: "/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
