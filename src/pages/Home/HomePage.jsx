import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wifi, Coffee, ShieldCheck, Bath, Bell, Car, Check, Star, Mountain, UtensilsCrossed, Sparkles } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
const hero = "/Danakigali-photos-021.jpg";
const roomDeluxe = "/Danakigali-photos-013.jpg";
const roomDouble = "/Danakigali-photos-016.jpg";
const roomSuperior = "/Danakigali-photos-023.jpg";
const spa = "/Danakigali-photos-005.jpg";
const pool = "/Danakigali-photos-021.jpg";
const dining = "/Danakigali-photos-011.jpg";
const terrace = "/Danakigali-photos-008.jpg";

const BRAND = "DANA KIGALI HOTEL";

const rooms = [
  { img: roomDouble, name: "Deluxe Double room", price: 90, meta: "38m² · 1 double bed · 1 bath" },
  { img: roomDeluxe, name: "Deluxe Twin Room", price: 90, meta: "38m² · 2 twin beds · 1 bath" },
  { img: roomSuperior, name: "Family Room", price: 140, meta: "50m² · 3 beds · 2 baths" },
];

const facilities = [
  { icon: Car, label: "Valet Parking" },
  { icon: Bell, label: "24/7 Service" },
  { icon: Wifi, label: "Fast Wi-Fi" },
  { icon: Coffee, label: "Coffee Bar" },
  { icon: ShieldCheck, label: "In-Room Safe" },
  { icon: Bath, label: "Spa Bath" },
];

const experiences = [
  { icon: Mountain, title: "Mountain Trails", text: "Guided hikes along the ridgeline at first light, with a thermos of fresh coffee." },
  { icon: UtensilsCrossed, title: "Cliffside Dining", text: "Seasonal tasting menus served by candlelight above the valley." },
  { icon: Sparkles, title: "Stargazing Nights", text: "A private rooftop, warm blankets, and a sky uncluttered by city light." },
];

const testimonials = [
  { name: "Eleanor Vance", role: "London", text: "The most considered stay we've had in years. Every detail felt intentional — and the view at dawn is unforgettable." },
  { name: "Marc Dubois", role: "Paris", text: "Quiet, refined, and warm. Hilltop reminded us why we travel in the first place." },
  { name: "Aiko Tanaka", role: "Kyoto", text: "From the welcome tea to the turndown ritual, a masterclass in hospitality." },
];

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* Hero — Heritage Alpine Luxe */}
      <section className="relative min-h-screen flex flex-col bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hero}
            alt={`${BRAND} on the ridge at twilight`}
            className="w-full h-full object-cover animate-ken-burns"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30" />
        </div>

        <main className="relative z-10 flex-grow flex flex-col justify-center px-8 md:px-24 pt-32 pb-20 text-cream">
          <div className="flex items-center space-x-6 mb-10 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="w-20 h-px bg-gold/60" />
            <span className="text-[11px] uppercase tracking-[0.5em] text-gold font-semibold">Welcome home</span>
          </div>

          <h1
            className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] mb-10 max-w-5xl animate-fade-in-up"
            style={{ animationDelay: "250ms" }}
          >
            A Home Away <br />
            <span className="italic ml-12 md:ml-24">From Home.</span>
          </h1>

          <p
            className="text-lg md:text-xl font-light max-w-xl mb-14 text-cream/80 leading-relaxed border-l border-gold/40 pl-8 animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            {BRAND} welcomes you to Kigali, Rwanda — where the warmth of African hospitality and the spirit of Dana meet the comfort of home.
          </p>

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-10 animate-fade-in-up"
            style={{ animationDelay: "700ms" }}
          >
            <button className="group relative bg-gold text-cream px-14 py-6 text-[11px] uppercase tracking-[0.25em] font-bold overflow-hidden shadow-2xl transition-transform hover:-translate-y-1">
              <span className="relative z-10">Reserve a Stay</span>
              <div className="absolute inset-0 bg-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="group flex items-center space-x-5 text-[11px] uppercase tracking-[0.25em] font-bold text-cream">
              <span className="opacity-80 group-hover:opacity-100 transition-opacity">Discover</span>
              <div className="w-12 h-px bg-cream/40 group-hover:w-20 group-hover:bg-gold transition-all duration-500" />
            </button>
          </div>
        </main>

        {/* Refined Booking Bar */}
        <div className="relative z-20 w-full bg-navy-deep/80 backdrop-blur-md border-t border-cream/5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5">
            {[
              { l: "Check In", t: "date" },
              { l: "Check Out", t: "date" },
              { l: "Adults", t: "number" },
              { l: "Children", t: "number" },
            ].map((f) => (
              <div key={f.l} className="p-6 md:p-8 flex flex-col border-r border-cream/5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold mb-2">{f.l}</span>
                <Input
                  type={f.t}
                  defaultValue={f.t === "number" ? "2" : ""}
                  className="bg-transparent border-0 rounded-none px-0 h-auto text-cream text-sm font-light tracking-wide focus-visible:ring-0"
                />
              </div>
            ))}
            <button className="bg-gold text-cream hover:bg-navy transition-colors px-6 py-6 md:py-0 text-[10px] uppercase tracking-[0.2em] font-bold">
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 container grid md:grid-cols-2 gap-16 items-center">
        <Reveal animation="scale-in" className="relative">
          <img src={pool} alt="Infinity pool overlooking the valley" loading="lazy" className="w-full h-[600px] object-cover" />
          <div className="absolute -bottom-8 -right-8 hidden md:block bg-gold text-navy-deep p-8 max-w-xs">
            <div className="font-display text-5xl">25+</div>
            <p className="text-sm mt-2 font-medium">Years welcoming travellers from over seventy countries.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— WELCOME TO DANA</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">A home crafted for you.</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            In the heart of Kigali, {BRAND} is a welcoming home shaped by detail — from hand-finished interiors to warm, personal service. Every stay is a private composition of comfort and care.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-2 border-gold pl-4">
              <h3 className="font-display text-xl mb-1">5-Star Service</h3>
              <p className="text-sm text-muted-foreground">Personal concierge available around the clock.</p>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <h3 className="font-display text-xl mb-1">Pristine Setting</h3>
              <p className="text-sm text-muted-foreground">Acres of forest, valley views, and silence.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-24 bg-cream">
        <div className="container">
          <Reveal className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— THE RIDGE COLLECTION</p>
            <h2 className="font-display text-4xl md:text-5xl">Rooms &amp; Suites</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <article className="group bg-background shadow-[var(--shadow-luxe)] overflow-hidden transition-transform duration-500 hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <img src={r.img} alt={r.name} loading="lazy" className="w-full h-72 object-cover group-hover:scale-110 transition duration-[1.2s]" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl mb-2">{r.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{r.meta}</p>
                    <Button onClick={() => window.open('https://direct-book.com/properties/danakigalihotel', '_blank')} variant="outline" className="rounded-none border-navy text-navy hover:bg-navy hover:text-cream w-full">Book Now</Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="py-32 bg-navy-deep text-cream">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— SIGNATURE EXPERIENCES</p>
            <h2 className="font-display text-4xl md:text-5xl">Days that linger in memory.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-cream/10">
            {experiences.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 150} className="bg-navy-deep">
                <div className="p-10 h-full group">
                  <Icon className="w-10 h-10 text-gold mb-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl mb-3">{title}</h3>
                  <p className="text-cream/70 leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-32 container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— HOTEL FACILITIES</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">The finest amenities, considered for you.</h2>
          <p className="text-muted-foreground">Everything that defines a perfect stay — quietly available, never imposed.</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {facilities.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 80} animation="scale-in" className="bg-background">
              <div className="p-10 flex flex-col items-center text-center hover:bg-navy hover:text-cream transition-colors duration-500 group h-full">
                <Icon className="w-10 h-10 text-gold mb-4 group-hover:text-gold-light transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="font-display text-lg">{label}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      

      {/* Gallery */}
      <section className="py-32 container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— MOMENTS</p>
          <h2 className="font-display text-4xl md:text-5xl">A glimpse of life on the ridge.</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[hero, dining, terrace, pool, roomDeluxe, spa, roomSuperior, roomDouble].map((src, i) => (
            <Reveal key={i} delay={i * 70} animation="scale-in" className={`overflow-hidden ${i === 0 || i === 5 ? "md:row-span-2 md:col-span-2" : ""}`}>
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-110 transition duration-[1.2s] min-h-[200px]" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-cream">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— GUEST WORDS</p>
            <h2 className="font-display text-4xl md:text-5xl">Quiet praise, gratefully received.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <Reveal key={t.name} delay={idx * 150}>
                <figure className="bg-background p-10 shadow-[var(--shadow-luxe)] transition-transform duration-500 hover:-translate-y-2 h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                  </div>
                  <blockquote className="font-display text-xl leading-snug mb-8">"{t.text}"</blockquote>
                  <figcaption className="text-sm">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-navy text-cream text-center">
        <Reveal className="container">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— MEETINGS &amp; EVENTS</p>
          <h2 className="font-display text-4xl md:text-5xl mb-8 max-w-3xl mx-auto">A warm, exquisite, and elevated space for occasions of every scale.</h2>
          <Button size="lg" className="bg-gold hover:bg-gold-light text-navy-deep rounded-none px-10 transition-transform hover:-translate-y-1">Plan Your Event</Button>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
