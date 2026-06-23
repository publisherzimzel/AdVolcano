"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { navigation } from "@/lib/site-config";

type DropdownItem = { label: string; href: string; description?: string };

function NavDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: DropdownItem[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium text-neutral-600 hover:text-navy transition-colors duration-200"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <svg width="10" height="10" viewBox="0 0 10 10" className={`opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 w-80 bg-white border border-neutral-200/80 shadow-[0_8px_30px_rgba(15,39,68,0.12)] z-50 py-2 animate-fade-in">
          <Link
            href={href}
            className="block px-5 py-3 text-[13px] font-semibold text-navy border-b border-neutral-100 mb-1 hover:bg-surface transition-colors"
            onClick={() => setOpen(false)}
          >
            {label} Overview →
          </Link>
          {items.filter((i) => i.href !== href).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-3 hover:bg-surface transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="block text-[13px] font-medium text-neutral-800">{item.label}</span>
              {item.description && (
                <span className="block text-[12px] text-neutral-500 mt-0.5 leading-snug">{item.description}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const topLevelLinks = [
  navigation.technology,
  navigation.developers,
  navigation.integrations,
  navigation.payment,
  navigation.about,
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            <NavDropdown label={navigation.platform.label} href={navigation.platform.href} items={navigation.platform.items} />
            <NavDropdown label={navigation.solutions.label} href={navigation.solutions.href} items={navigation.solutions.items} />
            {topLevelLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[13px] font-medium text-neutral-600 hover:text-navy transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <NavDropdown label={navigation.resources.label} href={navigation.resources.href} items={navigation.resources.items} />
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="text-[13px] font-medium text-neutral-600 hover:text-navy transition-colors duration-200">
              Contact Sales
            </Link>
            <Link href="/contact" className="btn-primary">
              Request Demo
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-neutral-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-neutral-200 bg-white px-4 py-4 space-y-1 animate-fade-in" aria-label="Mobile navigation">
          {[navigation.platform, navigation.solutions].map((section) => (
            <div key={section.href} className="py-2">
              <Link href={section.href} className="text-[13px] font-semibold text-navy" onClick={() => setMobileOpen(false)}>
                {section.label}
              </Link>
              <div className="ml-3 mt-1 space-y-1">
                {section.items.map((item) => (
                  <Link key={item.href} href={item.href} className="block text-[13px] text-neutral-600 py-1" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {topLevelLinks.map((item) => (
            <Link key={item.href} href={item.href} className="block py-2 text-[13px] font-medium text-neutral-700" onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-neutral-200">
            {navigation.resources.items.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2 text-[13px] text-neutral-600" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="block mt-3 btn-primary text-center" onClick={() => setMobileOpen(false)}>
            Request Demo
          </Link>
        </nav>
      )}
    </header>
  );
}
