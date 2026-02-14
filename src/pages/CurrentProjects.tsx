import { useState } from "react";
import { getCurrentProjects } from "@/data/projects";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ScrollReveal } from "@/components/ScrollReveal";

type SortKey = "newest" | "alpha";

export default function CurrentProjects() {
  const [sort, setSort] = useState<SortKey>("newest");
  const projects = getCurrentProjects().sort((a, b) =>
    sort === "alpha" ? a.title.localeCompare(b.title) : 0
  );

  return (
    <div className="pt-16">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  Portfolio
                </p>
                <h1 className="text-3xl font-semibold md:text-4xl">
                  Current Projects
                </h1>
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="h-10 rounded-sm border border-border bg-card px-4 text-sm text-foreground outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="newest">Newest</option>
                <option value="alpha">A–Z</option>
              </select>
            </div>
          </ScrollReveal>
          <ProjectGrid projects={projects} columns={2} />
        </div>
      </section>
    </div>
  );
}
