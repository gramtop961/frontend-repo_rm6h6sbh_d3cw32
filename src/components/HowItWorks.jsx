import React from 'react';

const steps = [
  {
    k: '01',
    title: 'Describe your goal',
    desc: 'Type or speak what you want done. The agent plans the sequence of actions.'
  },
  {
    k: '02',
    title: 'Review critical steps',
    desc: 'Approve sensitive operations with one click. You stay in the loop.'
  },
  {
    k: '03',
    title: 'Watch it execute',
    desc: 'See real-time actions and progress as your desktop transforms.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-['Geist',Inter,system-ui] text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">A transparent loop designed for accuracy, control, and trust.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
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
