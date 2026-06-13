import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

export const BRAND = "DANA KIGALI HOTEL";
export const BRAND_SHORT = "DANA";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/experiences", label: "Experiences" },
  { to: "https://direct-book.com/properties/danakigalihotel/contact?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-06-13&checkOutDate=2026-06-14&trackPage=no", label: "Contact" },
];

const SiteNav = ({ variant = "overlay" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    
    const onToggleMenu = () => setOpen((o) => !o);
    window.addEventListener("toggle-mobile-menu", onToggleMenu);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("toggle-mobile-menu", onToggleMenu);
    };
  }, []);

  const isSolid = variant === "solid" || scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isSolid
          ? "bg-white/95 backdrop-blur-md text-navy-deep shadow-[0_8px_30px_-12px_hsl(215_45%_9%/0.4)]"
          : "bg-transparent text-cream"
      )}
    >
      <div className={cn("container flex items-center justify-between transition-all duration-500", isSolid ? "py-4" : "py-6")}>
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/DANA%20HOTEL.png" alt="Dana Hotel" className="h-20 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => cn("hover:text-gold transition", isActive && "text-gold")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button onClick={() => window.open('https://direct-book.com/properties/danakigalihotel', '_blank')} className="hidden sm:inline-flex bg-gold hover:bg-gold-light text-navy-deep font-semibold rounded-none px-6">
            Book Now
          </Button>
          <button
            aria-label="Toggle menu"
            className={cn("md:hidden p-2", isSolid ? "text-navy-deep" : "text-cream")}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-white/95 backdrop-blur-md transition-[max-height] duration-500",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="container flex flex-col py-6 gap-4 text-navy-deep">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => cn("text-sm uppercase tracking-[0.2em] hover:text-gold transition", isActive && "text-gold")}
            >
              {l.label}
            </NavLink>
          ))}
          <Button onClick={() => window.open('https://direct-book.com/properties/danakigalihotel', '_blank')} className="sm:hidden bg-gold hover:bg-gold-light text-navy-deep font-semibold rounded-none px-6 w-fit">
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default SiteNav;
