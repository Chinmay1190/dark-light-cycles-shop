
export const SITE_NAME = "SpeedCycles";
export const SITE_DESCRIPTION = "Premier Superbike Store";

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Categories", path: "/categories" },
  { name: "Brands", path: "/brands" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

export const FOOTER_LINKS = [
  {
    title: "Shop",
    links: [
      { name: "All Products", href: "/products" },
      { name: "Categories", href: "/categories" },
      { name: "Brands", href: "/brands" },
      { name: "New Arrivals", href: "/products?filter=new" },
      { name: "Best Sellers", href: "/products?filter=bestseller" },
      { name: "Featured", href: "/products?filter=featured" }
    ]
  },
  {
    title: "Customer Service",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Shipping & Delivery", href: "/shipping" },
      { name: "Returns & Refunds", href: "/returns" },
      { name: "FAQs", href: "/faqs" },
      { name: "Track Order", href: "/track-order" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" }
    ]
  }
];

export const PAYMENT_METHODS = [
  "Credit Card",
  "Debit Card",
  "Net Banking",
  "UPI",
  "EMI"
];

export const socialLinks = [
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "YouTube", url: "https://youtube.com" }
];
