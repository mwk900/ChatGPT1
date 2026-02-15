'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';
import { ProjectCard } from '@/components/project-card';

export default function HomePage() {
  const featured = portfolioData.projects.slice(0, 3);

  return (
    <div className="space-y-20">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-2 text-sm font-medium text-brand-accent">Professional + Personality</p>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            {portfolioData.personal.name}, {portfolioData.personal.title}
          </h1>
          <p className="mb-6 max-w-xl text-brand-muted">{portfolioData.personal.bio}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/portfolio" className="rounded-full bg-brand-accent px-6 py-3 text-sm font-medium text-brand-bg transition hover:scale-[1.02]">
              View My Work
            </Link>
            <Link href="/contact" className="rounded-full border border-brand-border px-6 py-3 text-sm font-medium transition hover:border-brand-accent">
              Get In Touch
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <div className="relative mx-auto h-96 w-full max-w-sm overflow-hidden rounded-3xl border border-brand-border">
            <Image src={portfolioData.personal.image} alt="Professional headshot placeholder" fill priority className="object-cover" />
          </div>
        </motion.div>
      </section>

      <section className="card">
        <p className="text-lg leading-relaxed text-brand-muted">
          Hi, I&apos;m <span className="font-semibold text-brand-accent">{portfolioData.personal.name}</span>. I build thoughtful digital experiences that combine clarity, strong design, and measurable outcomes.
        </p>
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="section-title">Featured Projects</h2>
          <Link href="/portfolio" className="text-sm text-brand-accent hover:underline">
            View all projects
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-brand-accent/90 p-10 text-brand-bg">
        <h3 className="mb-2 text-2xl font-bold">Ready to work together?</h3>
        <p className="mb-4 text-sm">Let&apos;s talk about your project and how I can help deliver results.</p>
        <Link href="/contact" className="rounded-full bg-brand-bg px-6 py-3 text-sm font-medium text-brand-accent">
          Contact Me
        </Link>
      </section>
    </div>
  );
}
