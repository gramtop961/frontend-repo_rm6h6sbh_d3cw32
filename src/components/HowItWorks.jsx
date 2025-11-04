import React from 'react';

const steps = [
  {
    k: '01',
    title: 'Connect & Scope',
    desc: 'Define environments, applications, and permission scopes. SSO and SAML supported.'
  },
  {
    k: '02',
    title: 'Approve Policies',
    desc: 'Establish approval gates for sensitive actions with detailed audit logging and alerts.'
  },
  {
    k: '03',
    title: 'Run & Observe',
    desc: 'Launch agents, monitor in real time, and export compliant reports for auditors.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-['Geist',Inter,system-ui] text-3xl font-semibold sm:text-4xl">Enterprise roll‑out in three steps</h2>
          <p className="mt-3 text-white/70">A secure deployment model designed for control, transparency, and scale.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-300/20 font-mono text-sm text-emerald-300">{s.k}</span>
                <h3 className="text-lg font-medium">{s.title}</h3>
              </div>
              <p className="text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
