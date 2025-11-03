import React from 'react';
import { Cpu, MousePointer, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Understands Any App',
    desc: 'Perception models to navigate interfaces, from browsers to design tools to terminals.'
  },
  {
    icon: MousePointer,
    title: 'Precise Controls',
    desc: 'Pixel-accurate clicks, drags, and keyboard input with deterministic action planning.'
  },
  {
    icon: Shield,
    title: 'Granular Permissions',
    desc: 'Session sandboxing, approval gates, and real-time visibility keep you in control.'
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    desc: 'Low-latency loops and smart retries complete tasks rapidly and reliably.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-['Geist',Inter,system-ui] text-3xl font-semibold sm:text-4xl">What makes it different</h2>
          <p className="mt-3 text-white/70">
            Built for industrial-grade autonomy across your entire desktop — without sacrificing safety.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
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
