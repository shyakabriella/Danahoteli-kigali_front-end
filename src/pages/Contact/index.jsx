import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Mail, Clock, Send, MessageCircle } from "lucide-react";
import SiteNav, { BRAND } from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import hero from "@/assets/contact-hero.jpg";
import terrace from "@/assets/terrace.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["3 KG 303 St, Kigali", "Rwanda"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+250 788 000 000", "+250 788 111 111"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [" danakigalihotel@gmail.com"],
  },
  {
    icon: Clock,
    title: "Reception Hours",
    lines: ["Open 24 hours", "Every day of the year"],
  },
];

const hours = [
  { label: "Reception", value: "24 / 7" },
  { label: "Restaurant", value: "6:00 AM – 11:00 PM" },
  { label: "Room Service", value: "24 / 7" },
  { label: "Spa & Wellness", value: "9:00 AM – 9:00 PM" },
  { label: "Concierge", value: "7:00 AM – 10:00 PM" },
  { label: "Airport Transfer", value: "On request, 24h advance" },
];

const Contact = () => {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* Page hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <img src={hero} alt={`${BRAND} contact`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container relative z-10 text-cream pb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— GET IN TOUCH</p>
          <h1 className="font-display text-5xl md:text-7xl">Contact Us</h1>
          <nav className="mt-6 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cream">Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-24 container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— REACH OUT</p>
            <h2 className="font-display text-4xl md:text-5xl">We are here for you.</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Whether you have a question, a special request, or simply want to say hello — our team is ready to welcome you with the warmth of the DANA family.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {contactInfo.map(({ icon: Icon, title, lines }, idx) => (
            <Reveal key={title} delay={idx * 120}>
              <div className="bg-background p-10 h-full">
                <Icon className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-2xl mb-3">{title}</h3>
                {lines.map((line) => (
                  <p key={line} className="text-muted-foreground leading-relaxed">{line}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24 bg-cream">
        <div className="container grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <Reveal>
            <div>
              <p className="text-gold tracking-[0.3em] text-sm mb-4">— SEND A MESSAGE</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Write to us.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                Fill in the form below and we will get back to you within 24 hours. For urgent matters, please call us directly.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="rounded-none bg-background border-border h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="rounded-none bg-background border-border h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-none bg-background border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+250 ..."
                    className="rounded-none bg-background border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="rounded-none bg-background border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="rounded-none bg-background border-border min-h-[160px] resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-gold hover:bg-gold-light text-navy-deep font-semibold rounded-none px-10 h-12"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </Reveal>

          {/* Map image + Hours */}
          <div className="space-y-10">
            <Reveal delay={150}>
              <div className="overflow-hidden">
                <img
                  src={terrace}
                  alt="DANA KIGALI HOTEL terrace view"
                  loading="lazy"
                  className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                <MapPin className="w-3 h-3" />3 KG 303 St, Kigali, Rwanda
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div>
                <p className="text-gold tracking-[0.3em] text-sm mb-4">— OPENING HOURS</p>
                <h3 className="font-display text-3xl mb-6">At your service.</h3>
                <div className="space-y-0 divide-y divide-border border-t border-border">
                  {hours.map((h) => (
                    <div key={h.label} className="flex justify-between py-4">
                      <span className="text-muted-foreground">{h.label}</span>
                      <span className="font-medium">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-24 bg-navy-deep text-cream">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <MessageCircle className="w-12 h-12 text-gold mx-auto mb-6" strokeWidth={1.5} />
              <p className="text-gold tracking-[0.3em] text-sm mb-4">— INSTANT MESSAGING</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Prefer to chat on WhatsApp?</h2>
              <p className="text-cream/70 mb-10 leading-relaxed">
                Send us a message anytime on WhatsApp and our team will respond as soon as possible. Perfect for quick questions and last-minute requests.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://wa.me/250788000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gold hover:bg-gold-light text-navy-deep rounded-none px-8 h-12">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
                <Link to="/rooms">
                  <Button
                    variant="outline"
                    className="border-cream text-cream bg-transparent hover:bg-cream hover:text-navy-deep rounded-none px-8 h-12"
                  >
                    View Rooms
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contact;
