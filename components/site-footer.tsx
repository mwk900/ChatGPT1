import portfolioData from '@/data/portfolio.json';

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-brand-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-brand-muted md:px-8">
        <p>© {new Date().getFullYear()} MatiWozniak — Freelance Website Builder</p>
        <p>Nottingham • UK • Europe</p>
        <a href={`mailto:${portfolioData.personal.email}`} className="text-brand-accent hover:underline">
          {portfolioData.personal.email}
        </a>
      </div>
    </footer>
  );
}
