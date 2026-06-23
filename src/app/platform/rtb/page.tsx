import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, MetricGrid, FeatureList, CTABanner } from "@/components/sections/PageSections";
import { RTBArchitectureDiagram } from "@/components/mockups/ProductMockups";

export const metadata: Metadata = buildMetadata({
  title: "Real-Time Bidding Engine",
  description: "AdVolcano RTB engine — sub-50ms bid responses, OpenRTB 2.6 compliant, processing 180B+ daily bid requests across 40+ global data centers.",
  path: "/platform/rtb",
});

export default function RTBPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Platform", href: "/platform" }, { label: "Real-Time Bidding" }]} />
      </div>
      <PageHero
        title="Real-Time Bidding Engine"
        description="Purpose-built bid infrastructure processing 180 billion requests daily. Median response time under 42ms with 99.97% uptime across global edge nodes."
      />

      <section className="py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RTBArchitectureDiagram className="w-full border border-neutral-200" />
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MetricGrid
            metrics={[
              { value: "42ms", label: "Median latency", detail: "P99: 78ms" },
              { value: "180B+", label: "Daily bid requests", detail: "Global volume" },
              { value: "40+", label: "Edge data centers", detail: "6 continents" },
              { value: "99.97%", label: "Uptime SLA", detail: "Last 12 months" },
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Bid optimization" description="Proprietary algorithms adapt bidding strategy in real-time based on conversion probability, viewability, and competitive landscape." />
            <FeatureList
              features={[
                { title: "Bid shading", description: "Win auctions at minimum viable price in first-price environments." },
                { title: "Pacing algorithms", description: "Smooth spend delivery with intraday budget reallocation." },
                { title: "Frequency management", description: "Cross-campaign frequency caps with deduplication." },
              ]}
            />
          </div>
          <div>
            <SectionHeading title="Exchange connectivity" description="Pre-integrated with major SSPs and exchanges worldwide." />
            <div className="grid grid-cols-2 gap-3 mt-4">
              {["Google AdX", "Magnite", "PubMatic", "OpenX", "Index Exchange", "Xandr", "TripleLift", "Sovrn"].map((ex) => (
                <div key={ex} className="px-3 py-2.5 border border-neutral-200 bg-white text-[13px] text-neutral-700 font-medium">
                  {ex}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Technical specifications" />
          <div className="border border-neutral-200">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
              {[
                { label: "Protocol", value: "OpenRTB 2.6, OpenRTB 3.0 (beta)" },
                { label: "Auction types", value: "First-price, second-price" },
                { label: "Max QPS per node", value: "500,000" },
                { label: "Creative validation", value: "Pre-bid scanning, VAST 4.2" },
                { label: "Geo targeting", value: "Country, region, DMA, zip" },
                { label: "Device detection", value: "WURFL, custom UA parsing" },
              ].map((spec) => (
                <div key={spec.label} className="flex justify-between px-5 py-3.5 text-[13px]">
                  <span className="text-neutral-500">{spec.label}</span>
                  <span className="text-neutral-800 font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Benchmark our RTB engine" description="Request a latency and throughput assessment against your current infrastructure." />
    </>
  );
}
