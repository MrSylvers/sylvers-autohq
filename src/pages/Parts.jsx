import SEO from '../components/SEO';
import { BreadcrumbSchema } from '../components/StructuredData';
import { useState } from 'react';
import { useVehicle } from '../data/store';
import BrandCarousel from '../components/BrandCarousel';
import VehicleSelector from '../components/VehicleSelector';
import PartCard from '../components/PartCard';
import AffiliateNotice from '../components/AffiliateNotice';
import { getPartsForVehicle, getCategories } from '../data/parts';
import { manufacturers } from '../data/vehicles';
import { motion, AnimatePresence } from 'motion/react';

export default function Parts() {
  const { selectedVehicle, step } = useVehicle();
  const parts = selectedVehicle && step === 3 ? getPartsForVehicle(selectedVehicle) : [];
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const activeMfr = selectedVehicle?.manufacturerId
    ? manufacturers.find((m) => m.id === selectedVehicle.manufacturerId)
    : null;
  const brandColor = activeMfr?.color || 'var(--brand-color)';

  const filtered = parts.filter((p) => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    if (activeType !== 'all' && p.type.toLowerCase() !== activeType.toLowerCase()) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="space-y-8">
      <SEO
        title="Parts Catalog"
        description="Browse OEM, aftermarket, and performance parts for your vehicle. Compare prices across top sellers like Amazon, RockAuto, AutoZone, and Summit Racing."
        path="/parts"
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Parts Catalog' }]} />

      {/* Header */}
      <div>
        <h1 className="font-bold text-3xl sm:text-4xl text-dark mb-2">Parts Catalog</h1>
        <p className="text-sm text-text-secondary">
          {selectedVehicle && step === 3
            ? `${filtered.length} parts for your ${selectedVehicle.year} ${selectedVehicle.manufacturer} ${selectedVehicle.model}`
            : 'Select your vehicle to see compatible parts'}
        </p>
      </div>

      {/* Vehicle selector inline */}
      <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
        <BrandCarousel />
        <VehicleSelector />
      </div>

      {selectedVehicle && step === 3 && (
        <>
          {/* Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All' },
                ...categories.map((c) => ({ id: c.id, label: c.name })),
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
                  style={{
                    borderColor: activeCategory === cat.id
                      ? `color-mix(in srgb, ${brandColor} 40%, transparent)`
                      : '#E5E5E5',
                    backgroundColor: activeCategory === cat.id
                      ? `color-mix(in srgb, ${brandColor} 8%, transparent)`
                      : 'white',
                    color: activeCategory === cat.id ? brandColor : '#6B7280',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="ml-auto flex gap-2">
              <select
                value={activeType}
                onChange={(e) => setActiveType(e.target.value)}
                className="bg-white border border-border rounded-lg px-3 py-1.5 text-xs text-text-secondary outline-none"
              >
                <option value="all">All Types</option>
                <option value="oem">OEM</option>
                <option value="aftermarket">Aftermarket</option>
                <option value="performance">Performance</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-border rounded-lg px-3 py-1.5 text-xs text-text-secondary outline-none"
              >
                <option value="default">Sort: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Results */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${activeType}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((part) => (
                <PartCard key={part.id} part={part} />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-sm text-text-muted">No parts match your filters. Try a different category.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </>
      )}

      {(!selectedVehicle || step < 3) && (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-full bg-white border border-border flex items-center justify-center mx-auto mb-4 shadow-sm">
            <svg className="w-8 h-8 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="font-semibold text-dark text-lg mb-2">Select Your Vehicle</h2>
          <p className="text-sm text-text-secondary max-w-md mx-auto">
            Choose a manufacturer above, then pick your model and year to see all compatible parts with prices.
          </p>
        </div>
      )}

      <AffiliateNotice />
    </div>
  );
}