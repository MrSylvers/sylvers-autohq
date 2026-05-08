import SEO from '../components/SEO';

export default function Disclosure() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <SEO
        title="Affiliate Disclosure"
        description="SYL participates in affiliate programs including Amazon Associates. We earn commissions from qualifying purchases at no extra cost to you."
        path="/disclosure"
      />

      <div>
        <h1 className="font-bold text-3xl sm:text-4xl text-dark mb-2">Affiliate Disclosure</h1>
        <p className="text-sm text-text-secondary">Transparency about how we make money</p>
      </div>

      <div className="prose max-w-none space-y-4 text-sm text-text-secondary leading-relaxed">
        <p>
          <strong className="text-dark">SYL</strong> is committed to full transparency about how we operate
          and how we generate revenue. This page explains our affiliate relationships.
        </p>

        <h2 className="font-semibold text-xl text-dark">What Are Affiliate Links?</h2>
        <p>
          Some of the links on this website are "affiliate links." This means that if you click on a link and make a
          purchase, we may earn a commission at no additional cost to you. We are a participant in the Amazon Services
          LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn
          advertising fees by advertising and linking to Amazon.com.
        </p>

        <h2 className="font-semibold text-xl text-dark">Does This Affect My Price?</h2>
        <p>
          No. You never pay more because of an affiliate link. In fact, we sometimes negotiate special discounts
          or coupon codes for our readers. The price you pay is exactly the same (or sometimes less) than if you
          visited the seller directly.
        </p>

        <h2 className="font-semibold text-xl text-dark">Why Do We Use Affiliate Links?</h2>
        <p>
          Running this website takes time, money, and effort. Affiliate commissions help us cover:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Website hosting and maintenance costs</li>
          <li>Research and comparison work</li>
          <li>Creating buying guides and how-to articles</li>
          <li>Growing the site with more content</li>
        </ul>

        <h2 className="font-semibold text-xl text-dark">Our Integrity</h2>
        <p>
          We only recommend parts and products we genuinely believe in. Our recommendations are based on research,
          customer reviews, and real-world performance — not just commission rates.
        </p>

        <h2 className="font-semibold text-xl text-dark">Affiliate Programs We Participate In</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Amazon Associates (Amazon.com)</li>
          <li>eBay Partner Network (eBay Motors)</li>
          <li>RockAuto Affiliate Program</li>
          <li>AutoZone Affiliate Program</li>
          <li>Advance Auto Parts Affiliate Program</li>
          <li>Summit Racing Affiliate Program</li>
        </ul>

        <h2 className="font-semibold text-xl text-dark">Questions?</h2>
        <p>
          If you have any questions about our affiliate relationships, please contact us at{' '}
          <a href="mailto:SylversAutoHQ@gmail.com" className="transition-colors" style={{ color: 'var(--brand-color)' }}>
            SylversAutoHQ@gmail.com
          </a>
        </p>

        <p className="text-xs text-text-muted mt-8">
          Last updated: May 2026
        </p>
      </div>
    </div>
  );
}