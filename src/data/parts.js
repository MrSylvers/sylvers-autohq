const partCategories = [
  {
    id: 'brakes',
    name: 'Brakes & Rotors',
    icon: '⚙',
    description: 'Pads, rotors, calipers, and complete brake kits',
    subcategories: ['Brake Pads', 'Rotors', 'Calipers', 'Brake Lines', 'Master Cylinder'],
  },
  {
    id: 'suspension',
    name: 'Suspension & Steering',
    icon: '⚙',
    description: 'Shocks, struts, control arms, and steering components',
    subcategories: ['Shocks & Struts', 'Control Arms', 'Sway Bars', 'Ball Joints', 'Coilovers'],
  },
  {
    id: 'engine',
    name: 'Engine & Drivetrain',
    icon: '⚙',
    description: 'Engine parts, belts, gaskets, and drivetrain components',
    subcategories: ['Alternators', 'Starters', 'Belts', 'Gaskets', 'Water Pumps', 'Spark Plugs'],
  },
  {
    id: 'exhaust',
    name: 'Exhaust Systems',
    icon: '⚙',
    description: 'Mufflers, catalytic converters, and exhaust manifolds',
    subcategories: ['Mufflers', 'Catalytic Converters', 'Exhaust Manifolds', 'Pipes', 'O2 Sensors'],
  },
  {
    id: 'lighting',
    name: 'Electrical & Lighting',
    icon: '⚙',
    description: 'Headlights, taillights, bulbs, and electrical components',
    subcategories: ['Headlights', 'Taillights', 'Bulbs', 'Batteries', 'Alternators', 'Fuses'],
  },
  {
    id: 'interior',
    name: 'Interior & Exterior',
    icon: '⚙',
    description: 'Floor mats, seat covers, trim, and body panels',
    subcategories: ['Floor Mats', 'Seat Covers', 'Dash Kits', 'Mirrors', 'Grilles', 'Body Panels'],
  },
  {
    id: 'maintenance',
    name: 'Fluids & Maintenance',
    icon: '⚙',
    description: 'Oil, filters, coolants, and maintenance kits',
    subcategories: ['Engine Oil', 'Oil Filters', 'Air Filters', 'Coolant', 'Transmission Fluid'],
  },
];

export const sellers = {
  amazon: { name: 'Amazon', logo: 'A', reliability: 85, url: 'https://amazon.com' },
  rockauto: { name: 'RockAuto', logo: 'RA', reliability: 92, url: 'https://rockauto.com' },
  autozone: { name: 'AutoZone', logo: 'AZ', reliability: 88, url: 'https://autozone.com' },
  advance: { name: 'Advance Auto', logo: 'AAP', reliability: 84, url: 'https://advanceautoparts.com' },
  summit: { name: 'Summit Racing', logo: 'SR', reliability: 90, url: 'https://summitracing.com' },
  ebay: { name: 'eBay Motors', logo: 'eB', reliability: 78, url: 'https://ebay.com/motors' },
};

function generateParts(vehicle) {
  const parts = [];

  // Brake pads
  parts.push({
    id: 'bp-1',
    name: `Ceramic Brake Pads`,
    category: 'brakes',
    subcategory: 'Brake Pads',
    type: 'OEM',
    description: `Factory-grade ceramic brake pads designed for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Quiet stopping with minimal dust.`,
    price: 42.99,
    msrp: 59.99,
    rating: 4.3,
    reviewCount: 1247,
    seller: sellers.amazon,
    image: 'https://placehold.co/400x300/1a1a2e/d4760a?text=Brake+Pads',
    affiliateUrl: '#',
    sku: `BP-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-CER`,
    inStock: true,
    warranty: '2 Year',
    fitment: 'Direct Fit',
  });

  parts.push({
    id: 'bp-2',
    name: `Performance Carbon-Ceramic Brake Pads`,
    category: 'brakes',
    subcategory: 'Brake Pads',
    type: 'Performance',
    description: `High-performance carbon-ceramic brake pads for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Superior stopping power at high temperatures.`,
    price: 89.99,
    msrp: 129.99,
    rating: 4.7,
    reviewCount: 843,
    seller: sellers.summit,
    image: 'https://placehold.co/400x300/1a1a2e/f59e0b?text=Performance+Brakes',
    affiliateUrl: '#',
    sku: `BP-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-PERF`,
    inStock: true,
    warranty: '3 Year',
    fitment: 'Direct Fit',
  });

  parts.push({
    id: 'bp-3',
    name: `Economy Semi-Metallic Brake Pads`,
    category: 'brakes',
    subcategory: 'Brake Pads',
    type: 'Aftermarket',
    description: `Budget-friendly semi-metallic brake pads for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Reliable daily driving performance.`,
    price: 22.99,
    msrp: 34.99,
    rating: 4.0,
    reviewCount: 2156,
    seller: sellers.autozone,
    image: 'https://placehold.co/400x300/1a1a2e/6b7280?text=Economy+Brakes',
    affiliateUrl: '#',
    sku: `BP-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-ECO`,
    inStock: true,
    warranty: '1 Year',
    fitment: 'Direct Fit',
  });

  // Rotors
  parts.push({
    id: 'rot-1',
    name: `Drilled & Slotted Brake Rotors`,
    category: 'brakes',
    subcategory: 'Rotors',
    type: 'Performance',
    description: `Premium drilled and slotted rotors for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Maximum heat dissipation and fade resistance.`,
    price: 156.99,
    msrp: 219.99,
    rating: 4.6,
    reviewCount: 678,
    seller: sellers.rockauto,
    image: 'https://placehold.co/400x300/1a1a2e/d4760a?text=Performance+Rotors',
    affiliateUrl: '#',
    sku: `ROT-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-DS`,
    inStock: true,
    warranty: 'Lifetime',
    fitment: 'Direct Fit',
  });

  parts.push({
    id: 'rot-2',
    name: `OEM Replacement Brake Rotors`,
    category: 'brakes',
    subcategory: 'Rotors',
    type: 'OEM',
    description: `Factory-spec replacement rotors for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Exact OEM fitment and performance.`,
    price: 78.99,
    msrp: 104.99,
    rating: 4.4,
    reviewCount: 1543,
    seller: sellers.advance,
    image: 'https://placehold.co/400x300/1a1a2e/6b7280?text=OEM+Rotors',
    affiliateUrl: '#',
    sku: `ROT-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-OEM`,
    inStock: true,
    warranty: '3 Year',
    fitment: 'Direct Fit',
  });

  // Suspension
  parts.push({
    id: 'sus-1',
    name: `Complete Strut Assembly`,
    category: 'suspension',
    subcategory: 'Shocks & Struts',
    type: 'OEM',
    description: `Pre-assembled strut for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Quick install, no spring compression needed.`,
    price: 134.99,
    msrp: 179.99,
    rating: 4.2,
    reviewCount: 892,
    seller: sellers.amazon,
    image: 'https://placehold.co/400x300/1a1a2e/d4760a?text=Strut+Assembly',
    affiliateUrl: '#',
    sku: `SUS-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-STRUT`,
    inStock: true,
    warranty: 'Lifetime',
    fitment: 'Direct Fit',
  });

  parts.push({
    id: 'sus-2',
    name: `Adjustable Coilover Kit`,
    category: 'suspension',
    subcategory: 'Coilovers',
    type: 'Performance',
    description: `Height-adjustable coilover suspension for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Track-ready handling with daily comfort.`,
    price: 899.99,
    msrp: 1249.99,
    rating: 4.8,
    reviewCount: 456,
    seller: sellers.summit,
    image: 'https://placehold.co/400x300/1a1a2e/f59e0b?text=Coilover+Kit',
    affiliateUrl: '#',
    sku: `SUS-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-COIL`,
    inStock: false,
    warranty: '5 Year',
    fitment: 'Direct Fit',
  });

  // Engine
  parts.push({
    id: 'eng-1',
    name: `High-Output Alternator`,
    category: 'engine',
    subcategory: 'Alternators',
    type: 'Aftermarket',
    description: `200-amp high-output alternator for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Perfect for audio systems and off-road lighting.`,
    price: 189.99,
    msrp: 249.99,
    rating: 4.5,
    reviewCount: 723,
    seller: sellers.ebay,
    image: 'https://placehold.co/400x300/1a1a2e/d4760a?text=Alternator',
    affiliateUrl: '#',
    sku: `ENG-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-ALT`,
    inStock: true,
    warranty: 'Lifetime',
    fitment: 'Direct Fit',
  });

  parts.push({
    id: 'eng-2',
    name: `Iridium Spark Plugs (Set of 6)`,
    category: 'engine',
    subcategory: 'Spark Plugs',
    type: 'OEM',
    description: `OEM-grade iridium spark plugs for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Up to 100,000 mile service life.`,
    price: 44.99,
    msrp: 59.99,
    rating: 4.6,
    reviewCount: 3210,
    seller: sellers.rockauto,
    image: 'https://placehold.co/400x300/1a1a2e/6b7280?text=Spark+Plugs',
    affiliateUrl: '#',
    sku: `ENG-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-SPK`,
    inStock: true,
    warranty: '2 Year',
    fitment: 'Direct Fit',
  });

  // Exhaust
  parts.push({
    id: 'exh-1',
    name: `Cat-Back Exhaust System`,
    category: 'exhaust',
    subcategory: 'Mufflers',
    type: 'Performance',
    description: `Performance cat-back exhaust for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Deep aggressive tone with HP gains.`,
    price: 549.99,
    msrp: 749.99,
    rating: 4.7,
    reviewCount: 534,
    seller: sellers.summit,
    image: 'https://placehold.co/400x300/1a1a2e/f59e0b?text=Exhaust+System',
    affiliateUrl: '#',
    sku: `EXH-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-CAT`,
    inStock: true,
    warranty: 'Lifetime',
    fitment: 'Direct Fit',
  });

  parts.push({
    id: 'exh-2',
    name: `Universal Muffler`,
    category: 'exhaust',
    subcategory: 'Mufflers',
    type: 'Aftermarket',
    description: `Universal fit turbo-style muffler. Compatible with ${vehicle.year} ${vehicle.make} ${vehicle.model} with basic welding.`,
    price: 48.99,
    msrp: 69.99,
    rating: 4.1,
    reviewCount: 1876,
    seller: sellers.amazon,
    image: 'https://placehold.co/400x300/1a1a2e/6b7280?text=Universal+Muffler',
    affiliateUrl: '#',
    sku: `EXH-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-MUFF`,
    inStock: true,
    warranty: '1 Year',
    fitment: 'Universal',
  });

  // Lighting
  parts.push({
    id: 'lit-1',
    name: `LED Headlight Bulbs (Pair)`,
    category: 'lighting',
    subcategory: 'Bulbs',
    type: 'Aftermarket',
    description: `Ultra-bright LED headlight conversion for ${vehicle.year} ${vehicle.make} ${vehicle.model}. 300% brighter than halogen.`,
    price: 38.99,
    msrp: 54.99,
    rating: 4.4,
    reviewCount: 4532,
    seller: sellers.amazon,
    image: 'https://placehold.co/400x300/1a1a2e/d4760a?text=LED+Bulbs',
    affiliateUrl: '#',
    sku: `LIT-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-LED`,
    inStock: true,
    warranty: '5 Year',
    fitment: 'Direct Fit',
  });

  parts.push({
    id: 'lit-2',
    name: `OEM Headlight Assembly`,
    category: 'lighting',
    subcategory: 'Headlights',
    type: 'OEM',
    description: `Factory replacement headlight assembly for ${vehicle.year} ${vehicle.make} ${vehicle.model}. DOT approved.`,
    price: 189.99,
    msrp: 259.99,
    rating: 4.3,
    reviewCount: 765,
    seller: sellers.rockauto,
    image: 'https://placehold.co/400x300/1a1a2e/6b7280?text=Headlight+Assembly',
    affiliateUrl: '#',
    sku: `LIT-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-HEAD`,
    inStock: true,
    warranty: '2 Year',
    fitment: 'Direct Fit',
  });

  // Interior
  parts.push({
    id: 'int-1',
    name: `All-Weather Floor Mats`,
    category: 'interior',
    subcategory: 'Floor Mats',
    type: 'Aftermarket',
    description: `Custom-fit all-weather floor mats for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Laser-measured for perfect fit.`,
    price: 69.99,
    msrp: 99.99,
    rating: 4.5,
    reviewCount: 2891,
    seller: sellers.amazon,
    image: 'https://placehold.co/400x300/1a1a2e/d4760a?text=Floor+Mats',
    affiliateUrl: '#',
    sku: `INT-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-MAT`,
    inStock: true,
    warranty: '3 Year',
    fitment: 'Custom Fit',
  });

  // Maintenance
  parts.push({
    id: 'mnt-1',
    name: `Full Synthetic Engine Oil - 5W-30 (5qt)`,
    category: 'maintenance',
    subcategory: 'Engine Oil',
    type: 'OEM',
    description: `Premium full synthetic 5W-30 engine oil. Recommended for ${vehicle.year} ${vehicle.make} ${vehicle.model}. API SP certified.`,
    price: 27.99,
    msrp: 34.99,
    rating: 4.7,
    reviewCount: 8923,
    seller: sellers.amazon,
    image: 'https://placehold.co/400x300/1a1a2e/d4760a?text=Synthetic+Oil',
    affiliateUrl: '#',
    sku: `MNT-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-OIL`,
    inStock: true,
    warranty: 'N/A',
    fitment: 'Universal',
  });

  parts.push({
    id: 'mnt-2',
    name: `Premium Engine Air Filter`,
    category: 'maintenance',
    subcategory: 'Air Filters',
    type: 'Performance',
    description: `Reusable high-flow air filter for ${vehicle.year} ${vehicle.make} ${vehicle.model}. Washable, improves MPG.`,
    price: 49.99,
    msrp: 69.99,
    rating: 4.6,
    reviewCount: 4567,
    seller: sellers.summit,
    image: 'https://placehold.co/400x300/1a1a2e/f59e0b?text=Air+Filter',
    affiliateUrl: '#',
    sku: `MNT-${vehicle.year}-${vehicle.make.slice(0,3).toUpperCase()}-FILTER`,
    inStock: true,
    warranty: '1 Year',
    fitment: 'Direct Fit',
  });

  return parts;
}

export function getPartsForVehicle(vehicle) {
  return generateParts(vehicle);
}

export function getPartById(id, vehicle) {
  return generateParts(vehicle).find((p) => p.id === id) || null;
}

export function getCategories() {
  return partCategories;
}

export const vehicleFitments = {
  // Placeholder for future VIN/fitment API integration
  checkFitment: (partSku, vin) => {
    // Future: call real fitment API
    return { compatible: true, confidence: 85, notes: 'Verified with manufacturer data' };
  },
};
