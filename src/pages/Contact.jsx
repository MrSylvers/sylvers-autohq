import SEO from '../components/SEO';
import { useState } from 'react';
import AffiliateNotice from '../components/AffiliateNotice';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <SEO
        title="Contact Us"
        description="Have a question about auto parts or need help finding the right component for your vehicle? Contact SYL and we'll get back to you within 24 hours."
        path="/contact"
      />

      <div>
        <h1 className="font-bold text-3xl sm:text-4xl text-dark mb-2">Contact Us</h1>
        <p className="text-sm text-text-secondary">Have a question or need help finding a part? We'd love to hear from you.</p>
      </div>

      {sent ? (
        <div className="p-8 rounded-xl bg-white border border-brand/20 text-center" style={{ borderColor: 'color-mix(in srgb, var(--brand-color) 20%, transparent)' }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'color-mix(in srgb, var(--brand-color) 10%, transparent)' }}>
            <svg className="w-7 h-7" style={{ color: 'var(--brand-color)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-bold text-xl text-dark mb-2">Message Sent!</h2>
          <p className="text-sm text-text-secondary">We'll get back to you at SylversAutoHQ@gmail.com as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-graphite font-medium mb-1.5">Name</label>
              <input
                type="text"
                required
                className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-sm text-dark placeholder-text-muted outline-none transition-colors"
                style={{ '--tw-ring-color': 'var(--brand-color)' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--brand-color)'}
                onBlur={(e) => e.target.style.borderColor = ''}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs text-graphite font-medium mb-1.5">Email</label>
              <input
                type="email"
                required
                className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-sm text-dark placeholder-text-muted outline-none transition-colors"
                onFocus={(e) => e.target.style.borderColor = 'var(--brand-color)'}
                onBlur={(e) => e.target.style.borderColor = ''}
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-graphite font-medium mb-1.5">Subject</label>
            <input
              type="text"
              required
              className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-sm text-dark placeholder-text-muted outline-none transition-colors"
              onFocus={(e) => e.target.style.borderColor = 'var(--brand-color)'}
              onBlur={(e) => e.target.style.borderColor = ''}
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label className="block text-xs text-graphite font-medium mb-1.5">Message</label>
            <textarea
              required
              rows={5}
              className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-sm text-dark placeholder-text-muted outline-none transition-colors resize-none"
              onFocus={(e) => e.target.style.borderColor = 'var(--brand-color)'}
              onBlur={(e) => e.target.style.borderColor = ''}
              placeholder="Tell us about your question or the part you're looking for..."
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg text-white text-sm font-semibold transition-all active:scale-95"
            style={{ backgroundColor: 'var(--brand-color)' }}
          >
            Send Message
          </button>
        </form>
      )}

      <div className="p-5 rounded-xl bg-white border border-border">
        <h2 className="font-semibold text-dark text-sm mb-3">Other Ways to Reach Us</h2>
        <div className="space-y-2 text-sm">
          <p className="text-text-secondary">Email: <a href="mailto:SylversAutoHQ@gmail.com" className="transition-colors" style={{ color: 'var(--brand-color)' }}>SylversAutoHQ@gmail.com</a></p>
          <p className="text-text-muted text-xs">We typically respond within 24 hours, Monday through Friday.</p>
        </div>
      </div>

      <AffiliateNotice />
    </div>
  );
}