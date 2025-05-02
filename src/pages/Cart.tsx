
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate a checkout process with a delay (would be replaced with actual checkout)
    setTimeout(() => {
      navigate("/checkout/success");
      setIsCheckingOut(false);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (cart.length === 0) {
    return (
      <div className="container py-20 min-h-[60vh] flex flex-col items-center justify-center">
        <ShoppingBag size={80} className="text-muted-foreground mb-4" />
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Looks like you haven't added any products to your cart yet. 
          Explore our collection and find your perfect ride!
        </p>
        <Button size="lg" asChild>
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div 
          className="col-span-1 lg:col-span-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hidden md:grid md:grid-cols-12 text-sm font-medium text-muted-foreground mb-4 gap-4">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          {cart.map((item) => (
            <motion.div 
              key={item.id} 
              className="border-b pb-6 mb-6"
              variants={itemVariants}
            >
              <div className="grid grid-cols-2 md:grid-cols-12 gap-4 items-center">
                <div className="col-span-2 md:col-span-2">
                  <Link to={`/products/${item.slug}`}>
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                </div>

                <div className="col-span-2 md:col-span-4">
                  <Link to={`/products/${item.slug}`}>
                    <h3 className="font-medium hover:text-bike-red transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Brand: {item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center text-sm text-red-500 hover:text-red-700 mt-2 transition-colors"
                  >
                    <Trash2 size={14} className="mr-1" />
                    Remove
                  </button>
                </div>

                <div className="col-span-2 md:col-span-2 text-md md:text-center">
                  <span className="md:hidden">Price: </span>
                  {formatPrice(item.price)}
                </div>

                <div className="col-span-2 md:col-span-2 md:flex md:justify-center">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={14} />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={14} />
                    </Button>
                  </div>
                </div>

                <div className="col-span-2 md:col-span-2 font-medium text-right">
                  <span className="md:hidden">Total: </span>
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            </motion.div>
          ))}

          <div className="mt-8">
            <Button variant="outline" asChild className="flex items-center">
              <Link to="/products">
                <ArrowRight size={16} className="mr-2 rotate-180" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="col-span-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{subtotal > 0 ? formatPrice(500) : formatPrice(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (18% GST)</span>
                <span>{formatPrice(subtotal * 0.18)}</span>
              </div>
            </div>
            
            <div className="border-t my-4 pt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{formatPrice(subtotal + (subtotal > 0 ? 500 : 0) + subtotal * 0.18)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Including GST and shipping charges
              </p>
            </div>
            
            <Button 
              className="w-full mt-6" 
              size="lg"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
            </Button>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">We Accept</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted/50 px-3 py-1 rounded-md text-xs">
                  Credit Card
                </span>
                <span className="bg-muted/50 px-3 py-1 rounded-md text-xs">
                  Debit Card
                </span>
                <span className="bg-muted/50 px-3 py-1 rounded-md text-xs">
                  UPI
                </span>
                <span className="bg-muted/50 px-3 py-1 rounded-md text-xs">
                  Net Banking
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
