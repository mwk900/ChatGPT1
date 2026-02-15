import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { ScrollTopButton } from '@/components/scroll-top';
import { SiteFooter } from '@/components/site-footer';
import portfolioData from '@/data/portfolio.json';

export const metadata: Metadata = {
  metadataBase: new URL('https://example-portfolio.netlify.app'),
  title: '[YOUR_NAME] | [YOUR_TITLE] Portfolio',
  description: 'Professional portfolio showcasing projects, writing, and contact information.',
  openGraph: {
    title: '[YOUR_NAME] Portfolio',
    description: 'Explore projects, insights, and contact details.',
    url: 'https://example-portfolio.netlify.app',
    siteName: '[YOUR_NAME] Portfolio',
    images: [{ url: portfolioData.personal.image, width: 1200, height: 630, alt: '[YOUR_NAME] Headshot' }],
    type: 'website'
  },
  alternates: {
    canonical: 'https://example-portfolio.netlify.app'
  }
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '[YOUR_NAME]',
  jobTitle: '[YOUR_TITLE]',
  email: '[EMAIL]',
  sameAs: ['[GITHUB_URL]', '[LINKEDIN_URL]', '[TWITTER_URL]']
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '[YOUR_NAME] Portfolio',
  url: 'https://example-portfolio.netlify.app'
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
