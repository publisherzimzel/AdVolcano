import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, CTABanner } from "@/components/sections/PageSections";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description: "AdVolcano case studies — how enterprise brands, agencies, and publishers achieve measurable results with programmatic advertising.",
  path: "/case-studies",
});

const caseStudies = [
  {
    company: "Fortune 100 Retailer",
    industry: "Retail",
    challenge: "Managing 5 separate DSPs with inconsistent attribution and $2M+ annual integration costs.",
    result: "Consolidated to AdVolcano, improved ROAS by 52%, reduced vendor costs by $1.8M annually.",
    metrics: [{ label: "ROAS improvement", value: "+52%" }, { label: "Cost savings", value: "$1.8M/yr" }, { label: "Platforms replaced", value: "5 → 1" }],
  },
  {
    company: "Global Media Agency",
    industry: "Agency",
    challenge: "Manual reporting across 40+ client accounts consuming 60+ hours weekly.",
    result: "Automated white-label reporting, onboarded 15 new clients without adding headcount.",
    metrics: [{ label: "Reporting time saved", value: "60 hrs/wk" }, { label: "New clients", value: "+15" }, { label: "Client retention", value: "98%" }],
  },
  {
    company: "Premium Publisher Network",
    industry: "Publishing",
    challenge: "Suboptimal yield from single-SSP setup with limited demand partner access.",
    result: "Header bidding implementation increased CPMs by 28% and expanded buyer pool to 2,400+.",
    metrics: [{ label: "CPM increase", value: "+28%" }, { label: "Active buyers", value: "2,400+" }, { label: "Fill rate", value: "94%" }],
  },
  {
    company: "Financial Services Brand",
    industry: "Finance",
    challenge: "High IVT rates (3.2%) and brand safety concerns across programmatic channels.",
    result: "Reduced IVT to 0.3%, implemented pre-bid brand safety with zero safety incidents in 12 months.",
    metrics: [{ label: "IVT reduction", value: "90%" }, { label: "Safety incidents", value: "0" }, { label: "Wasted spend recovered", value: "$420K" }],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
      </div>
      <PageHero
        title="Customer success stories"
        description="Measurable outcomes from enterprise brands, agencies, and publishers who consolidated their programmatic stack on AdVolcano."
      />

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {caseStudies.map((cs, i) => (
            <div key={cs.company} className={`grid lg:grid-cols-5 gap-8 ${i > 0 ? "pt-12 border-t border-neutral-200" : ""}`}>
              <div className="lg:col-span-2">
                <span className="text-[11px] font-medium text-blue uppercase tracking-wider">{cs.industry}</span>
                <h2 className="mt-2 text-xl font-semibold text-navy">{cs.company}</h2>
                <div className="mt-4 space-y-3">
                  <div>
                    <h3 className="text-[12px] font-semibold text-neutral-500 uppercase">Challenge</h3>
                    <p className="mt-1 text-[13px] text-neutral-600">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-[12px] font-semibold text-neutral-500 uppercase">Result</h3>
                    <p className="mt-1 text-[13px] text-neutral-600">{cs.result}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 grid sm:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="bg-white p-6 text-center">
                    <div className="text-2xl font-semibold text-navy">{m.value}</div>
                    <div className="mt-1 text-[12px] text-neutral-500">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner title="Write your success story" description="Join 340+ enterprise customers achieving measurable programmatic results." />
    </>
  );
}
