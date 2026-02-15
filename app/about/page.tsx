import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import portfolioData from '@/data/portfolio.json';

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
        <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-brand-border">
          <Image src={portfolioData.personal.image} alt="[YOUR_NAME] profile image" fill className="object-cover" />
        </div>
        <div>
          <h1 className="section-title mb-2">About Me</h1>
          <div className="mb-6 h-1 w-20 rounded bg-brand-accent" />
          <p className="mb-4 text-brand-muted">
            Hi, I&apos;m [YOUR_NAME]. I&apos;m a [YOUR_TITLE] passionate about creating meaningful products that blend technical quality and human-centered design.
          </p>
          <p className="mb-6 text-brand-muted">
            Replace this paragraph with your own journey, background, and what excites you most in your current career direction.
          </p>
          <Link href="/portfolio" className="text-brand-accent hover:underline">
            Explore my portfolio
          </Link>
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

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Social Links</h2>
        <div className="flex gap-5 text-xl text-brand-muted">
          <a href={portfolioData.social.github} aria-label="GitHub" className="transition hover:text-brand-accent" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={portfolioData.social.linkedin} aria-label="LinkedIn" className="transition hover:text-brand-accent" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href={portfolioData.social.twitter} aria-label="Twitter" className="transition hover:text-brand-accent" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>
        </div>
      </section>
    </div>
  );
}
