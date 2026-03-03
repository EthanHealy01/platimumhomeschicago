import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-16">
      <div className="container mx-auto grid gap-10 px-6 md:grid-cols-3">
        {/* brand */}
        <div>
          <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
            Platinum Homes
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Chicagoland's premier custom home builder. Dream homes, on time and on
            budget.
          </p>
        </div>

        {/* nav */}
        <div>
          <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Navigation
          </h4>
          <nav className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About Us" },
              { to: "/current-projects", label: "Current Projects" },
              { to: "/past-projects", label: "Past Projects" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-foreground/70 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* contact */}
        <div>
          <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </h4>
          <address className="not-italic text-sm leading-relaxed text-foreground/70">
            1456 W. Fullerton<br />
            Chicago, IL 60614<br />
            <a href="tel:7736611287" className="hover:text-primary">773.661.1287</a><br />
            <a href="mailto:patrick@platinumhomeschicago.com" className="hover:text-primary">
              patrick@platinumhomeschicago.com
            </a>
          </address>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/platinumhomesdevelopment/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 border-t border-border/30 px-6 pt-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Platinum Homes Development Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
