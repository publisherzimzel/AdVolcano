import type { Metadata } from "next";

export const siteConfig = {
  name: "AdVolcano",
  domain: "https://advolcano.io",
  description:
    "AdVolcano is an enterprise AdTech platform for programmatic advertising, real-time bidding (RTB), analytics, attribution, and fraud prevention — trusted by global brands and agencies.",
  keywords: [
    "enterprise AdTech",
    "programmatic advertising platform",
    "demand side platform",
    "real-time bidding",
    "RTB engine",
    "ad fraud prevention",
    "attribution platform",
    "enterprise DSP",
  ],
  contact: {
    email: "enterprise@advolcano.io",
    phone: "+1 (800) 555-0142",
    address: "1200 Market Street, Suite 400, San Francisco, CA 94103",
  },
};

export const navigation = {
  platform: {
    label: "Platform",
    href: "/platform",
    items: [
      { label: "Platform Overview", href: "/platform", description: "Unified AdTech infrastructure" },
      { label: "Demand Side Platform", href: "/platform/dsp", description: "Campaign management & buying" },
      { label: "Real-Time Bidding", href: "/platform/rtb", description: "Sub-50ms bid engine" },
      { label: "Analytics", href: "/platform/analytics", description: "Attribution & reporting" },
      { label: "Fraud Prevention", href: "/platform/fraud-prevention", description: "IVT detection & brand safety" },
    ],
  },
  solutions: {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Solutions Overview", href: "/solutions", description: "Industry-specific solutions" },
      { label: "For Advertisers", href: "/solutions/advertisers", description: "Maximize ROAS at scale" },
      { label: "For Agencies", href: "/solutions/agencies", description: "Multi-client management" },
      { label: "For Publishers", href: "/solutions/publishers", description: "Yield optimization" },
    ],
  },
  technology: { label: "Technology", href: "/technology" },
  developers: { label: "Developers", href: "/developers" },
  integrations: { label: "Integrations", href: "/integrations" },
  resources: {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Resources Hub", href: "/resources", description: "Documentation & guides" },
      { label: "Blog", href: "/blog", description: "Industry insights" },
      { label: "Case Studies", href: "/case-studies", description: "Customer success stories" },
    ],
  },
  about: { label: "About", href: "/about" },
  payment: { label: "Payment", href: "/payment" },
  contact: { label: "Contact", href: "/contact" },
};

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata(meta: PageMeta): Metadata {
  const title = meta.title.includes("AdVolcano") ? meta.title : `${meta.title} | AdVolcano`;
  const url = `${siteConfig.domain}${meta.path}`;
  const keywords = meta.keywords ?? siteConfig.keywords;

  return {
    title,
    description: meta.description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: meta.description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}
