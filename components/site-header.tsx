'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from './theme-provider';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  if (href.includes('#')) return pathname === '/';
  return pathname.startsWith(href);
}

export function SiteHeader({ name }: { name: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-brand-border/70 bg-brand-bg/90 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-soft' : ''
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8" aria-label="Main">
        <Link href="/" className="text-lg font-semibold tracking-tight text-brand-text">
          {name}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline text-sm ${isActive(pathname, link.href) ? 'text-brand-accent' : 'text-brand-muted'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-brand-accent px-4 py-2 text-sm font-medium text-brand-bg transition hover:scale-[1.02]">
            Get a quote
          </Link>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="rounded-full border border-brand-border p-2 text-brand-text transition hover:scale-105"
          >
            <motion.span animate={{ rotate: theme === 'dark' ? 0 : 180 }} className="block">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </motion.span>
          </button>
        </div>

        <button
          className="rounded-lg border border-brand-border p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-brand-border bg-brand-surface px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-brand-muted" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="w-fit rounded-full bg-brand-accent px-4 py-2 text-sm font-medium text-brand-bg" onClick={() => setOpen(false)}>
              Get a quote
            </Link>
            <button onClick={toggleTheme} className="flex items-center gap-2 text-brand-text" aria-label="Toggle theme">
              {theme === 'dark' ? <FiSun /> : <FiMoon />} Toggle Theme
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
