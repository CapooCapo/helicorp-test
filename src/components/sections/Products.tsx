"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { useCartStore } from "@/store/useCartStore";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { ProductModal } from "@/components/ecommerce/ProductModal";
import { cn } from "@/lib/utils";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Vita-Pure Multivitamin",
    description: "Cung cấp đầy đủ 24 vitamin và khoáng chất thiết yếu mỗi ngày.",
    price: 850000,
    image: "/images/product.png",
    rating: 4.8,
    reviews: 124,
    category: "Vitamin",
    isNew: true,
  },
  {
    id: "p2",
    name: "Omega-3 Icelandic",
    description: "Dầu cá tinh khiết từ vùng biển Iceland, hỗ trợ tim mạch và não bộ.",
    price: 1200000,
    image: "/images/product.png",
    rating: 4.9,
    reviews: 356,
    category: "Omega-3",
  },
  {
    id: "p3",
    name: "Balance Probiotic",
    description: "Men vi sinh 10 tỷ lợi khuẩn giúp cân bằng hệ tiêu hóa hiệu quả.",
    price: 950000,
    image: "/images/product.png",
    rating: 4.7,
    reviews: 89,
    category: "Probiotic",
    isFeatured: true,
  },
  {
    id: "p4",
    name: "Wellness Herbal Blend",
    description: "Trà thảo mộc thanh lọc cơ thể, giúp giảm căng thẳng mệt mỏi.",
    price: 550000,
    image: "/images/product.png",
    rating: 4.6,
    reviews: 210,
    category: "Herbal",
  },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const addItem = useCartStore((state) => state.addItem);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const favoriteItems = useFavoriteStore((state) => state.items);

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Sản Phẩm <span className="text-primary">Nổi Bật</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Khám phá các sản phẩm được yêu thích nhất của chúng tôi, 
              chìa khóa cho một cơ thể khỏe mạnh và tràn đầy năng lượng.
            </p>
          </div>
          <Button variant="outline" className="shrink-0">Xem Tất Cả Sản Phẩm</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {MOCK_PRODUCTS.map((product, index) => {
            const isFav = favoriteItems.some((item) => item.id === product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {product.isNew && <Badge>Mới</Badge>}
                  {product.isFeatured && <Badge variant="secondary">Bán Chạy</Badge>}
                </div>
                
                {/* Image */}
                <div className="relative aspect-square bg-muted/20 p-6 overflow-hidden flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Quick Actions Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="rounded-full hover:bg-primary hover:text-primary-foreground"
                      onClick={() => addItem(product)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="rounded-full hover:bg-primary hover:text-primary-foreground"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className={cn("rounded-full hover:bg-primary hover:text-primary-foreground", isFav && "text-red-500")}
                      onClick={() => toggleFavorite(product)}
                    >
                      <Heart className="h-4 w-4" fill={isFav ? "currentColor" : "none"} />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 text-orange-400" fill="currentColor" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">
                      {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price)}
                    </span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="rounded-full md:hidden"
                      onClick={() => addItem(product)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}
