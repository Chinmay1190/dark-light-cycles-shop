
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "@/utils/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Menu, X, Package } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Package size={30} className="text-bike-red" />
          <span className="text-xl font-bold">SpeedCycles</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === link.path
                  ? "text-bike-red dark:text-bike-red"
                  : "text-foreground/80 hover:text-foreground dark:text-foreground/80 dark:hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-bike-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-2 pb-4 px-4 bg-background border-t dark:border-gray-800 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors p-2 rounded-md",
                  location.pathname === link.path
                    ? "bg-secondary text-bike-red dark:bg-gray-800"
                    : "hover:bg-secondary dark:hover:bg-gray-800"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
