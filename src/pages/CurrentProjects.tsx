import { Link } from "react-router-dom";
import { getCurrentProjects } from "@/data/projects";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function CurrentProjects() {
  const projects = getCurrentProjects();

  return (
    <div className="pt-16">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-14">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Portfolio
              </p>
              <h1 className="text-3xl font-semibold md:text-4xl">
                Current Projects
              </h1>
            </div>
          </ScrollReveal>

          <div className="space-y-0 divide-y divide-border/60">
            {projects.map((p) => (
              <ScrollReveal key={p.slug}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group flex flex-col gap-4 py-8 transition-colors hover:bg-accent/30 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-4 sm:-mx-4 rounded-sm"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    {p.statusLabel && (
                      <span className="text-xs font-medium uppercase tracking-wider text-primary">
                        {p.statusLabel}
                      </span>
                    )}
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
