'use client';

import { FormEvent, useState } from 'react';
import portfolioData from '@/data/portfolio.json';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  function validate(current: FormData) {
    const nextErrors: Partial<FormData> = {};
    if (!current.name.trim()) nextErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email)) nextErrors.email = 'Valid email required';
    if (!current.subject.trim()) nextErrors.subject = 'Subject is required';
    if (!current.message.trim()) nextErrors.message = 'Message is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validate(form)) return;

    setLoading(true);
    setFeedback('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setFeedback('Thanks for reaching out! I\'ll get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      setFeedback('Sorry, something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    const next = { ...form, [key]: value };
    setForm(next);
    validate(next);
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <header className="text-center">
        <h1 className="section-title">Contact</h1>
        <p className="mt-2 text-brand-muted">Let&apos;s connect about opportunities, collaborations, or project ideas.</p>
      </header>


<form name="portfolio-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="card space-y-4" onSubmit={onSubmit} noValidate>
  <input type="hidden" name="form-name" value="portfolio-contact" />
  <p className="hidden">
    <label>
      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
    </label>
  </p>


        <div>
          <label className="mb-1 block text-sm text-brand-muted" htmlFor="name">Name</label>
          <input id="name" value={form.name} onChange={(event) => update('name', event.target.value)} aria-invalid={!!errors.name} aria-describedby="name-error" placeholder="Your name" />
          {errors.name && <p id="name-error" className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-brand-muted" htmlFor="email">Email</label>
          <input id="email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} aria-invalid={!!errors.email} aria-describedby="email-error" placeholder="you@company.com" />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-brand-muted" htmlFor="subject">Subject</label>
          <input id="subject" value={form.subject} onChange={(event) => update('subject', event.target.value)} aria-invalid={!!errors.subject} aria-describedby="subject-error" placeholder="How can I help?" />
          {errors.subject && <p id="subject-error" className="mt-1 text-sm text-red-400">{errors.subject}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-brand-muted" htmlFor="message">Message</label>
          <textarea id="message" rows={5} value={form.message} onChange={(event) => update('message', event.target.value)} aria-invalid={!!errors.message} aria-describedby="message-error" placeholder="Tell me a little about your project" />
          {errors.message && <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>}
        </div>

        <button type="submit" disabled={loading} className="inline-flex items-center rounded-full bg-brand-accent px-6 py-3 text-sm font-medium text-brand-bg transition hover:scale-[1.02] disabled:opacity-70">
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {feedback && <p className="text-sm text-green-400">{feedback}</p>}
      </form>

      <section className="text-center text-sm text-brand-muted">
        <p>Email: {portfolioData.personal.email}</p>
        <p>Calendar: [CALENDLY_LINK]</p>
      </section>
    </div>
  );
}
