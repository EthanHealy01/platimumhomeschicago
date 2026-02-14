import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";

interface Props {
  projects: Project[];
  columns?: 2 | 3;
}

export function ProjectGrid({ projects, columns = 3 }: Props) {
  const gridCls =
    columns === 2
      ? "grid gap-8 sm:grid-cols-2"
      : "grid gap-8 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={gridCls}>
      {projects.map((p, i) => (
        <ScrollReveal key={p.slug} className={`delay-[${i * 100}ms]`}>
          <ProjectCard project={p} />
        </ScrollReveal>
      ))}
    </div>
  );
}
