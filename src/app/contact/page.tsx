import type { Metadata } from "next";
import { buildMetadata, siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageSections";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Contact AdVolcano — request a demo, talk to sales, or get technical support for enterprise programmatic advertising.",
  path: "/contact",
});

type Props = {
  searchParams: Promise<{ intent?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const intent = params.intent === "demo" ? "demo" : "contact";

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: intent === "demo" ? "Request Demo" : "Contact" }]} />
      </div>
      <PageHero
        title={intent === "demo" ? "Request a platform demo" : "Contact our team"}
        description={
          intent === "demo"
            ? "Schedule a personalized walkthrough with our solutions engineering team."
            : "Request a platform demo, speak with our enterprise sales team, or get technical support. We respond within one business day."
        }
      />

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm intent={intent} />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-[14px] font-semibold text-navy mb-3">Sales inquiries</h2>
              <p className="text-[13px] text-neutral-600">{siteConfig.contact.email}</p>
              <p className="text-[13px] text-neutral-600 mt-1">{siteConfig.contact.phone}</p>
            </div>
            <div>
              <h2 className="text-[14px] font-semibold text-navy mb-3">Headquarters</h2>
              <p className="text-[13px] text-neutral-600">{siteConfig.contact.address}</p>
            </div>
            <div>
              <h2 className="text-[14px] font-semibold text-navy mb-3">Support</h2>
              <p className="text-[13px] text-neutral-600">Existing customers: support@advolcano.io</p>
              <p className="text-[13px] text-neutral-500 mt-1">Enterprise SLA: 1-hour response time</p>
            </div>
            <div className="premium-card p-5 bg-surface">
              <h2 className="text-[14px] font-semibold text-navy mb-2">Wallet top-up</h2>
              <p className="text-[13px] text-neutral-600">
                Existing customers can add funds via secure Razorpay card payment on our{" "}
                <a href="/payment" className="text-blue font-medium hover:underline">payment page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
