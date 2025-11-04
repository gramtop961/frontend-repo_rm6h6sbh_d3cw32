import React from 'react';
import { Rocket, Shield } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-['Geist',Inter,system-ui] text-3xl font-semibold sm:text-4xl">Request an enterprise demo</h2>
        <p className="mt-3 text-white/70">See how autonomous desktop operations can streamline your financial workflows end‑to‑end.</p>

        <form className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none backdrop-blur focus:border-white/20 sm:w-80"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black shadow-lg shadow-white/10 transition hover:translate-y-[-1px] hover:shadow-xl"
          >
            <Rocket className="h-5 w-5" />
            Request Demo
          </button>
        </form>

        <div id="security" className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-4 text-xs text-white/60">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Shield className="h-3.5 w-3.5" /> SSO & SAML
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Shield className="h-3.5 w-3.5" /> Audit Trails
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Shield className="h-3.5 w-3.5" /> Least Privilege
          </span>
        </div>
      </div>
    </section>
  );
}
