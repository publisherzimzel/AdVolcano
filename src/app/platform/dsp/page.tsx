import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, ComparisonTable, FAQSection, CTABanner } from "@/components/sections/PageSections";
import { FAQSchema } from "@/components/seo/StructuredData";
import { CampaignManagerMockup, WorkflowDiagram, AudienceBuilderMockup } from "@/components/mockups/ProductMockups";

export const metadata: Metadata = buildMetadata({
  title: "Demand Side Platform",
  description: "AdVolcano DSP — enterprise campaign management for display, video, CTV, and mobile programmatic buying with real-time optimization.",
  path: "/platform/dsp",
});

const faqs = [
  { question: "What ad formats does the DSP support?", answer: "Display (IAB standard sizes), video (in-stream, out-stream, CTV), native, audio, and mobile in-app. All formats support VAST/VPAID compliant creatives." },
  { question: "Can I import existing campaigns?", answer: "Yes. We support bulk import via CSV and API migration from major DSPs including The Trade Desk, DV360, and Amazon DSP." },
  { question: "What targeting options are available?", answer: "First-party data, third-party segments, contextual, geo, device, dayparting, frequency capping, and custom audience builder with boolean logic." },
];

export default function DSPPage() {
  return (
    <>
      <FAQSchema items={faqs} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Platform", href: "/platform" }, { label: "Demand Side Platform" }]} />
      </div>
      <PageHero
        title="Demand Side Platform"
        description="Plan, execute, and optimize programmatic campaigns across every channel from a single interface. Built for media teams managing $1M+ monthly ad spend."
      />

      <section className="py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <CampaignManagerMockup />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-navy">Campaign management at scale</h2>
              <p className="mt-2 text-[14px] text-neutral-600 leading-relaxed">
                Create campaigns in minutes, not days. Hierarchical campaign structure supports unlimited ad groups, line items, and creative variants with independent budget allocation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "Unlimited", label: "Campaigns" },
                { val: "50+", label: "Targeting dimensions" },
                { val: "Real-time", label: "Budget pacing" },
                { val: "A/B/n", label: "Creative testing" },
              ].map((s) => (
                <div key={s.label} className="p-3 border border-neutral-200">
                  <div className="text-[15px] font-semibold text-navy">{s.val}</div>
                  <div className="text-[11px] text-neutral-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Campaign workflow" />
          <WorkflowDiagram className="w-full border border-neutral-200" />
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading title="Audience builder" description="Compose complex audience segments with include/exclude logic, lookalike modeling, and real-time reach estimation." />
          </div>
          <AudienceBuilderMockup />
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="DSP feature comparison" description="How AdVolcano DSP compares to legacy enterprise platforms." />
          <ComparisonTable
            headers={["Capability", "AdVolcano", "Legacy DSP A", "Legacy DSP B"]}
            rows={[
              ["Cross-channel buying", "✓", "✓", "Partial"],
              ["Real-time optimization", "✓", "Partial", "✓"],
              ["Custom bid algorithms", "✓", "—", "—"],
              ["API-first design", "✓", "Partial", "Partial"],
              ["Transparent pricing", "✓", "—", "—"],
              ["White-label reporting", "✓", "✓", "—"],
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently asked questions" align="center" />
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTABanner title="Ready to consolidate your DSP?" description="See how AdVolcano DSP can replace your current stack." />
    </>
  );
}
