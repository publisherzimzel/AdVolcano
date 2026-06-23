import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { navigation, siteConfig } from "@/lib/site-config";

const footerSections = [
  { title: "Platform", links: navigation.platform.items },
  { title: "Solutions", links: navigation.solutions.items },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Technology", href: "/technology" },
      { label: "Careers", href: "/about#careers" },
      { label: "Contact", href: "/contact" },
      { label: "Payment", href: "/payment" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/resources" },
      { label: "Developer APIs", href: "/developers" },
      { label: "Integrations", href: "/integrations" },
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white border-t border-navy-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-5 text-[13px] text-neutral-300 leading-relaxed max-w-xs">
              Enterprise programmatic advertising infrastructure trusted by global brands, agencies, and publishers since 2018.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13px] text-neutral-300 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-navy-light/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-neutral-400">
            <span>© {new Date().getFullYear()} AdVolcano, Inc. All rights reserved.</span>
            <Link href="/resources#privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/resources#terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/resources#compliance" className="hover:text-white transition-colors">Compliance</Link>
          </div>
          <div className="text-[12px] text-neutral-400">{siteConfig.contact.email}</div>
        </div>
      </div>
    </footer>
  );
}
