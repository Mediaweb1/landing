export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mediaweb.app/#organization",
      "name": "Mediaweb",
      "url": "https://mediaweb.app/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mediaweb.app/logo.svg",
        "width": 100,
        "height": 100
      },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://mediaweb.app/#website",
      "url": "https://mediaweb.app/",
      "name": "Mediaweb",
      "publisher": {
        "@id": "https://mediaweb.app/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://mediaweb.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://mediaweb.app/#softwareapplication",
      "name": "Mediaweb",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://mediaweb.app/",
      "offers": {
        "@type": "Offer",
        "price": "10",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
        "description": "Beta plan - 3 websites, 10 pages per website, 3GB storage, 3 custom domains"
      },
      "publisher": {
        "@id": "https://mediaweb.app/#organization"
      }
    }
  ]
};
