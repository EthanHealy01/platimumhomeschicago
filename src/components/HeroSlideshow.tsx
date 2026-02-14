import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [hero1, hero2, hero3, hero4];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Platinum Homes project ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* smokey overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />

      <div className="relative z-10 flex h-full items-end pb-24 md:items-center md:pb-0">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Platinum Homes Development
          </p>
          <h1 className="mb-6 max-w-3xl text-4xl font-semibold leading-[1.1] md:text-6xl lg:text-7xl">
            Chicago's Premier Custom Home Builder
          </h1>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-foreground/70 md:text-lg">
            The highest quality craftsmanship. Truly custom designs that reflect
            your lifestyle.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-sm tracking-wider uppercase">
              <Link to="/current-projects">View Current Projects</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-sm tracking-wider uppercase bg-transparent border-foreground/25 text-foreground hover:bg-foreground/10"
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-primary" : "w-4 bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
