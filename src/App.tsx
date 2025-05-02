
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import NotFound from "./pages/NotFound";

// Create framer-motion
import { motion, AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:slug" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout/success" element={<CheckoutSuccess />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
