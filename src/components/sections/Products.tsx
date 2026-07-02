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
import { useRecentlyViewedStore } from "@/store/useRecentlyViewedStore";
import { ProductModal } from "@/components/ecommerce/ProductModal";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/useAnalytics";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Aura Vision Pro",
    description: "Phiên bản cao cấp với màn hình 4K Micro-OLED và chip Neural Processing mạnh nhất.",
    price: 34990000,
    image: "/images/auravisonpro.png",
    rating: 4.9,
    reviews: 1240,
    category: "Kính AR",
    isNew: true,
  },
  {
    id: "p2",
    name: "Aura Vision Air",
    description: "Trải nghiệm AR mượt mà trong một thiết kế siêu nhẹ chỉ 130g, lý tưởng cho giải trí.",
    price: 21990000,
    image: "/images/auravisonair.jpg",
    rating: 4.8,
    reviews: 856,
    category: "Kính AR",
  },
  {
    id: "p3",
    name: "NexGen Smart Controller",
    description: "Bộ điều khiển xúc giác haptic không dây, tương thích hoàn hảo với dòng Aura Vision.",
    price: 3500000,
    image: "/images/smart_controller.png",
    rating: 4.7,
    reviews: 420,
    category: "Phụ kiện",
    isFeatured: true,
  },
  {
    id: "p4",
    name: "Aura Prescription",
    description: "Tròng kính cận viễn tùy chỉnh chính hãng, tích hợp nam châm tháo lắp từ tính siêu nhanh.",
    price: 2500000,
    image: "/images/auraPrescription.png",
    rating: 4.9,
    reviews: 210,
    category: "Phụ kiện",
  },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [loadedImages, setLoadedImages] = React.useState<Record<string, boolean>>({});

  const addItem = useCartStore((state) => state.addItem);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const favoriteItems = useFavoriteStore((state) => state.items);
  const recentlyViewedItems = useRecentlyViewedStore((state) => state.items);
  const addViewedItem = useRecentlyViewedStore((state) => state.addViewedItem);

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Hệ Sinh Thái <span className="text-primary">NexGen</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Khám phá các phiên bản Aura Vision và phụ kiện tương thích,
              đưa trải nghiệm thực tế tăng cường của bạn lên một tầm cao mới.
            </p>
          </div>
          <Button variant="outline" className="shrink-0">Xem Tất Cả Sản Phẩm</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {MOCK_PRODUCTS.map((product, index) => {
            const isFav = favoriteItems.some((item) => item.id === product.id);
            const isImageLoaded = !!loadedImages[product.id];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Product",
                      name: product.name,
                      image: product.image,
                      description: product.description,
                      offers: {
                        "@type": "Offer",
                        price: product.price,
                        priceCurrency: "VND",
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: product.rating,
                        reviewCount: product.reviews,
                      }
                    }),
                  }}
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {product.isNew && <Badge>Mới</Badge>}
                  {product.isFeatured && <Badge variant="secondary">Bán Chạy</Badge>}
                </div>

                {/* Image */}
                <div className="relative aspect-square bg-muted/20 p-6 overflow-hidden flex items-center justify-center">
                  {/* Skeleton */}
                  {!isImageLoaded && (
                    <div className="absolute inset-0 bg-muted animate-pulse" />
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={cn("object-contain group-hover:scale-105 transition-transform duration-500", !isImageLoaded && "opacity-0")}
                    onLoad={() => setLoadedImages(prev => ({ ...prev, [product.id]: true }))}
                  />

                  {/* Quick Actions Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full hover:bg-primary hover:text-primary-foreground"
                      onClick={() => {
                        addItem(product);
                        trackEvent("add_to_cart", { productId: product.id, name: product.name });
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full hover:bg-primary hover:text-primary-foreground"
                      onClick={() => {
                        setSelectedProduct(product);
                        addViewedItem(product);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className={cn("rounded-full hover:bg-primary hover:text-primary-foreground", isFav && "text-red-500")}
                      onClick={() => {
                        toggleFavorite(product);
                        trackEvent("favorite_product", { productId: product.id, name: product.name, isFav: !isFav });
                      }}
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

      {/* Recently Viewed */}
      {recentlyViewedItems.length > 0 && (
        <div className="container mx-auto px-4 md:px-6 mt-20 pt-10 border-t border-border">
          <h3 className="text-2xl font-bold mb-6">Sản Phẩm Vừa Xem</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {recentlyViewedItems.map((item) => (
              <div
                key={`recent-${item.id}`}
                className="shrink-0 w-[180px] sm:w-[220px] bg-background border border-border rounded-xl p-4 cursor-pointer snap-start hover:border-primary/50 transition-colors"
                onClick={() => {
                  setSelectedProduct(item);
                  addViewedItem(item);
                }}
              >
                <div className="relative aspect-square mb-3 bg-muted/20 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image src={item.image} alt={item.name} width={120} height={120} className="object-contain" />
                </div>
                <h4 className="font-semibold text-sm line-clamp-1">{item.name}</h4>
                <div className="text-primary font-bold text-sm mt-1">
                  {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(item.price)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
