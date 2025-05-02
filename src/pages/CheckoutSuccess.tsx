
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  // Clear cart on successful checkout
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  // Generate a random order number
  const orderNumber = Math.floor(10000000 + Math.random() * 90000000);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-background p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md w-full bg-card rounded-lg shadow-lg p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        >
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
        </motion.div>

        <motion.h1
          className="text-2xl font-bold mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Payment Successful!
        </motion.h1>

        <motion.p
          className="text-muted-foreground mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Thank you for your purchase. Your order has been successfully processed.
        </motion.p>

        <motion.div
          className="bg-muted/50 rounded-lg p-4 mb-6 text-left"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm">
            <span className="font-medium">Order Number:</span>{" "}
            <span className="font-mono">{orderNumber}</span>
          </p>
          <p className="text-sm mt-1">
            <span className="font-medium">Date:</span>{" "}
            <span>{new Date().toLocaleDateString()}</span>
          </p>
          <p className="text-sm mt-1">
            <span className="font-medium">Payment Method:</span> Credit Card
          </p>
        </motion.div>

        <motion.p
          className="text-sm text-muted-foreground mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          A confirmation email has been sent to your registered email address with the order details.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CheckoutSuccess;
