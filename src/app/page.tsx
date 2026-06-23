import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/site-config";
import {
  OrganizationSchema,
  WebSiteSchema,
  SoftwareApplicationSchema,
  FAQSchema,
} from "@/components/seo/StructuredData";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CampaignManagerMockup, RTBArchitectureDiagram } from "@/components/mockups/ProductMockups";
import {
  MetricGrid,
  CTABanner,
  SectionHeading,
  FAQSection,
  TrustBar,
  Testimonial,
} from "@/components/sections/PageSections";

export const metadata: Metadata = buildMetadata({
  title: "AdVolcano — Enterprise AdTech Platform for Programmatic Advertising",
  description:
    "AdVolcano delivers enterprise programmatic advertising infrastructure — DSP, real-time bidding, analytics, attribution, and fraud prevention. Trusted by Fortune 500 brands spending $10M+ on digital media.",
  path: "/",
  keywords: [
    "enterprise AdTech platform",
    "programmatic advertising",
    "demand side platform DSP",
    "real-time bidding RTB",
    "ad fraud prevention",
    "multi-touch attribution",
    "enterprise programmatic buying",
  ],
});

const capabilities = [
  {
    title: "Demand Side Platform",
    description: "Unified campaign management across display, video, CTV, and mobile with granular targeting and real-time budget pacing.",
    href: "/platform/dsp",
  },
  {
    title: "Real-Time Bidding Engine",
    description: "Sub-50ms bid responses across global exchanges with proprietary algorithms optimizing for CPA, ROAS, and viewability.",
    href: "/platform/rtb",
  },
  {
    title: "Analytics & Attribution",
    description: "Multi-touch attribution, incrementality testing, and custom reporting with native data warehouse integration.",
    href: "/platform/analytics",
  },
  {
    title: "Fraud Prevention",
    description: "MRC-accredited IVT detection, brand safety scoring, and supply path optimization protecting media investment.",
    href: "/platform/fraud-prevention",
  },
];

const pillars = [
  { title: "Global infrastructure", desc: "40+ edge data centers processing 180B+ bid requests daily with 99.97% uptime SLA." },
  { title: "Unified data layer", desc: "Single source of truth from bid request through conversion — no vendor data silos." },
  { title: "Enterprise security", desc: "SOC 2 Type II, ISO 27001, GDPR compliance with dedicated security operations." },
  { title: "Dedicated support", desc: "Named account manager, solutions engineer, and 24/7 platform operations for every enterprise client." },
];

const homeFaqs = [
  {
    question: "What is AdVolcano?",
    answer: "AdVolcano is an enterprise AdTech platform providing programmatic advertising infrastructure including a demand side platform (DSP), real-time bidding engine, analytics, attribution, and fraud prevention for brands, agencies, and publishers.",
  },
  {
    question: "Who uses AdVolcano?",
    answer: "Fortune 500 advertisers, global media agencies, and premium publishers who manage $10M+ in annual programmatic media spend and require enterprise-grade performance, compliance, and support.",
  },
  {
    question: "How does AdVolcano differ from legacy DSPs?",
    answer: "AdVolcano consolidates buying, measurement, and fraud prevention in a single platform with transparent enterprise licensing, API-first architecture, and sub-50ms bid latency — eliminating the vendor sprawl common in legacy stacks.",
  },
  {
    question: "What integrations does AdVolcano support?",
    answer: "Native connectors for Snowflake, BigQuery, Salesforce, Google Analytics, major SSPs, and ad verification partners. Full REST API access for custom workflows.",
  },
];

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <SoftwareApplicationSchema />
      <FAQSchema items={homeFaqs} />

      {/* Hero */}
      <section className="border-b border-neutral-200/80 bg-gradient-to-b from-surface to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-up">
              <p className="eyebrow mb-4">Enterprise Programmatic Advertising</p>
              <h1 className="text-[2rem] lg:text-[2.75rem] font-semibold text-navy tracking-tight leading-[1.12] text-balance">
                The AdTech infrastructure built for enterprise scale
              </h1>
              <p className="mt-5 text-[16px] lg:text-[17px] text-neutral-600 leading-relaxed max-w-lg">
                AdVolcano powers programmatic buying, real-time bidding, and measurement for brands investing $10M+ annually in digital media. A single platform trusted by Fortune 500 advertisers and tier-one agencies.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact?intent=demo" className="btn-primary">Request Demo</Link>
                <Link href="/platform" className="btn-secondary">Explore Platform</Link>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="premium-card p-1">
                <CampaignManagerMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar items={["Retail & CPG", "Financial Services", "Automotive", "Technology", "Healthcare", "Media & Entertainment"]} />

      {/* Metrics */}
      <section className="premium-section border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {[
              { end: 180, suffix: "B+", label: "Bid requests processed daily" },
              { end: 42, suffix: "ms", label: "Median bid response time" },
              { end: 99, suffix: ".97%", label: "Platform uptime SLA" },
              { end: 340, suffix: "+", label: "Enterprise customers" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl lg:text-4xl font-semibold text-navy tracking-tight">
                  <AnimatedCounter end={m.end} suffix={m.suffix} />
                </div>
                <div className="mt-2 text-[14px] text-neutral-600">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="premium-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Platform"
            title="End-to-end programmatic infrastructure"
            description="From bid request to attribution — a unified platform eliminates integration overhead, data fragmentation, and wasted media spend."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {capabilities.map((cap) => (
              <Link key={cap.href} href={cap.href} className="premium-card p-7 lg:p-8 hover:shadow-[0_4px_24px_rgba(15,39,68,0.08)] transition-shadow duration-300 group">
                <h3 className="text-[16px] font-semibold text-navy group-hover:text-blue transition-colors">
                  {cap.title} →
                </h3>
                <p className="mt-3 text-[14px] text-neutral-600 leading-relaxed">{cap.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why AdVolcano */}
      <section className="premium-section bg-surface border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why AdVolcano"
            title="Built for organizations that demand more"
            description="Enterprise media teams choose AdVolcano for infrastructure reliability, measurement accuracy, and operational excellence."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="premium-card p-6">
                <h3 className="text-[15px] font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-[13px] text-neutral-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RTB Architecture */}
      <section className="premium-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                eyebrow="Real-Time Bidding"
                title="Built for sub-50ms bid latency"
                description="Our RTB engine processes over 180 billion bid requests daily across 40+ global data centers. Proprietary caching and pre-computed audience segments ensure your campaigns never miss an impression."
              />
              <ul className="space-y-3">
                {[
                  "OpenRTB 2.6 compliant bid adapter",
                  "Custom bid shading algorithms",
                  "Supply path optimization",
                  "First-price and second-price auction support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-neutral-700">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 text-teal shrink-0">
                      <path d="M3 8L7 12L13 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/platform/rtb" className="inline-block mt-6 text-[14px] font-semibold text-blue hover:text-blue-light transition-colors">
                Explore RTB engine →
              </Link>
            </div>
            <div className="premium-card p-1">
              <RTBArchitectureDiagram className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="premium-section bg-surface border-y border-neutral-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonial
            quote="Consolidating four platforms into AdVolcano reduced our integration costs by $1.8M annually while improving attribution accuracy across every channel."
            author="James Whitfield"
            role="VP, Media & Performance"
            company="Fortune 100 Retailer"
          />
        </div>
      </section>

      {/* Compliance */}
      <section className="premium-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Compliance"
            title="Enterprise-grade security & governance"
          />
          <MetricGrid
            metrics={[
              { value: "SOC 2 Type II", label: "Security certified", detail: "Annual third-party audit" },
              { value: "GDPR", label: "Privacy compliant", detail: "EU data residency available" },
              { value: "MRC", label: "Measurement accredited", detail: "Viewability & IVT standards" },
              { value: "ISO 27001", label: "InfoSec certified", detail: "Information security management" },
            ]}
          />
        </div>
      </section>

      {/* Solutions */}
      <section className="premium-section bg-surface border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Solutions"
            title="Purpose-built for every stakeholder"
            description="Whether you buy, sell, or manage media — AdVolcano provides tailored workflows for your role in the programmatic ecosystem."
          />
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { title: "For Advertisers", desc: "Maximize ROAS with unified cross-channel buying and advanced attribution.", href: "/solutions/advertisers" },
              { title: "For Agencies", desc: "Manage multiple clients with white-label reporting and streamlined operations.", href: "/solutions/agencies" },
              { title: "For Publishers", desc: "Optimize yield with header bidding, direct deals, and transparent reporting.", href: "/solutions/publishers" },
            ].map((s) => (
              <article key={s.href} className="premium-card p-7 flex flex-col">
                <h3 className="text-[16px] font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 text-[14px] text-neutral-600 leading-relaxed flex-1">{s.desc}</p>
                <Link href={s.href} className="inline-block mt-5 text-[14px] font-semibold text-blue hover:text-blue-light transition-colors">
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="premium-section border-t border-neutral-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently asked questions" align="center" />
          <FAQSection items={homeFaqs} />
        </div>
      </section>

      <CTABanner
        title="See AdVolcano in action"
        description="Schedule a personalized demo with our solutions engineering team. We'll assess your media stack and demonstrate relevant platform capabilities."
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
