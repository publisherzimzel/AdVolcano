import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, FeatureList, CTABanner } from "@/components/sections/PageSections";

export const metadata: Metadata = buildMetadata({
  title: "For Agencies",
  description: "AdVolcano for agencies — multi-client management, white-label reporting, margin controls, and streamlined billing for media agencies.",
  path: "/solutions/agencies",
});

export default function AgenciesPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: "For Agencies" }]} />
      </div>
      <PageHero
        title="Built for agency workflows"
        description="Manage unlimited client accounts, deliver white-label reporting, and maintain margin visibility — all from a single platform designed for agency operations."
      />

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { title: "Multi-client management", desc: "Hierarchical account structure with role-based access. Separate budgets, creatives, and reporting per client.", icon: "01" },
              { title: "White-label reporting", desc: "Custom-branded dashboards and PDF reports. Your logo, your colors, your client experience.", icon: "02" },
              { title: "Margin management", desc: "Transparent fee structures with built-in margin tracking. Bill clients accurately with automated invoicing.", icon: "03" },
              { title: "Team collaboration", desc: "Assign team members to client accounts with granular permissions. Audit logs for all actions.", icon: "04" },
              { title: "Cross-client insights", desc: "Benchmark performance across your client portfolio. Identify optimization opportunities at scale.", icon: "05" },
              { title: "API automation", desc: "Automate campaign creation, reporting, and billing through our comprehensive REST API.", icon: "06" },
            ].map((item) => (
              <div key={item.title} className="border border-neutral-200 p-6">
                <div className="text-[11px] font-bold text-blue mb-3">{item.icon}</div>
                <h3 className="text-[15px] font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-[13px] text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Agency pricing model" description="Volume-based pricing that scales with your client roster. No per-seat fees." />
            <FeatureList
              features={[
                { title: "Unlimited users", description: "Add your entire team without per-seat licensing costs." },
                { title: "Unlimited clients", description: "No cap on client accounts or campaigns." },
                { title: "Agency discount tiers", description: "Progressive discounts based on aggregate media spend." },
              ]}
            />
          </div>
          <div className="border border-neutral-200 bg-white p-6">
            <h3 className="text-[14px] font-semibold text-navy mb-4">Typical agency savings</h3>
            <div className="space-y-4">
              {[
                { label: "Platform consolidation", saving: "$150K/yr" },
                { label: "Reporting automation", saving: "20 hrs/week" },
                { label: "Reduced IVT waste", saving: "$80K/yr" },
                { label: "Faster onboarding", saving: "3x faster" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0">
                  <span className="text-[13px] text-neutral-600">{s.label}</span>
                  <span className="text-[13px] font-semibold text-teal">{s.saving}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Scale your agency operations" description="See how top agencies manage 50+ clients on AdVolcano." primaryLabel="Agency Demo" />
    </>
  );
}
