import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, CTABanner } from "@/components/sections/PageSections";

export const metadata: Metadata = buildMetadata({
  title: "Solutions Overview",
  description: "AdVolcano solutions for advertisers, agencies, and publishers — tailored programmatic advertising infrastructure for every role in the digital media ecosystem.",
  path: "/solutions",
});

const solutions = [
  {
    title: "For Advertisers",
    href: "/solutions/advertisers",
    description: "Maximize ROAS with unified cross-channel buying, advanced attribution, and dedicated account support for brands spending $10M+ annually.",
    metrics: ["3.2x avg ROAS improvement", "40% reduction in vendor costs"],
  },
  {
    title: "For Agencies",
    href: "/solutions/agencies",
    description: "Manage multiple clients from a single platform with white-label reporting, margin management, and streamlined billing.",
    metrics: ["Unlimited client accounts", "White-label dashboards"],
  },
  {
    title: "For Publishers",
    href: "/solutions/publishers",
    description: "Maximize yield with header bidding, direct deal management, and transparent revenue reporting.",
    metrics: ["25% avg yield increase", "Prebid.js compatible"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
      </div>
      <PageHero
        title="Solutions for every stakeholder"
        description="Whether you buy, sell, or manage media — AdVolcano provides purpose-built workflows and tooling for your role in the programmatic ecosystem."
      />

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {solutions.map((sol, i) => (
            <div key={sol.href} className={`grid lg:grid-cols-3 gap-8 items-center py-10 ${i > 0 ? "border-t border-neutral-200" : ""}`}>
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold text-navy">
                  <Link href={sol.href} className="hover:text-blue transition-colors">{sol.title}</Link>
                </h2>
                <p className="mt-3 text-[14px] text-neutral-600 leading-relaxed max-w-2xl">{sol.description}</p>
                <Link href={sol.href} className="inline-block mt-4 text-[13px] font-medium text-blue">
                  View solution details →
                </Link>
              </div>
              <div className="space-y-3">
                {sol.metrics.map((m) => (
                  <div key={m} className="px-4 py-3 bg-neutral-50 border border-neutral-200 text-[13px] font-medium text-navy">
                    {m}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner title="Not sure which solution fits?" description="Our solutions team will assess your needs and recommend the right configuration." />
    </>
  );
}
