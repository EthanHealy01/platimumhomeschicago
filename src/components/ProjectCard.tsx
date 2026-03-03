import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { highlightRenderingsComingSoon } from "@/components/highlightRenderingsComingSoon";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.images[0]}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {project.statusLabel && (
          <span className="absolute left-4 top-4 bg-primary/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">
            {project.statusLabel}
          </span>
        )}
        <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/20" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-lg font-medium text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {highlightRenderingsComingSoon(project.description)}
          </p>
        </div>
        <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
    </Link>
  );
}
