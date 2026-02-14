import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [params] = useSearchParams();
  const [subject] = useState(params.get("subject") || "");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-16">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* info */}
            <ScrollReveal>
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  Get In Touch
                </p>
                <h1 className="mb-6 text-3xl font-semibold md:text-4xl">
                  Contact Us Anytime
                </h1>
                <p className="mb-10 max-w-md text-foreground/70">
                  Ready to start your dream home journey? We'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-4 w-4 text-primary" />
                    <div className="text-sm text-foreground/75">
                      1456 W. Fullerton<br />
                      Chicago, IL 60614
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:7736611287" className="text-sm text-foreground/75 hover:text-primary">
                      773.661.1287
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:patrick@platinumhomeschicago.com" className="text-sm text-foreground/75 hover:text-primary">
                      patrick@platinumhomeschicago.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* form */}
            <ScrollReveal>
              {submitted ? (
                <div className="flex h-full items-center justify-center rounded-sm border border-border bg-card p-12">
                  <div className="text-center">
                    <h3 className="mb-2 font-display text-xl font-semibold">
                      Thank You
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We'll be in touch shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5 rounded-sm border border-border bg-card p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                        Name
                      </label>
                      <Input required placeholder="Your name" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                        Phone
                      </label>
                      <Input type="tel" placeholder="(555) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                      Email
                    </label>
                    <Input required type="email" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                      Subject
                    </label>
                    <Input defaultValue={subject} placeholder="Subject" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <Textarea rows={5} required placeholder="Tell us about your project…" />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-sm uppercase tracking-wider">
                    Send Message
                  </Button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
