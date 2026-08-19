/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from 'react';

// Common images used across the site
const images = {
  hero: "/Danakigali-photos-021.jpg",
  roomDeluxe: "/Danakigali-photos-013.jpg",
  roomDouble: "/Danakigali-photos-016.jpg",
  roomSuperior: "/Danakigali-photos-023.jpg",
  roomSingle: "/Danakigali-photos-024.jpg",
  spa: "/Danakigali-photos-005.jpg",
  pool: "/Danakigali-photos-021.jpg",
  dining: "/Danakigali-photos-011.jpg",
  terrace: "/Danakigali-photos-008.jpg",
  team1: "/Danakigali-photos-013.jpg",
  team2: "/Danakigali-photos-014.jpg",
  team3: "/Danakigali-photos-015.jpg",
  contactHero: "/contact-hero.jpg",
  fruitPlate: "/Danakigali-photos-005.jpg"
};

const initialPages = [
  {
    id: '1',
    name: 'Home',
    slug: '/',
    status: 'Published',
    lastModified: 'Today, 09:41 AM',
    metaTitle: 'Dana Kigali Hotel – Feel @ Home',
    metaDescription: 'Experience luxury accommodation at Dana Kigali Hotel.',
    sections: {
      hero: {
        image: images.hero,
        title: 'A Home Away\nFrom Home.',
        subtitle: 'DANA KIGALI HOTEL welcomes you to Kigali, Rwanda — where the warmth of African hospitality and the spirit of Dana meet the comfort of home.'
      },
      aboutSnippet: {
        image: images.pool,
        title: 'Designed with you in mind.',
        body: 'Nestled in Kigali, DANA KIGALI HOTEL offers an intimate retreat where authentic African warmth meets refined comfort. We ensure every detail of your stay feels just like home, only better.'
      },
      facilities: [
        { id: 'f1', icon: 'Car', label: 'Valet Parking' },
        { id: 'f2', icon: 'Bell', label: '24/7 Service' },
        { id: 'f3', icon: 'Wifi', label: 'Fast Wi-Fi' },
        { id: 'f4', icon: 'Coffee', label: 'Coffee Bar' }
      ],
      gallery: [
        { id: 'g1', url: images.hero },
        { id: 'g2', url: images.dining },
        { id: 'g3', url: images.terrace },
        { id: 'g4', url: images.pool },
        { id: 'g5', url: images.roomDeluxe },
        { id: 'g6', url: images.spa },
        { id: 'g7', url: images.roomSuperior },
        { id: 'g8', url: images.roomDouble }
      ],
      testimonials: [
        { id: 't1', name: 'Eleanor Vance', role: 'London', text: "The most considered stay we've had in years. Every detail felt intentional — and the view at dawn is unforgettable." },
        { id: 't2', name: 'Marc Dubois', role: 'Paris', text: "Quiet, refined, and warm. Hilltop reminded us why we travel in the first place." },
        { id: 't3', name: 'Aiko Tanaka', role: 'Kyoto', text: "From the welcome tea to the turndown ritual, a masterclass in hospitality." }
      ]
    }
  },
  {
    id: '2',
    name: 'About Us',
    slug: '/about',
    status: 'Published',
    lastModified: 'Oct 10, 2026',
    metaTitle: 'About Us – Dana Kigali Hotel',
    metaDescription: 'Learn about the story behind Dana Kigali Hotel.',
    sections: {
      hero: {
        image: images.hero,
        title: 'About DANA KIGALI HOTEL'
      },
      welcome: {
        image: images.terrace,
        title: 'Your Home Away from Home.',
        body: 'DANA KIGALI HOTEL is more than just a place to stay. It is a story of family, culture, hospitality, and kindness, carried from the banks of the River Nile to the beautiful land of a thousand hills (Rwanda).\n\nInspired by Dana, a remarkable woman born more than 150 years ago in a Nubian village on the western bank of the River Nile in northern Sudan, our hotel represents the true meaning of home. Dana was known for her kindness, unity, and love for family. Her home was a place where everyone felt welcomed, cared for, and treated as part of the family.\n\nThat same spirit lives on at DANA KIGALI HOTEL.\n\nLocated in Kigali, Rwanda, DANA KIGALI brings together the rich heritage of African, Nubian, Arab, and Islamic hospitality with the beauty and warmth of Rwanda. Just as Dana\'s home was a place of togetherness, comfort, and belonging, our hotel is designed to make every guest feel relaxed, valued, and truly at home.\n\nWhether you are visiting Kigali for business, leisure, family travel, or a short stay, DANA KIGALI HOTEL offers a welcoming atmosphere, comfortable accommodation, and personal service inspired by deeply rooted values of hospitality and care.\n\nFor us, hospitality is beyond business. It is about welcoming you with kindness, treating you like family, and creating a stay filled with comfort, peace, and memorable moments.\n\nAt DANA KIGALI HOTEL, you are not only our guest — you are part of our family.\n\nPlease feel at home.'
      },
      values: [
        { id: 'v1', icon: 'Heart', title: 'Kindness', text: 'Inspired by Dana\'s spirit of warmth and care, we welcome every guest with genuine kindness.' },
        { id: 'v2', icon: 'Users', title: 'Family', text: 'Just as Dana\'s home was a place of togetherness, we treat every guest as part of our family.' },
        { id: 'v3', icon: 'Globe', title: 'Culture', text: 'A rich blend of African, Nubian, Arab, and Islamic hospitality in the heart of Rwanda.' },
        { id: 'v4', icon: 'Home', title: 'Home', text: 'A place where everyone feels welcomed, cared for, and truly at home.' },
        { id: 'v5', icon: 'Coffee', title: 'Comfort', text: 'Comfortable accommodation designed for relaxation, peace, and memorable moments.' },
        { id: 'v6', icon: 'Gift', title: 'Heritage', text: 'Carrying forward a legacy of hospitality from the banks of the River Nile to Kigali.' }
      ],
      milestones: [
        { id: 'm1', year: '1800s', text: 'Dana is born in a Nubian village on the western bank of the River Nile in northern Sudan.' },
        { id: 'm2', year: 'Heritage', text: 'Dana becomes known for her kindness, unity, and love for family — her home welcomes all.' },
        { id: 'm3', year: 'Today', text: 'DANA KIGALI HOTEL opens in Kigali, Rwanda, carrying her spirit into the Land of a Thousand Hills.' },
        { id: 'm4', year: 'Future', text: 'Welcoming guests from around the world as part of the DANA family.' }
      ],
      team: [
        { id: 'tm1', img: images.team1, name: 'Aminata Nkusi', role: 'General Manager' },
        { id: 'tm2', img: images.team2, name: 'Jean-Paul Mugabe', role: 'Executive Chef' },
        { id: 'tm3', img: images.team3, name: 'Fatima Hassan', role: 'Guest Experience' }
      ]
    }
  },
  {
    id: '3',
    name: 'Contact',
    slug: '/contact',
    status: 'Published',
    lastModified: 'Sep 25, 2026',
    metaTitle: 'Contact Us – Dana Kigali Hotel',
    metaDescription: 'Contact Dana Kigali Hotel for reservations and inquiries.',
    sections: {
      hero: {
        image: images.contactHero,
        title: 'Contact Us'
      },
      reachOut: {
        title: 'We are here for you.',
        body: 'Whether you have a question, a special request, or simply want to say hello — our team is ready to welcome you with the warmth of the DANA family.'
      },
      mapImage: images.terrace,
      contactInfo: [
        { id: 'c1', icon: 'MapPin', title: 'Address', lines: '3 KG 303 St, Kigali\nRwanda' },
        { id: 'c2', icon: 'Phone', title: 'Phone', lines: '+250 788 000 000\n+250 788 111 111' },
        { id: 'c3', icon: 'Mail', title: 'Email', lines: 'danakigalihotel@gmail.com' },
        { id: 'c4', icon: 'Clock', title: 'Reception Hours', lines: 'Open 24 hours\nEvery day of the year' }
      ],
      hours: [
        { id: 'h1', label: 'Reception', value: '24 / 7' },
        { id: 'h2', label: 'Restaurant', value: '6:00 AM – 11:00 PM' },
        { id: 'h3', label: 'Room Service', value: '24 / 7' },
        { id: 'h4', label: 'Spa & Wellness', value: '9:00 AM – 9:00 PM' },
        { id: 'h5', label: 'Concierge', value: '7:00 AM – 10:00 PM' },
        { id: 'h6', label: 'Airport Transfer', value: 'On request, 24h advance' }
      ]
    }
  },
  {
    id: '4',
    name: 'Experiences',
    slug: '/experiences',
    status: 'Published',
    lastModified: 'Oct 12, 2026',
    metaTitle: 'Experiences – Dana Kigali Hotel',
    metaDescription: 'Discover our curated experiences at Dana Kigali Hotel.',
    sections: {
      hero: {
        image: images.hero,
        title: 'Experiences'
      },
      intro: {
        title: 'Memories that linger.',
        body: 'At DANA KIGALI HOTEL, your comfort is our priority. Each experience is designed to provide you with a relaxing, welcoming, and memorable stay in the heart of Kigali.'
      },
      experiencesList: [
        { id: 'e1', icon: 'Heart', title: 'Impeccable Service', tag: 'Hospitality', img: images.terrace, text: 'Experience genuine Rwandan hospitality from the moment you arrive. Our dedicated team ensures your room is a pristine sanctuary, with attention to every detail for your ultimate comfort.', detail: 'Daily housekeeping · 24/7 reception · Attention to detail' },
        { id: 'e2', icon: 'Coffee', title: 'Private Balconies', tag: 'Relaxation', img: images.dining, text: 'Step outside to your private balcony and take in the fresh Kigali air. It\'s the perfect spot to enjoy your morning coffee, read a book, or simply unwind after a day of exploring the city.', detail: 'City views · Outdoor seating · Peaceful ambiance' },
        { id: 'e3', icon: 'Sun', title: 'Sunlit Rooms', tag: 'Comfort', img: images.roomSuperior, text: 'Wake up to abundant natural light streaming through large windows. Our rooms are designed to feel bright, airy, and welcoming, providing a cheerful start to your day.', detail: 'Large windows · Natural lighting · Refreshing atmosphere' },
        { id: 'e4', icon: 'UtensilsCrossed', title: 'Fresh Local Breakfast', tag: 'Dining', img: images.spa, text: 'Start your morning with a selection of fresh, locally sourced tropical fruits. We take pride in offering delicious, healthy options that showcase the vibrant flavors of the region.', detail: 'Daily breakfast · Local ingredients · Fresh tropical fruits' },
        { id: 'e5', icon: 'Wind', title: 'Restful Sleep', tag: 'Tranquility', img: images.roomSingle, text: 'Enjoy a deep, restful sleep in our comfortable beds. Feel the gentle breeze flow through your room, creating a serene and calming environment perfect for relaxation.', detail: 'Premium bedding · Quiet environment · Natural ventilation' },
        { id: 'e6', icon: 'Home', title: 'Spacious Suites', tag: 'Accommodation', img: images.roomDouble, text: 'Spread out and feel at home in our generously sized suites. Featuring separate living areas, they offer ample space for families or guests who desire extra room to relax or work.', detail: 'Separate living areas · Comfortable seating · Ideal for extended stays' },
        { id: 'e7', icon: 'Mountain', title: 'Mountain Trails', tag: 'Adventure', img: images.pool, text: 'Guided hikes along the ridgeline at first light, with a thermos of fresh coffee.', detail: 'Guided tours · Morning hikes' },
        { id: 'e8', icon: 'Sparkles', title: 'Stargazing Nights', tag: 'Romance', img: images.hero, text: 'A private rooftop, warm blankets, and a sky uncluttered by city light.', detail: 'Private access · Romantic setup' }
      ]
    }
  },
  {
    id: '5',
    name: 'Rooms & Suites',
    slug: '/rooms',
    status: 'Published',
    lastModified: 'Oct 11, 2026',
    metaTitle: 'Rooms & Suites – Dana Kigali Hotel',
    metaDescription: 'Browse our range of luxury rooms and suites at Dana Kigali Hotel.',
    sections: {
      hero: {
        image: images.hero,
        title: 'Rooms & Suites'
      },
      intro: {
        title: 'Choose your ridge.',
        body: 'Each room at DANA KIGALI HOTEL is shaped around its view — from compact alpine retreats to suites with private terraces and stone fireplaces. All include daily housekeeping, hand-finished linens, and unhurried mornings.'
      },
      roomsList: [
        { id: 'r1', img: images.roomDouble, name: 'Deluxe Double room', price: 90 },
        { id: 'r2', img: images.roomDeluxe, name: 'Deluxe Twin Room', price: 90 },
        { id: 'r3', img: images.roomSuperior, name: 'Family Room', price: 140  }
      ]
    }
  }
];

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [pages, setPages] = useState(initialPages);

  const updatePage = (updatedPage) => {
    setPages(prevPages => 
      prevPages.map(p => (p.id === updatedPage.id ? updatedPage : p))
    );
  };

  return (
    <ContentContext.Provider value={{ pages, updatePage }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
