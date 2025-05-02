
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { Product } from "@/types/product"; 
import { formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { cart, addToCart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/products/${product.slug}`}>
      <Card className="product-card overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.new && <Badge className="bg-bike-blue text-white">New</Badge>}
            {product.bestseller && <Badge className="bg-bike-orange text-white">Best Seller</Badge>}
            {product.featured && <Badge className="bg-bike-red text-white">Featured</Badge>}
            {product.discount && (
              <Badge className="bg-green-600 text-white">
                {product.discount}% OFF
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="flex-grow pt-4">
          <div className="mb-2">
            <p className="text-muted-foreground text-sm">{product.brand.toUpperCase()}</p>
            <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-muted-foreground text-sm line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <Button
            onClick={handleAddToCart}
            className={cn(
              "w-full transition-colors", 
              isInCart ? "bg-green-600 hover:bg-green-700" : ""
            )}
          >
            {isInCart ? (
              <>
                <Check className="mr-2 h-4 w-4" /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
