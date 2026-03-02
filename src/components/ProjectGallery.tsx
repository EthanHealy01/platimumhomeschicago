import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectGallery({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  // When main image changes via arrows, scroll the thumb strip to show selected thumb
  useEffect(() => {
    const el = thumbRefs.current[selected];
    if (el) el.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [selected]);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  if (!images.length) return null;

  return (
    <div className="min-w-0 w-full overflow-hidden">
      <div className="relative overflow-hidden rounded-sm" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] flex justify-center overflow-hidden">
              <img
                src={src}
                alt=""
                className="max-h-[65vh] max-w-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 backdrop-blur transition-colors hover:bg-background/80"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 backdrop-blur transition-colors hover:bg-background/80"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div
          className="mt-3 w-full max-w-full min-w-0 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="flex gap-2">
            {images.map((src, i) => (
              <button
                key={i}
                ref={(el) => { thumbRefs.current[i] = el; }}
                onClick={() => scrollTo(i)}
                className={`h-14 w-20 flex-none overflow-hidden rounded-sm border-2 transition-all ${
                  i === selected
                    ? "border-primary opacity-100"
                    : "border-transparent opacity-40 hover:opacity-70"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
