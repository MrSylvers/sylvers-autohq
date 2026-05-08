export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl text-dark">SYL</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Your trusted source for quality auto parts. We help everyday people find the right parts for their vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Parts Catalog', href: '/parts' },
                { label: 'Categories', href: '/categories' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-text-secondary hover:text-dark transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-dark text-sm uppercase tracking-wider mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Brakes & Rotors', href: '/categories#brakes' },
                { label: 'Suspension & Steering', href: '/categories#suspension' },
                { label: 'Engine & Drivetrain', href: '/categories#engine' },
                { label: 'Exhaust Systems', href: '/categories#exhaust' },
                { label: 'Electrical & Lighting', href: '/categories#lighting' },
                { label: 'Interior & Exterior', href: '/categories#interior' },
                { label: 'Fluids & Maintenance', href: '/categories#maintenance' },
              ].map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="text-sm text-text-secondary hover:text-dark transition-colors">{c.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-dark text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-text-secondary">SylversAutoHQ@gmail.com</li>
              <li className="text-sm text-text-secondary">Mon–Fri: 9am–6pm EST</li>
            </ul>
            <div className="mt-4 p-3 rounded-lg border border-brand/20" style={{ backgroundColor: 'color-mix(in srgb, var(--brand-color) 5%, transparent)' }}>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--brand-color)' }}>
                As an Amazon Associate, we earn from qualifying purchases. Full disclosure on every page.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} SYL. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-text-muted">
            <a href="/disclosure" className="hover:text-dark transition-colors">Privacy Policy</a>
            <a href="/disclosure" className="hover:text-dark transition-colors">Terms of Service</a>
            <a href="/disclosure" className="hover:text-dark transition-colors">Affiliate Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}