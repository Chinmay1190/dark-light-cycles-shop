
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products, categories, brands } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Filter, 
  Search, 
  SlidersHorizontal, 
  X,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  // Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(queryParams.get("category") || "");
  const [selectedBrand, setSelectedBrand] = useState<string>(queryParams.get("brand") || "");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 4000000]);
  const [sortBy, setSortBy] = useState<string>(queryParams.get("sort") || "featured");
  const [filterOptions, setFilterOptions] = useState<string[]>([]);
  
  // UI state
  const [showFilters, setShowFilters] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    price: true,
    features: true,
  });
  
  // Initialize filters from URL params
  useEffect(() => {
    const filter = queryParams.get("filter");
    if (filter) {
      setFilterOptions(filter.split(","));
    }
    
    const category = queryParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
    
    const brand = queryParams.get("brand");
    if (brand) {
      setSelectedBrand(brand);
    }
    
    const sort = queryParams.get("sort");
    if (sort) {
      setSortBy(sort);
    }
    
    const minPrice = queryParams.get("minPrice");
    const maxPrice = queryParams.get("maxPrice");
    if (minPrice && maxPrice) {
      setPriceRange([parseInt(minPrice), parseInt(maxPrice)]);
    }
    
    window.scrollTo(0, 0);
  }, [location.search]);
  
  // Toggle section expansion
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  
  // Filter products
  const filteredProducts = products.filter((product) => {
    // Search term
    if (
      searchTerm &&
      !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !product.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    
    // Category
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    
    // Brand
    if (selectedBrand && product.brand !== selectedBrand) {
      return false;
    }
    
    // Price range
    if (
      product.price < priceRange[0] ||
      product.price > priceRange[1]
    ) {
      return false;
    }
    
    // Filter options
    if (
      filterOptions.length > 0 &&
      !filterOptions.some((option) => product[option as keyof Product])
    ) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "newest":
        return a.new ? -1 : b.new ? 1 : 0;
      case "featured":
        return a.featured ? -1 : b.featured ? 1 : 0;
      default:
        return 0;
    }
  });
  
  // Handle filter changes
  const handleFilterChange = (filter: string) => {
    const newFilters = filterOptions.includes(filter)
      ? filterOptions.filter((f) => f !== filter)
      : [...filterOptions, filter];
    setFilterOptions(newFilters);
    
    const params = new URLSearchParams(location.search);
    if (newFilters.length > 0) {
      params.set("filter", newFilters.join(","));
    } else {
      params.delete("filter");
    }
    navigate(`${location.pathname}?${params.toString()}`);
  };
  
  // Handle price range change
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };
  
  // Apply filters
  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (selectedCategory) {
      params.set("category", selectedCategory);
    }
    
    if (selectedBrand) {
      params.set("brand", selectedBrand);
    }
    
    if (sortBy) {
      params.set("sort", sortBy);
    }
    
    if (filterOptions.length > 0) {
      params.set("filter", filterOptions.join(","));
    }
    
    if (priceRange[0] > 0 || priceRange[1] < 4000000) {
      params.set("minPrice", priceRange[0].toString());
      params.set("maxPrice", priceRange[1].toString());
    }
    
    navigate(`${location.pathname}?${params.toString()}`);
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedBrand("");
    setPriceRange([0, 4000000]);
    setSortBy("featured");
    setFilterOptions([]);
    navigate("/products");
  };
  
  return (
    <div className="pt-20 pb-16">
      <div className="container">
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-3">All Motorcycles</h1>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <p className="text-muted-foreground">
                Showing {sortedProducts.length} of {products.length} products
              </p>
              {(selectedCategory || selectedBrand || filterOptions.length > 0 || 
                priceRange[0] > 0 || priceRange[1] < 4000000) && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X size={14} className="mr-1" /> Clear filters
                </Button>
              )}
            </div>
            <div className="flex gap-4">
              <div className="relative max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                className="lg:hidden flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={16} />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block space-y-6">
            <div className="space-y-6">
              {/* Categories */}
              <div className="border rounded-lg p-4">
                <button
                  className="flex items-center justify-between w-full font-medium text-lg mb-2"
                  onClick={() => toggleSection("categories")}
                >
                  Categories
                  {expandedSections.categories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedSections.categories && (
                  <div className="space-y-2 mt-2">
                    <div
                      className={`flex items-center px-2 py-1 rounded-md cursor-pointer ${
                        !selectedCategory ? "bg-secondary" : "hover:bg-secondary/50"
                      }`}
                      onClick={() => {
                        setSelectedCategory("");
                        applyFilters();
                      }}
                    >
                      <span>All Categories</span>
                    </div>
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className={`flex items-center px-2 py-1 rounded-md cursor-pointer ${
                          selectedCategory === category.id ? "bg-secondary" : "hover:bg-secondary/50"
                        }`}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          applyFilters();
                        }}
                      >
                        <span>{category.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Brands */}
              <div className="border rounded-lg p-4">
                <button
                  className="flex items-center justify-between w-full font-medium text-lg mb-2"
                  onClick={() => toggleSection("brands")}
                >
                  Brands
                  {expandedSections.brands ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedSections.brands && (
                  <div className="space-y-2 mt-2">
                    <div
                      className={`flex items-center px-2 py-1 rounded-md cursor-pointer ${
                        !selectedBrand ? "bg-secondary" : "hover:bg-secondary/50"
                      }`}
                      onClick={() => {
                        setSelectedBrand("");
                        applyFilters();
                      }}
                    >
                      <span>All Brands</span>
                    </div>
                    {brands.map((brand) => (
                      <div
                        key={brand.id}
                        className={`flex items-center px-2 py-1 rounded-md cursor-pointer ${
                          selectedBrand === brand.id ? "bg-secondary" : "hover:bg-secondary/50"
                        }`}
                        onClick={() => {
                          setSelectedBrand(brand.id);
                          applyFilters();
                        }}
                      >
                        <span>{brand.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Price Range */}
              <div className="border rounded-lg p-4">
                <button
                  className="flex items-center justify-between w-full font-medium text-lg mb-4"
                  onClick={() => toggleSection("price")}
                >
                  Price Range
                  {expandedSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedSections.price && (
                  <>
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={4000000}
                      step={100000}
                      value={priceRange}
                      onValueChange={handlePriceChange}
                      className="py-4"
                    />
                    <div className="flex justify-between mt-2">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>to</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                    <Button
                      className="w-full mt-4"
                      size="sm"
                      onClick={applyFilters}
                    >
                      Apply Price Filter
                    </Button>
                  </>
                )}
              </div>
              
              {/* Features */}
              <div className="border rounded-lg p-4">
                <button
                  className="flex items-center justify-between w-full font-medium text-lg mb-2"
                  onClick={() => toggleSection("features")}
                >
                  Features
                  {expandedSections.features ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedSections.features && (
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="featured"
                        checked={filterOptions.includes("featured")}
                        onCheckedChange={() => handleFilterChange("featured")}
                      />
                      <label
                        htmlFor="featured"
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        Featured
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="bestseller"
                        checked={filterOptions.includes("bestseller")}
                        onCheckedChange={() => handleFilterChange("bestseller")}
                      />
                      <label
                        htmlFor="bestseller"
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        Best Seller
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="new"
                        checked={filterOptions.includes("new")}
                        onCheckedChange={() => handleFilterChange("new")}
                      />
                      <label
                        htmlFor="new"
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        New Arrival
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="discount"
                        checked={filterOptions.includes("discount")}
                        onCheckedChange={() => handleFilterChange("discount")}
                      />
                      <label
                        htmlFor="discount"
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        On Sale
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Mobile Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                className="lg:hidden col-span-1 space-y-6 bg-background p-4 rounded-lg shadow-md border"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold flex items-center gap-2">
                    <SlidersHorizontal size={18} /> Filters
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                  >
                    <X size={18} />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {/* Categories */}
                  <div>
                    <h4 className="font-medium mb-2">Categories</h4>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Brands */}
                  <div>
                    <h4 className="font-medium mb-2">Brands</h4>
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Brands" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Brands</SelectItem>
                        {brands.map((brand) => (
                          <SelectItem key={brand.id} value={brand.id}>
                            {brand.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={4000000}
                      step={100000}
                      value={priceRange}
                      onValueChange={handlePriceChange}
                      className="py-4"
                    />
                    <div className="flex justify-between mt-2">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>to</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="font-medium mb-2">Features</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="featured-mobile"
                          checked={filterOptions.includes("featured")}
                          onCheckedChange={() => handleFilterChange("featured")}
                        />
                        <label
                          htmlFor="featured-mobile"
                          className="text-sm font-medium leading-none cursor-pointer"
                        >
                          Featured
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="bestseller-mobile"
                          checked={filterOptions.includes("bestseller")}
                          onCheckedChange={() => handleFilterChange("bestseller")}
                        />
                        <label
                          htmlFor="bestseller-mobile"
                          className="text-sm font-medium leading-none cursor-pointer"
                        >
                          Best Seller
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="new-mobile"
                          checked={filterOptions.includes("new")}
                          onCheckedChange={() => handleFilterChange("new")}
                        />
                        <label
                          htmlFor="new-mobile"
                          className="text-sm font-medium leading-none cursor-pointer"
                        >
                          New Arrival
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="discount-mobile"
                          checked={filterOptions.includes("discount")}
                          onCheckedChange={() => handleFilterChange("discount")}
                        />
                        <label
                          htmlFor="discount-mobile"
                          className="text-sm font-medium leading-none cursor-pointer"
                        >
                          On Sale
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button onClick={applyFilters} className="flex-1">Apply Filters</Button>
                    <Button variant="outline" onClick={clearFilters}>Clear All</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Product Grid */}
          <div className="lg:col-span-3">
            {sortedProducts.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {sortedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <Search size={64} className="text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">No products found</h2>
                <p className="text-muted-foreground text-center mb-8">
                  Try adjusting your filters or search term to find what you're looking for.
                </p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
