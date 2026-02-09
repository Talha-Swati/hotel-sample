import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "PakTourZone - Discover Northern Pakistan's Hidden Treasures",
  description = "Discover Northern Pakistan with PakTourZone. Expert tour packages for Hunza, Skardu, Swat, and more. Book your adventure today!",
  keywords = "Pakistan tours, Hunza valley, Skardu tours, Swat valley, Northern Pakistan, tour packages, adventure travel",
  image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
  imageAlt = "Mountain landscape in Northern Pakistan",
  url = "https://paktourzone.com",
  type = "website",
  structuredData = null
}) => {
  const siteUrl = "https://paktourzone.com";
  const fullUrl = `${siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="PakTourZone" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="PakTourZone" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
