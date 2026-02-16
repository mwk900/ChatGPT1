'use client';

import { FormEvent, useState } from 'react';
import portfolioData from '@/data/portfolio.json';

type FormData = {
  name: string;
  email: string;
  businessName: string;
  websiteGoal: string;
  timeline: string;
  budget: string;
  message: string;
  botField: string;
};

function encodeForm(values: Record<string, string>) {
  return Object.entries(values)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    businessName: '',
    websiteGoal: '',
    timeline: '',
    budget: '',
    message: '',
    botField: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  function validate(current: FormData) {
    const nextErrors: Partial<FormData> = {};
    if (!current.name.trim()) nextErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email)) nextErrors.email = 'Valid email required';
    if (!current.websiteGoal) nextErrors.websiteGoal = 'Please choose a goal';
    if (!current.timeline) nextErrors.timeline = 'Please choose a timeline';
    if (!current.budget) nextErrors.budget = 'Please choose a budget';
    if (!current.message.trim()) nextErrors.message = 'Message is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate(form)) return;
    if (form.botField) return;

    setLoading(true);
    setFeedback('');

    try {
      const payload = {
        'form-name': 'contact-enquiry',
        'bot-field': form.botField,
        name: form.name,
        email: form.email,
        businessName: form.businessName,
        websiteGoal: form.websiteGoal,
        timeline: form.timeline,
        budget: form.budget,
        message: form.message
      };

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(payload)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setFeedback('Thanks for your enquiry — I\'ll get back to you shortly.');
      setForm({
        name: '',
        email: '',
        businessName: '',
        websiteGoal: '',
        timeline: '',
        budget: '',
        message: '',
        botField: ''
      });
      setErrors({});
    } catch {
      setFeedback('Unable to submit right now. Please email mwk_ai@tuta.io directly.');
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
        <p className="mt-2 text-brand-muted">
          Tell me what you need and I&apos;ll reply with a practical quote and timeline.
        </p>
      </header>

      <form
        name="contact-enquiry"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="card space-y-4"
        onSubmit={onSubmit}
      >
        <input type="hidden" name="form-name" value="contact-enquiry" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" value={form.botField} onChange={(event) => update('botField', event.target.value)} />
          </label>
        </p>

        <div>
          <label className="mb-1 block text-sm text-brand-muted" htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={(event) => update('name', event.target.value)} aria-invalid={!!errors.name} aria-describedby="name-error" placeholder="Your full name" />
          {errors.name && <p id="name-error" className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-brand-muted" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} aria-invalid={!!errors.email} aria-describedby="email-error" placeholder="you@business.com" />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-brand-muted" htmlFor="businessName">Business name (optional)</label>
          <input id="businessName" name="businessName" value={form.businessName} onChange={(event) => update('businessName', event.target.value)} placeholder="Business or company name" />
        </div>

        <div>
          <label className="mb-1 block text-sm text-brand-muted" htmlFor="websiteGoal">Website goal</label>
          <select id="websiteGoal" name="websiteGoal" value={form.websiteGoal} onChange={(event) => update('websiteGoal', event.target.value)} className="w-full rounded-lg border border-brand-border bg-transparent px-4 py-3 text-brand-text" aria-invalid={!!errors.websiteGoal}>
            <option value="" className="bg-slate-900">Select a goal</option>
            <option value="New business website" className="bg-slate-900">New business website</option>
            <option value="Website redesign" className="bg-slate-900">Website redesign</option>
            <option value="Maintenance and updates" className="bg-slate-900">Maintenance and updates</option>
          </select>
          {errors.websiteGoal && <p className="mt-1 text-sm text-red-400">{errors.websiteGoal}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-brand-muted" htmlFor="timeline">Timeline</label>
          <select id="timeline" name="timeline" value={form.timeline} onChange={(event) => update('timeline', event.target.value)} className="w-full rounded-lg border border-brand-border bg-transparent px-4 py-3 text-brand-text" aria-invalid={!!errors.timeline}>
            <option value="" className="bg-slate-900">Select timeline</option>
            <option value="ASAP (1-2 weeks)" className="bg-slate-900">ASAP (1–2 weeks)</option>
            <option value="This month" className="bg-slate-900">This month</option>
            <option value="Flexible" className="bg-slate-900">Flexible</option>
          </select>
          {errors.timeline && <p className="mt-1 text-sm text-red-400">{errors.timeline}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-brand-muted" htmlFor="budget">Budget</label>
          <select id="budget" name="budget" value={form.budget} onChange={(event) => update('budget', event.target.value)} className="w-full rounded-lg border border-brand-border bg-transparent px-4 py-3 text-brand-text" aria-invalid={!!errors.budget}>
            <option value="" className="bg-slate-900">Select budget range</option>
            <option value="Starter (£199)" className="bg-slate-900">Starter (£199)</option>
            <option value="Business (£399)" className="bg-slate-900">Business (£399)</option>
            <option value="Custom / redesign" className="bg-slate-900">Custom / redesign</option>
          </select>
          {errors.budget && <p className="mt-1 text-sm text-red-400">{errors.budget}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-brand-muted" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} value={form.message} onChange={(event) => update('message', event.target.value)} aria-invalid={!!errors.message} aria-describedby="message-error" placeholder="Share what your business does and what you want the website to achieve" />
          {errors.message && <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>}
        </div>

        <button type="submit" disabled={loading} className="inline-flex items-center rounded-full bg-brand-accent px-6 py-3 text-sm font-medium text-brand-bg transition hover:scale-[1.02] disabled:opacity-70">
          {loading ? 'Sending...' : 'Send Enquiry'}
        </button>

        {feedback && <p className="text-sm text-green-400">{feedback}</p>}
      </form>

      <section className="text-center text-sm text-brand-muted">
        <p>Email: <a href={`mailto:${portfolioData.personal.email}`} className="text-brand-accent hover:underline">{portfolioData.personal.email}</a></p>
        <p>{portfolioData.personal.location}</p>
      </section>
    </div>
  );
}
