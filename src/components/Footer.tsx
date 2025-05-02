
import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS, PAYMENT_METHODS, socialLinks } from "@/utils/constants";
import { Package, IndianRupee } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-gray-900 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Package size={30} className="text-bike-red" />
              <span className="text-xl font-bold">SpeedCycles</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              India's premier destination for high-performance motorcycles. 
              Discover the finest selection of superbikes from top global brands.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-8 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <IndianRupee size={16} />
                Payment Methods
              </h4>
              <div className="flex flex-wrap gap-2">
                {PAYMENT_METHODS.map((method) => (
                  <span
                    key={method}
                    className="bg-background dark:bg-gray-800 text-xs py-1 px-3 rounded-full"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {currentYear} SpeedCycles. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
