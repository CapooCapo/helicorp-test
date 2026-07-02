"use client";

import * as React from "react";
import Image from "next/image";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { useCartStore } from "@/store/useCartStore";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { cn } from "@/lib/utils";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const addItem = useCartStore((state) => state.addItem);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const isFavorite = useFavoriteStore((state) => state.isFavorite(product?.id || ""));

  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-4xl p-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 md:h-full bg-muted/30">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8"
          />
        </div>
        <div className="p-8 space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                <h3 className="text-2xl font-bold">{product.name}</h3>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn("rounded-full", isFavorite && "text-red-500")}
                onClick={() => toggleFavorite(product)}
              >
                <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
              </Button>
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews} đánh giá)</span>
            </div>
          </div>

          <p className="text-muted-foreground">{product.description}</p>
          
          <div className="text-3xl font-bold text-primary">
            {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price)}
          </div>

          <div className="flex gap-4 pt-4 border-t border-border">
            <Button className="flex-1" onClick={() => {
              addItem(product);
              onClose();
            }}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Thêm Vào Giỏ Hàng
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
