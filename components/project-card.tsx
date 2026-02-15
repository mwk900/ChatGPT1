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
      <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
      <p className="mb-4 text-sm text-brand-muted">{project.description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-brand-border px-3 py-1 text-xs text-brand-muted">
            {tech}
          </span>
        ))}
      </div>
      <a href={project.link} className="text-sm text-brand-accent hover:underline" target="_blank" rel="noreferrer">
        View Project
      </a>
    </motion.article>
  );
}
