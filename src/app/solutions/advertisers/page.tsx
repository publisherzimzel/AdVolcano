import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, FeatureList, ComparisonTable, CTABanner } from "@/components/sections/PageSections";
import { CampaignManagerMockup } from "@/components/mockups/ProductMockups";

export const metadata: Metadata = buildMetadata({
  title: "For Advertisers",
  description: "AdVolcano for advertisers — maximize ROAS with enterprise programmatic buying, multi-touch attribution, and dedicated account management.",
  path: "/solutions/advertisers",
});

export default function AdvertisersPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: "For Advertisers" }]} />
      </div>
      <PageHero
        title="Programmatic buying for enterprise advertisers"
        description="Consolidate your media stack, improve attribution accuracy, and reduce wasted spend — without sacrificing control or transparency."
      />

      <section className="py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-lg font-semibold text-navy">The challenge</h2>
            <p className="mt-3 text-[14px] text-neutral-600 leading-relaxed">
              Enterprise advertisers typically manage 4–6 separate platforms for buying, measurement, and fraud prevention. Data lives in silos, attribution is inconsistent, and vendor costs compound.
            </p>
            <h2 className="text-lg font-semibold text-navy mt-8">The AdVolcano approach</h2>
            <p className="mt-3 text-[14px] text-neutral-600 leading-relaxed">
              A single platform for buying, optimizing, measuring, and protecting your media investment. Your data stays unified from bid to conversion.
            </p>
          </div>
          <CampaignManagerMockup />
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Key capabilities for advertisers" />
          <FeatureList
            features={[
              { title: "Cross-channel buying", description: "Display, video, CTV, audio, and mobile from one campaign interface." },
              { title: "Advanced attribution", description: "Seven attribution models plus incrementality testing to prove media impact." },
              { title: "Budget governance", description: "Approval workflows, spend caps, and real-time alerts for finance teams." },
              { title: "Dedicated support", description: "Named account manager, quarterly business reviews, and optimization recommendations." },
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Results our advertisers see" />
          <ComparisonTable
            headers={["Metric", "Before AdVolcano", "After AdVolcano"]}
            rows={[
              ["Platform vendors", "4–6", "1"],
              ["Average ROAS", "2.1x", "3.2x"],
              ["Reporting time", "3–5 days", "Real-time"],
              ["IVT rate", "2–4%", "< 0.5%"],
              ["Integration costs", "$200K+/yr", "Included"],
            ]}
          />
        </div>
      </section>

      <CTABanner title="Talk to an advertiser specialist" description="See how brands like yours have consolidated their programmatic stack." />
    </>
  );
}
