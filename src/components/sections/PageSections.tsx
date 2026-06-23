import Link from "next/link";

export function PageHero({
  title,
  description,
  children,
  compact = true,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={`bg-surface border-b border-neutral-200/80 ${compact ? "py-12 lg:py-16" : "py-16 lg:py-24"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-3xl lg:text-[2.75rem] font-semibold text-navy tracking-tight text-balance leading-[1.15]">
            {title}
          </h1>
          <p className="mt-5 text-[15px] lg:text-[17px] text-neutral-600 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  description,
  align = "left",
  eyebrow,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrow?: string;
}) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-2xl lg:text-[1.75rem] font-semibold text-navy tracking-tight">{title}</h2>
      {description && <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">{description}</p>}
    </div>
  );
}

export function CTABanner({
  title,
  description,
  primaryLabel = "Request Demo",
  primaryHref = "/contact?intent=demo",
  secondaryLabel,
  secondaryHref = "/platform",
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-navy py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl lg:text-[1.75rem] font-semibold text-white tracking-tight">{title}</h2>
          <p className="mt-3 text-[15px] text-neutral-300 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link href={primaryHref} className="btn-primary bg-white text-navy hover:bg-neutral-100">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="px-6 py-2.5 text-[13px] font-semibold border border-neutral-500 text-white hover:bg-navy-light transition-all duration-200 tracking-wide">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function MetricGrid({ metrics }: { metrics: { value: string; label: string; detail?: string }[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200/60 border border-neutral-200/80">
      {metrics.map((m) => (
        <div key={m.value} className="bg-white p-6 lg:p-8">
          <div className="text-2xl lg:text-[2rem] font-semibold text-navy tabular-nums tracking-tight">{m.value}</div>
          <div className="mt-2 text-[13px] font-medium text-neutral-700">{m.label}</div>
          {m.detail && <div className="mt-1 text-[12px] text-neutral-500">{m.detail}</div>}
        </div>
      ))}
    </div>
  );
}

export function FeatureList({ features }: { features: { title: string; description: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {features.map((f) => (
        <div key={f.title} className="border-l-[3px] border-blue pl-5">
          <h3 className="text-[15px] font-semibold text-navy">{f.title}</h3>
          <p className="mt-2 text-[14px] text-neutral-600 leading-relaxed">{f.description}</p>
        </div>
      ))}
    </div>
  );
}

export function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto premium-card">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="bg-surface border-b border-neutral-200">
            {headers.map((h, i) => (
              <th key={i} className={`px-5 py-4 text-left font-semibold text-navy ${i === 0 ? "" : "text-center"}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-neutral-100 last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-5 py-4 text-neutral-600 ${ci === 0 ? "font-medium text-neutral-800" : "text-center"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FAQSection({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group premium-card">
          <summary className="px-6 py-5 text-[15px] font-medium text-navy cursor-pointer list-none flex justify-between items-center hover:bg-surface transition-colors">
            {item.question}
            <svg width="12" height="12" viewBox="0 0 12 12" className="text-neutral-400 group-open:rotate-180 transition-transform shrink-0 ml-4">
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
          </summary>
          <div className="px-6 pb-5 text-[14px] text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export function TrustBar({ items }: { items: string[] }) {
  return (
    <div className="border-y border-neutral-200/80 bg-surface py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400 text-center mb-4">
          Trusted by enterprise media teams worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
          {items.map((item) => (
            <span key={item} className="text-[13px] font-semibold text-neutral-500 tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  quote,
  author,
  role,
  company,
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
}) {
  return (
    <blockquote className="premium-card p-8 lg:p-10">
      <p className="text-[17px] lg:text-lg text-neutral-700 leading-relaxed font-medium">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-6 pt-6 border-t border-neutral-100">
        <cite className="not-italic">
          <span className="block text-[14px] font-semibold text-navy">{author}</span>
          <span className="block text-[13px] text-neutral-500 mt-0.5">{role}, {company}</span>
        </cite>
      </footer>
    </blockquote>
  );
}
