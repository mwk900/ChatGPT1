import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { ScrollTopButton } from '@/components/scroll-top';
import { SiteFooter } from '@/components/site-footer';
import portfolioData from '@/data/portfolio.json';

const siteUrl = 'https://mwk000.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
  description:
    'Freelance website builder creating conversion-focused websites for local businesses, redesigns, and maintenance.',
  openGraph: {
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description:
      'Websites for local businesses that turn visitors into enquiries. Serving Nottingham, UK remote, and select Europe projects.',
    url: siteUrl,
    siteName: portfolioData.personal.name,
    images: [{ url: portfolioData.personal.image, width: 1200, height: 630, alt: `${portfolioData.personal.name} profile` }],
    type: 'website'
  },
  alternates: {
    canonical: siteUrl
  }
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: portfolioData.personal.name,
  jobTitle: portfolioData.personal.title,
  email: portfolioData.personal.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nottingham',
    addressCountry: 'UK'
  }
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${portfolioData.personal.name} Website Services`,
  url: siteUrl,
  description: 'Freelance website services for small businesses: new websites, redesigns, and maintenance.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">
        <ThemeProvider>
          <SiteHeader name={portfolioData.personal.name} />
          <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">{children}</main>
          <SiteFooter />
          <ScrollTopButton />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </body>
    </html>
  );
}
