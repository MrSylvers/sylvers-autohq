import SEO from '../components/SEO';
import { BreadcrumbSchema } from '../components/StructuredData';
import { useVehicle } from '../data/store';
import BrandCarousel from '../components/BrandCarousel';
import VehicleSelector from '../components/VehicleSelector';
import AffiliateNotice from '../components/AffiliateNotice';
import { getPartsForVehicle, getCategories } from '../data/parts';
import { manufacturers } from '../data/vehicles';
import { motion } from 'motion/react';

export default function Home() {
  const { selectedVehicle, step } = useVehicle();
  const parts = selectedVehicle && step === 3 ? getPartsForVehicle(selectedVehicle) : [];
  const categories = getCategories();
  const topParts = parts.slice(0, 6);

  const activeMfr = selectedVehicle?.manufacturerId
    ? manufacturers.find((m) => m.id === selectedVehicle.manufacturerId)
    : null;

  return (
    <div className="space-y-10">
      <SEO
        description="Compare OEM, aftermarket, and performance auto parts across top sellers. Budget-friendly to premium — find the right parts for your vehicle at SYL."
        path="/"
      />
      <BreadcrumbSchema items={[{ name: 'Home' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-white border border-border shadow-sm p-8 sm:p-12">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors duration-500"
          style={{ backgroundColor: `color-mix(in srgb, var(--brand-color) 6%, transparent)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 transition-colors duration-500"
          style={{ backgroundColor: `color-mix(in srgb, var(--brand-color) 4%, transparent)` }}
        />
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border transition-colors"
            style={{
              backgroundColor: `color-mix(in srgb, var(--brand-color) 8%, transparent)`,
              borderColor: `color-mix(in srgb, var(--brand-color) 20%, transparent)`,
              color: 'var(--brand-color)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--brand-color)' }}
            />
            Trusted Auto Parts Finder
          </div>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-dark leading-[0.95] tracking-tight mb-4">
            Find the Right<br />
            <span className="text-glow" style={{ color: 'var(--brand-color)' }}>Parts</span> for Your Ride
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl leading-relaxed mb-8">
            Compare OEM, aftermarket, and performance parts across top sellers.
            Budget-friendly to premium — we cover every price range.
          </p>

          {/* Vehicle selector area */}
          <div className="space-y-6">
            <BrandCarousel />
            <VehicleSelector />
          </div>
        </div>
      </section>

      {/* Quick results when vehicle selected */}
      {topParts.length > 0 && (
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl text-dark">
              Parts for {selectedVehicle.year} {selectedVehicle.manufacturer} {selectedVehicle.model}
            </h2>
            <a href="/parts" className="text-sm transition-colors" style={{ color: 'var(--brand-color)' }}>View all &rarr;</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topParts.map((part) => (
              <motion.div key={part.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="bg-white border border-border rounded-xl overflow-hidden card-shadow card-shadow-hover transition-all group">
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase border"
                        style={{
                          borderColor: part.type === 'OEM' ? '#BFDBFE' : part.type === 'Performance' ? '#FECACA' : 'color-mix(in srgb, var(--brand-color) 30%, transparent)',
                          color: part.type === 'OEM' ? '#1D4ED8' : part.type === 'Performance' ? '#DC2626' : 'var(--brand-color)',
                          backgroundColor: part.type === 'OEM' ? '#EFF6FF' : part.type === 'Performance' ? '#FEF2F2' : `color-mix(in srgb, var(--brand-color) 8%, transparent)`,
                        }}
                      >
                        {part.type}
                      </span>
                      <span className="font-bold text-dark">${part.price.toFixed(2)}</span>
                    </div>
                    <h3 className="font-semibold text-sm text-dark mb-1">{part.name}</h3>
                    <p className="text-xs text-text-secondary line-clamp-1 mb-3">{part.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-text-muted">{part.seller.name}</span>
                      <a href="#" className="text-[11px] font-medium transition-colors" style={{ color: 'var(--brand-color)' }}>Get deal &rarr;</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Categories */}
      <section className="space-y-5">
        <h2 className="font-bold text-2xl text-dark">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/categories#${cat.id}`}
              className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white border border-border hover:shadow-md transition-all duration-200"
              style={{ '--hover-color': 'var(--brand-color)' }}
            >
              <div
                className="w-12 h-12 rounded-xl bg-silver-light flex items-center justify-center group-hover:scale-110 transition-all duration-200"
                style={{ color: 'var(--brand-color)' }}
              >
                <span className="text-xl">{cat.icon}</span>
              </div>
              <span className="font-semibold text-sm text-dark text-center">{cat.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="rounded-xl bg-white border border-border shadow-sm p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'Compare Prices', desc: 'See OEM, aftermarket, and performance pricing side by side across multiple sellers.' },
            { title: 'Trusted Sellers', desc: 'We rank sellers by reliability so you know exactly who you\'re buying from.' },
            { title: 'Easy Fitment', desc: 'Select your vehicle and we\'ll show only compatible parts. No guesswork.' },
          ].map((item) => (
            <div key={item.title} className="text-center sm:text-left">
              <h3 className="font-semibold text-dark text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliate disclosure */}
      <AffiliateNotice />
    </div>
  );
}