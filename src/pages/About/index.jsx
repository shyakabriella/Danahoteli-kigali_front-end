import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Globe, Home, Coffee, Gift } from "lucide-react";
import SiteNav, { BRAND } from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
const hero = "/Danakigali-photos-021.jpg";
const terrace = "/Danakigali-photos-008.jpg";
const dining = "/Danakigali-photos-011.jpg";
const team1 = "/Danakigali-photos-013.jpg";
const team2 = "/Danakigali-photos-014.jpg";
const team3 = "/Danakigali-photos-015.jpg";

const values = [
  { icon: Heart, title: "Kindness", text: "Inspired by Dana's spirit of warmth and care, we welcome every guest with genuine kindness." },
  { icon: Users, title: "Family", text: "Just as Dana's home was a place of togetherness, we treat every guest as part of our family." },
  { icon: Globe, title: "Culture", text: "A rich blend of African, Nubian, Arab, and Islamic hospitality in the heart of Rwanda." },
  { icon: Home, title: "Home", text: "A place where everyone feels welcomed, cared for, and truly at home." },
  { icon: Coffee, title: "Comfort", text: "Comfortable accommodation designed for relaxation, peace, and memorable moments." },
  { icon: Gift, title: "Heritage", text: "Carrying forward a legacy of hospitality from the banks of the River Nile to Kigali." },
];

const team = [
  { img: team1, name: "Aminata Nkusi", role: "General Manager" },
  { img: team2, name: "Jean-Paul Mugabe", role: "Executive Chef" },
  { img: team3, name: "Fatima Hassan", role: "Guest Experience" },
];

const milestones = [
  { year: "1800s", text: "Dana is born in a Nubian village on the western bank of the River Nile in northern Sudan." },
  { year: "Heritage", text: "Dana becomes known for her kindness, unity, and love for family — her home welcomes all." },
  { year: "Today", text: "DANA KIGALI HOTEL opens in Kigali, Rwanda, carrying her spirit into the Land of a Thousand Hills." },
  { year: "Future", text: "Welcoming guests from around the world as part of the DANA family." },
];

const About = () => {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* Page hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <img src={hero} alt={`${BRAND}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container relative z-10 text-cream pb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— OUR STORY</p>
          <h1 className="font-display text-5xl md:text-7xl">About {BRAND}</h1>
          <nav className="mt-6 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cream">About</span>
          </nav>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— WELCOME</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">Your Home Away from Home.</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground font-display text-xl">DANA KIGALI HOTEL is more than just a place to stay.</strong> It is a story of family, culture, hospitality, and kindness, carried from the banks of the River Nile to the beautiful land of a thousand hills (Rwanda).
            </p>
            <p>
              Inspired by Dana, a remarkable woman born more than 150 years ago in a Nubian village on the western bank of the River Nile in northern Sudan, our hotel represents the true meaning of home. Dana was known for her kindness, unity, and love for family. Her home was a place where everyone felt welcomed, cared for, and treated as part of the family.
            </p>
            <p>
              That same spirit lives on at DANA KIGALI HOTEL.
            </p>
            <p>
              Located in Kigali, Rwanda, DANA KIGALI brings together the rich heritage of African, Nubian, Arab, and Islamic hospitality with the beauty and warmth of Rwanda. Just as Dana's home was a place of togetherness, comfort, and belonging, our hotel is designed to make every guest feel relaxed, valued, and truly at home.
            </p>
            <p>
              Whether you are visiting Kigali for business, leisure, family travel, or a short stay, DANA KIGALI HOTEL offers a welcoming atmosphere, comfortable accommodation, and personal service inspired by deeply rooted values of hospitality and care.
            </p>
            <p>
              For us, hospitality is beyond business. It is about welcoming you with kindness, treating you like family, and creating a stay filled with comfort, peace, and memorable moments.
            </p>
            <p className="text-foreground font-medium">
              At DANA KIGALI HOTEL, you are not only our guest — you are part of our family.
            </p>
            <p className="text-gold font-display text-xl">Please feel at home.</p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[{ n: "150+", l: "Years of heritage" }, { n: "1,000", l: "Hills of Rwanda" }, { n: "Family", l: "You are part of it" }].map((s) => (
              <div key={s.l} className="border-t-2 border-gold pt-4">
                <div className="font-display text-4xl">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={terrace} alt="DANA KIGALI HOTEL terrace" loading="lazy" className="w-full h-[600px] object-cover" />
          <div className="absolute -top-8 -left-8 hidden md:flex bg-gold text-navy-deep p-6 items-center gap-3">
            <Award className="w-8 h-8" />
            <div className="text-sm font-semibold leading-tight">Home Away<br />From Home</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— OUR VALUES</p>
            <h2 className="font-display text-4xl md:text-5xl">The spirit of Dana, in everything we do.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-background p-10">
                <Icon className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-2xl mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="py-32 bg-navy-deep text-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— OUR HERITAGE</p>
            <h2 className="font-display text-4xl md:text-5xl">A legacy from the Nile to the hills.</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cream/20" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-6`}>
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="font-display text-3xl text-gold mb-2">{m.year}</div>
                    <p className="text-cream/80 leading-relaxed">{m.text}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full mt-3" />
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— OUR FAMILY</p>
          <h2 className="font-display text-4xl md:text-5xl">A team that welcomes you home.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((m) => (
            <figure key={m.name} className="group">
              <div className="overflow-hidden bg-cream">
                <img src={m.img} alt={m.name} loading="lazy" className="w-full h-[420px] object-cover grayscale group-hover:grayscale-0 transition duration-700" />
              </div>
              <figcaption className="mt-5">
                <h3 className="font-display text-2xl">{m.name}</h3>
                <p className="text-sm text-gold tracking-widest uppercase mt-1">{m.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="grid md:grid-cols-2 min-h-[420px]">
        <img src={dining} alt="Dining at DANA KIGALI HOTEL" loading="lazy" className="w-full h-full object-cover min-h-[300px]" />
        <div className="bg-navy text-cream p-12 md:p-20 flex flex-col justify-center">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— COME STAY</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">A warm welcome is waiting.</h2>
          <p className="text-cream/70 mb-8 leading-relaxed max-w-md">Reserve a room and experience the true meaning of home in the heart of Kigali.</p>
          <div className="flex gap-4 flex-wrap">
            <Button className="bg-gold hover:bg-gold-light text-navy-deep rounded-none px-8">Reserve a Stay</Button>
            <Link to="/"><Button variant="outline" className="border-cream text-cream bg-transparent hover:bg-cream hover:text-navy-deep rounded-none px-8">Back to Home</Button></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default About;
