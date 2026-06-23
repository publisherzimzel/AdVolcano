import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, CTABanner } from "@/components/sections/PageSections";

export const metadata: Metadata = buildMetadata({
  title: "Integrations",
  description: "AdVolcano integrations — connect with CRM, analytics, data warehouses, creative tools, and ad verification partners.",
  path: "/integrations",
});

const categories = [
  {
    name: "Analytics & BI",
    partners: ["Google Analytics 4", "Adobe Analytics", "Looker", "Tableau", "Power BI", "Amplitude"],
  },
  {
    name: "Data Warehouses",
    partners: ["Snowflake", "Google BigQuery", "Amazon Redshift", "Databricks", "Azure Synapse"],
  },
  {
    name: "CRM & CDP",
    partners: ["Salesforce", "HubSpot", "Segment", "mParticle", "Tealium", "Adobe Experience Platform"],
  },
  {
    name: "Ad Verification",
    partners: ["IAS", "DoubleVerify", "MOAT", "Pixalate", "Human (White Ops)"],
  },
  {
    name: "Creative Tools",
    partners: ["Google Studio", "Celtra", "Flashtalking", "CreativeX", "Bannerflow"],
  },
  {
    name: "SSPs & Exchanges",
    partners: ["Google AdX", "Magnite", "PubMatic", "OpenX", "Index Exchange", "Xandr"],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Integrations" }]} />
      </div>
      <PageHero
        title="Integrations ecosystem"
        description="AdVolcano connects with the tools your team already uses. Pre-built connectors, webhook support, and a flexible API for custom integrations."
      />

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-[14px] font-semibold text-navy uppercase tracking-wider mb-4">{cat.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {cat.partners.map((partner) => (
                  <div key={partner} className="px-4 py-3 border border-neutral-200 bg-white text-[13px] text-neutral-700 font-medium text-center hover:border-neutral-400 transition-colors">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading title="Custom integrations" description="Need to connect a tool not listed? Our integration team builds custom connectors for enterprise customers." />
            <ul className="space-y-2 mt-4">
              {["Webhook event streaming", "Custom ETL pipelines", "SSO/SAML integration", "Dedicated VPN connectivity"].map((f) => (
                <li key={f} className="text-[13px] text-neutral-700">— {f}</li>
              ))}
            </ul>
          </div>
          <div className="border border-neutral-200 bg-white p-6 font-mono text-[12px]">
            <div className="text-neutral-500 mb-2">webhook payload example</div>
            <pre className="text-neutral-700 leading-relaxed overflow-x-auto">{`{
  "event": "campaign.budget_exceeded",
  "timestamp": "2026-06-19T14:30:00Z",
  "data": {
    "campaign_id": "camp_8x7k2m",
    "budget": 124500.00,
    "spend": 124512.34,
    "threshold": 100
  }
}`}</pre>
          </div>
        </div>
      </section>

      <CTABanner title="Need a custom integration?" description="Our solutions engineering team can build connectors for your specific tech stack." />
    </>
  );
}
