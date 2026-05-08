import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://sylversautohq.blogspot.com';
const SITE_NAME = 'SYL';

export default function SEO({
  title,
  description,
  path = '',
  ogImage,
  ogType = 'website',
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Auto Parts & Accessories`;
  const url = `${BASE_URL}${path}`;
  const image = ogImage || `${BASE_URL}/og-default.png`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, follow" />}
    </Helmet>
  );
}