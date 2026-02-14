import { getPastProjects } from "@/data/projects";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function PastProjects() {
  const projects = getPastProjects();

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
                Past Projects
              </h1>
              <p className="mt-3 text-muted-foreground">
                {projects.length} completed properties across Chicago
              </p>
            </div>
          </ScrollReveal>
          <ProjectGrid projects={projects} columns={3} />
        </div>
      </section>
    </div>
  );
}
