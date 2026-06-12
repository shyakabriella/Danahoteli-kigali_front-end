import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mountain, UtensilsCrossed, Sparkles, Waves, Wind, Wine } from "lucide-react";
import SiteNav, { BRAND } from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
const hero = "/Danakigali-photos-021.jpg";
const dining = "/Danakigali-photos-011.jpg";
const spa = "/Danakigali-photos-005.jpg";
const stargazing = "/Danakigali-photos-023.jpg";
const yoga = "/Danakigali-photos-024.jpg";
const wineTasting = "/Danakigali-photos-016.jpg";
const terrace = "/Danakigali-photos-008.jpg";

const experiences = [
  {
    icon: Mountain,
    title: "Mountain Trails",
    tag: "Adventure",
    img: terrace,
    text: "Guided hikes along the ridgeline at first light, with a thermos of fresh coffee. Routes range from gentle forest walks to summit scrambles, each led by a local who knows every switchback.",
    detail: "Available daily · 2–6 hours · All fitness levels",
  },
  {
    icon: UtensilsCrossed,
    title: "Cliffside Dining",
    tag: "Culinary",
    img: dining,
    text: "Seasonal tasting menus served by candlelight above the valley. Our Executive Chef sources from valley farms and mountain foragers, composing dishes that change with the week.",
    detail: "Wed–Sun evenings · 7-course tasting · Wine pairing",
  },
  {
    icon: Sparkles,
    title: "Stargazing Nights",
    tag: "Wonder",
    img: stargazing,
    text: "A private rooftop, warm blankets, and a sky uncluttered by city light. Our astronomer guides you through constellations with a telescope and stories older than the ridge itself.",
    detail: "Clear evenings · 2 hours · Includes warm drinks",
  },
  {
    icon: Waves,
    title: "Thermal Rituals",
    tag: "Wellness",
    img: spa,
    text: "Descend into a subterranean world of stone, water, and candlelight. Ancient thermal baths, hammam sessions, and therapeutic massages designed to dissolve tension.",
    detail: "Daily 10am–8pm · Treatments 60–120 min",
  },
  {
    icon: Wind,
    title: "Forest Yoga",
    tag: "Mindfulness",
    img: yoga,
    text: "Morning sessions on a timber deck surrounded by pines and mist. Our instructor adapts each class to the group — from restorative stretches to flowing vinyasa.",
    detail: "Daily sunrise · 60 min · All levels welcome",
  },
  {
    icon: Wine,
    title: "Cellar Tastings",
    tag: "Culture",
    img: wineTasting,
    text: "Explore the valley's wine heritage in our stone cellar. Guided tastings of regional vintages, paired with local cheeses and the stories of the families who made them.",
    detail: "Fri–Sun afternoons · 90 min · Reservations required",
  },
];

const Experiences = () => {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* Page hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <img src={hero} alt={`${BRAND} ridge view`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container relative z-10 text-cream pb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— SIGNATURE EXPERIENCES</p>
          <h1 className="font-display text-5xl md:text-7xl">Experiences</h1>
          <nav className="mt-6 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cream">Experiences</span>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 container text-center max-w-3xl mx-auto">
        <p className="text-gold tracking-[0.3em] text-sm mb-4">— SIX WAYS TO REMEMBER</p>
        <h2 className="font-display text-4xl md:text-5xl mb-6">Days that linger.</h2>
        <p className="text-muted-foreground leading-relaxed">
          At {BRAND}, the landscape is not a backdrop — it is the main event. Each experience is designed to draw you deeper into the ridge, the forest, and the quiet rhythm of mountain life.
        </p>
      </section>

      {/* Experience list */}
      <section className="pb-32 container space-y-24">
        {experiences.map((exp, i) => (
          <article
            key={exp.title}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="overflow-hidden">
                <img
                  src={exp.img}
                  alt={exp.title}
                  loading="lazy"
                  className="w-full h-[480px] object-cover hover:scale-105 transition duration-700"
                  width={1024}
                  height={768}
                />
              </div>
            </div>
            <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="flex items-center gap-3 mb-4">
                <exp.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                <span className="text-xs tracking-widest uppercase text-gold font-semibold">{exp.tag}</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{exp.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{exp.text}</p>
              <p className="text-sm text-navy font-medium tracking-wide">{exp.detail}</p>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-deep text-cream text-center">
        <div className="container max-w-3xl mx-auto">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— BEGIN YOUR STORY</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Reserve your first experience.</h2>
          <p className="text-cream/70 mb-10 leading-relaxed">
            Many experiences are exclusive to guests. Book a room and unlock the full ridge.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-gold hover:bg-gold-light text-navy-deep rounded-none px-8">Reserve a Stay</Button>
            <Link to="/rooms">
              <Button variant="outline" className="border-cream text-cream bg-transparent hover:bg-cream hover:text-navy-deep rounded-none px-8">
                View Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Experiences;
