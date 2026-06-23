import type { Metadata } from "next";
import { buildMetadata, siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, CTABanner } from "@/components/sections/PageSections";

export const metadata: Metadata = buildMetadata({
  title: "About AdVolcano",
  description: "About AdVolcano — enterprise AdTech company building programmatic advertising infrastructure since 2018. 340+ customers, 180B+ daily bid requests.",
  path: "/about",
});

const leadership = [
  { name: "Sarah Chen", role: "CEO & Co-Founder", bio: "Previously VP Engineering at The Trade Desk. 15 years in programmatic advertising." },
  { name: "Marcus Williams", role: "CTO & Co-Founder", bio: "Former principal engineer at Google Ad Manager. Built RTB systems processing 1T+ daily requests." },
  { name: "Elena Rodriguez", role: "Chief Revenue Officer", bio: "20 years in enterprise SaaS sales. Previously SVP at Salesforce Marketing Cloud." },
  { name: "David Park", role: "VP Engineering", bio: "Led infrastructure teams at Cloudflare and Akamai. Expert in distributed systems at scale." },
];

const timeline = [
  { year: "2018", event: "Founded in San Francisco. Seed funding from leading AdTech investors." },
  { year: "2019", event: "Launched RTB engine. First enterprise customer onboarded." },
  { year: "2020", event: "Series A funding. Expanded to 50+ data centers globally." },
  { year: "2022", event: "Analytics platform launch. MRC accreditation achieved." },
  { year: "2024", event: "340+ enterprise customers. 180B+ daily bid requests." },
  { year: "2026", event: "Fraud prevention suite launch. ISO 27001 certification." },
];

export default function AboutPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      </div>
      <PageHero
        title="Building the infrastructure for programmatic advertising"
        description="Founded in 2018, AdVolcano provides enterprise-grade programmatic advertising technology to brands, agencies, and publishers worldwide."
      />

      <section className="py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Our mission" description="Make programmatic advertising transparent, efficient, and measurable for enterprise media teams." />
            <p className="text-[14px] text-neutral-600 leading-relaxed mt-4">
              The programmatic ecosystem has become unnecessarily complex. Advertisers juggle multiple platforms, data lives in silos, and too much budget is lost to fraud and inefficiency. We built AdVolcano to fix this — one platform that handles buying, measurement, and protection.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "340+", label: "Enterprise customers" },
              { value: "180B+", label: "Daily bid requests" },
              { value: "200+", label: "Team members" },
              { value: "6", label: "Global offices" },
            ].map((s) => (
              <div key={s.label} className="p-5 border border-neutral-200 text-center">
                <div className="text-2xl font-semibold text-navy">{s.value}</div>
                <div className="text-[12px] text-neutral-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Company timeline" />
          <div className="mt-6 space-y-0">
            {timeline.map((t) => (
              <div key={t.year} className="grid grid-cols-[80px_1fr] gap-6 py-4 border-b border-neutral-100 last:border-0">
                <div className="text-[14px] font-semibold text-blue">{t.year}</div>
                <div className="text-[14px] text-neutral-600">{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Leadership" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="border border-neutral-200 p-5">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-[14px] font-semibold text-navy mb-3">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-[14px] font-semibold text-navy">{person.name}</h3>
                <div className="text-[12px] text-blue mt-0.5">{person.role}</div>
                <p className="mt-2 text-[12px] text-neutral-600 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Global offices" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { city: "San Francisco", role: "Headquarters" },
              { city: "New York", role: "East Coast Sales" },
              { city: "London", role: "EMEA Operations" },
              { city: "Singapore", role: "APAC Hub" },
              { city: "Tokyo", role: "Japan Office" },
              { city: "São Paulo", role: "LATAM Office" },
            ].map((office) => (
              <div key={office.city} className="p-4 border border-neutral-200">
                <div className="text-[14px] font-semibold text-navy">{office.city}</div>
                <div className="text-[12px] text-neutral-500">{office.role}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] text-neutral-500">{siteConfig.contact.address}</p>
        </div>
      </section>

      <CTABanner title="Join our team" description="We're hiring engineers, product managers, and solutions architects." primaryLabel="View Careers" primaryHref="/about#careers" />
    </>
  );
}
