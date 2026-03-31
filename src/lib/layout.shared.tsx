import Logo from "@/components/logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "tristeroresearch",
  repo: "tristero-docs",
  branch: "main",
};

function Title() {
  return (
    <span className="flex items-center gap-1.5 py-1.5 px-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/30">
      <Logo />
      <span className="font-syne text-sm">Tristero</span>
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Title />,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
