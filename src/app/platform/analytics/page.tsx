import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeading, FeatureList, FAQSection, CTABanner } from "@/components/sections/PageSections";
import { FAQSchema } from "@/components/seo/StructuredData";
import { AnalyticsMockup } from "@/components/mockups/ProductMockups";

export const metadata: Metadata = buildMetadata({
  title: "Analytics Platform",
  description: "AdVolcano Analytics — multi-touch attribution, incrementality testing, custom reporting, and data warehouse integration for enterprise media measurement.",
  path: "/platform/analytics",
});

const faqs = [
  { question: "What attribution models are supported?", answer: "Last-touch, first-touch, linear, time-decay, position-based, and data-driven (algorithmic) attribution. Custom model builder available for enterprise plans." },
  { question: "Can I export data to my warehouse?", answer: "Yes. Native connectors for Snowflake, BigQuery, Redshift, and Databricks. Scheduled exports via S3, GCS, or Azure Blob." },
  { question: "Do you support incrementality testing?", answer: "Built-in geo-lift and PSA testing frameworks with statistical significance calculators and automated report generation." },
];

export default function AnalyticsPage() {
  return (
    <>
      <FAQSchema items={faqs} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Platform", href: "/platform" }, { label: "Analytics" }]} />
      </div>
      <PageHero
        title="Analytics & Attribution Platform"
        description="Move beyond last-click reporting. Multi-touch attribution, incrementality testing, and unified reporting across all programmatic channels."
      />

      <section className="py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <AnalyticsMockup />
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-navy">Unified measurement</h2>
              <p className="mt-2 text-[14px] text-neutral-600 leading-relaxed">
                Consolidate performance data from display, video, CTV, and mobile into a single reporting layer. No more stitching spreadsheets across vendors.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: "Custom dashboards", desc: "Drag-and-drop report builder with 200+ metrics and dimensions." },
                { title: "Scheduled reports", desc: "Automated PDF and CSV delivery to stakeholders on any cadence." },
                { title: "API access", desc: "Pull any report data programmatically for custom BI integrations." },
              ].map((item) => (
                <div key={item.title} className="pl-4 border-l-2 border-teal">
                  <h3 className="text-[14px] font-semibold text-navy">{item.title}</h3>
                  <p className="text-[13px] text-neutral-600 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Attribution capabilities" />
          <FeatureList
            features={[
              { title: "Multi-touch attribution", description: "Seven standard models plus custom algorithmic attribution using machine learning." },
              { title: "Incrementality testing", description: "Geo-lift studies and holdout testing to measure true campaign impact." },
              { title: "Cross-device tracking", description: "Probabilistic and deterministic cross-device graph for unified user journeys." },
              { title: "Offline conversion import", description: "Match in-store and call center conversions to digital touchpoints." },
            ]}
          />
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Data warehouse integrations" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Snowflake", "Google BigQuery", "Amazon Redshift", "Databricks", "Amazon S3", "Google Cloud Storage", "Azure Blob", "FTP/SFTP"].map((dw) => (
              <div key={dw} className="flex items-center gap-3 p-4 border border-neutral-200 bg-white">
                <div className="w-8 h-8 bg-neutral-100 flex items-center justify-center text-[10px] font-bold text-navy">
                  {dw.charAt(0)}
                </div>
                <span className="text-[13px] font-medium text-neutral-700">{dw}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="FAQ" align="center" />
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTABanner title="See your data unified" description="Schedule a demo focused on analytics and attribution for your media mix." />
    </>
  );
}
