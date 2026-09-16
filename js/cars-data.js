/* ==========================================================================
   AUREUM MOTORS — CAR INVENTORY
   ==========================================================================
   HOW TO ADD A NEW CAR (no other file needs to change):
   1. Copy one of the objects below (from the opening { to the closing },).
   2. Change every field to match the new car.
   3. Give it a unique "id" — lowercase, words separated by hyphens
      (e.g. "range-rover-autobiography"). This id becomes the car's URL:
      car.html?car=range-rover-autobiography
   4. Save the file.

   That's it — the car will appear on the homepage grid automatically, and
   its detail page is generated automatically by car.html. You never need
   to create a new HTML file for a new car.

   IMAGE NOTE: replace the Unsplash placeholder URLs with real photos of
   your cars when you have them. Any direct image URL works.
   ========================================================================== */

const CARS = [
  {
    id: "bentley-continental-gt",
    name: "Bentley Continental GT",
    year: 2023,
    trim: "Speed W12",
    price: "$261,000",
    tagline: "Handcrafted grand touring, built for effortless speed.",
    thumbnail:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1541348263662-e068662d82af?auto=format&fit=crop&w=1600&q=80"
    ],
    description:
      "Finished in Beluga Black over Newmarket Tan hand-stitched leather, this Continental GT Speed pairs a 6.0L twin-turbo W12 with Bentley's rotating display and diamond-quilted interior. One owner, full service history, delivered from new by an authorised dealer.",
    specs: {
      "Engine": "6.0L Twin-Turbo W12",
      "Power": "650 hp",
      "0–100 km/h": "3.5 sec",
      "Top Speed": "335 km/h",
      "Transmission": "8-Speed Dual-Clutch",
      "Drivetrain": "All-Wheel Drive",
      "Mileage": "8,400 km",
      "Exterior": "Beluga Black",
      "Interior": "Newmarket Tan Leather",
      "Condition": "Excellent — One Owner"
    }
  },
  {
    id: "porsche-911-turbo-s",
    name: "Porsche 911 Turbo S",
    year: 2022,
    trim: "992 Coupe",
    price: "$228,500",
    tagline: "The benchmark sports car, uncompromised.",
    thumbnail:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1592853625597-7d17d0fcc7ea?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80"
    ],
    description:
      "GT Silver Metallic over black leather with GT Silver stitching. Optioned with carbon-ceramic brakes, lightweight sport package, and front-axle lift. Track-tested and dealer-maintained, this 911 Turbo S delivers supercar performance with daily-driver composure.",
    specs: {
      "Engine": "3.8L Twin-Turbo Flat-6",
      "Power": "640 hp",
      "0–100 km/h": "2.7 sec",
      "Top Speed": "330 km/h",
      "Transmission": "8-Speed PDK",
      "Drivetrain": "All-Wheel Drive",
      "Mileage": "5,100 km",
      "Exterior": "GT Silver Metallic",
      "Interior": "Black Leather",
      "Condition": "Excellent — Dealer Maintained"
    }
  }
];
