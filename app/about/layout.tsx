import type { Metadata } from "next";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "About SellerPadi — Smart QR Receipts & Logistics Tracking",
  description:
    "Learn how SellerPadi combines smart QR receipts, digital sales registers, and tamperproof package dispatches to empower modern commerce.",
  openGraph: {
    ...sharedOpenGraph,
    title: "About SellerPadi — Smart QR Receipts & Logistics Tracking | SellerPadi",
    description:
      "Learn how SellerPadi combines smart QR receipts, digital sales registers, and tamperproof package dispatches.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
