import SEO from '../components/SEO';
import { BreadcrumbSchema } from '../components/StructuredData';
import { getCategories } from '../data/parts';
import AffiliateNotice from '../components/AffiliateNotice';

const categoryDescriptions = {
  brakes: {
    guide: 'Whether you need daily-driver pads or track-ready rotors, we break down the best brake upgrades for stopping power and longevity.',
    budget: 'Economy semi-metallic pads ($20-40) offer solid stopping for daily driving.',
    mid: 'OEM-grade ceramic pads ($40-80) balance dust, noise, and stopping power.',
    premium: 'Performance carbon-ceramic ($80-200+) deliver maximum fade resistance.',
  },
  suspension: {
    guide: 'From OEM replacement struts to full coilover kits, find suspension parts that match your driving style.',
    budget: 'Quick-strut assemblies ($80-150) restore factory ride quality fast.',
    mid: 'Performance shocks/struts ($150-400) improve handling without sacrificing comfort.',
    premium: 'Adjustable coilovers ($500-2000+) give full control over ride height and damping.',
  },
  engine: {
    guide: 'Keep your engine running strong with quality replacement and performance parts.',
    budget: 'Economy alternators and starters ($50-120) for basic reliability.',
    mid: 'Premium replacements ($120-250) with better components and longer warranties.',
    premium: 'High-output units ($250-500+) for added electrical demands.',
  },
  exhaust: {
    guide: 'Change your sound and free up horsepower with the right exhaust setup.',
    budget: 'Universal mufflers ($30-70) for a budget sound upgrade.',
    mid: 'Bolt-on cat-back systems ($200-500) with dyno-tuned gains.',
    premium: 'Full turbo-back/axle-back ($500-1500+) in stainless steel with lifetime warranty.',
  },
  lighting: {
    guide: 'See better and be seen with modern LED and HID lighting upgrades.',
    budget: 'LED replacement bulbs ($20-50) for dramatic improvement over halogens.',
    mid: 'Plug-and-play projector housings ($100-250) with proper beam patterns.',
    premium: 'Full LED assemblies ($250-800+) with OEM-level quality and fitment.',
  },
  interior: {
    guide: 'Protect and upgrade your cabin with custom-fit interior accessories.',
    budget: 'Universal floor mats and seat covers ($20-60) for basic protection.',
    mid: 'Custom-fit all-weather mats ($60-120) that snap perfectly in place.',
    premium: 'Premium OEM-style accessories ($120-400) with factory-matched materials.',
  },
  maintenance: {
    guide: 'Keep your vehicle running longer with quality fluids, filters, and maintenance parts.',
    budget: 'Conventional oil and standard filters ($15-30) for basic needs.',
    mid: 'Full synthetic oil and premium filters ($30-60) for better protection.',
    premium: 'High-performance synthetic and reusable filters ($50-100+) for maximum engine life.',
  },
};

export default function Categories() {
  const categories = getCategories();

  return (
    <div className="space-y-8">
      <SEO
        title="Part Categories"
        description="Shop auto parts by category: brakes, suspension, engine, exhaust, lighting, interior, and maintenance. Budget, mid-range, and premium options for every vehicle."
        path="/categories"
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Categories' }]} />

      <div>
        <h1 className="font-bold text-3xl sm:text-4xl text-dark mb-2">Part Categories</h1>
        <p className="text-sm text-text-secondary">Browse by category — find the right part at every price point</p>
      </div>

      <div className="grid gap-5">
        {categories.map((cat) => {
          const info = categoryDescriptions[cat.id] || {};
          return (
            <div key={cat.id} id={cat.id} className="bg-white border border-border rounded-xl overflow-hidden card-shadow card-shadow-hover">
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="font-bold text-xl text-dark">{cat.name}</h2>
                    <p className="text-xs text-text-secondary mt-1">{cat.description}</p>
                  </div>
                  <span className="text-2xl opacity-30">{cat.icon}</span>
                </div>

                {info.guide && (
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{info.guide}</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-silver-light border border-border-light">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase border border-brand/30 mb-2" style={{ color: 'var(--brand-color)', borderColor: 'color-mix(in srgb, var(--brand-color) 30%, transparent)' }}>Budget</span>
                    <p className="text-xs text-text-secondary">{info.budget || 'Affordable options available'}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-silver-light border border-border-light">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase border border-blue-500/30 text-blue-600 mb-2">Mid-Range</span>
                    <p className="text-xs text-text-secondary">{info.mid || 'Best value options'}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-silver-light border border-border-light">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase border border-red-500/30 text-red-600 mb-2">Premium</span>
                    <p className="text-xs text-text-secondary">{info.premium || 'Top-tier performance'}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.subcategories.map((sub) => (
                    <span key={sub} className="px-3 py-1 rounded-full bg-white border border-border text-[11px] text-text-secondary">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <AffiliateNotice />
    </div>
  );
}