import { useState } from "react";
import { Link } from "react-router-dom";
import { getPastProjects, pastSoldList } from "@/data/projects";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ScrollReveal } from "@/components/ScrollReveal";

type View = "grid" | "timeline";

export default function PastProjects() {
  const [view, setView] = useState<View>("timeline");
  const pastWithImages = getPastProjects().filter((p) => p.featured);
  const sortedSold = [...pastSoldList].sort((a, b) => b.year - a.year);

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
                  Past Projects
                </h1>
              </div>
              <div className="flex gap-2">
                {(["timeline", "grid"] as View[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className={`rounded-sm px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                      view === v
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {view === "grid" ? (
            <>
              {pastWithImages.length > 0 && (
                <ProjectGrid projects={pastWithImages} columns={2} />
              )}
              {pastWithImages.length === 0 && (
                <p className="text-muted-foreground">
                  Featured past project galleries coming soon.
                </p>
              )}
            </>
          ) : (
            <div className="space-y-12">
              {sortedSold.map(({ year, addresses }) => (
                <ScrollReveal key={year}>
                  <div className="flex gap-8">
                    <div className="w-16 flex-shrink-0 pt-1 text-right">
                      <span className="font-display text-2xl font-semibold text-primary">
                        {year}
                      </span>
                    </div>
                    <div className="flex-1 border-l border-border/40 pl-8">
                      <ul className="space-y-2">
                        {addresses.map((addr) => {
                          const slug = addr
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/-+$/, "");
                          return (
                            <li key={addr}>
                              <Link
                                to={`/projects/${slug}`}
                                className="text-sm text-foreground/70 transition-colors hover:text-primary"
                              >
                                {addr}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
