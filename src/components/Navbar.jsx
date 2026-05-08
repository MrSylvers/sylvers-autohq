import { useState } from 'react';
import { useVehicle } from '../data/store';
import { motion, AnimatePresence } from 'motion/react';
import { manufacturers } from '../data/vehicles';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Parts', href: '/parts' },
  { label: 'Categories', href: '/categories' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { selectedVehicle, reset } = useVehicle();

  const activeMfr = selectedVehicle?.manufacturerId
    ? manufacturers.find((m) => m.id === selectedVehicle.manufacturerId)
    : null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group" onClick={reset}>
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm transition-colors"
              style={{ backgroundColor: 'var(--brand-color)', color: 'var(--brand-text)' }}
            >
              SYL
            </div>
            <span className="font-bold text-xl text-dark tracking-tight">SYL</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-graphite hover:text-dark rounded-lg hover:bg-silver-light transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Vehicle indicator */}
          {selectedVehicle && (
            <div
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--brand-color) 8%, transparent)',
                borderColor: 'color-mix(in srgb, var(--brand-color) 20%, transparent)',
                borderWidth: 1,
              }}
            >
              <span
                className="text-xs font-medium"
                style={{ color: 'var(--brand-color)' }}
              >
                {selectedVehicle.year} {selectedVehicle.manufacturer} {selectedVehicle.model}
              </span>
              <button onClick={reset} className="text-graphite hover:text-dark text-xs ml-1">&times;</button>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-graphite hover:text-dark hover:bg-silver-light transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border-light overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm text-graphite hover:text-dark rounded-lg hover:bg-silver-light transition-all"
                >
                  {link.label}
                </a>
              ))}
              {selectedVehicle && (
                <button
                  onClick={() => { reset(); setMenuOpen(false); }}
                  className="w-full text-left px-3 py-2.5 text-sm rounded-lg hover:bg-silver-light transition-all"
                  style={{ color: 'var(--brand-color)' }}
                >
                  Clear: {selectedVehicle.year} {selectedVehicle.manufacturer}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}