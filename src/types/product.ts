
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  brand: string;
  image: string;
  images: string[];
  description: string;
  specs: {
    engine?: string;
    power?: string;
    torque?: string;
    transmission?: string;
    weight?: string;
    fuelCapacity?: string;
    topSpeed?: string;
  };
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
  stock: number;
  colors?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
}
