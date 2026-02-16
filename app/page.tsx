'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';
import { ProjectCard } from '@/components/project-card';

const services = [
  {
    title: 'New Website',
    description: 'A complete website build focused on trust, clarity, and enquiries from day one.'
  },
  {
    title: 'Website Redesign',
    description: 'Improve your current website with a stronger structure, messaging, and calls-to-action.'
  },
  {
    title: 'Maintenance & Updates',
    description: 'Ongoing improvements, edits, and technical support to keep your website working smoothly.'
  }
];

const process = ['Quick call', 'Build', 'Launch', 'Support'];

const pricing = [
  {
    name: 'Starter — £199',
    items: ['1 page site', 'Contact form', 'Mobile responsive', 'Basic SEO', '2–4 day delivery']
  },
  {
    name: 'Business — £399',
    items: ['Up to 5 pages', 'Strong CTA layout', 'Performance optimisation', '4–7 day delivery']
  },
  {
    name: 'Redesign — from £299',
    items: ['Improve existing website', 'Better layout and clarity']
  },
  {
    name: 'Maintenance — £25/month',
    items: ['Small edits', 'Updates', 'Support']
  }
];

const reasons = [
  'Clear scope and communication',
  'Fast turnaround (3–7 days typical)',
  'Modern workflows (automation + AI-assisted tools)',
  'Mobile-first and performance focused',
  'Demo work clearly labelled'
];

export default function HomePage() {
  const featured = portfolioData.projects.slice(0, 3);

  return (
    <div className="space-y-20">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-2 text-sm font-medium text-brand-accent">Freelance Website Builder</p>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            Websites for local businesses that turn visitors into enquiries.
          </h1>
          <p className="mb-4 max-w-xl text-brand-muted">
            Fast, mobile-friendly websites with clear messaging and strong calls-to-action — built in days, not weeks.
          </p>
          <p className="mb-6 text-sm text-brand-muted">{portfolioData.personal.location}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-brand-accent px-6 py-3 text-sm font-medium text-brand-bg transition hover:scale-[1.02]">
              Get a quote
            </Link>
            <Link href="/portfolio" className="rounded-full border border-brand-border px-6 py-3 text-sm font-medium transition hover:border-brand-accent">
              View demo work
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <div className="relative mx-auto h-96 w-full max-w-sm overflow-hidden rounded-3xl border border-brand-border">
            <Image src={portfolioData.personal.image} alt="MatiWozniak profile image" fill priority className="object-cover" />
          </div>
        </motion.div>
      </section>

      <section id="services" className="space-y-6 scroll-mt-24">
        <div>
          <h2 className="section-title">Services</h2>
          <p className="mt-2 text-brand-muted">Practical website support for businesses that need results quickly.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-brand-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="section-title">Process</h2>
          <p className="mt-2 text-brand-muted">A simple workflow that keeps your project clear and moving.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {process.map((step, index) => (
            <article key={step} className="card">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8">
          <h2 className="section-title">Featured Demo Work</h2>
          <p className="mt-2 text-brand-muted">Examples showing what I can build for service businesses.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="mb-4 text-2xl font-semibold">Why Choose Me</h2>
        <ul className="list-disc space-y-2 pl-5 text-brand-muted">
          {reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="section-title">Pricing</h2>
          <p className="mt-2 text-brand-muted">Simple starting points for small-business website projects.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {pricing.map((plan) => (
            <article key={plan.name} className="card">
              <h3 className="mb-3 text-xl font-semibold">{plan.name}</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-brand-muted">
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-brand-accent/90 p-10 text-brand-bg">
        <h3 className="mb-2 text-2xl font-bold">Want a website that helps you get more enquiries?</h3>
        <p className="mb-4 text-sm">Tell me about your business and I’ll suggest the best next step.</p>
        <Link href="/contact" className="rounded-full bg-brand-bg px-6 py-3 text-sm font-medium text-brand-accent">
          Request a quote
        </Link>
      </section>
    </div>
  );
}
