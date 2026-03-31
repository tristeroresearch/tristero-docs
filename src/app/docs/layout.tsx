import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import "./docs.css";
import { FeatherIcon, TristeroIcon } from "@/components/icons";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="docs-layout">
      <DocsLayout
        tree={source.getPageTree()}
        {...baseOptions()}
        tabs={{
          transform: (option, node) => ({
            ...option,
            icon: (
              <div className="w-5 h-5 p-1 bg-black/10 dark:bg-white/10 rounded-sm">
                {node.$id === "tristero" ? (
                  <TristeroIcon className="grayscale dark:invert" />
                ) : (
                  <FeatherIcon />
                )}
              </div>
            ),
          }),
        }}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
