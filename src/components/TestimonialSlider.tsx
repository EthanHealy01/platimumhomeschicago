import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[idx];

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <Quote className="mx-auto mb-6 h-8 w-8 text-primary/40" />
      <blockquote
        key={idx}
        className="animate-fade-in text-lg leading-relaxed text-foreground/80 md:text-xl"
      >
        "{t.text}"
      </blockquote>
      <p className="mt-6 text-sm font-medium text-foreground">
        — {t.author}
        {t.title && <span className="text-muted-foreground">, {t.title}</span>}
      </p>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === idx ? "w-6 bg-primary" : "w-3 bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
