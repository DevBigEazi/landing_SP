import type { Metadata } from "next";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Terms of Service & Merchant Agreement",
  description:
    "Review the terms governing merchant subscriptions, digital sales books, smart QR receipts, delivery custody verification, and fair billing policies.",
  openGraph: {
    ...sharedOpenGraph,
    title: "Terms of Service & Merchant Agreement | SellerPadi",
    description:
      "Review the terms governing merchant subscriptions, digital sales books, smart QR receipts, delivery custody verification, and fair billing policies.",
    url: "/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
