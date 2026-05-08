export default function PartCard({ part }) {
  const getTypeStyle = (type) => {
    switch (type) {
      case 'OEM':
        return { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' };
      case 'Aftermarket':
        return { bg: '#FFF7ED', text: '#C2410C', border: '#FED7AA' };
      case 'Performance':
        return { bg: '#FEF2F2', text: '#DC2626', border: '#FECACA' };
      default:
        return { bg: '#F9FAFB', text: '#6B7280', border: '#E5E7EB' };
    }
  };

  const getStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < full; i++) stars.push('full');
    if (half) stars.push('half');
    while (stars.length < 5) stars.push('empty');
    return stars;
  };

  const typeStyle = getTypeStyle(part.type);

  return (
    <div className="group relative bg-white border border-border rounded-xl overflow-hidden card-shadow card-shadow-hover transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-silver-light">
        <img
          src={part.image}
          alt={part.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider border"
            style={{ backgroundColor: typeStyle.bg, color: typeStyle.text, borderColor: typeStyle.border }}
          >
            {part.type}
          </span>
        </div>
        {/* In stock */}
        {part.inStock ? (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-green-50 border border-green-200 text-[10px] text-green-700 font-medium">
            In Stock
          </div>
        ) : (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-red-50 border border-red-200 text-[10px] text-red-700 font-medium">
            Backorder
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title & price */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-dark text-sm leading-tight">{part.name}</h3>
          <div className="text-right flex-shrink-0">
            <div className="font-bold text-dark text-base">${part.price.toFixed(2)}</div>
            {part.msrp > part.price && (
              <div className="text-[10px] text-text-muted line-through">${part.msrp.toFixed(2)}</div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">{part.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {getStars(part.rating).map((s, i) => (
              <svg key={i} className={`w-3 h-3 ${s === 'full' ? 'text-yellow-score' : s === 'half' ? 'text-yellow-score' : 'text-silver-dark'}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[10px] text-text-muted">({part.reviewCount.toLocaleString()})</span>
        </div>

        {/* Seller + fitment */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-silver-light border border-border-light flex items-center justify-center text-[8px] font-bold text-graphite">
              {part.seller.logo}
            </div>
            <div>
              <div className="text-[10px] text-graphite font-medium">{part.seller.name}</div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-green-score" />
                <span className="text-[9px] text-green-score">{part.seller.reliability}% reliable</span>
              </div>
            </div>
          </div>
          <span className="text-[10px] text-text-muted">{part.fitment}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <a
            href={part.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 px-3 py-2 rounded-lg text-white text-xs font-semibold text-center transition-all active:scale-95"
            style={{ backgroundColor: 'var(--brand-color)' }}
          >
            View Deal
          </a>
          <button
            className="px-3 py-2 rounded-lg border border-border text-graphite hover:text-dark hover:bg-silver-light text-xs transition-all"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}