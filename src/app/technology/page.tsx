import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, MetricGrid, CTABanner } from "@/components/sections/PageSections";
import { PlatformArchitectureDiagram } from "@/components/mockups/ProductMockups";

export const metadata: Metadata = buildMetadata({
  title: "Technology",
  description: "AdVolcano technology stack — distributed RTB infrastructure, ML-powered optimization, global CDN, and enterprise-grade security architecture.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Technology" }]} />
      </div>
      <PageHero
        title="Engineering at scale"
        description="AdVolcano is built on a distributed, event-driven architecture designed for the throughput and latency demands of real-time programmatic advertising."
      />

      <section className="py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlatformArchitectureDiagram className="w-full border border-neutral-200" />
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MetricGrid
            metrics={[
              { value: "180B+", label: "Events/day", detail: "Bid stream" },
              { value: "40+", label: "Data centers", detail: "Global edge" },
              { value: "500K", label: "QPS per node", detail: "Peak capacity" },
              { value: "99.97%", label: "Uptime", detail: "12-month SLA" },
            ]}
          />
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Core technology stack" />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Infrastructure",
                items: ["Kubernetes orchestration", "Multi-region active-active", "Custom load balancing", "Global CDN (CloudFront + Fastly)"],
              },
              {
                category: "Data Platform",
                items: ["Apache Kafka event streaming", "ClickHouse analytics", "Redis real-time cache", "Snowflake data warehouse"],
              },
              {
                category: "ML & Optimization",
                items: ["TensorFlow inference", "Real-time feature store", "A/B testing framework", "Bayesian bid optimization"],
              },
              {
                category: "Security",
                items: ["SOC 2 Type II", "ISO 27001", "End-to-end encryption", "Zero-trust network architecture"],
              },
            ].map((stack) => (
              <div key={stack.category} className="border border-neutral-200 bg-white p-6">
                <h3 className="text-[14px] font-semibold text-navy mb-3">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-[13px] text-neutral-600 flex items-center gap-2">
                      <span className="text-neutral-300">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Performance benchmarks" description="Independently verified performance metrics from our most recent audit." />
          <div className="border border-neutral-200 font-mono text-[13px]">
            <div className="bg-neutral-50 px-4 py-2 border-b border-neutral-200 text-neutral-500">benchmark_results.json</div>
            <pre className="p-4 overflow-x-auto text-neutral-700 leading-relaxed">{`{
  "bid_latency_p50": "42ms",
  "bid_latency_p99": "78ms",
  "throughput_qps": 500000,
  "event_processing": "12M events/sec",
  "data_freshness": "< 5 seconds",
  "api_response_p95": "120ms",
  "uptime_12mo": "99.97%"
}`}</pre>
          </div>
        </div>
      </section>

      <CTABanner title="Technical deep dive" description="Request a architecture review with our engineering team." secondaryLabel="Developer APIs" secondaryHref="/developers" />
    </>
  );
}
