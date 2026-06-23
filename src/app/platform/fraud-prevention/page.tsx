import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, ComparisonTable, MetricGrid, CTABanner } from "@/components/sections/PageSections";

export const metadata: Metadata = buildMetadata({
  title: "Fraud Prevention",
  description: "AdVolcano fraud prevention — IVT detection, brand safety scoring, supply path optimization, and MRC-accredited measurement for enterprise advertisers.",
  path: "/platform/fraud-prevention",
});

export default function FraudPreventionPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Platform", href: "/platform" }, { label: "Fraud Prevention" }]} />
      </div>
      <PageHero
        title="Fraud Prevention & Brand Safety"
        description="Protect your media investment with MRC-accredited IVT detection, pre-bid brand safety filtering, and transparent supply path reporting."
      />

      <section className="py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MetricGrid
            metrics={[
              { value: "< 0.5%", label: "IVT rate", detail: "Across platform" },
              { value: "99.2%", label: "Pre-bid block rate", detail: "Known fraud patterns" },
              { value: "MRC", label: "Accredited", detail: "IVT & viewability" },
              { value: "24/7", label: "Threat monitoring", detail: "SOC team" },
            ]}
          />
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="IVT detection" description="Multi-layered fraud detection combining behavioral analysis, device fingerprinting, and industry blocklists." />
            <ul className="space-y-3 mt-4">
              {[
                "General Invalid Traffic (GIVT) filtering",
                "Sophisticated Invalid Traffic (SIVT) detection",
                "Bot and crawler identification",
                "Datacenter traffic blocking",
                "Click injection prevention",
                "Ad stacking and pixel stuffing detection",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] text-neutral-700">
                  <span className="text-teal mt-0.5">■</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Brand safety" description="Pre-bid content classification across 50+ language models with customizable category blocking." />
            <ul className="space-y-3 mt-4">
              {[
                "IAS and DoubleVerify integration",
                "Custom keyword blocklists",
                "Category-level blocking (15 IAB categories)",
                "Page-level URL exclusion",
                "App store rating filters",
                "News sentiment scoring",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] text-neutral-700">
                  <span className="text-blue mt-0.5">■</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Supply path optimization" description="Identify and eliminate unnecessary intermediaries in your supply chain." />
          <ComparisonTable
            headers={["Feature", "AdVolcano", "Industry Average"]}
            rows={[
              ["Supply path transparency", "Full ads.txt/sellers.json validation", "Partial"],
              ["Direct publisher connections", "2,400+", "~800"],
              ["Average supply hops", "1.8", "3.2"],
              ["SPO recommendations", "Automated", "Manual"],
            ]}
          />
        </div>
      </section>

      <CTABanner title="Audit your supply chain" description="Get a free supply path analysis showing potential savings and fraud exposure." primaryLabel="Request Audit" />
    </>
  );
}
