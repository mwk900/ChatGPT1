'use client';

import { useMemo, useState } from 'react';
import portfolioData from '@/data/portfolio.json';
import { ProjectCard } from '@/components/project-card';

const filters = ['All', ...new Set(portfolioData.projects.map((project) => project.category))];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');

  const projects = useMemo(() => {
    if (active === 'All') return portfolioData.projects;
    return portfolioData.projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="section-title">Portfolio</h1>
        <p className="mt-2 text-brand-muted">Demo projects showing layouts, UX, and features used in real small-business websites.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === filter ? 'border-brand-accent text-brand-accent' : 'border-brand-border text-brand-muted'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {projects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="card text-brand-muted">Project coming soon. Check back later!</div>
      )}
    </div>
  );
}
