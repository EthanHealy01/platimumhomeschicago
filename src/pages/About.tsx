import { ScrollReveal } from "@/components/ScrollReveal";
import { heroImages } from "@/data/heroImages";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="border-b border-border/30 py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <ScrollReveal>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                About Us
              </p>
              <h1 className="mb-6 max-w-2xl text-4xl font-semibold md:text-5xl">
                Building Dream Homes in Chicago Since 2011
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
                At Platinum Homes, we are in the business of building dream homes.
                The highest quality craftsmanship. Truly custom designs that
                reflect your lifestyle. A straight-forward process. This is the
                foundation of our business, and all of our properties.
              </p>
            </ScrollReveal>

            <ScrollReveal className="min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                <img
                  src={heroImages[0]}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              How We Work
            </p>
            <h2 className="mb-10 text-3xl font-semibold md:text-4xl">
              Our Process
            </h2>
          </ScrollReveal>

          <div className="grid gap-16 md:grid-cols-3">
            <ScrollReveal>
              <div className="border-t border-primary/30 pt-6">
                <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  01 — Vision
                </span>
                <p className="text-sm leading-relaxed text-foreground/75">
                  We are in the business of building dream homes. Think of us as
                  your source of inspiration, and the facilitators for ultimately
                  getting the job done. Our process begins with a deep dive into
                  your exact vision: style, colors, size, textures, and budget.
                  With a full scope of all the project inputs, we set to work
                  creating a first draft design.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="border-t border-primary/30 pt-6">
                <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  02 — Build
                </span>
                <p className="text-sm leading-relaxed text-foreground/75">
                  It is at this point that you will meet your dedicated team,
                  made up of an architect, designers, contractors, and led by
                  your project manager. The team will be with you every step of
                  the way, with your project manager making sure that everything
                  is done on time and within budget. Work begins when we have a
                  fully approved design that makes your dream a reality.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                  We know that the only thing you want more than your dream home,
                  is to move into your dream home on time. To accomplish this
                  goal, we have a set process in place to maintain schedules.
                  Upfront, your project manager will provide you with a detailed
                  construction schedule outlining the week-by-week process. We
                  work with the best contractors in Chicago, each of whom have
                  built hundreds of homes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="border-t border-primary/30 pt-6">
                <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  03 — Completion
                </span>
                <p className="text-sm leading-relaxed text-foreground/75">
                  This part never gets old. The feeling of passing the keys over
                  to a satisfied homeowner is why we are in this business. Your
                  dream home is now ready to be filled with a lifetime of
                  memories…on time and on budget, of course.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
