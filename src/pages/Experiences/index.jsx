import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mountain, UtensilsCrossed, Sparkles, Waves, Wind, Wine } from "lucide-react";
import { Heart, Coffee, Sun, Home } from "lucide-react";
import SiteNav, { BRAND } from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const hero = "/Danakigali-photos-021.jpg";
const balcony = "/Danakigali-photos-011.jpg";
const fruitPlate = "/Danakigali-photos-005.jpg";
const sunlitRoom = "/Danakigali-photos-023.jpg";
const breezyRoom = "/Danakigali-photos-024.jpg";
const suiteLiving = "/Danakigali-photos-016.jpg";
const housekeeping = "/Danakigali-photos-008.jpg";

const experiences = [
  {
    icon: Heart,
    title: "Impeccable Service",
    tag: "Hospitality",
    img: housekeeping,
    text: "Experience genuine Rwandan hospitality from the moment you arrive. Our dedicated team ensures your room is a pristine sanctuary, with attention to every detail for your ultimate comfort.",
    detail: "Daily housekeeping · 24/7 reception · Attention to detail",
  },
  {
    icon: Coffee,
    title: "Private Balconies",
    tag: "Relaxation",
    img: balcony,
    text: "Step outside to your private balcony and take in the fresh Kigali air. It's the perfect spot to enjoy your morning coffee, read a book, or simply unwind after a day of exploring the city.",
    detail: "City views · Outdoor seating · Peaceful ambiance",
  },
  {
    icon: Sun,
    title: "Sunlit Rooms",
    tag: "Comfort",
    img: sunlitRoom,
    text: "Wake up to abundant natural light streaming through large windows. Our rooms are designed to feel bright, airy, and welcoming, providing a cheerful start to your day.",
    detail: "Large windows · Natural lighting · Refreshing atmosphere",
  },
  {
    icon: UtensilsCrossed,
    title: "Fresh Local Breakfast",
    tag: "Dining",
    img: fruitPlate,
    text: "Start your morning with a selection of fresh, locally sourced tropical fruits. We take pride in offering delicious, healthy options that showcase the vibrant flavors of the region.",
    detail: "Daily breakfast · Local ingredients · Fresh tropical fruits",
  },
  {
    icon: Wind,
    title: "Restful Sleep",
    tag: "Tranquility",
    img: breezyRoom,
    text: "Enjoy a deep, restful sleep in our comfortable beds. Feel the gentle breeze flow through your room, creating a serene and calming environment perfect for relaxation.",
    detail: "Premium bedding · Quiet environment · Natural ventilation",
  },
  {
    icon: Home,
    title: "Spacious Suites",
    tag: "Accommodation",
    img: suiteLiving,
    text: "Spread out and feel at home in our generously sized suites. Featuring separate living areas, they offer ample space for families or guests who desire extra room to relax or work.",
    detail: "Separate living areas · Comfortable seating · Ideal for extended stays",
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
        <h2 className="font-display text-4xl md:text-5xl mb-6">Memories that linger.</h2>
        <p className="text-muted-foreground leading-relaxed">
          At {BRAND}, your comfort is our priority. Each experience is designed to provide you with a relaxing, welcoming, and memorable stay in the heart of Kigali.
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
            Many of our rooms and suites are exclusive to guests. Book a room and unlock true comfort.
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
