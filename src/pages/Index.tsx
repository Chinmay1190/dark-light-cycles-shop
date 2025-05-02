
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { categories, products } from "@/data/products";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get featured and bestseller products
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);
  
  const bestsellerProducts = products
    .filter((product) => product.bestseller)
    .slice(0, 4);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pb-16">
      <HeroSection />
      
      {/* Featured Products */}
      <motion.section 
        className="py-16 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured <span className="text-bike-red">Bikes</span></h2>
            <Button variant="outline" asChild>
              <Link to="/products?filter=featured">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Categories Section */}
      <motion.section 
        className="py-16 bg-muted/50 dark:bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Explore <span className="text-bike-red">Categories</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Link to={`/categories/${category.slug}`}>
                  <div className="relative h-64 rounded-lg overflow-hidden group">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-white text-xl font-semibold mb-1">{category.name}</h3>
                        <p className="text-white/80 text-sm line-clamp-2">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link to="/categories">View All Categories</Link>
            </Button>
          </div>
        </div>
      </motion.section>
      
      {/* Bestsellers Section */}
      <motion.section 
        className="py-16 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Best <span className="text-bike-red">Sellers</span></h2>
            <Button variant="outline" asChild>
              <Link to="/products?filter=bestseller">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellerProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Call to Action */}
      <motion.section 
        className="py-20 bg-bike-red text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Ride of Your Life?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Browse our premium collection of world-class motorcycles and find your perfect match.
          </p>
          <Button 
            size="lg" 
            asChild
            className="bg-white text-bike-red hover:bg-white/90"
          >
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
