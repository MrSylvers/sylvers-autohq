import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://sylversautohq.blogspot.com';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SYL',
    alternateName: 'SylversAutoHQ',
    url: BASE_URL,
    description: 'Compare OEM, aftermarket, and performance auto parts across top sellers. Budget-friendly to premium — we cover every price range.',
    email: 'SylversAutoHQ@gmail.com',
    sameAs: [
      'https://www.youtube.com/@SylversAutoHQ',
      'https://www.tiktok.com/@sylversautohq',
    ],
    foundingDate: '2024',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SYL',
    url: BASE_URL,
    description: 'Trusted auto parts finder. Find the right parts for your ride.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/parts?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function BreadcrumbSchema({ items }) {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url ? `${BASE_URL}${item.url}` : undefined,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function ProductSchema({ name, description, sku, price, currency = 'USD', availability = 'InStock', brand, category }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    sku,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url: BASE_URL,
    },
  };

  if (brand) schema.brand = { '@type': 'Brand', name: brand };
  if (category) schema.category = category;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function ArticleSchema({ headline, description, datePublished, dateModified, author = 'SYL', image }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SYL',
      url: BASE_URL,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': BASE_URL,
    },
  };

  if (image) schema.image = image;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}