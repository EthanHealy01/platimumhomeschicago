import { useParams, Link } from "react-router-dom";
import { getProjectBySlug } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { highlightRenderingsComingSoon } from "@/components/highlightRenderingsComingSoon";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="mb-4 font-display text-3xl font-semibold">
            Project Not Found
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const backTo =
    project.category === "current" ? "/current-projects" : "/past-projects";

  const detailItems = project.details
    ? Object.entries(project.details)
        .filter(([, v]) => v)
        .map(([k, v]) => ({
          label: k
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (s) => s.toUpperCase()),
          value: v!,
        }))
    : [];

  return (
    <div className="pt-16">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <Link
              to={backTo}
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {project.category === "current"
                ? "Current Projects"
                : "Past Projects"}
            </Link>
          </ScrollReveal>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* Gallery */}
            <ScrollReveal className="min-w-0">
              <ProjectGallery images={project.images} />
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal className="min-w-0">
              <div>
                {project.statusLabel && (
                  <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    {project.statusLabel}
                  </span>
                )}
                <h1 className="mb-2 font-display text-3xl font-semibold md:text-4xl">
                  {project.title}
                </h1>
                <p className="mb-6 text-sm text-muted-foreground">
                  {project.address}
                </p>

                {project.price && (
                  <p className="mb-6 text-2xl font-semibold text-primary">
                    {project.price}
                  </p>
                )}

                <p className="mb-8 text-sm leading-relaxed text-foreground/75">
                  {highlightRenderingsComingSoon(project.description)}
                </p>

                {detailItems.length > 0 && (
                  <div className="mb-8 space-y-3 border-t border-border/40 pt-6">
                    {detailItems.map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-muted-foreground">{label}</span>
                        <span className="text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    View Listing <ExternalLink className="h-3 w-3" />
                  </a>
                )}

                {project.agentName && (
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.agentUrl ? (
                      <a
                        href={project.agentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        {project.agentName} <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      project.agentName
                    )}
                  </p>
                )}

                <div className="mt-2">
                  <Button asChild size="lg" className="w-full text-sm uppercase tracking-wider">
                    <Link
                      to={`/contact?subject=Inquiry: ${project.title}`}
                    >
                      Inquire About This Property
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
