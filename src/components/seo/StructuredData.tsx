import { siteConfig } from "@/lib/site-config";

type FAQItem = { question: string; answer: string };

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AdVolcano",
    url: "https://advolcano.io",
    logo: "https://advolcano.io/advolcano-logo-transparent.png",
    description: siteConfig.description,
    foundingDate: "2018",
    sameAs: ["https://www.linkedin.com/company/advolcano"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1200 Market Street, Suite 400",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94103",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "enterprise@advolcano.io",
      telephone: "+1-800-555-0142",
      availableLanguage: "English",
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AdVolcano",
    url: "https://advolcano.io",
    description: siteConfig.description,
    publisher: { "@type": "Organization", name: "AdVolcano" },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function SoftwareApplicationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AdVolcano Enterprise Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Enterprise programmatic advertising platform with DSP, RTB engine, analytics, and fraud prevention.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/OnlineOnly",
      url: "https://advolcano.io/contact",
    },
    provider: { "@type": "Organization", name: "AdVolcano" },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
