import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black text-white">
      {/* Interactive 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,9,11,0.2),rgba(0,0,0,0.8))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Enterprise-grade autonomy • Fintech ready
        </div>
        <h1 className="mt-6 font-['Geist',Inter,system-ui] text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Autonomous Desktop Ops for Modern Finance
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          A secure, enterprise-ready agent that understands your workflows, executes with precision, and keeps you in complete control—built for banking, payments, and fintech operations.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#get-started"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black shadow-xl shadow-white/10 transition hover:translate-y-[-1px] hover:shadow-2xl"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:scale-110" />
            Request a Demo
          </a>
          <a
            href="#security"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Shield className="h-5 w-5" />
            Security Whitepaper
          </a>
        </div>

        <p className="mt-6 text-xs text-white/50">
          Glassmorphic 3D experience — move your cursor to interact with the card.
        </p>
      </div>
    </section>
  );
}
