"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white rounded-xl overflow-clip relative">
      <div className="z-10">
        <div className="relative px-7 pt-14 pb-12 border-b border-black/10 dark:border-white/[0.07]">
          <div
            className="absolute inset-0 lg:bg-right md:bg-position-[120%] bg-position-[160%] bg-no-repeat pointer-events-none grayscale opacity-[0.06] dark:invert md:bg-auto bg-size-[70%]"
            style={{
              backgroundImage: "url(/tristero.png)",
            }}
          />
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#E07830] mb-4">
            Developer Documentation
          </div>
          <h1 className="font-syne text-[38px] font-semibold tracking-[-0.02em] leading-tight mb-3.5 text-black dark:text-white">
            Build on Tristero
          </h1>
          <p className="font-mono text-sm text-black/40 dark:text-white/40 leading-relaxed max-w-[480px]">
            Integration references, API specifications, and SDK documentation for the Tristero
            trading platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <Link
            href="/docs/tristero/python-sdk"
            className="group p-7 border-r border-b border-black/10 dark:border-white/[0.07] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors relative overflow-hidden block"
          >
            <div className="font-mono text-[11px] text-black/20 dark:text-white/[0.18] mb-5">
              01
            </div>
            <div className="w-[3px] h-5 bg-[#E07830] mb-5"></div>
            <h3 className="font-syne text-[17px] font-semibold text-black dark:text-white mb-2 tracking-[-0.01em]">
              Python SDK
            </h3>
            <p className="font-mono text-[13px] text-black/40 dark:text-white/[0.38] leading-relaxed">
              Trading SDK documentation and reference
            </p>
            <div className="absolute bottom-6 right-6 text-sm text-black/20 dark:text-white/[0.18] group-hover:text-[#E07830] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              ↗
            </div>
          </Link>

          <Link
            href="/docs/tristero"
            className="group p-7 border-r border-b border-black/10 dark:border-white/[0.07] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors relative overflow-hidden block"
          >
            <div className="font-mono text-[11px] text-black/20 dark:text-white/[0.18] mb-5">
              02
            </div>
            <div className="w-[3px] h-5 bg-black/20 dark:bg-white/20 mb-5"></div>
            <h3 className="font-syne text-[17px] font-semibold text-black dark:text-white mb-2 tracking-[-0.01em]">
              Tristero API
            </h3>
            <p className="font-mono text-[13px] text-black/40 dark:text-white/[0.38] leading-relaxed">
              Core API reference and endpoint specs
            </p>
            <div className="absolute bottom-6 right-6 text-sm text-black/20 dark:text-white/[0.18] group-hover:text-[#E07830] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              ↗
            </div>
          </Link>

          <Link
            href="/docs/feather"
            className="group p-7 border-b border-black/10 dark:border-white/[0.07] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors relative overflow-hidden block"
          >
            <div className="font-mono text-[11px] text-black/20 dark:text-white/[0.18] mb-5">
              03
            </div>
            <div className="w-[3px] h-5 bg-black/12 dark:bg-white/[0.12] mb-5"></div>
            <h3 className="font-syne text-[17px] font-semibold text-black dark:text-white mb-2 tracking-[-0.01em]">
              Feather API
            </h3>
            <p className="font-mono text-[13px] text-black/40 dark:text-white/[0.38] leading-relaxed">
              Cross-chain swap API reference
            </p>
            <div className="absolute bottom-6 right-6 text-sm text-black/20 dark:text-white/[0.18] group-hover:text-[#E07830] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              ↗
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
