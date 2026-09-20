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
    id: "toyota-prius",
    name: "Toyota Prius",
    year: 2013,
    trim: "-",
    price: "Rs. 4,500,000",
    tagline: "-",
    thumbnail:
      "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/814368852_122098645491483284_6168450184449682619_n.jpg?stp=dst-jpg_tt6&cstp=mx1195x896&ctp=s1195x896&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ByQheufxgf0Q7kNvwF7CCeV&_nc_oc=AdqTbQzTV-AgrdDHVXlmp2GiUXjof2sYClg2iWcQM4wxXb7pSmrj-j0JsxHzWP0-NRs&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=9JRoY2yJfjK49tffbHQ6Iw&_nc_ss=7b2a8&oh=00_AQKpnDjYz_4Dbjq5ySm_a-6tfspyAB6OBtT4e1utDYSKBA&oe=6AB5353B",
    gallery: [
      "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/814368852_122098645491483284_6168450184449682619_n.jpg?stp=dst-jpg_tt6&cstp=mx1195x896&ctp=s1195x896&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ByQheufxgf0Q7kNvwF7CCeV&_nc_oc=AdqTbQzTV-AgrdDHVXlmp2GiUXjof2sYClg2iWcQM4wxXb7pSmrj-j0JsxHzWP0-NRs&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=9JRoY2yJfjK49tffbHQ6Iw&_nc_ss=7b2a8&oh=00_AQKpnDjYz_4Dbjq5ySm_a-6tfspyAB6OBtT4e1utDYSKBA&oe=6AB5353B",
      "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/789506800_122098645635483284_7533154923542041586_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=n5MeCRix-ckQ7kNvwGNTb09&_nc_oc=Adp4GcHXhkQlD04E0L_XVk8ZzKU8GWnLVmlLGayevMlv172dhQyejKN26ov-FDw2DpY&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=jSS1PGAAU6dptVDhp-Hf8Q&_nc_ss=7b2a8&oh=00_AQJevDERLo5al8TdPQMT9vUW5v2nmuqJFsoE4ghyZd9Bqg&oe=6AB52626",
      "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/797653422_122098645449483284_3480587030603770202_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s1920x1080&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xdkldKYmWz8Q7kNvwGMY57r&_nc_oc=AdpUlDYqbe_dDz41Cbh1DMfgEn38-8C30ieTc2LMJO6gNzG3B8prQXXbb8XNTRwgB5I&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=L37gW1RFVxjg32gxhtQoVg&_nc_ss=7b2a8&oh=00_AQIGXIVfueZHL5Rj5HjEaYByW51XNiuId8Mv8FVHx0zOfA&oe=6AB53899",
      "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/813833064_122098645599483284_1740883663568765842_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s1920x1080&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IR9cDTgu8fAQ7kNvwGY7sMQ&_nc_oc=AdqmGXeoJWDtePAMPIe2_ysocq2_pHVtAfgtbhF-5svOocVejSJWvf1HIPV2JKgU5HI&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=PaUkPcZTqhwh0WbJo4e6ow&_nc_ss=7b2a8&oh=00_AQJ9_A2FMI6rJX2xjgpY8VbR7FxV4FlREJVxc_VZeSZC7A&oe=6AB5215B"
    ],
    description:
      "TBD",
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
    id: "toyota-passo",
    name: "Toyota Passo",
    year: 2015,
    trim: "-",
    price: "Rs. 3,400,000",
    tagline: "-",
    thumbnail:
      "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/814342721_122098627641483284_4483538792262491504_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x720&ctp=s590x590&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WOivNkSDbigQ7kNvwFvtftY&_nc_oc=Adrcgg3cXX7j5cXqfU-2GwIQxbiF28zDQnexcuOnbNkGZfegaGQb4UGAm2PKsLXEles&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=IynVCNQgzPjS4Nj-PMR5fw&_nc_ss=7b2a8&oh=00_AQJnjl4cZRQAilrEgI70zaTmNiR5u6FH7TOI1yjGLUrJEg&oe=6AB53D52https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/814342721_122098627641483284_4483538792262491504_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x720&ctp=s590x590&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WOivNkSDbigQ7kNvwFvtftY&_nc_oc=Adrcgg3cXX7j5cXqfU-2GwIQxbiF28zDQnexcuOnbNkGZfegaGQb4UGAm2PKsLXEles&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=IynVCNQgzPjS4Nj-PMR5fw&_nc_ss=7b2a8&oh=00_AQJnjl4cZRQAilrEgI70zaTmNiR5u6FH7TOI1yjGLUrJEg&oe=6AB53D52",
    gallery: [
      "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/814342721_122098627641483284_4483538792262491504_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x720&ctp=s590x590&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WOivNkSDbigQ7kNvwFvtftY&_nc_oc=Adrcgg3cXX7j5cXqfU-2GwIQxbiF28zDQnexcuOnbNkGZfegaGQb4UGAm2PKsLXEles&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=IynVCNQgzPjS4Nj-PMR5fw&_nc_ss=7b2a8&oh=00_AQJnjl4cZRQAilrEgI70zaTmNiR5u6FH7TOI1yjGLUrJEg&oe=6AB53D52",
      "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/813872734_122098627713483284_5773400581748045714_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DQD_evIBAxgQ7kNvwETbYC3&_nc_oc=AdoxmHRdtQB9tpzXYXA0-cd9Z1WrLIIM6YOb7kxbYFTcb20LhQR3GpeMMBA3Q3aK1wk&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=pFAmwiHt8TTPD1mN8yYLOA&_nc_ss=7b2a8&oh=00_AQKO7g6ciUvXHcrq_K9IpO1pn_DLLmZg49UFHEkSEEGQWQ&oe=6AB524A5",
      "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/814340614_122098627857483284_1188528901402802128_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1440&ctp=s1920x1440&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pFSrqxdgnG4Q7kNvwFQ8jvW&_nc_oc=AdovESirpU6tYoYgQmM-duletxZMseVyV4AzJ4pNijvIl09eTMEXdp4h3pG1LM2FjDs&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AZRWMpfmMPJrzfdz8OBAyw&_nc_ss=7b2a8&oh=00_AQKTwzCD-w8QaE4-W64n2COErWpa2B5qNhcSRn0v905MJQ&oe=6AB53DDB",
      "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/814691916_122098628025483284_953868558677508940_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=t6-LOpLoyOUQ7kNvwEKFOxI&_nc_oc=Adrj9QlIuxEupdQbAGlCcEBz2pvg9JGBxpye2nU3J1ZfeOWRhGYrKZbHbGHUct4tdqU&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=ziQP84_yfNTmmNrH6B99fg&_nc_ss=7b2a8&oh=00_AQIHPIekeCi878ExnIM45GGCxfxuXUwnRgnie6__-vIE4A&oe=6AB51F54"
    ],
    description:
      "TBD",
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
