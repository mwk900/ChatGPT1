import Image from 'next/image';
import portfolioData from '@/data/portfolio.json';

const socialLinks = [
  { key: 'GitHub', url: portfolioData.social.github },
  { key: 'LinkedIn', url: portfolioData.social.linkedin },
  { key: 'Twitter', url: portfolioData.social.twitter }
].filter((entry) => entry.url && entry.url.startsWith('http'));

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
        <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-brand-border">
          <Image src={portfolioData.personal.image} alt="MatiWozniak profile image" fill className="object-cover" />
        </div>
        <div>
          <h1 className="section-title mb-2">About</h1>
          <div className="mb-6 h-1 w-20 rounded bg-brand-accent" />
          <p className="mb-4 text-brand-muted">
            I build modern websites for local businesses — focused on clarity, credibility, and getting you contacted.
          </p>
          <p className="mb-4 text-brand-muted">
            I&apos;m early in my freelance journey, which means you get strong attention to detail, fast delivery, and straightforward communication.
          </p>
          <p className="text-brand-muted">
            I use modern tooling (including automation and AI-assisted workflows) to move efficiently while keeping quality high.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Core Skills</h2>
        <div className="flex flex-wrap gap-3">
          {portfolioData.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {socialLinks.length > 0 && (
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Social Links</h2>
          <div className="flex flex-wrap gap-4 text-sm text-brand-muted">
            {socialLinks.map((entry) => (
              <a key={entry.key} href={entry.url} target="_blank" rel="noreferrer" className="transition hover:text-brand-accent">
                {entry.key}
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
