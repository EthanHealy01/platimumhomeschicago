import { getCurrentProjects } from "@/data/projects";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ScrollReveal } from "@/components/ScrollReveal";
import { usePageSEO } from "@/hooks/usePageSEO";

export default function CurrentProjects() {
  const projects = getCurrentProjects();

  usePageSEO({
    title: "Current Projects",
    description:
      "Explore current custom home and condo development projects by Platinum Homes across Chicago, Highland Park, and the North Shore. New construction homes and condos available now.",
    path: "/current-projects",
  });

  return (
    <div className="pt-16">
      <section className="py-12 md:py-16">
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
          <ProjectGrid projects={projects} columns={3} />
        </div>
      </section>
    </div>
  );
}
