import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/data/heroImages";

function getFallbackImageUrl(url: string): string {
  const path = url.replace(/\?.*$/, "");
  if (/\.(jpe?g|JPG|JPEG)$/i.test(path)) return path.replace(/\.(jpe?g|JPG|JPEG)$/i, ".png");
  if (/\.png$/i.test(path)) return path.replace(/\.png$/i, ".jpg");
  return url;
}

function HeroSlideImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [triedFallback, setTriedFallback] = useState(false);

  const handleError = () => {
    if (!triedFallback) {
      setTriedFallback(true);
      setCurrentSrc(getFallbackImageUrl(src));
    }
  };

  return <img src={currentSrc} alt={alt} className={className} onError={handleError} />;
}

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroImages.map((src, i) => (
        <HeroSlideImage
          key={i}
          src={src}
          alt={`Platinum Homes project ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* smokey overlay — dark overlay kept for hero readability on light theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      <div className="relative z-10 flex h-full items-end pb-24 md:items-center md:pb-0">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-amber-400">
            Platinum Homes Development
          </p>
          <h1 className="mb-6 max-w-3xl text-4xl font-semibold leading-[1.1] text-white md:text-6xl lg:text-7xl">
            Chicagoland's Premier Custom Home Builder
          </h1>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
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
              className="h-12 px-8 text-sm tracking-wider uppercase bg-transparent border-white/25 text-white hover:bg-white/10"
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-amber-400" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
