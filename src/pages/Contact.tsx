import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, Mail, MapPin } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";

const contactHeroImage = "/property_images/folders/2136_n_kenmore/2136_n_kenmore_19.jpg";

/**
 * Toggle to show/hide the contact form. When false, the page only shows
 * address, phone, and email (no form). The form is UI-only — submissions
 * are not sent to any backend or email service.
 */
const CONTACT_FORM_ENABLED = false;

export default function Contact() {
  usePageSEO({
    title: "Contact Us",
    description:
      "Get in touch with Platinum Homes Development Corporation. Visit us at 1456 W. Fullerton, Chicago, IL 60614, call 773.661.1287, or email patrick@platinumhomeschicago.com.",
    path: "/contact",
  });

  const [params] = useSearchParams();
  const [subject] = useState(params.get("subject") || "");
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = (
    <ScrollReveal>
      <div className={CONTACT_FORM_ENABLED ? "" : "w-full"}>
        {!CONTACT_FORM_ENABLED && (
          <>
            {/* Hero block: image with intro text overlay */}
            <div className="relative min-h-[50vh] w-full overflow-hidden rounded-sm">
              <img
                src={contactHeroImage}
                alt="Custom home by Platinum Homes Development Corporation in Chicago"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
              <div className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center px-6 py-20 text-center">
                <Link to="/" className="mb-8 inline-block">
                  <img
                    src="/platinumhomeschicagologomini.png"
                    alt="Platinum Homes"
                    className="h-12 w-auto object-contain drop-shadow-md md:h-14"
                  />
                </Link>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-white/90">
                  Get In Touch
                </p>
                <h1 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
                  Contact Us Anytime
                </h1>
                <p className="max-w-md text-base leading-relaxed text-white/80">
                  Ready to start your dream home journey? We'd love to hear from you.
                </p>
              </div>
            </div>

            {/* Contact details: centered below hero */}
            <div className="mx-auto mt-16 max-w-3xl px-6 text-center">
              <div className="grid gap-10 sm:grid-cols-3 sm:gap-8 md:gap-12">
                <div className="flex flex-col items-center gap-3 text-center">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <div className="text-sm text-foreground/75">
                    1456 W. Fullerton<br />
                    Chicago, IL 60614
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 text-center">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:7736611287" className="text-sm text-foreground/75 hover:text-primary">
                    773.661.1287
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3 text-center">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:patrick@platinumhomeschicago.com" className="text-sm text-foreground/75 hover:text-primary">
                    patrick@platinumhomeschicago.com
                  </a>
                </div>
              </div>
            </div>
          </>
        )}

        {CONTACT_FORM_ENABLED && (
          <>
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
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div className="text-sm text-foreground/75">
                  1456 W. Fullerton<br />
                  Chicago, IL 60614
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:7736611287" className="text-sm text-foreground/75 hover:text-primary">
                  773.661.1287
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:patrick@platinumhomeschicago.com" className="text-sm text-foreground/75 hover:text-primary">
                  patrick@platinumhomeschicago.com
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </ScrollReveal>
  );

  return (
    <div className="pt-16">
      <section className={CONTACT_FORM_ENABLED ? "py-24 md:py-32" : "py-12 md:py-16"}>
        <div className="container mx-auto px-6">
          <div className={CONTACT_FORM_ENABLED ? "grid gap-16 lg:grid-cols-2" : "flex w-full justify-center"}>
            {contactInfo}

            {CONTACT_FORM_ENABLED && (
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
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
