import React from 'react';
import { CreditCard, Shield, Lock, LineChart } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Unified Desktop Automation',
    desc: 'Automate reconciliation, onboarding, reporting, and ops across every desktop application securely.'
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    desc: 'Isolated sessions, least-privilege scopes, and full visibility. Built for SOC2 and ISO-ready programs.'
  },
  {
    icon: Lock,
    title: 'Compliance by Design',
    desc: 'Granular approvals, audit trails, and policy controls aligned with financial workflows.'
  },
  {
    icon: LineChart,
    title: 'Real-time Performance',
    desc: 'Low-latency execution, deterministic action plans, and telemetry to measure ROI in production.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" style={{ width: 480, height: 240 }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-['Geist',Inter,system-ui] text-3xl font-semibold sm:text-4xl">Built for Enterprise</h2>
          <p className="mt-3 text-white/70">
            Secure, observable, and reliable by default — so your team can scale automation with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-emerald-300">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
