const LOGO_BASE = 'https://raw.githubusercontent.com/nicholasgasior/car-logos/master/logos';

export const manufacturers = [
  {
    id: 'ford', name: 'Ford',
    logo: `${LOGO_BASE}/ford.png`,
    color: '#003478', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Mustang', 'F-150', 'Explorer', 'Escape', 'Bronco', 'Ranger', 'Edge', 'Expedition', 'Maverick', 'Bronco Sport'],
  },
  {
    id: 'chevrolet', name: 'Chevrolet',
    logo: `${LOGO_BASE}/chevrolet.png`,
    color: '#D4AF37', textColor: '#1a1a1a', textOnAccent: '#1a1a1a',
    makes: ['Silverado', 'Camaro', 'Tahoe', 'Suburban', 'Equinox', 'Malibu', 'Traverse', 'Colorado', 'Trax', 'Blazer', 'Trailblazer'],
  },
  {
    id: 'dodge', name: 'Dodge',
    logo: `${LOGO_BASE}/dodge.png`,
    color: '#CC0000', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Charger', 'Challenger', 'Durango', 'Grand Caravan', 'Hornet'],
  },
  {
    id: 'honda', name: 'Honda',
    logo: `${LOGO_BASE}/honda.png`,
    color: '#CC0000', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'HR-V', 'Fit', 'Ridgeline', 'Passport', 'Prologue'],
  },
  {
    id: 'toyota', name: 'Toyota',
    logo: `${LOGO_BASE}/toyota.png`,
    color: '#EB0A1E', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Camry', 'Corolla', 'RAV4', 'Tacoma', 'Tundra', 'Highlander', '4Runner', 'Prius', 'Sienna', 'Grand Highlander', 'bZ4X'],
  },
  {
    id: 'nissan', name: 'Nissan',
    logo: `${LOGO_BASE}/nissan.png`,
    color: '#C3002F', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Altima', 'Sentra', 'Rogue', 'Frontier', 'Pathfinder', 'Murano', 'Maxima', 'Armada', 'Kicks', 'Versa', 'Ariya'],
  },
  {
    id: 'bmw', name: 'BMW',
    logo: `${LOGO_BASE}/bmw.png`,
    color: '#1C69D4', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['3 Series', '5 Series', 'X3', 'X5', 'M3', 'M4', 'X1', '7 Series', 'X7', 'i4', 'iX', 'Z4'],
  },
  {
    id: 'mercedes', name: 'Mercedes-Benz',
    logo: `${LOGO_BASE}/mercedes-benz.png`,
    color: '#999999', textColor: '#1a1a1a', textOnAccent: '#1a1a1a',
    makes: ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'A-Class', 'CLA', 'G-Wagon', 'EQB', 'EQS', 'AMG GT'],
  },
  {
    id: 'audi', name: 'Audi',
    logo: `${LOGO_BASE}/audi.png`,
    color: '#BB0A14', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['A3', 'A4', 'A6', 'Q5', 'Q7', 'Q3', 'e-tron', 'TT', 'Q8', 'RS7', 'A5'],
  },
  {
    id: 'subaru', name: 'Subaru',
    logo: `${LOGO_BASE}/subaru.png`,
    color: '#004C97', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Outback', 'Forester', 'Crosstrek', 'Impreza', 'WRX', 'Legacy', 'Ascent', 'Solterra'],
  },
  {
    id: 'hyundai', name: 'Hyundai',
    logo: `${LOGO_BASE}/hyundai.png`,
    color: '#002C5F', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Kona', 'Palisade', 'Accent', 'IONIQ 5', 'IONIQ 6', 'Venue'],
  },
  {
    id: 'kia', name: 'Kia',
    logo: `${LOGO_BASE}/kia.png`,
    color: '#BB162B', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['K5', 'Sorento', 'Sportage', 'Telluride', 'Forte', 'Soul', 'Stinger', 'EV6', 'EV9', 'Seltos'],
  },
  {
    id: 'mazda', name: 'Mazda',
    logo: `${LOGO_BASE}/mazda.png`,
    color: '#910A2D', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'MX-5 Miata', 'CX-30', 'CX-50', 'CX-90', 'MX-30'],
  },
  {
    id: 'volkswagen', name: 'Volkswagen',
    logo: `${LOGO_BASE}/volkswagen.png`,
    color: '#001E50', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Jetta', 'Passat', 'Golf', 'Tiguan', 'Atlas', 'Taos', 'ID.4', 'ID.Buzz', 'Arteon', 'Golf GTI'],
  },
  {
    id: 'lexus', name: 'Lexus',
    logo: `${LOGO_BASE}/lexus.png`,
    color: '#333333', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['ES', 'RX', 'NX', 'IS', 'GX', 'UX', 'LS', 'LX', 'TX', 'RZ'],
  },
  {
    id: 'jeep', name: 'Jeep',
    logo: `${LOGO_BASE}/jeep.png`,
    color: '#517B37', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Wrangler', 'Grand Cherokee', 'Cherokee', 'Compass', 'Renegade', 'Gladiator', 'Wagoneer', 'Grand Wagoneer'],
  },
  {
    id: 'ram', name: 'Ram',
    logo: `${LOGO_BASE}/ram.png`,
    color: '#8B0000', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Ram 1500', 'Ram 2500', 'Ram 3500', 'Ram ProMaster', 'Ram 1500 REV'],
  },
  {
    id: 'gmc', name: 'GMC',
    logo: `${LOGO_BASE}/gmc.png`,
    color: '#CC0000', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Sierra', 'Yukon', 'Acadia', 'Terrain', 'Canyon', 'Hummer EV'],
  },
  {
    id: 'cadillac', name: 'Cadillac',
    logo: `${LOGO_BASE}/cadillac.png`,
    color: '#1A1A1A', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Escalade', 'CT4', 'CT5', 'XT4', 'XT5', 'XT6', 'Lyriq', 'Celestiq'],
  },
  {
    id: 'buick', name: 'Buick',
    logo: `${LOGO_BASE}/buick.png`,
    color: '#1D3557', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Encore', 'Envision', 'Enclave', 'Regal', 'LaCrosse'],
  },
  {
    id: 'lincoln', name: 'Lincoln',
    logo: `${LOGO_BASE}/lincoln.png`,
    color: '#2C2C2C', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Navigator', 'Aviator', 'Corsair', 'Nautilus', 'Z'],
  },
  {
    id: 'acura', name: 'Acura',
    logo: `${LOGO_BASE}/acura.png`,
    color: '#8B0000', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['MDX', 'RDX', 'TLX', 'Integra', 'NSX', 'ZDX'],
  },
  {
    id: 'infiniti', name: 'Infiniti',
    logo: `${LOGO_BASE}/infiniti.png`,
    color: '#404040', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Q50', 'Q60', 'QX50', 'QX60', 'QX80', 'QX55'],
  },
  {
    id: 'mitsubishi', name: 'Mitsubishi',
    logo: `${LOGO_BASE}/mitsubishi.png`,
    color: '#CC0000', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Outlander', 'Eclipse Cross', 'Mirage', 'Outlander Sport', 'Lancer'],
  },
  {
    id: 'volvo', name: 'Volvo',
    logo: `${LOGO_BASE}/volvo.png`,
    color: '#003057', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['XC90', 'XC60', 'XC40', 'S60', 'S90', 'V60', 'V90', 'C40', 'EX30', 'EX90'],
  },
  {
    id: 'genesis', name: 'Genesis',
    logo: `${LOGO_BASE}/genesis.png`,
    color: '#1C1C1C', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['G80', 'G90', 'GV70', 'GV80', 'GV60', 'Electrified G80'],
  },
  {
    id: 'tesla', name: 'Tesla',
    logo: `${LOGO_BASE}/tesla.png`,
    color: '#CC0000', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Model 3', 'Model Y', 'Model S', 'Model X', 'Cybertruck', 'Roadster'],
  },
  {
    id: 'rivian', name: 'Rivian',
    logo: `${LOGO_BASE}/rivian.png`,
    color: '#00A651', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['R1T', 'R1S', 'R2', 'R3'],
  },
  {
    id: 'lucid', name: 'Lucid',
    logo: `${LOGO_BASE}/lucid.png`,
    color: '#C9A84C', textColor: '#1a1a1a', textOnAccent: '#1a1a1a',
    makes: ['Air Pure', 'Air Touring', 'Air Grand Touring', 'Gravity'],
  },
  {
    id: 'polestar', name: 'Polestar',
    logo: `${LOGO_BASE}/polestar.png`,
    color: '#FFFFFF', textColor: '#1a1a1a', textOnAccent: '#1a1a1a',
    makes: ['Polestar 2', 'Polestar 3', 'Polestar 4', 'Polestar 1'],
  },
  {
    id: 'mini', name: 'MINI',
    logo: `${LOGO_BASE}/mini.png`,
    color: '#1A1A1A', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Cooper', 'Cooper S', 'Countryman', 'Clubman', 'Convertible', 'JCW'],
  },
  {
    id: 'porsche', name: 'Porsche',
    logo: `${LOGO_BASE}/porsche.png`,
    color: '#1A1A1A', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['911', 'Cayenne', 'Macan', 'Taycan', 'Panamera', 'Cayman', 'Boxster'],
  },
  {
    id: 'land-rover', name: 'Land Rover',
    logo: `${LOGO_BASE}/land-rover.png`,
    color: '#1A4731', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Range Rover', 'Range Rover Sport', 'Range Rover Evoque', 'Range Rover Velar', 'Discovery', 'Defender'],
  },
  {
    id: 'jaguar', name: 'Jaguar',
    logo: `${LOGO_BASE}/jaguar.png`,
    color: '#1A1A1A', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['F-PACE', 'E-PACE', 'I-PACE', 'XF', 'XE', 'F-TYPE'],
  },
  {
    id: 'maserati', name: 'Maserati',
    logo: `${LOGO_BASE}/maserati.png`,
    color: '#003087', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Ghibli', 'Quattroporte', 'Levante', 'MC20', 'Grecale', 'GranTurismo'],
  },
  {
    id: 'alfa-romeo', name: 'Alfa Romeo',
    logo: `${LOGO_BASE}/alfa-romeo.png`,
    color: '#CC0000', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Giulia', 'Stelvio', 'Tonale'],
  },
  {
    id: 'ferrari', name: 'Ferrari',
    logo: `${LOGO_BASE}/ferrari.png`,
    color: '#FF2800', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['296 GTB', 'SF90 Stradale', 'Roma', 'Purosangue', '812 Superfast'],
  },
  {
    id: 'lamborghini', name: 'Lamborghini',
    logo: `${LOGO_BASE}/lamborghini.png`,
    color: '#1A1A1A', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Huracan', 'Revuelto', 'Urus', 'Countach'],
  },
  {
    id: 'bentley', name: 'Bentley',
    logo: `${LOGO_BASE}/bentley.png`,
    color: '#1A3A2A', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Continental GT', 'Flying Spur', 'Bentayga', 'Mulliner'],
  },
  {
    id: 'rolls-royce', name: 'Rolls-Royce',
    logo: `${LOGO_BASE}/rolls-royce.png`,
    color: '#1A1A1A', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['Ghost', 'Phantom', 'Cullinan', 'Spectre', 'Dawn'],
  },
  {
    id: 'aston-martin', name: 'Aston Martin',
    logo: `${LOGO_BASE}/aston-martin.png`,
    color: '#004225', textColor: '#ffffff', textOnAccent: '#ffffff',
    makes: ['DB12', 'Vantage', 'DBS', 'DBX', 'Valour', 'Valkyrie'],
  },
  {
    id: 'mclaren', name: 'McLaren',
    logo: `${LOGO_BASE}/mclaren.png`,
    color: '#FF8000', textColor: '#1a1a1a', textOnAccent: '#1a1a1a',
    makes: ['Artura', '750S', 'GT', 'Senna', 'Speedtail', 'Solus GT'],
  },
];

export const years = Array.from({ length: 25 }, (_, i) => 2026 - i);

export function getModelsForManufacturer(manufacturerId) {
  const mfr = manufacturers.find((m) => m.id === manufacturerId);
  return mfr ? mfr.makes : [];
}