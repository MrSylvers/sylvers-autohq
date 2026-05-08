import SEO from '../components/SEO';
import { BreadcrumbSchema } from '../components/StructuredData';
import AffiliateNotice from '../components/AffiliateNotice';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <SEO
        title="About Us"
        description="SYL helps everyday people find the right auto parts. We compare OEM, aftermarket, and performance parts across top sellers so you get the best deal."
        path="/about"
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'About Us' }]} />

      <div>
        <h1 className="font-bold text-3xl sm:text-4xl text-dark mb-2">About SYL</h1>
        <p className="text-sm text-text-secondary">Helping everyday people find the right auto parts since 2024</p>
      </div>

      <div className="prose max-w-none space-y-4">
        <p className="text-sm text-text-secondary leading-relaxed">
          SYL was created by Sylvers — a car enthusiast who got tired of spending hours searching for the right parts.
          Whether you're fixing a daily driver, building a project car, or just keeping up with maintenance, finding the right part
          at the right price shouldn't be a hassle.
        </p>

        <p className="text-sm text-text-secondary leading-relaxed">
          That's why we built this site. We do the research so you don't have to. We compare parts across OEM (stock replacement),
          aftermarket, and performance categories — from budget-friendly options to premium upgrades — so you can make the best
          choice for your vehicle and your wallet.
        </p>

        <h2 className="font-semibold text-xl text-dark mt-8">What We Cover</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {[
            { title: 'OEM Parts', desc: 'Factory-grade replacement parts that match your vehicle\'s original specifications exactly.' },
            { title: 'Aftermarket', desc: 'Quality alternatives to OEM parts, often at a fraction of the price.' },
            { title: 'Performance', desc: 'Upgraded components designed to improve power, handling, and style.' },
            { title: 'Budget Options', desc: 'Reliable parts that get the job done without breaking the bank.' },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-xl bg-white border border-border">
              <h3 className="font-semibold text-dark text-sm mb-1.5">{item.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="font-semibold text-xl text-dark mt-8">Why Trust Us?</h2>

        <p className="text-sm text-text-secondary leading-relaxed">
          We don't just list parts — we compare prices across multiple trusted sellers like Amazon, RockAuto,
          AutoZone, Summit Racing, and more. Every seller gets a reliability score based on customer reviews,
          return policies, and shipping performance. We rank parts by category (OEM, aftermarket, performance)
          so you always know what you're getting.
        </p>

        <p className="text-sm text-text-secondary leading-relaxed">
          Our vehicle fitment system helps you find parts that actually fit your specific make, model, and year —
          no more guessing or ordering the wrong part.
        </p>

        <h2 className="font-semibold text-xl text-dark mt-8">Get In Touch</h2>

        <p className="text-sm text-text-secondary leading-relaxed">
          Have questions, suggestions, or want to collaborate? Reach out at{' '}
          <a href="mailto:SylversAutoHQ@gmail.com" className="transition-colors" style={{ color: 'var(--brand-color)' }}>
            SylversAutoHQ@gmail.com
          </a>
        </p>
      </div>

      <AffiliateNotice />
    </div>
  );
}