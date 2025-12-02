"use client";

import type { SiteConfig } from '../site.config';

interface ContactProps {
  contact: SiteConfig['contact'];
  socials: SiteConfig['socials'];
}

export function Contact({ contact, socials }: ContactProps) {
  return (
    <section className="section-card" id="contact">
      <header className="flex items-center justify-between mb-3">
        <div>
          <div className="section-label">Contact</div>
          <div className="section-title">Get In Touch</div>
        </div>
      </header>
      <p className="section-subtext mb-3">
        Feel free to reach out for collaborations, hackathons, internships, or to talk about web development and AI/ML.
      </p>
      <form
        className="space-y-2 text-xs"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          const formData = new FormData(form);
          const payload = Object.fromEntries(formData.entries());
          const statusEl = document.getElementById('contact-status');
          if (statusEl) statusEl.textContent = 'Sending...';
          try {
            const res = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload),
            });
            if (statusEl)
              statusEl.textContent = res.ok
                ? contact.successMessage
                : 'Something went wrong. Please try again later.';
            if (res.ok) form.reset();
          } catch (err) {
            if (statusEl)
              statusEl.textContent = 'Network error. Please try again later.';
          }
        }}
      >
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="contact-item">
            <div className="contact-label">Name</div>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-2 text-xs text-slate-100"
              placeholder="Your name"
            />
          </div>
          <div className="contact-item">
            <div className="contact-label">Email</div>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-2 text-xs text-slate-100"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-label">Message</div>
          <textarea
            name="message"
            required
            rows={4}
            className="mt-1 w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-2 text-xs text-slate-100"
            placeholder="Tell me about your project or idea"
          />
        </div>
        <button
          type="submit"
          className="btn-primary inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-medium text-slate-950 shadow-lg shadow-fuchsia-700/40 hover:shadow-fuchsia-500/50 transition"
        >
          Send Message
        </button>
        <div id="contact-status" className="mt-1 text-[11px] text-slate-400" />
      </form>
      <div className="mt-4 space-y-1 text-xs text-slate-300">
        <div>
          <span className="font-semibold">Email: </span>
          <a href={`mailto:${contact.email}`} className="text-sky-400 hover:underline">
            {contact.email}
          </a>
        </div>
        <div>
          <span className="font-semibold">GitHub: </span>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:underline"
          >
            {socials.github}
          </a>
        </div>
        <div>
          <span className="font-semibold">LinkedIn: </span>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:underline"
          >
            {socials.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}
