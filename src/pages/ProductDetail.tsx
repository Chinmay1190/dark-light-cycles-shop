
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products, formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Heart,
  ArrowLeft,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    if (product) {
      window.scrollTo(0, 0);
    } else {
      navigate("/products", { replace: true });
    }
  }, [product, navigate]);

  if (!product) {
    return null; // Will redirect in useEffect
  }

  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Find related products (same category, exclude current)
  const relatedProducts = products
    .filter(
      (p) => p.category === product.category && p.id !== product.id
    )
    .slice(0, 4);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            to="/products"
            className="text-muted-foreground hover:text-foreground"
          >
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 overflow-auto pb-2">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                    currentImageIndex === idx
                      ? "border-bike-red"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {product.new && (
                <Badge className="bg-bike-blue text-white">New</Badge>
              )}
              {product.bestseller && (
                <Badge className="bg-bike-orange text-white">Best Seller</Badge>
              )}
              {product.featured && (
                <Badge className="bg-bike-red text-white">Featured</Badge>
              )}
              <Badge variant="outline">
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            <div className="mb-4">
              <p className="text-muted-foreground">
                Brand:{" "}
                <span className="text-foreground font-medium">
                  {product.brand.charAt(0).toUpperCase() +
                    product.brand.slice(1)}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-muted-foreground text-lg line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.discount && (
                <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            <div className="mb-6">
              <p className="text-muted-foreground mb-4">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                {product.specs.engine && (
                  <div>
                    <p className="font-medium">Engine</p>
                    <p className="text-muted-foreground">{product.specs.engine}</p>
                  </div>
                )}
                {product.specs.power && (
                  <div>
                    <p className="font-medium">Power</p>
                    <p className="text-muted-foreground">{product.specs.power}</p>
                  </div>
                )}
                {product.specs.torque && (
                  <div>
                    <p className="font-medium">Torque</p>
                    <p className="text-muted-foreground">{product.specs.torque}</p>
                  </div>
                )}
                {product.specs.topSpeed && (
                  <div>
                    <p className="font-medium">Top Speed</p>
                    <p className="text-muted-foreground">{product.specs.topSpeed}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Color Options */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <p className="font-medium mb-2">Color Options</p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className="w-8 h-8 rounded-full border overflow-hidden"
                      style={{ 
                        backgroundColor: 
                          color === "red" ? "#e63946" : 
                          color === "blue" ? "#2c7fb8" : 
                          color === "green" ? "#2a9d8f" : 
                          color === "orange" ? "#ff7b00" : 
                          color === "yellow" ? "#ffb703" : 
                          color === "black" ? "#212529" : 
                          color === "white" ? "#ffffff" : 
                          color === "gray" ? "#adb5bd" : 
                          color
                      }}
                      title={color.charAt(0).toUpperCase() + color.slice(1)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Stock Information */}
            <div className="mb-6">
              <p className="font-medium mb-1">Availability</p>
              <div className="flex items-center gap-2">
                {product.stock > 0 ? (
                  <>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span>
                      {product.stock > 10
                        ? "In Stock"
                        : `Only ${product.stock} left in stock`}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span>Out of Stock</span>
                  </>
                )}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-wrap gap-4 items-center mb-8">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                >
                  <Plus size={16} />
                </Button>
              </div>

              <div className="flex-1 flex gap-3">
                <Button
                  className={`flex-1 ${
                    isInCart ? "bg-green-600 hover:bg-green-700" : ""
                  }`}
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  {isInCart ? (
                    <>
                      <Check className="mr-2 h-5 w-5" /> Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                    </>
                  )}
                </Button>

                <Button variant="outline" className="flex-grow-0">
                  <Heart size={20} />
                </Button>
              </div>
            </div>

            {/* Back to Products */}
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/products">
                <ArrowLeft size={16} className="mr-2" />
                Back to Products
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Tabs defaultValue="specifications">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="pt-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Detailed Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="border-b pb-2">
                      <p className="font-medium capitalize">{key}</p>
                      <p className="text-muted-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="pt-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Premium quality construction with high-end components</li>
                  <li>Advanced safety features including ABS and traction control</li>
                  <li>Aerodynamic design for enhanced performance</li>
                  <li>LED lighting for improved visibility</li>
                  <li>Digital instrument cluster with smartphone connectivity</li>
                  <li>2-year manufacturer warranty</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="pt-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Shipping Information
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We offer nationwide shipping for all our motorcycles. Delivery
                    typically takes 7-14 business days depending on your location.
                  </p>
                  <p>
                    All bikes are professionally packed and transported to ensure
                    they arrive in perfect condition. Our delivery team will
                    contact you to schedule a convenient delivery time.
                  </p>
                  <p>
                    For metro cities, we offer expedited shipping options that can
                    reduce delivery time to 3-5 business days.
                  </p>
                  <p className="font-medium text-foreground">
                    Shipping cost is calculated at checkout based on your delivery
                    location.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
