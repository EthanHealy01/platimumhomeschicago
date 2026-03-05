import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getFeaturedProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";

const featured = getFeaturedProjects();

export default function Index() {
  usePageSEO({
    title: "Platinum Homes Development Corporation | Chicago's Premier Custom Home Builder",
    description:
      "Chicago's premier custom home builder since 2011. Over 150 homes completed with truly custom designs, highest quality craftsmanship, and on-time, on-budget delivery across Chicago and the North Shore.",
    path: "/",
  });

  return (
    <>
      {/* Hero */}
      <HeroSlideshow />

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Our Philosophy
              </p>
              <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
                At Platinum Homes, we are in the business of building dream
                homes. The highest quality craftsmanship. Truly custom designs
                that reflect your lifestyle. A straight-forward process. This is
                the foundation of our business, and all of our properties.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10">
                {["150+ homes completed", "15+ years of experience", "Serving Chicago & the North Shore"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium tracking-wide text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t border-border/30 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-14 flex items-end justify-between">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  Portfolio
                </p>
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Featured Projects
                </h2>
              </div>
              <Link
                to="/past-projects"
                className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary md:flex"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
          <ProjectGrid projects={featured} columns={2} />
        </div>
      </section>

      {/* Process Teaser */}
      <section className="border-t border-border/30 bg-card py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                How We Work
              </p>
              <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
                Our Process
              </h2>
              <p className="mb-8 text-base leading-relaxed text-foreground/70 md:text-lg">
                Think of us as your source of inspiration, and the facilitators
                for ultimately getting the job done. From vision to keys, your
                dedicated team is with you every step of the way.
              </p>
              <Button asChild variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border/30 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="mb-2 text-center text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Client Reviews
            </p>
            <h2 className="mb-14 text-center text-3xl font-semibold md:text-4xl">
              What Our Clients Say
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <TestimonialSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="border-t border-border/30 bg-card py-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Start Your Build
            </h2>
            <p className="mb-8 text-muted-foreground">
              Contact us anytime to begin your dream home journey.
            </p>
            <Button asChild size="lg" className="h-12 px-10 text-sm uppercase tracking-wider">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
