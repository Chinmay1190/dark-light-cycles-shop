import { Product, Category, Brand } from "@/types/product";

export const categories: Category[] = [
  {
    id: "sport",
    name: "Sport",
    slug: "sport",
    description: "High-performance sportbikes built for speed and precision",
    image: "/images/categories/sport.jpg"
  },
  {
    id: "naked",
    name: "Naked",
    slug: "naked",
    description: "Stripped-down performance with aggressive styling",
    image: "/images/categories/naked.jpg"
  },
  {
    id: "adventure",
    name: "Adventure",
    slug: "adventure",
    description: "Versatile bikes designed for both on and off-road exploration",
    image: "/images/categories/adventure.jpg"
  },
  {
    id: "touring",
    name: "Touring",
    slug: "touring",
    description: "Comfortable long-distance motorcycles built for the journey",
    image: "/images/categories/touring.jpg"
  },
  {
    id: "cruiser",
    name: "Cruiser",
    slug: "cruiser",
    description: "Relaxed riding position with classic styling",
    image: "/images/categories/cruiser.jpg"
  }
];

export const brands: Brand[] = [
  {
    id: "kawasaki",
    name: "Kawasaki",
    slug: "kawasaki",
    logo: "/images/brands/kawasaki.png",
    description: "Japanese manufacturer known for high-performance motorcycles including the Ninja series"
  },
  {
    id: "honda",
    name: "Honda",
    slug: "honda",
    logo: "/images/brands/honda.png",
    description: "Japanese multinational with a diverse range of motorcycles known for reliability"
  },
  {
    id: "yamaha",
    name: "Yamaha",
    slug: "yamaha",
    logo: "/images/brands/yamaha.png",
    description: "Japanese manufacturer with a focus on sport and racing motorcycles"
  },
  {
    id: "suzuki",
    name: "Suzuki",
    slug: "suzuki",
    logo: "/images/brands/suzuki.png",
    description: "Japanese brand producing a wide range of motorcycles including the legendary Hayabusa"
  },
  {
    id: "bmw",
    name: "BMW",
    slug: "bmw",
    logo: "/images/brands/bmw.png",
    description: "German manufacturer known for premium motorcycles and innovative technology"
  },
  {
    id: "ducati",
    name: "Ducati",
    slug: "ducati",
    logo: "/images/brands/ducati.png",
    description: "Italian manufacturer known for high-performance sport motorcycles"
  },
  {
    id: "harley-davidson",
    name: "Harley-Davidson",
    slug: "harley-davidson",
    logo: "/images/brands/harley-davidson.png",
    description: "American manufacturer famous for iconic cruisers and touring motorcycles"
  },
  {
    id: "ktm",
    name: "KTM",
    slug: "ktm",
    logo: "/images/brands/ktm.png",
    description: "Austrian manufacturer specializing in off-road and adventure motorcycles"
  },
  {
    id: "aprilia",
    name: "Aprilia",
    slug: "aprilia",
    logo: "/images/brands/aprilia.png",
    description: "Italian manufacturer with a strong racing heritage"
  },
  {
    id: "triumph",
    name: "Triumph",
    slug: "triumph",
    logo: "/images/brands/triumph.png",
    description: "British manufacturer with a rich history and diverse motorcycle lineup"
  },
  {
    id: "mv-agusta",
    name: "MV Agusta",
    slug: "mv-agusta",
    logo: "/images/brands/mv-agusta.png",
    description: "Italian manufacturer known for exotic high-performance motorcycles with artistic design"
  },
  {
    id: "indian",
    name: "Indian",
    slug: "indian",
    logo: "/images/brands/indian.png",
    description: "Historic American brand producing premium cruisers and touring motorcycles"
  },
  {
    id: "norton",
    name: "Norton",
    slug: "norton",
    logo: "/images/brands/norton.png",
    description: "Legendary British manufacturer with a focus on exclusive hand-built motorcycles"
  },
  {
    id: "tvs",
    name: "TVS",
    slug: "tvs",
    logo: "/images/brands/tvs.png",
    description: "Indian manufacturer producing a range of motorcycles from entry-level to premium sports models"
  },
  {
    id: "husqvarna",
    name: "Husqvarna",
    slug: "husqvarna",
    logo: "/images/brands/husqvarna.png",
    description: "Swedish brand known for distinctive design and performance-oriented motorcycles"
  },
  {
    id: "cfmoto",
    name: "CFMoto",
    slug: "cfmoto",
    logo: "/images/brands/cfmoto.png",
    description: "Chinese manufacturer producing value-oriented motorcycles with modern technology"
  },
  {
    id: "zero",
    name: "Zero",
    slug: "zero",
    logo: "/images/brands/zero.png",
    description: "American company specializing in electric motorcycles with advanced battery technology"
  },
  {
    id: "jawa",
    name: "Jawa",
    slug: "jawa",
    logo: "/images/brands/jawa.png",
    description: "Historic Czech brand revived in India, producing classic-styled motorcycles"
  },
  {
    id: "moto-guzzi",
    name: "Moto Guzzi",
    slug: "moto-guzzi",
    logo: "/images/brands/moto-guzzi.png",
    description: "Italy's oldest motorcycle manufacturer known for its unique transverse V-twin engines"
  }
];

export const products: Product[] = [
  // Kawasaki
  {
    id: "kawasaki-ninja-zx-10r",
    name: "Kawasaki Ninja ZX-10R",
    slug: "kawasaki-ninja-zx-10r",
    price: 1599900,
    originalPrice: 1699900,
    discount: 5.9,
    category: "sport",
    brand: "kawasaki",
    image: "/images/products/kawasaki-ninja-zx-10r.jpg",
    images: [
      "/images/products/kawasaki-ninja-zx-10r.jpg",
      "/images/products/kawasaki-ninja-zx-10r-2.jpg",
      "/images/products/kawasaki-ninja-zx-10r-3.jpg"
    ],
    description: "The Kawasaki Ninja ZX-10R is a superbike with advanced rider aids and race-derived technology from Kawasaki's World Superbike experience.",
    specs: {
      engine: "998cc, Liquid-cooled, 4-stroke In-line Four",
      power: "203 PS @ 13,200 rpm",
      torque: "114.9 Nm @ 11,400 rpm",
      transmission: "6-speed",
      weight: "207 kg",
      fuelCapacity: "17 litres",
      topSpeed: "299 km/h"
    },
    featured: true,
    bestseller: true,
    stock: 5,
    colors: ["green", "black"]
  },
  {
    id: "kawasaki-z900",
    name: "Kawasaki Z900",
    slug: "kawasaki-z900",
    price: 899900,
    category: "naked",
    brand: "kawasaki",
    image: "/images/products/kawasaki-z900.jpg",
    images: [
      "/images/products/kawasaki-z900.jpg",
      "/images/products/kawasaki-z900-2.jpg",
      "/images/products/kawasaki-z900-3.jpg"
    ],
    description: "The Z900 is a naked sportbike that combines aggressive styling with powerful performance.",
    specs: {
      engine: "948cc, Liquid-cooled, 4-stroke In-line Four",
      power: "125 PS @ 9,500 rpm",
      torque: "98.6 Nm @ 7,700 rpm",
      transmission: "6-speed",
      weight: "212 kg",
      fuelCapacity: "17 litres",
      topSpeed: "240 km/h"
    },
    featured: true,
    stock: 8,
    colors: ["green", "black", "grey"]
  },
  {
    id: "kawasaki-versys-650",
    name: "Kawasaki Versys 650",
    slug: "kawasaki-versys-650",
    price: 749900,
    category: "adventure",
    brand: "kawasaki",
    image: "/images/products/kawasaki-versys-650.jpg",
    images: [
      "/images/products/kawasaki-versys-650.jpg",
      "/images/products/kawasaki-versys-650-2.jpg",
      "/images/products/kawasaki-versys-650-3.jpg"
    ],
    description: "The Versys 650 is a versatile adventure-touring motorcycle designed for both city commuting and long-distance touring.",
    specs: {
      engine: "649cc, Liquid-cooled, 4-stroke Parallel Twin",
      power: "66 PS @ 8,500 rpm",
      torque: "61 Nm @ 7,000 rpm",
      transmission: "6-speed",
      weight: "216 kg",
      fuelCapacity: "21 litres",
      topSpeed: "210 km/h"
    },
    stock: 10,
    colors: ["green", "black"]
  },
  {
    id: "kawasaki-ninja-h2",
    name: "Kawasaki Ninja H2",
    slug: "kawasaki-ninja-h2",
    price: 3499900,
    category: "sport",
    brand: "kawasaki",
    image: "/images/products/kawasaki-ninja-h2.jpg",
    images: [
      "/images/products/kawasaki-ninja-h2.jpg",
      "/images/products/kawasaki-ninja-h2-2.jpg",
      "/images/products/kawasaki-ninja-h2-3.jpg"
    ],
    description: "The Ninja H2 is a supercharged supersport motorcycle featuring cutting-edge technology and impressive power output.",
    specs: {
      engine: "998cc, Liquid-cooled, 4-stroke In-line Four with Supercharger",
      power: "231 PS @ 11,500 rpm",
      torque: "141.7 Nm @ 11,000 rpm",
      transmission: "6-speed",
      weight: "238 kg",
      fuelCapacity: "17 litres",
      topSpeed: "331 km/h"
    },
    featured: true,
    stock: 3,
    colors: ["mirror-coated-black"]
  },
  
  // Honda
  {
    id: "honda-cbr1000rr-r",
    name: "Honda CBR1000RR-R Fireblade",
    slug: "honda-cbr1000rr-r-fireblade",
    price: 2399900,
    category: "sport",
    brand: "honda",
    image: "/images/products/honda-cbr1000rr-r.jpg",
    images: [
      "/images/products/honda-cbr1000rr-r.jpg",
      "/images/products/honda-cbr1000rr-r-2.jpg",
      "/images/products/honda-cbr1000rr-r-3.jpg"
    ],
    description: "The CBR1000RR-R Fireblade is Honda's flagship superbike with MotoGP-inspired aerodynamics and technology.",
    specs: {
      engine: "1000cc, Liquid-cooled, 4-stroke In-line Four",
      power: "217 PS @ 14,500 rpm",
      torque: "113 Nm @ 12,500 rpm",
      transmission: "6-speed",
      weight: "201 kg",
      fuelCapacity: "16.1 litres",
      topSpeed: "299 km/h"
    },
    new: true,
    stock: 2,
    colors: ["red", "black"]
  },
  {
    id: "honda-cb650r",
    name: "Honda CB650R",
    slug: "honda-cb650r",
    price: 899900,
    originalPrice: 929900,
    discount: 3.2,
    category: "naked",
    brand: "honda",
    image: "/images/products/honda-cb650r.jpg",
    images: [
      "/images/products/honda-cb650r.jpg",
      "/images/products/honda-cb650r-2.jpg",
      "/images/products/honda-cb650r-3.jpg"
    ],
    description: "The CB650R is a middleweight naked motorcycle with Neo Sports Café styling and an inline-four engine.",
    specs: {
      engine: "649cc, Liquid-cooled, 4-stroke In-line Four",
      power: "94 PS @ 12,000 rpm",
      torque: "63 Nm @ 9,500 rpm",
      transmission: "6-speed",
      weight: "202 kg",
      fuelCapacity: "15.4 litres",
      topSpeed: "225 km/h"
    },
    bestseller: true,
    stock: 12,
    colors: ["red", "black", "blue"]
  },
  {
    id: "honda-africa-twin",
    name: "Honda Africa Twin",
    slug: "honda-africa-twin",
    price: 1599900,
    category: "adventure",
    brand: "honda",
    image: "/images/products/honda-africa-twin.jpg",
    images: [
      "/images/products/honda-africa-twin.jpg",
      "/images/products/honda-africa-twin-2.jpg",
      "/images/products/honda-africa-twin-3.jpg"
    ],
    description: "The Africa Twin is Honda's flagship adventure motorcycle designed for on and off-road exploration.",
    specs: {
      engine: "1084cc, Liquid-cooled, 4-stroke Parallel Twin",
      power: "101 PS @ 7,500 rpm",
      torque: "105 Nm @ 6,250 rpm",
      transmission: "6-speed Manual / DCT",
      weight: "226 kg",
      fuelCapacity: "24.8 litres",
      topSpeed: "215 km/h"
    },
    featured: true,
    stock: 7,
    colors: ["red", "black", "tricolor"]
  },
  {
    id: "honda-goldwing",
    name: "Honda Gold Wing Tour",
    slug: "honda-goldwing-tour",
    price: 3999900,
    category: "touring",
    brand: "honda",
    image: "/images/products/honda-goldwing.jpg",
    images: [
      "/images/products/honda-goldwing.jpg",
      "/images/products/honda-goldwing-2.jpg",
      "/images/products/honda-goldwing-3.jpg"
    ],
    description: "The Gold Wing Tour is Honda's premium touring motorcycle with unmatched comfort and luxury features.",
    specs: {
      engine: "1833cc, Liquid-cooled, 4-stroke Flat-Six",
      power: "126 PS @ 5,500 rpm",
      torque: "170 Nm @ 4,500 rpm",
      transmission: "7-speed DCT",
      weight: "385 kg",
      fuelCapacity: "21.1 litres",
      topSpeed: "180 km/h"
    },
    stock: 4,
    colors: ["black", "red", "blue"]
  },
  
  // Yamaha
  {
    id: "yamaha-yzf-r1",
    name: "Yamaha YZF-R1",
    slug: "yamaha-yzf-r1",
    price: 2149900,
    originalPrice: 2299900,
    discount: 6.5,
    category: "sport",
    brand: "yamaha",
    image: "/images/products/yamaha-yzf-r1.jpg",
    images: [
      "/images/products/yamaha-yzf-r1.jpg",
      "/images/products/yamaha-yzf-r1-2.jpg",
      "/images/products/yamaha-yzf-r1-3.jpg"
    ],
    description: "The YZF-R1 is Yamaha's flagship superbike with MotoGP-derived technology and advanced electronics.",
    specs: {
      engine: "998cc, Liquid-cooled, 4-stroke Crossplane In-line Four",
      power: "200 PS @ 13,500 rpm",
      torque: "112.4 Nm @ 11,500 rpm",
      transmission: "6-speed",
      weight: "201 kg",
      fuelCapacity: "17 litres",
      topSpeed: "299 km/h"
    },
    featured: true,
    stock: 6,
    colors: ["blue", "black", "red"]
  },
  {
    id: "yamaha-mt-09",
    name: "Yamaha MT-09",
    slug: "yamaha-mt-09",
    price: 999900,
    category: "naked",
    brand: "yamaha",
    image: "/images/products/yamaha-mt-09.jpg",
    images: [
      "/images/products/yamaha-mt-09.jpg",
      "/images/products/yamaha-mt-09-2.jpg",
      "/images/products/yamaha-mt-09-3.jpg"
    ],
    description: "The MT-09 is a high-performance naked motorcycle with a distinctive character and thrilling triple-cylinder engine.",
    specs: {
      engine: "890cc, Liquid-cooled, 4-stroke CP3 Triple",
      power: "119 PS @ 10,000 rpm",
      torque: "93 Nm @ 7,000 rpm",
      transmission: "6-speed",
      weight: "189 kg",
      fuelCapacity: "14 litres",
      topSpeed: "240 km/h"
    },
    bestseller: true,
    new: true,
    stock: 9,
    colors: ["blue", "black", "gray"]
  },
  {
    id: "yamaha-tenere-700",
    name: "Yamaha Ténéré 700",
    slug: "yamaha-tenere-700",
    price: 1199900,
    category: "adventure",
    brand: "yamaha",
    image: "/images/products/yamaha-tenere-700.jpg",
    images: [
      "/images/products/yamaha-tenere-700.jpg",
      "/images/products/yamaha-tenere-700-2.jpg",
      "/images/products/yamaha-tenere-700-3.jpg"
    ],
    description: "The Ténéré 700 is a rally-inspired adventure motorcycle designed for serious off-road exploration.",
    specs: {
      engine: "689cc, Liquid-cooled, 4-stroke CP2 Twin",
      power: "73 PS @ 9,000 rpm",
      torque: "68 Nm @ 6,500 rpm",
      transmission: "6-speed",
      weight: "204 kg",
      fuelCapacity: "16 litres",
      topSpeed: "190 km/h"
    },
    featured: true,
    stock: 8,
    colors: ["blue", "black"]
  },
  {
    id: "yamaha-tracer-9-gt",
    name: "Yamaha Tracer 9 GT",
    slug: "yamaha-tracer-9-gt",
    price: 1399900,
    category: "touring",
    brand: "yamaha",
    image: "/images/products/yamaha-tracer-9-gt.jpg",
    images: [
      "/images/products/yamaha-tracer-9-gt.jpg",
      "/images/products/yamaha-tracer-9-gt-2.jpg",
      "/images/products/yamaha-tracer-9-gt-3.jpg"
    ],
    description: "The Tracer 9 GT is a sport touring motorcycle with advanced technology, comfort, and the thrilling CP3 engine.",
    specs: {
      engine: "890cc, Liquid-cooled, 4-stroke CP3 Triple",
      power: "119 PS @ 10,000 rpm",
      torque: "93 Nm @ 7,000 rpm",
      transmission: "6-speed",
      weight: "220 kg",
      fuelCapacity: "18 litres",
      topSpeed: "230 km/h"
    },
    new: true,
    stock: 5,
    colors: ["gray", "blue"]
  },
  
  // Suzuki
  {
    id: "suzuki-hayabusa",
    name: "Suzuki Hayabusa",
    slug: "suzuki-hayabusa",
    price: 1699900,
    category: "sport",
    brand: "suzuki",
    image: "/images/products/suzuki-hayabusa.jpg",
    images: [
      "/images/products/suzuki-hayabusa.jpg",
      "/images/products/suzuki-hayabusa-2.jpg",
      "/images/products/suzuki-hayabusa-3.jpg"
    ],
    description: "The legendary Hayabusa is known for its ultimate combination of power, acceleration, and top-end performance.",
    specs: {
      engine: "1340cc, Liquid-cooled, 4-stroke In-line Four",
      power: "190 PS @ 9,700 rpm",
      torque: "150 Nm @ 7,000 rpm",
      transmission: "6-speed",
      weight: "266 kg",
      fuelCapacity: "20 litres",
      topSpeed: "299 km/h"
    },
    featured: true,
    bestseller: true,
    stock: 4,
    colors: ["black", "gray", "white"]
  },
  {
    id: "suzuki-gsx-s750",
    name: "Suzuki GSX-S750",
    slug: "suzuki-gsx-s750",
    price: 799900,
    originalPrice: 849900,
    discount: 5.9,
    category: "naked",
    brand: "suzuki",
    image: "/images/products/suzuki-gsx-s750.jpg",
    images: [
      "/images/products/suzuki-gsx-s750.jpg",
      "/images/products/suzuki-gsx-s750-2.jpg",
      "/images/products/suzuki-gsx-s750-3.jpg"
    ],
    description: "The GSX-S750 is a middleweight naked sportbike with aggressive styling and a responsive inline-four engine.",
    specs: {
      engine: "749cc, Liquid-cooled, 4-stroke In-line Four",
      power: "114 PS @ 10,500 rpm",
      torque: "81 Nm @ 9,000 rpm",
      transmission: "6-speed",
      weight: "213 kg",
      fuelCapacity: "16 litres",
      topSpeed: "220 km/h"
    },
    stock: 11,
    colors: ["blue", "black", "red"]
  },
  {
    id: "suzuki-v-strom-650",
    name: "Suzuki V-Strom 650XT",
    slug: "suzuki-v-strom-650xt",
    price: 899900,
    category: "adventure",
    brand: "suzuki",
    image: "/images/products/suzuki-v-strom-650.jpg",
    images: [
      "/images/products/suzuki-v-strom-650.jpg",
      "/images/products/suzuki-v-strom-650-2.jpg",
      "/images/products/suzuki-v-strom-650-3.jpg"
    ],
    description: "The V-Strom 650XT is a versatile adventure motorcycle known for its reliability and comfortable ergonomics.",
    specs: {
      engine: "645cc, Liquid-cooled, 4-stroke V-Twin",
      power: "71 PS @ 8,800 rpm",
      torque: "62 Nm @ 6,500 rpm",
      transmission: "6-speed",
      weight: "216 kg",
      fuelCapacity: "20 litres",
      topSpeed: "200 km/h"
    },
    stock: 7,
    colors: ["yellow", "white"]
  },
  
  // BMW
  {
    id: "bmw-s1000rr",
    name: "BMW S1000RR",
    slug: "bmw-s1000rr",
    price: 2199900,
    category: "sport",
    brand: "bmw",
    image: "/images/products/bmw-s1000rr.jpg",
    images: [
      "/images/products/bmw-s1000rr.jpg",
      "/images/products/bmw-s1000rr-2.jpg",
      "/images/products/bmw-s1000rr-3.jpg"
    ],
    description: "The S1000RR is BMW's flagship superbike with cutting-edge technology and track-focused performance.",
    specs: {
      engine: "999cc, Liquid-cooled, 4-stroke In-line Four",
      power: "207 PS @ 13,500 rpm",
      torque: "113 Nm @ 11,000 rpm",
      transmission: "6-speed",
      weight: "197 kg",
      fuelCapacity: "16.5 litres",
      topSpeed: "299 km/h"
    },
    featured: true,
    stock: 5,
    colors: ["red", "white", "black"]
  },
  {
    id: "bmw-r1250gs",
    name: "BMW R1250GS Adventure",
    slug: "bmw-r1250gs-adventure",
    price: 2399900,
    category: "adventure",
    brand: "bmw",
    image: "/images/products/bmw-r1250gs.jpg",
    images: [
      "/images/products/bmw-r1250gs.jpg",
      "/images/products/bmw-r1250gs-2.jpg",
      "/images/products/bmw-r1250gs-3.jpg"
    ],
    description: "The R1250GS Adventure is BMW's flagship adventure motorcycle known for its versatility and long-distance touring capabilities.",
    specs: {
      engine: "1254cc, Liquid-cooled, 4-stroke Boxer Twin",
      power: "136 PS @ 7,750 rpm",
      torque: "143 Nm @ 6,250 rpm",
      transmission: "6-speed",
      weight: "268 kg",
      fuelCapacity: "30 litres",
      topSpeed: "220 km/h"
    },
    featured: true,
    bestseller: true,
    stock: 6,
    colors: ["blue", "white", "black"]
  },
  {
    id: "bmw-r18",
    name: "BMW R18",
    slug: "bmw-r18",
    price: 1999900,
    category: "cruiser",
    brand: "bmw",
    image: "/images/products/bmw-r18.jpg",
    images: [
      "/images/products/bmw-r18.jpg",
      "/images/products/bmw-r18-2.jpg",
      "/images/products/bmw-r18-3.jpg"
    ],
    description: "The R18 is BMW's flagship cruiser motorcycle featuring the largest boxer engine ever built by BMW.",
    specs: {
      engine: "1802cc, Air/Oil-cooled, 4-stroke Boxer Twin",
      power: "91 PS @ 4,750 rpm",
      torque: "158 Nm @ 3,000 rpm",
      transmission: "6-speed",
      weight: "345 kg",
      fuelCapacity: "16 litres",
      topSpeed: "180 km/h"
    },
    new: true,
    stock: 3,
    colors: ["black"]
  },
  
  // Ducati
  {
    id: "ducati-panigale-v4",
    name: "Ducati Panigale V4",
    slug: "ducati-panigale-v4",
    price: 2899900,
    category: "sport",
    brand: "ducati",
    image: "/images/products/ducati-panigale-v4.jpg",
    images: [
      "/images/products/ducati-panigale-v4.jpg",
      "/images/products/ducati-panigale-v4-2.jpg",
      "/images/products/ducati-panigale-v4-3.jpg"
    ],
    description: "The Panigale V4 is Ducati's flagship superbike with MotoGP-derived V4 engine and aerodynamics.",
    specs: {
      engine: "1103cc, Liquid-cooled, 4-stroke V4",
      power: "214 PS @ 13,000 rpm",
      torque: "124 Nm @ 9,500 rpm",
      transmission: "6-speed",
      weight: "195 kg",
      fuelCapacity: "16 litres",
      topSpeed: "299 km/h"
    },
    featured: true,
    stock: 4,
    colors: ["red"]
  },
  {
    id: "ducati-multistrada-v4",
    name: "Ducati Multistrada V4",
    slug: "ducati-multistrada-v4",
    price: 2199900,
    originalPrice: 2299900,
    discount: 4.3,
    category: "adventure",
    brand: "ducati",
    image: "/images/products/ducati-multistrada-v4.jpg",
    images: [
      "/images/products/ducati-multistrada-v4.jpg",
      "/images/products/ducati-multistrada-v4-2.jpg",
      "/images/products/ducati-multistrada-v4-3.jpg"
    ],
    description: "The Multistrada V4 is Ducati's advanced adventure motorcycle with radar-assisted cruise control and versatile performance.",
    specs: {
      engine: "1158cc, Liquid-cooled, 4-stroke V4",
      power: "170 PS @ 10,500 rpm",
      torque: "125 Nm @ 8,750 rpm",
      transmission: "6-speed",
      weight: "240 kg",
      fuelCapacity: "22 litres",
      topSpeed: "250 km/h"
    },
    featured: true,
    new: true,
    stock: 5,
    colors: ["red", "black"]
  },
  {
    id: "ducati-diavel-v4",
    name: "Ducati Diavel V4",
    slug: "ducati-diavel-v4",
    price: 2499900,
    category: "cruiser",
    brand: "ducati",
    image: "/images/products/ducati-diavel-v4.jpg",
    images: [
      "/images/products/ducati-diavel-v4.jpg",
      "/images/products/ducati-diavel-v4-2.jpg",
      "/images/products/ducati-diavel-v4-3.jpg"
    ],
    description: "The Diavel V4 is Ducati's power cruiser that combines massive torque with aggressive styling and sporty handling.",
    specs: {
      engine: "1158cc, Liquid-cooled, 4-stroke V4",
      power: "168 PS @ 10,750 rpm",
      torque: "126 Nm @ 7,500 rpm",
      transmission: "6-speed",
      weight: "236 kg",
      fuelCapacity: "20 litres",
      topSpeed: "255 km/h"
    },
    new: true,
    stock: 3,
    colors: ["red", "black"]
  },
  {
    id: "ducati-streetfighter-v4",
    name: "Ducati Streetfighter V4",
    slug: "ducati-streetfighter-v4",
    price: 2399900,
    category: "naked",
    brand: "ducati",
    image: "/images/products/ducati-streetfighter-v4.jpg",
    images: [
      "/images/products/ducati-streetfighter-v4.jpg",
      "/images/products/ducati-streetfighter-v4-2.jpg",
      "/images/products/ducati-streetfighter-v4-3.jpg"
    ],
    description: "The Streetfighter V4 is a super-naked with MotoGP-derived power in a stripped-down package.",
    specs: {
      engine: "1103cc, Liquid-cooled, 4-stroke V4",
      power: "208 PS @ 13,000 rpm",
      torque: "123 Nm @ 9,500 rpm",
      transmission: "6-speed",
      weight: "201 kg",
      fuelCapacity: "16 litres",
      topSpeed: "280 km/h"
    },
    featured: true,
    bestseller: true,
    stock: 4,
    colors: ["red", "black"]
  },
  
  // Harley-Davidson
  {
    id: "harley-davidson-road-glide",
    name: "Harley-Davidson Road Glide Special",
    slug: "harley-davidson-road-glide-special",
    price: 3499900,
    category: "touring",
    brand: "harley-davidson",
    image: "/images/products/harley-davidson-road-glide.jpg",
    images: [
      "/images/products/harley-davidson-road-glide.jpg",
      "/images/products/harley-davidson-road-glide-2.jpg",
      "/images/products/harley-davidson-road-glide-3.jpg"
    ],
    description: "The Road Glide Special is a premium touring motorcycle with distinctive shark-nose fairing and impressive long-distance comfort.",
    specs: {
      engine: "1868cc, Air/Oil-cooled, 4-stroke V-Twin",
      power: "93 PS @ 5,020 rpm",
      torque: "163 Nm @ 3,250 rpm",
      transmission: "6-speed",
      weight: "387 kg",
      fuelCapacity: "22.7 litres",
      topSpeed: "160 km/h"
    },
    stock: 3,
    colors: ["black", "blue"]
  },
  {
    id: "harley-davidson-fat-bob",
    name: "Harley-Davidson Fat Bob 114",
    slug: "harley-davidson-fat-bob-114",
    price: 1799900,
    category: "cruiser",
    brand: "harley-davidson",
    image: "/images/products/harley-davidson-fat-bob.jpg",
    images: [
      "/images/products/harley-davidson-fat-bob.jpg",
      "/images/products/harley-davidson-fat-bob-2.jpg",
      "/images/products/harley-davidson-fat-bob-3.jpg"
    ],
    description: "The Fat Bob 114 is a performance cruiser with aggressive styling and the powerful Milwaukee-Eight engine.",
    specs: {
      engine: "1868cc, Air-cooled, 4-stroke V-Twin",
      power: "93 PS @ 5,020 rpm",
      torque: "155 Nm @ 3,500 rpm",
      transmission: "6-speed",
      weight: "306 kg",
      fuelCapacity: "13.6 litres",
      topSpeed: "170 km/h"
    },
    bestseller: true,
    stock: 5,
    colors: ["black", "gray"]
  },
  
  // KTM
  {
    id: "ktm-1290-super-duke",
    name: "KTM 1290 Super Duke R",
    slug: "ktm-1290-super-duke-r",
    price: 1999900,
    category: "naked",
    brand: "ktm",
    image: "/images/products/ktm-1290-super-duke.jpg",
    images: [
      "/images/products/ktm-1290-super-duke.jpg",
      "/images/products/ktm-1290-super-duke-2.jpg",
      "/images/products/ktm-1290-super-duke-3.jpg"
    ],
    description: "The 1290 Super Duke R is KTM's flagship naked bike known as 'The Beast' for its aggressive styling and raw power.",
    specs: {
      engine: "1301cc, Liquid-cooled, 4-stroke V-Twin",
      power: "180 PS @ 9,500 rpm",
      torque: "140 Nm @ 8,000 rpm",
      transmission: "6-speed",
      weight: "189 kg",
      fuelCapacity: "16 litres",
      topSpeed: "290 km/h"
    },
    featured: true,
    stock: 4,
    colors: ["orange", "black"]
  },
  {
    id: "ktm-390-duke",
    name: "KTM 390 Duke",
    slug: "ktm-390-duke",
    price: 299900,
    originalPrice: 329900,
    discount: 9.1,
    category: "naked",
    brand: "ktm",
    image: "/images/products/ktm-390-duke.jpg",
    images: [
      "/images/products/ktm-390-duke.jpg",
      "/images/products/ktm-390-duke-2.jpg",
      "/images/products/ktm-390-duke-3.jpg"
    ],
    description: "The 390 Duke is a lightweight naked sportbike that delivers impressive performance in a compact package.",
    specs: {
      engine: "373cc, Liquid-cooled, 4-stroke Single",
      power: "43 PS @ 9,000 rpm",
      torque: "37 Nm @ 7,000 rpm",
      transmission: "6-speed",
      weight: "167 kg",
      fuelCapacity: "13.4 litres",
      topSpeed: "170 km/h"
    },
    bestseller: true,
    stock: 15,
    colors: ["orange", "white"]
  },
  {
    id: "ktm-390-adventure",
    name: "KTM 390 Adventure",
    slug: "ktm-390-adventure",
    price: 349900,
    category: "adventure",
    brand: "ktm",
    image: "/images/products/ktm-390-adventure.jpg",
    images: [
      "/images/products/ktm-390-adventure.jpg",
      "/images/products/ktm-390-adventure-2.jpg",
      "/images/products/ktm-390-adventure-3.jpg"
    ],
    description: "The 390 Adventure is a versatile adventure motorcycle built for both on and off-road exploration.",
    specs: {
      engine: "373cc, Liquid-cooled, 4-stroke Single",
      power: "43 PS @ 9,000 rpm",
      torque: "37 Nm @ 7,000 rpm",
      transmission: "6-speed",
      weight: "172 kg",
      fuelCapacity: "14.5 litres",
      topSpeed: "160 km/h"
    },
    new: true,
    stock: 10,
    colors: ["orange", "white", "blue"]
  },
  
  // Aprilia
  {
    id: "aprilia-rsv4",
    name: "Aprilia RSV4 Factory",
    slug: "aprilia-rsv4-factory",
    price: 2699900,
    category: "sport",
    brand: "aprilia",
    image: "/images/products/aprilia-rsv4.jpg",
    images: [
      "/images/products/aprilia-rsv4.jpg",
      "/images/products/aprilia-rsv4-2.jpg",
      "/images/products/aprilia-rsv4-3.jpg"
    ],
    description: "The RSV4 Factory is Aprilia's flagship superbike with race-derived technology and impressive aerodynamics.",
    specs: {
      engine: "1099cc, Liquid-cooled, 4-stroke V4",
      power: "217 PS @ 13,000 rpm",
      torque: "125 Nm @ 10,500 rpm",
      transmission: "6-speed",
      weight: "199 kg",
      fuelCapacity: "18.5 litres",
      topSpeed: "299 km/h"
    },
    stock: 2,
    colors: ["black", "red"]
  },
  {
    id: "aprilia-tuono-v4",
    name: "Aprilia Tuono V4 Factory",
    slug: "aprilia-tuono-v4-factory",
    price: 1999900,
    category: "naked",
    brand: "aprilia",
    image: "/images/products/aprilia-tuono-v4.jpg",
    images: [
      "/images/products/aprilia-tuono-v4.jpg",
      "/images/products/aprilia-tuono-v4-2.jpg",
      "/images/products/aprilia-tuono-v4-3.jpg"
    ],
    description: "The Tuono V4 Factory is a high-performance naked bike with superbike-derived power and technology.",
    specs: {
      engine: "1077cc, Liquid-cooled, 4-stroke V4",
      power: "175 PS @ 11,350 rpm",
      torque: "121 Nm @ 9,000 rpm",
      transmission: "6-speed",
      weight: "209 kg",
      fuelCapacity: "18.5 litres",
      topSpeed: "269 km/h"
    },
    featured: true,
    stock: 3,
    colors: ["black", "red"]
  },
  
  // Triumph
  {
    id: "triumph-street-triple",
    name: "Triumph Street Triple RS",
    slug: "triumph-street-triple-rs",
    price: 1149900,
    category: "naked",
    brand: "triumph",
    image: "/images/products/triumph-street-triple.jpg",
    images: [
      "/images/products/triumph-street-triple.jpg",
      "/images/products/triumph-street-triple-2.jpg",
      "/images/products/triumph-street-triple-3.jpg"
    ],
    description: "The Street Triple RS is a middleweight naked bike with responsive handling and a distinctive triple-cylinder engine.",
    specs: {
      engine: "765cc, Liquid-cooled, 4-stroke Triple",
      power: "123 PS @ 11,750 rpm",
      torque: "79 Nm @ 9,350 rpm",
      transmission: "6-speed",
      weight: "189 kg",
      fuelCapacity: "17.4 litres",
      topSpeed: "240 km/h"
    },
    bestseller: true,
    stock: 7,
    colors: ["black", "white", "red"]
  },
  {
    id: "triumph-tiger-900",
    name: "Triumph Tiger 900 Rally Pro",
    slug: "triumph-tiger-900-rally-pro",
    price: 1599900,
    originalPrice: 1649900,
    discount: 3.0,
    category: "adventure",
    brand: "triumph",
    image: "/images/products/triumph-tiger-900.jpg",
    images: [
      "/images/products/triumph-tiger-900.jpg",
      "/images/products/triumph-tiger-900-2.jpg",
      "/images/products/triumph-tiger-900-3.jpg"
    ],
    description: "The Tiger 900 Rally Pro is a premium adventure motorcycle designed for off-road capability and long-distance comfort.",
    specs: {
      engine: "888cc, Liquid-cooled, 4-stroke Triple",
      power: "95 PS @ 8,750 rpm",
      torque: "87 Nm @ 7,250 rpm",
      transmission: "6-speed",
      weight: "222 kg",
      fuelCapacity: "20 litres",
      topSpeed: "200 km/h"
    },
    featured: true,
    stock: 6,
    colors: ["white", "green"]
  },
  {
    id: "triumph-rocket-3",
    name: "Triumph Rocket 3 R",
    slug: "triumph-rocket-3-r",
    price: 2199900,
    category: "cruiser",
    brand: "triumph",
    image: "/images/products/triumph-rocket-3.jpg",
    images: [
      "/images/products/triumph-rocket-3.jpg",
      "/images/products/triumph-rocket-3-2.jpg",
      "/images/products/triumph-rocket-3-3.jpg"
    ],
    description: "The Rocket 3 R features the world's largest production motorcycle engine with incredible torque and muscular styling.",
    specs: {
      engine: "2458cc, Liquid-cooled, 4-stroke Triple",
      power: "167 PS @ 6,000 rpm",
      torque: "221 Nm @ 4,000 rpm",
      transmission: "6-speed",
      weight: "291 kg",
      fuelCapacity: "18 litres",
      topSpeed: "220 km/h"
    },
    new: true,
    stock: 2,
    colors: ["black", "red"]
  },
  
  // Additional Products to reach more than 40 total

  // Royal Enfield
  {
    id: "royal-enfield-himalayan",
    name: "Royal Enfield Himalayan",
    slug: "royal-enfield-himalayan",
    price: 229900,
    category: "adventure",
    brand: "royal-enfield",
    image: "/images/products/royal-enfield-himalayan.jpg",
    images: [
      "/images/products/royal-enfield-himalayan.jpg",
      "/images/products/royal-enfield-himalayan-2.jpg",
      "/images/products/royal-enfield-himalayan-3.jpg"
    ],
    description: "The Himalayan is a purpose-built adventure motorcycle designed for exploring rough terrain.",
    specs: {
      engine: "411cc, Air-cooled, 4-stroke Single",
      power: "24.3 PS @ 6,500 rpm",
      torque: "32 Nm @ 4,500 rpm",
      transmission: "5-speed",
      weight: "199 kg",
      fuelCapacity: "15 litres",
      topSpeed: "130 km/h"
    },
    bestseller: true,
    stock: 20,
    colors: ["white", "black", "green"]
  },
  {
    id: "royal-enfield-classic-350",
    name: "Royal Enfield Classic 350",
    slug: "royal-enfield-classic-350",
    price: 199900,
    category: "cruiser",
    brand: "royal-enfield",
    image: "/images/products/royal-enfield-classic-350.jpg",
    images: [
      "/images/products/royal-enfield-classic-350.jpg",
      "/images/products/royal-enfield-classic-350-2.jpg",
      "/images/products/royal-enfield-classic-350-3.jpg"
    ],
    description: "The Classic 350 is a retro-styled motorcycle that blends vintage aesthetics with modern engineering.",
    specs: {
      engine: "349cc, Air-cooled, 4-stroke Single",
      power: "20.2 PS @ 6,100 rpm",
      torque: "27 Nm @ 4,000 rpm",
      transmission: "5-speed",
      weight: "195 kg",
      fuelCapacity: "13 litres",
      topSpeed: "120 km/h"
    },
    bestseller: true,
    stock: 25,
    colors: ["red", "blue", "green", "black"]
  },
  
  // Bajaj
  {
    id: "bajaj-pulsar-rs-400",
    name: "Bajaj Pulsar RS 400",
    slug: "bajaj-pulsar-rs-400",
    price: 299900,
    category: "sport",
    brand: "bajaj",
    image: "/images/products/bajaj-pulsar-rs-400.jpg",
    images: [
      "/images/products/bajaj-pulsar-rs-400.jpg",
      "/images/products/bajaj-pulsar-rs-400-2.jpg",
      "/images/products/bajaj-pulsar-rs-400-3.jpg"
    ],
    description: "The Pulsar RS 400 is a fully-faired sportbike designed for performance enthusiasts.",
    specs: {
      engine: "373cc, Liquid-cooled, 4-stroke Single",
      power: "40 PS @ 8,800 rpm",
      torque: "35 Nm @ 7,000 rpm",
      transmission: "6-speed",
      weight: "187 kg",
      fuelCapacity: "13 litres",
      topSpeed: "160 km/h"
    },
    new: true,
    stock: 18,
    colors: ["blue", "red", "black"]
  },
  {
    id: "bajaj-dominar-400",
    name: "Bajaj Dominar 400",
    slug: "bajaj-dominar-400",
    price: 229900,
    originalPrice: 245000,
    discount: 6.2,
    category: "naked",
    brand: "bajaj",
    image: "/images/products/bajaj-dominar-400.jpg",
    images: [
      "/images/products/bajaj-dominar-400.jpg",
      "/images/products/bajaj-dominar-400-2.jpg",
      "/images/products/bajaj-dominar-400-3.jpg"
    ],
    description: "The Dominar 400 is a sports tourer designed for long-distance riding with a powerful engine.",
    specs: {
      engine: "373cc, Liquid-cooled, 4-stroke Single",
      power: "40 PS @ 8,800 rpm",
      torque: "35 Nm @ 7,000 rpm",
      transmission: "6-speed",
      weight: "187 kg",
      fuelCapacity: "13 litres",
      topSpeed: "155 km/h"
    },
    bestseller: true,
    stock: 15,
    colors: ["green", "black", "blue"]
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};
