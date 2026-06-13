import { Link } from "react-router-dom";
import { BRAND, BRAND_SHORT } from "./SiteNav";
import { MapPin, Phone, Mail, Share2, Globe, MessageSquare } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-white text-navy-deep">
      <div className="container py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <img src="/DANA%20HOTEL.png" alt="Dana Hotel" className="h-32 w-auto" />
          </div>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            A place where everyone feels welcomed, cared for, and truly at home.
            Inspired by Dana — from the banks of the Nile to the hills of Kigali.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-orange-500 transition">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-orange-500 transition">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-orange-500 transition">
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase text-orange-500 mb-6">Explore</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/rooms", label: "Rooms & Suites" },
              { to: "/experiences", label: "Experiences" },
              { to: "https://direct-book.com/properties/danakigalihotel/contact?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-06-13&checkOutDate=2026-06-14&trackPage=no", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-orange-500 transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase text-orange-500 mb-6">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span> 3 KG 303 St, Kigali, Rwanda</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span>+250 788 000 000</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span>danakigalihotel@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Legal / Policy */}
        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase text-orange-500 mb-6">Policies</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            {[
              { to: "https://direct-book.com/properties/danakigalihotel/policies?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-06-13&checkOutDate=2026-06-14&trackPage=no", label: "Privacy Policy" },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-orange-500 transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <p>Crafted with care in Kigali, Rwanda.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
