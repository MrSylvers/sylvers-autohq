import { useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { VehicleProvider, useVehicle } from './data/store';
import { manufacturers } from './data/vehicles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { OrganizationSchema, WebSiteSchema } from './components/StructuredData';
import Home from './pages/Home';
import Parts from './pages/Parts';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import Disclosure from './pages/Disclosure';

function ThemeApplier({ children }) {
  const { selectedVehicle } = useVehicle();

  const theme = useMemo(() => {
    if (!selectedVehicle?.manufacturerId) {
      return { color: '#d4760a', text: '#ffffff', textOnAccent: '#1a1a1a' };
    }
    const mfr = manufacturers.find((m) => m.id === selectedVehicle.manufacturerId);
    if (!mfr) return { color: '#d4760a', text: '#ffffff', textOnAccent: '#1a1a1a' };
    return {
      color: mfr.color,
      text: mfr.textColor,
      textOnAccent: mfr.textOnAccent,
      name: mfr.name,
    };
  }, [selectedVehicle]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--brand-color', theme.color);
    root.style.setProperty('--brand-text', theme.text);
    root.style.setProperty('--brand-text-on-accent', theme.textOnAccent);

    // Update theme-color meta tag for mobile browser chrome
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme.color);

    // Update favicon to match brand color
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="${encodeURIComponent(theme.color)}"/><text x="32" y="42" font-family="Inter,system-ui,sans-serif" font-weight="800" font-size="28" fill="${encodeURIComponent(theme.text)}" text-anchor="middle">S</text></svg>`;
      favicon.href = `data:image/svg+xml,${svg}`;
    }
  }, [theme]);

  return children;
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500" style={{ backgroundColor: 'var(--color-bg, #F0F0F0)' }}>
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <VehicleProvider>
          <ThemeApplier>
            <OrganizationSchema />
            <WebSiteSchema />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/parts" element={<Parts />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/disclosure" element={<Disclosure />} />
              </Routes>
            </Layout>
          </ThemeApplier>
        </VehicleProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}