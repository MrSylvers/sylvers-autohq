import { useRef, useState, useCallback } from 'react';
import { manufacturers } from '../data/vehicles';
import { useVehicle } from '../data/store';
import { motion } from 'motion/react';

export default function BrandCarousel() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imgErrors, setImgErrors] = useState({});
  const { selectManufacturer, selectedVehicle, step } = useVehicle();

  const handleImgError = useCallback((id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  const getFallback = (mfr) => {
    const name = mfr.name;
    if (name === 'Mercedes-Benz') return 'MB';
    if (name === 'Volkswagen') return 'VW';
    if (name === 'Land Rover') return 'LR';
    if (name === 'Alfa Romeo') return 'AR';
    if (name === 'Aston Martin') return 'AM';
    if (name === 'Rolls-Royce') return 'RR';
    if (name === 'Lamborghini') return 'LB';
    if (name === 'Maserati') return 'MS';
    if (name === 'McLaren') return 'ML';
    if (name === 'Bentley') return 'BT';
    if (name.startsWith('Polestar')) return 'PS';
    if (name.startsWith('Genesis')) return 'GN';
    if (name === 'Infiniti') return 'IN';
    if (name === 'Mitsubishi') return 'MI';
    return mfr.name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="relative group">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 border border-border flex items-center justify-center text-graphite hover:text-dark hover:shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 border border-border flex items-center justify-center text-graphite hover:text-dark hover:shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Carousel track */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="flex gap-2 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing py-2 px-1 select-none"
      >
        {manufacturers.map((mfr, i) => {
          const isSelected = selectedVehicle?.manufacturerId === mfr.id && step >= 1;
          const hasImgError = imgErrors[mfr.id];
          return (
            <motion.button
              key={mfr.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.015, duration: 0.3 }}
              onClick={() => selectManufacturer(mfr)}
              className="flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 w-[270px]"
              style={{
                borderColor: isSelected ? mfr.color : '#E5E5E5',
                backgroundColor: isSelected
                  ? `color-mix(in srgb, ${mfr.color} 8%, transparent)`
                  : 'white',
              }}
            >
              <div
                className="w-[250px] h-[150px] rounded-xl flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: isSelected
                    ? `color-mix(in srgb, ${mfr.color} 8%, transparent)`
                    : '#F0F0F0',
                }}
              >
                {!hasImgError ? (
                  <img
                    src={mfr.logo}
                    alt={mfr.name}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                    onError={() => handleImgError(mfr.id)}
                  />
                ) : (
                  <span
                    className="font-bold text-lg"
                    style={{ color: isSelected ? mfr.color : '#6B7280' }}
                  >
                    {getFallback(mfr)}
                  </span>
                )}
              </div>
              <span
                className="text-xs font-medium whitespace-nowrap leading-tight"
                style={{ color: isSelected ? mfr.color : '#6B7280' }}
              >
                {mfr.name}
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="flex justify-center gap-1.5 mt-1">
        <span className="text-[10px] text-text-muted">{manufacturers.length} brands &bull; Click to select</span>
      </div>
    </div>
  );
}