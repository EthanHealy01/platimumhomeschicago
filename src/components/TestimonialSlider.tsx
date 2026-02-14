import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Simply put, Patrick and the rest of the Platinum Homes team are the best in the business. I started working with Platinum before they broke ground on my new home and right from the outset they earned my complete trust and respect.",
    author: "Shaun H.",
    title: "Homeowner",
  },
  {
    text: 'It is difficult to explain how Platinum Homes made our first house a \u201Chome.\u201D The experience will be close to our hearts forever; a home we never want to leave.',
    author: "Rory and Sepehr",
    title: "Homeowners",
  },
  {
    text: "Patrick and his team were very easy to work with, and this made the potentially overwhelming experience of building a home both manageable and enjoyable. It was evident that our satisfaction and happiness was their primary goal.",
    author: "John F.",
    title: "Homeowner",
  },
  {
    text: "I purchased a home built by Platinum Homes and I couldn't be happier with my overall experience. It was clear to me from the beginning that their work and attention to detail was superior to similar priced homes in the area.",
    author: "Andrew S.",
    title: "",
  },
];

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
