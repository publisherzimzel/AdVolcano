import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, CTABanner } from "@/components/sections/PageSections";

export const metadata: Metadata = buildMetadata({
  title: "Developer APIs",
  description: "AdVolcano Developer APIs — RESTful endpoints for campaign management, reporting, audience management, and real-time bidding integration.",
  path: "/developers",
});

const endpoints = [
  { method: "GET", path: "/v2/campaigns", desc: "List all campaigns" },
  { method: "POST", path: "/v2/campaigns", desc: "Create a campaign" },
  { method: "GET", path: "/v2/campaigns/{id}", desc: "Get campaign details" },
  { method: "PUT", path: "/v2/campaigns/{id}", desc: "Update campaign" },
  { method: "GET", path: "/v2/reports/performance", desc: "Performance report" },
  { method: "POST", path: "/v2/audiences", desc: "Create audience segment" },
  { method: "GET", path: "/v2/audiences/{id}/reach", desc: "Estimate audience reach" },
  { method: "POST", path: "/v2/creatives", desc: "Upload creative asset" },
];

export default function DevelopersPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Developers" }]} />
      </div>
      <PageHero
        title="Developer APIs"
        description="Build custom workflows, automate campaign management, and integrate AdVolcano into your existing tech stack with our comprehensive REST API."
      />

      <section className="py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading title="Quick start" description="Authenticate with your API key and make your first request in minutes." />
            <div className="border border-neutral-200 font-mono text-[12px] mt-4">
              <div className="bg-neutral-50 px-4 py-2 border-b border-neutral-200 text-neutral-500 flex justify-between">
                <span>curl example</span>
                <span className="text-neutral-400">bash</span>
              </div>
              <pre className="p-4 overflow-x-auto text-neutral-700 leading-relaxed">{`curl -X GET \\
  https://api.advolcano.io/v2/campaigns \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</pre>
            </div>
          </div>
          <div>
            <SectionHeading title="Authentication" description="All API requests require a Bearer token. Generate keys from your account settings." />
            <div className="border border-neutral-200 font-mono text-[12px] mt-4">
              <div className="bg-neutral-50 px-4 py-2 border-b border-neutral-200 text-neutral-500">response</div>
              <pre className="p-4 overflow-x-auto text-neutral-700 leading-relaxed">{`{
  "data": [
    {
      "id": "camp_8x7k2m",
      "name": "Q2 Brand Awareness",
      "status": "active",
      "budget": 124500.00,
      "spend": 89234.12,
      "impressions": 48200000
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 25,
    "total": 12
  }
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="API reference" description="Core endpoints for campaign and audience management." />
          <div className="border border-neutral-200 divide-y divide-neutral-100">
            {endpoints.map((ep) => (
              <div key={ep.path + ep.method} className="flex items-center gap-4 px-4 py-3 hover:bg-neutral-50">
                <span className={`text-[11px] font-bold px-2 py-0.5 w-14 text-center ${
                  ep.method === "GET" ? "bg-teal/10 text-teal" :
                  ep.method === "POST" ? "bg-blue/10 text-blue" : "bg-neutral-100 text-neutral-600"
                }`}>
                  {ep.method}
                </span>
                <code className="text-[13px] text-navy font-mono flex-1">{ep.path}</code>
                <span className="text-[13px] text-neutral-500 hidden sm:block">{ep.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="SDKs & libraries" />
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { lang: "Node.js", pkg: "npm install @advolcano/sdk" },
              { lang: "Python", pkg: "pip install advolcano" },
              { lang: "Go", pkg: "go get github.com/advolcano/sdk-go" },
            ].map((sdk) => (
              <div key={sdk.lang} className="border border-neutral-200 bg-white p-5">
                <div className="text-[14px] font-semibold text-navy">{sdk.lang}</div>
                <code className="block mt-2 text-[12px] text-neutral-600 font-mono bg-neutral-50 px-2 py-1.5">{sdk.pkg}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Rate limits & SLAs" />
          <div className="grid md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {[
              { label: "Standard tier", value: "1,000 req/min" },
              { label: "Enterprise tier", value: "10,000 req/min" },
              { label: "API uptime SLA", value: "99.9%" },
            ].map((r) => (
              <div key={r.label} className="bg-white p-5 text-center">
                <div className="text-[15px] font-semibold text-navy">{r.value}</div>
                <div className="text-[12px] text-neutral-500 mt-1">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Get API access" description="Request developer credentials and sandbox environment access." primaryLabel="Request API Key" />
    </>
  );
}
