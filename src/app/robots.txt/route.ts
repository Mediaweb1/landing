import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Disallow: /api/

Allow: /_next/
Allow: /images/
Allow: /assets/

Sitemap: https://mediaweb.app/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
