import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, MetricGrid, CTABanner } from "@/components/sections/PageSections";

export const metadata: Metadata = buildMetadata({
  title: "For Publishers",
  description: "AdVolcano for publishers — yield optimization, header bidding, direct deal management, and transparent revenue reporting.",
  path: "/solutions/publishers",
});

export default function PublishersPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: "For Publishers" }]} />
      </div>
      <PageHero
        title="Maximize publisher yield"
        description="Header bidding, direct deal management, and transparent reporting — tools built for publishers who demand control over their inventory and revenue."
      />

      <section className="py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MetricGrid
            metrics={[
              { value: "25%", label: "Avg yield increase", detail: "vs single SSP" },
              { value: "2,400+", label: "Direct buyers", detail: "On platform" },
              { value: "< 100ms", label: "Header bidding timeout", detail: "Optimized" },
              { value: "100%", label: "Revenue transparency", detail: "No hidden fees" },
            ]}
          />
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Header bidding suite" description="Prebid.js compatible wrapper with optimized timeout management and demand partner prioritization." />
            <ul className="space-y-2 mt-4">
              {["Prebid.js 8.x compatible", "Server-side bidding option", "Dynamic floor pricing", "Ad refresh controls", "Lazy loading support"].map((f) => (
                <li key={f} className="text-[13px] text-neutral-700 flex items-center gap-2">
                  <span className="w-1 h-1 bg-teal rounded-full" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Direct deal management" description="Create, manage, and report on programmatic guaranteed and preferred deals." />
            <ul className="space-y-2 mt-4">
              {["PG and PMP deal creation", "Automated deal ID management", "Buyer discovery marketplace", "Revenue forecasting", "Custom reporting"].map((f) => (
                <li key={f} className="text-[13px] text-neutral-700 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue rounded-full" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Publisher onboarding process" />
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Technical review", time: "Day 1" },
              { step: "2", title: "Ad tag integration", time: "Days 2–3" },
              { step: "3", title: "Demand activation", time: "Days 4–5" },
              { step: "4", title: "Optimization", time: "Ongoing" },
            ].map((s) => (
              <div key={s.step} className="p-5 border border-neutral-200 bg-white">
                <div className="text-[20px] font-semibold text-blue">{s.step}</div>
                <div className="mt-2 text-[14px] font-semibold text-navy">{s.title}</div>
                <div className="text-[12px] text-neutral-500 mt-1">{s.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Increase your ad revenue" description="Get a free yield assessment of your current monetization setup." primaryLabel="Publisher Inquiry" />
    </>
  );
}
