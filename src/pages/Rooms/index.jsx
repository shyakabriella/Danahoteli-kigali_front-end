import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bed, Maximize2, Users, Bath } from "lucide-react";
import SiteNav, { BRAND } from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
const hero = "/Danakigali-photos-021.jpg";
const roomDeluxe = "/Danakigali-photos-013.jpg";
const roomDouble = "/Danakigali-photos-016.jpg";
const roomSuperior = "/Danakigali-photos-023.jpg";
const roomSingle = "/Danakigali-photos-024.jpg";
const roomPenthouse = "/Danakigali-photos-024.jpg";

const rooms = [
  { img: roomSingle, name: "Alpine Single", price: 60, size: "24m²", beds: "1 queen", guests: 1, baths: 1, cat: "single", tag: "Cosy" },
  { img: roomDouble, name: "Classic Double", price: 80, size: "32m²", beds: "2 twins", guests: 2, baths: 1, cat: "double", tag: "Best value" },
  { img: roomDeluxe, name: "Deluxe Ridge Room", price: 90, size: "38m²", beds: "1 king", guests: 2, baths: 1, cat: "double", tag: "Most loved" },
  { img: roomSuperior, name: "Summit Suite", price: 140, size: "50m²", beds: "1 king + sofa", guests: 3, baths: 2, cat: "suite", tag: "Suite" },
  { img: roomPenthouse, name: "Ridgeline Penthouse", price: 320, size: "92m²", beds: "1 king + den", guests: 4, baths: 2, cat: "suite", tag: "Signature" },
  { img: roomDeluxe, name: "Forest View Deluxe", price: 110, size: "42m²", beds: "1 king", guests: 2, baths: 1, cat: "double", tag: "New" },
];

const filters = [
  { id: "all", label: "All Rooms" },
  { id: "single", label: "Single" },
  { id: "double", label: "Double" },
  { id: "suite", label: "Suites" },
];

const Rooms = () => {
  const [active, setActive] = useState("all");
  const list = active === "all" ? rooms : rooms.filter((r) => r.cat === active);

  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* Page hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <img src={hero} alt={`${BRAND} ridge view`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container relative z-10 text-cream pb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— THE RIDGE COLLECTION</p>
          <h1 className="font-display text-5xl md:text-7xl">Rooms &amp; Suites</h1>
          <nav className="mt-6 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cream">Rooms</span>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 container text-center max-w-3xl mx-auto">
        <p className="text-gold tracking-[0.3em] text-sm mb-4">— SIX WAYS TO STAY</p>
        <h2 className="font-display text-4xl md:text-5xl mb-6">Choose your ridge.</h2>
        <p className="text-muted-foreground leading-relaxed">
          Each room at {BRAND} is shaped around its view — from compact alpine retreats to suites with private terraces and stone fireplaces. All include daily housekeeping, hand-finished linens, and unhurried mornings.
        </p>
      </section>

      {/* Filters */}
      <section className="container">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-6 py-2 text-sm tracking-widest uppercase transition border ${
                active === f.id
                  ? "bg-navy text-cream border-navy"
                  : "bg-transparent text-navy border-navy/20 hover:border-navy"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32 container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((r) => (
            <article key={r.name} className="group bg-background shadow-[var(--shadow-luxe)] overflow-hidden flex flex-col">
              <div className="relative overflow-hidden">
                <img src={r.img} alt={r.name} loading="lazy" className="w-full h-72 object-cover group-hover:scale-105 transition duration-700" />
                <span className="absolute top-4 left-4 bg-gold text-navy-deep text-xs tracking-widest uppercase px-3 py-1 font-semibold">{r.tag}</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gold text-sm mb-2">From ${r.price}/night</p>
                <h3 className="font-display text-2xl mb-4">{r.name}</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2"><Maximize2 className="w-4 h-4 text-gold" />{r.size}</div>
                  <div className="flex items-center gap-2"><Bed className="w-4 h-4 text-gold" />{r.beds}</div>
                  <div className="flex items-center gap-2"><Users className="w-4 h-4 text-gold" />{r.guests} guests</div>
                  <div className="flex items-center gap-2"><Bath className="w-4 h-4 text-gold" />{r.baths} bath</div>
                </div>
                <Button variant="outline" className="rounded-none border-navy text-navy hover:bg-navy hover:text-cream w-full mt-auto">
                  Book Now
                </Button>
              </div>
            </article>
          ))}
        </div>

        {list.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No rooms in this category.</p>
        )}
      </section>

      {/* Help strip */}
      <section className="bg-navy text-cream py-16">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-gold tracking-[0.3em] text-sm mb-2">— NEED HELP CHOOSING?</p>
            <h3 className="font-display text-2xl md:text-3xl">Our concierge is one call away.</h3>
          </div>
          <Button className="bg-gold hover:bg-gold-light text-navy-deep rounded-none px-8">Speak to Concierge</Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Rooms;
