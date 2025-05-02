
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Experience the <span className="text-bike-red">Ultimate</span> Ride
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Discover premium superbikes from the world's leading brands.
            Power, performance, and precision engineered for the road.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              asChild
              className="bg-bike-red hover:bg-bike-red/90 text-white"
            >
              <Link to="/products">Explore Collection</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="backdrop-blur-sm bg-white/10 border-white hover:bg-white/20"
            >
              <Link to="/categories">View Categories</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white opacity-80"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
