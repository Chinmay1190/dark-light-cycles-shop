
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  // Determine if this is a checkout page to hide the header/footer
  const isCheckoutPage = location.pathname.includes('/checkout/success') || 
                         location.pathname.includes('/checkout/canceled');

  return (
    <div className="flex flex-col min-h-screen">
      {!isCheckoutPage && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      <Toaster position="top-right" />
      {!isCheckoutPage && <Footer />}
    </div>
  );
}
