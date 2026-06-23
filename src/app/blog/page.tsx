import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageSections";

export const metadata: Metadata = buildMetadata({
  title: "Industry Blog",
  description: "AdVolcano blog — insights on programmatic advertising, RTB technology, attribution modeling, and enterprise AdTech trends.",
  path: "/blog",
});

const posts = [
  {
    slug: "programmatic-trends-2026",
    title: "Five Programmatic Trends Reshaping Enterprise Media in 2026",
    excerpt: "From AI-driven optimization to CTV measurement standards — the shifts every media buyer should understand.",
    category: "Industry",
    date: "June 12, 2026",
    readTime: "8 min",
  },
  {
    slug: "attribution-incrementality",
    title: "Beyond Last-Click: Building an Incrementality Testing Program",
    excerpt: "A practical framework for proving media impact with geo-lift studies and holdout testing.",
    category: "Measurement",
    date: "May 28, 2026",
    readTime: "12 min",
  },
  {
    slug: "supply-path-optimization",
    title: "Supply Path Optimization: A Data-Driven Approach",
    excerpt: "How to identify unnecessary intermediaries and reduce supply chain costs by 15–30%.",
    category: "Technology",
    date: "May 14, 2026",
    readTime: "10 min",
  },
  {
    slug: "ctv-measurement-guide",
    title: "CTV Measurement: Bridging the Gap Between Screens",
    excerpt: "Cross-device attribution strategies for connected TV campaigns in a fragmented ecosystem.",
    category: "CTV",
    date: "April 30, 2026",
    readTime: "9 min",
  },
  {
    slug: "dsp-consolidation",
    title: "Why Enterprise Advertisers Are Consolidating Their DSP Stack",
    excerpt: "The financial and operational case for reducing vendor sprawl in programmatic buying.",
    category: "Strategy",
    date: "April 15, 2026",
    readTime: "7 min",
  },
  {
    slug: "first-price-auctions",
    title: "Optimizing for First-Price Auctions: Bid Shading Strategies",
    excerpt: "Technical deep dive into bid shading algorithms and their impact on campaign efficiency.",
    category: "Technology",
    date: "March 22, 2026",
    readTime: "11 min",
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      </div>
      <PageHero
        title="Industry insights"
        description="Analysis, research, and technical perspectives on programmatic advertising from the AdVolcano team."
      />

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {posts.map((post, i) => (
                <article key={post.slug} className={`${i > 0 ? "pt-6 border-t border-neutral-200" : ""}`}>
                  <div className="flex items-center gap-3 text-[12px] text-neutral-500 mb-2">
                    <span className="font-medium text-blue">{post.category}</span>
                    <span>·</span>
                    <time>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h2 className="text-lg font-semibold text-navy hover:text-blue transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-2 text-[14px] text-neutral-600 leading-relaxed">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-block mt-3 text-[13px] font-medium text-blue">
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
            <aside className="space-y-6">
              <div className="border border-neutral-200 p-5">
                <h3 className="text-[13px] font-semibold text-navy uppercase tracking-wider mb-3">Categories</h3>
                <ul className="space-y-2">
                  {["Industry", "Measurement", "Technology", "CTV", "Strategy"].map((cat) => (
                    <li key={cat}>
                      <span className="text-[13px] text-neutral-600 hover:text-navy cursor-pointer">{cat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-neutral-200 p-5 bg-neutral-50">
                <h3 className="text-[14px] font-semibold text-navy">Subscribe to updates</h3>
                <p className="mt-1 text-[12px] text-neutral-600">Monthly digest of AdTech insights.</p>
                <form className="mt-3 flex gap-2">
                  <input type="email" placeholder="Work email" className="flex-1 px-3 py-1.5 text-[13px] border border-neutral-300 focus:outline-none focus:border-navy" />
                  <button type="submit" className="px-3 py-1.5 text-[13px] font-medium bg-navy text-white hover:bg-navy-light">Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
