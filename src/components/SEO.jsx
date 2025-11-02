import { Helmet } from "react-helmet-async";

const baseUrl = "https://softpeaklabs.com.au";

function SEO({
  title,
  description,
  path = "",
  keywords,
  ogImage,
  type = "website",
}) {
  const fullTitle = title
    ? `${title} | Softpeak Labs`
    : "Softpeak Labs - Custom Software, Hardware & Technology Solutions";
  const fullDescription =
    description ||
    "We specialize in custom software, hardware, 3D printing, and integrated circuits, bringing your innovative ideas to life.";
  const url = `${baseUrl}${path}`;
  const image = ogImage || `${baseUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Softpeak Labs" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default SEO;

