import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageSections";
import { PaymentForm } from "@/components/payment/PaymentForm";

export const metadata: Metadata = buildMetadata({
  title: "Wallet Payment — Credit/Debit Card via Razorpay",
  description:
    "Top up your AdVolcano wallet via Razorpay with live USD to INR conversion. Secure card payments with transparent platform fees for enterprise advertisers.",
  path: "/payment",
  keywords: ["AdVolcano wallet payment", "Razorpay AdVolcano", "programmatic advertising wallet top-up"],
});

export default function PaymentPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Payment" }]} />
      </div>
      <PageHero
        title="Credit/Debit Card Payment"
        description="Top up your AdVolcano wallet via Razorpay with live USD → INR conversion."
      />
      <section className="py-14 pb-20">
        <PaymentForm />
      </section>
    </>
  );
}
