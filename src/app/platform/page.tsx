import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, FeatureList, CTABanner } from "@/components/sections/PageSections";
import { PlatformArchitectureDiagram, CampaignManagerMockup, AnalyticsMockup } from "@/components/mockups/ProductMockups";

export const metadata: Metadata = buildMetadata({
  title: "Platform Overview",
  description: "AdVolcano unified AdTech platform — DSP, RTB engine, analytics, fraud prevention, and audience management in a single enterprise infrastructure.",
  path: "/platform",
});

const modules = [
  { title: "Demand Side Platform", href: "/platform/dsp", desc: "Campaign creation, budget management, creative trafficking, and cross-channel buying." },
  { title: "Real-Time Bidding Engine", href: "/platform/rtb", desc: "Sub-50ms bid responses with proprietary optimization algorithms." },
  { title: "Analytics Platform", href: "/platform/analytics", desc: "Attribution modeling, custom dashboards, and data warehouse integration." },
  { title: "Fraud Prevention", href: "/platform/fraud-prevention", desc: "IVT filtering, brand safety, and supply path transparency." },
];

export default function PlatformPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Platform" }]} />
      </div>
      <PageHero
        title="Unified AdTech infrastructure"
        description="AdVolcano consolidates programmatic buying, measurement, and fraud prevention into a single platform — reducing vendor sprawl and integration complexity for enterprise media teams."
      />

      <section className="py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlatformArchitectureDiagram className="w-full border border-neutral-200" />
          <p className="mt-4 text-[12px] text-neutral-500 text-center">
            AdVolcano platform architecture — four-layer design with global CDN distribution
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Platform modules" description="Each module operates independently or as part of the integrated stack." />
          <div className="space-y-4">
            {modules.map((mod, i) => (
              <div key={mod.href} className={`grid lg:grid-cols-2 gap-8 items-center py-8 ${i > 0 ? "border-t border-neutral-200" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-lg font-semibold text-navy">
                    <Link href={mod.href} className="hover:text-blue transition-colors">{mod.title}</Link>
                  </h3>
                  <p className="mt-2 text-[14px] text-neutral-600 leading-relaxed">{mod.desc}</p>
                  <Link href={mod.href} className="inline-block mt-3 text-[13px] font-medium text-blue">
                    View module details →
                  </Link>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  {i % 2 === 0 ? <CampaignManagerMockup /> : <AnalyticsMockup />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why enterprises choose AdVolcano" />
          <FeatureList
            features={[
              { title: "Single vendor consolidation", description: "Replace 4–6 point solutions with one platform. Reduce integration costs and data fragmentation." },
              { title: "Transparent pricing", description: "No hidden fees, no percentage-of-media markup on technology. Flat platform fees with volume discounts." },
              { title: "Dedicated support", description: "Named account manager, solutions engineer, and 24/7 platform operations team." },
              { title: "API-first architecture", description: "Every platform capability accessible via REST API. Build custom workflows and integrations." },
            ]}
          />
        </div>
      </section>

      <CTABanner title="Explore platform modules" description="Dive deeper into each component of the AdVolcano stack." primaryLabel="Contact Sales" secondaryLabel="Developer APIs" secondaryHref="/developers" />
    </>
  );
}
