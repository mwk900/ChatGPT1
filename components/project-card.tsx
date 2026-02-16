'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PortfolioData } from './types';

export function ProjectCard({ project }: { project: PortfolioData['projects'][number] }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="card group overflow-hidden">
      <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={`Preview of ${project.title}`}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        {project.isDemo && (
          <span className="rounded-full border border-brand-accent/60 bg-brand-accent/10 px-2.5 py-1 text-xs font-semibold text-brand-accent">
            Demo
          </span>
        )}
      </div>
      <p className="mb-4 text-sm text-brand-muted">{project.description}</p>
      {project.role && <p className="mb-3 text-xs text-brand-muted">Role: {project.role}</p>}
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-brand-muted">
        {project.highlights.slice(0, 3).map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-brand-border px-3 py-1 text-xs text-brand-muted">
            {tech}
          </span>
        ))}
      </div>
      <a href={project.link} className="text-sm font-medium text-brand-accent hover:underline" target="_blank" rel="noreferrer">
        View demo
      </a>
    </motion.article>
  );
}
