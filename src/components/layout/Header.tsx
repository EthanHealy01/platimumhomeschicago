import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/current-projects", label: "Current Projects" },
  { to: "/past-projects", label: "Past Projects" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomeAtTop = pathname === "/" && !scrolled;

  const linkCls = (isActive: boolean) =>
    `text-xs uppercase tracking-[0.15em] transition-colors ${
      isHomeAtTop
        ? isActive
          ? "text-primary"
          : "text-white/90 hover:text-white"
        : isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-primary"
    }`;

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b-none transition-all duration-300 ${
        isHomeAtTop
          ? "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),transparent)]"
          : "bg-white backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`text-lg font-display font-semibold tracking-wide transition-colors ${
              isHomeAtTop ? "text-white" : "text-foreground"
            }`}
          >
            Platinum Homes
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={linkCls(pathname === l.to)}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button aria-label="Open menu">
              <Menu
                className={`h-5 w-5 transition-colors ${
                  isHomeAtTop ? "text-white" : "text-foreground"
                }`}
              />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-border bg-background p-8">
            <div className="mb-10 flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-foreground">
                Menu
              </span>
              <SheetClose asChild>
                <button aria-label="Close menu">
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </SheetClose>
            </div>
            <nav className="flex flex-col gap-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm uppercase tracking-[0.15em] transition-colors hover:text-primary ${
                    pathname === l.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
