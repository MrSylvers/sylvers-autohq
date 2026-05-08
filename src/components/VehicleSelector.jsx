import { useState } from 'react';
import { useVehicle } from '../data/store';
import { getModelsForManufacturer, years, manufacturers } from '../data/vehicles';
import { motion, AnimatePresence } from 'motion/react';

export default function VehicleSelector() {
  const { selectedVehicle, step, selectModel, selectYear, reset } = useVehicle();
  const [modelSearch, setModelSearch] = useState('');

  const models = selectedVehicle?.manufacturerId
    ? getModelsForManufacturer(selectedVehicle.manufacturerId)
    : [];

  const filteredModels = models.filter((m) =>
    m.toLowerCase().includes(modelSearch.toLowerCase())
  );

  const activeMfr = selectedVehicle?.manufacturerId
    ? manufacturers.find((m) => m.id === selectedVehicle.manufacturerId)
    : null;

  const brandColor = activeMfr?.color || 'var(--brand-color)';

  if (step === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
              style={{
                backgroundColor: step >= s ? brandColor : '#E5E5E5',
                color: step >= s ? (activeMfr?.textOnAccent || '#ffffff') : '#9CA3AF',
              }}
            >
              {s}
            </div>
          ))}
        </div>
        <span className="text-xs text-text-muted">
          {step === 1 ? 'Select Model' : step === 2 ? 'Select Year' : 'Vehicle Selected'}
        </span>
        {step >= 1 && (
          <button onClick={reset} className="ml-auto text-xs text-text-muted hover:text-dark transition-colors">
            Change vehicle
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="model-step"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search models..."
                value={modelSearch}
                onChange={(e) => setModelSearch(e.target.value)}
                className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-sm text-dark placeholder-text-muted outline-none transition-colors"
                style={{ borderColor: modelSearch ? brandColor : undefined, '--tw-ring-color': brandColor }}
                onFocus={(e) => e.target.style.borderColor = brandColor}
                onBlur={(e) => { if (!modelSearch) e.target.style.borderColor = ''; }}
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 overflow-y-auto scrollbar-hide">
              {filteredModels.map((model) => {
                const isModelSelected = selectedVehicle?.model === model;
                return (
                  <button
                    key={model}
                    onClick={() => selectModel(model)}
                    className="px-4 py-3 rounded-lg border text-sm font-medium transition-all"
                    style={{
                      borderColor: isModelSelected
                        ? brandColor
                        : '#E5E5E5',
                      backgroundColor: isModelSelected
                        ? `color-mix(in srgb, ${brandColor} 8%, transparent)`
                        : 'white',
                      color: isModelSelected ? brandColor : '#4A4A4A',
                    }}
                  >
                    {model}
                  </button>
                );
              })}
              {filteredModels.length === 0 && (
                <p className="col-span-full text-center text-sm text-text-muted py-6">No models found</p>
              )}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="year-step"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 max-h-64 overflow-y-auto scrollbar-hide">
              {years.map((year) => {
                const isYearSelected = selectedVehicle?.year === year;
                return (
                  <button
                    key={year}
                    onClick={() => selectYear(year)}
                    className="px-3 py-3 rounded-lg border text-sm font-medium transition-all"
                    style={{
                      borderColor: isYearSelected
                        ? brandColor
                        : '#E5E5E5',
                      backgroundColor: isYearSelected
                        ? `color-mix(in srgb, ${brandColor} 8%, transparent)`
                        : 'white',
                      color: isYearSelected ? brandColor : '#4A4A4A',
                    }}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}