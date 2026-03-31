import Link from "next/link";
import { css } from "unplugin-inline-css-modules";
import classes from "./home.module.css";

function Card(props: {
  href: string;
  number: string;
  title: string;
  description: string;
  shift?: number;
}) {
  return (
    <Link
      href={props.href}
      className="p-7 border-r border-b border-black/10 dark:border-white/[0.07] transition-colors relative overflow-hidden block relative group"
    >
      <div
        className={`${classes.noisegradient} dark:mix-blend-screen opacity-0 group-hover:opacity-100`}
        style={{ filter: `hue-rotate(${props.shift}deg)` }}
      ></div>
      <div className="font-mono text-[11px] text-black/20 dark:text-white/[0.18] mb-5">
        {props.number}
      </div>
      <div className="w-[3px] h-5 bg-[#E07830] mb-5"></div>
      <h3 className="font-syne text-[17px] font-semibold text-black dark:text-white mb-2 tracking-[-0.01em]">
        {props.title}
      </h3>
      <p className="font-mono text-[13px] text-black/40 dark:text-white/[0.38] leading-relaxed">
        {props.description}
      </p>
      <div className="absolute bottom-6 right-6 text-sm text-black/20 dark:text-white/[0.18] group-hover:text-[#E07830] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
        ↗
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white rounded-xl overflow-clip relative">
      <div className="z-10">
        <div className="relative px-7 pt-14 pb-12 border-b border-black/10 dark:border-white/[0.07]">
          <div
            className="absolute inset-0 lg:bg-right md:bg-position-[120%] bg-position-[160%] bg-no-repeat pointer-events-none grayscale opacity-[0.17] dark:opacity-[0.08] dark:invert md:bg-auto bg-size-[70%] z-100"
            style={{
              backgroundImage: "url(/tristero.png)",
            }}
          />
          <div className="absolute inset-0 lg:bg-right md:bg-position-[120%] bg-position-[160%] bg-no-repeat pointer-events-none md:bg-auto">
            <div className={classes.herobackground} />
          </div>
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#E07830] mb-4">
            Developer Documentation
          </div>
          <h1 className="font-syne text-[38px] font-semibold tracking-[-0.02em] leading-tight mb-3.5 text-black dark:text-white">
            Build on Tristero
          </h1>
          <p className="font-mono text-sm text-black/40 dark:text-white/40 leading-relaxed max-w-[480px]">
            Integration references, API specifications, and SDK documentation
            for the Tristero trading platform.
          </p>

          <div className="inline-block">
            <Link
              className="px-2 mt-6 py-1.5 bg-[#E07830] hover:bg-[#e15c1b] rounded-lg text-sm flex gap-2 items-center text-white font-semibold group"
              role="button"
              href="/docs/tristero"
            >
              Get Started
              <span className="overflow-hidden relative w-[1em] h-[1em] flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="chevron-primary absolute"
                >
                  <path
                    fill="currentColor"
                    d="M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12L5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0"
                  />
                  <path
                    fill="currentColor"
                    d="M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="chevron-ghost absolute"
                >
                  <path
                    fill="currentColor"
                    d="M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12L5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0"
                  />
                  <path
                    fill="currentColor"
                    d="M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01"
                  />
                </svg>
              </span>
              <style>{`
    .chevron-primary { transform: translateX(0); }
    .chevron-ghost   { transform: translateX(-150%); }

    .group:hover .chevron-primary { animation: slideOut 0.35s ease-in-out forwards; }
    .group:hover .chevron-ghost   { animation: slideIn  0.35s ease-in-out forwards; }

    .group:not(:hover) .chevron-primary { animation: slideBack      0.35s ease-in-out forwards; }
    .group:not(:hover) .chevron-ghost   { animation: slideGhostBack 0.35s ease-in-out forwards; }
  `}</style>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <Card
            href="/docs/tristero/python-sdk"
            number="01"
            title="Python SDK"
            description="Trading SDK documentation and reference"
            shift={0}
          />
          <Card
            href="/docs/tristero"
            number="02"
            title="Tristero API"
            description="Core API reference and endpoint specs"
            shift={200}
          />
          <Card
            href="/docs/feather"
            number="03"
            title="Feather API"
            description="Cross-chain swap relay integration"
            shift={300}
          />
        </div>
      </div>
    </div>
  );
}
