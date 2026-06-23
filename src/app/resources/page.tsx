import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading } from "@/components/sections/PageSections";

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description: "AdVolcano resources — documentation, guides, whitepapers, compliance information, and technical specifications for enterprise AdTech.",
  path: "/resources",
});

const resources = [
  { title: "Platform Documentation", type: "Documentation", desc: "Complete guide to campaign management, targeting, and optimization.", href: "/developers" },
  { title: "API Reference", type: "Technical", desc: "REST API endpoints, authentication, rate limits, and SDK documentation.", href: "/developers" },
  { title: "Integration Guide", type: "Guide", desc: "Step-by-step setup for CRM, analytics, and data warehouse connections.", href: "/integrations" },
  { title: "OpenRTB Specification", type: "Technical", desc: "Bid request/response formats and adapter configuration.", href: "/platform/rtb" },
  { title: "Compliance & Privacy", type: "Legal", desc: "GDPR, CCPA, SOC 2, and data processing agreements.", href: "#compliance" },
  { title: "Migration Playbook", type: "Guide", desc: "Migrate from legacy DSPs with minimal campaign disruption.", href: "/contact" },
];

const whitepapers = [
  { title: "The State of Programmatic 2026", date: "March 2026" },
  { title: "Enterprise Attribution Best Practices", date: "January 2026" },
  { title: "Supply Path Optimization Guide", date: "November 2025" },
  { title: "CTV Advertising Measurement Framework", date: "September 2025" },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
      </div>
      <PageHero
        title="Resources & documentation"
        description="Technical documentation, integration guides, compliance information, and industry research for AdVolcano platform users."
      />

      <section className="py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Documentation & guides" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((r) => (
              <Link key={r.title} href={r.href} className="border border-neutral-200 p-5 hover:border-neutral-400 transition-colors group">
                <span className="text-[11px] font-medium text-blue uppercase tracking-wider">{r.type}</span>
                <h3 className="mt-2 text-[14px] font-semibold text-navy group-hover:text-blue transition-colors">{r.title}</h3>
                <p className="mt-1 text-[13px] text-neutral-600">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Whitepapers & research" />
          <div className="space-y-3">
            {whitepapers.map((wp) => (
              <div key={wp.title} className="flex items-center justify-between p-4 border border-neutral-200 hover:bg-neutral-50 transition-colors">
                <div>
                  <h3 className="text-[14px] font-medium text-navy">{wp.title}</h3>
                  <span className="text-[12px] text-neutral-500">{wp.date}</span>
                </div>
                <span className="text-[13px] font-medium text-blue">Download →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compliance" className="py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Compliance & certifications" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { cert: "SOC 2 Type II", desc: "Annual third-party audit of security controls" },
              { cert: "ISO 27001", desc: "Information security management certification" },
              { cert: "GDPR Compliant", desc: "EU data residency and processing agreements" },
              { cert: "MRC Accredited", desc: "Viewability and IVT measurement standards" },
            ].map((c) => (
              <div key={c.cert} className="p-5 border border-neutral-200">
                <h3 className="text-[14px] font-semibold text-navy">{c.cert}</h3>
                <p className="mt-1 text-[12px] text-neutral-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="privacy" className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Legal" />
          <div className="space-y-3">
            {["Privacy Policy", "Terms of Service", "Data Processing Agreement", "Cookie Policy"].map((doc) => (
              <div key={doc} className="flex items-center justify-between py-3 border-b border-neutral-100">
                <span className="text-[14px] text-neutral-700">{doc}</span>
                <span className="text-[13px] text-blue">View →</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
