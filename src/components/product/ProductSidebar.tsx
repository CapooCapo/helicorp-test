"use client";

import * as React from "react";
import { Minus, Plus, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { trackEvent } from "@/lib/useAnalytics";

export function ProductSidebar() {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedColor, setSelectedColor] = React.useState("Đen Titan");

  const colors = [
    { name: "Đen Titan", class: "bg-slate-900" },
    { name: "Xám Bạc", class: "bg-slate-300" },
    { name: "Xanh Navy", class: "bg-blue-900" },
  ];

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  const handleIncrease = () => {
    setQuantity(q => q + 1);
  };

  const handleAddToCart = () => {
    trackEvent("add_to_cart", { product: "NovaBand X1", quantity, color: selectedColor });
    toast.success("Đã thêm vào giỏ hàng", {
      description: `${quantity}x NovaBand X1 (${selectedColor})`,
    });
  };

  const handleWishlist = () => {
    trackEvent("favorite_product", { product: "NovaBand X1", isFav: true });
    toast("Đã lưu vào danh sách yêu thích", { icon: "❤️" });
  };

  return (
    <div className="flex flex-col h-full space-y-8">
      {/* Product Info */}
      <div className="space-y-4">
        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
          MỚI RA MẮT
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          NovaBand X1
        </h1>
        <p className="text-lg text-muted-foreground">
          Vòng đeo sức khỏe thông minh
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-orange-400" aria-label="Đánh giá 4.8 trên 5 sao">
            {"★★★★★"}
          </div>
          <span className="font-semibold">4.8</span>
          <span className="text-muted-foreground text-sm">(2,341 đánh giá)</span>
        </div>

        {/* Pricing */}
        <div className="flex items-end gap-4 pt-4 border-t border-border">
          <div className="text-3xl font-bold text-primary">1.290.000đ</div>
          <div className="text-lg text-muted-foreground line-through mb-1">1.990.000đ</div>
          <Badge variant="destructive" className="mb-2">-35%</Badge>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2 text-foreground/80">
        <p className="font-medium">Theo dõi sức khỏe toàn diện:</p>
        <ul className="list-disc list-inside space-y-1 ml-1 text-muted-foreground">
          <li>Cảm biến nhịp tim quang học (Heart Rate)</li>
          <li>Đo nồng độ oxy trong máu (SpO2)</li>
          <li>Phân tích chất lượng giấc ngủ (Sleep)</li>
          <li>Kháng nước tiêu chuẩn 5ATM</li>
        </ul>
      </div>

      {/* Variants */}
      <div className="space-y-4 pt-4 border-t border-border">
        <div className="flex justify-between items-center">
          <span className="font-medium">Màu sắc</span>
          <span className="text-sm text-muted-foreground">{selectedColor}</span>
        </div>
        <div className="flex gap-4">
          {colors.map((color) => (
            <button
              key={color.name}
              aria-label={`Chọn màu ${color.name}`}
              aria-pressed={selectedColor === color.name}
              onClick={() => setSelectedColor(color.name)}
              className={cn(
                "w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                color.class,
                selectedColor === color.name 
                  ? "ring-2 ring-primary ring-offset-2 scale-110" 
                  : "border border-border"
              )}
            />
          ))}
        </div>
      </div>

      {/* Actions (Desktop) */}
      <div className="hidden md:flex flex-col gap-4 pt-6">
        <div className="flex gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center border border-border rounded-xl bg-background overflow-hidden h-12">
            <button 
              onClick={handleDecrease}
              disabled={quantity <= 1}
              aria-label="Giảm số lượng"
              className="w-12 h-full flex items-center justify-center hover:bg-muted disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:bg-muted"
            >
              <Minus className="h-4 w-4" />
            </button>
            <div className="w-12 text-center font-medium" aria-live="polite">
              {quantity}
            </div>
            <button 
              onClick={handleIncrease}
              aria-label="Tăng số lượng"
              className="w-12 h-full flex items-center justify-center hover:bg-muted transition-colors focus-visible:outline-none focus-visible:bg-muted"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="flex-1 h-12 rounded-xl text-base gap-2"
          >
            <ShoppingBag className="h-5 w-5" />
            Thêm Vào Giỏ
          </Button>
        </div>
        <Button 
          variant="outline" 
          onClick={handleWishlist}
          className="w-full h-12 rounded-xl gap-2"
        >
          <Heart className="h-5 w-5" />
          Yêu Thích
        </Button>
      </div>

      {/* Sticky Bottom Bar (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-lg border-t border-border shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 safe-area-bottom">
        <div className="flex gap-3 max-w-md mx-auto">
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleWishlist}
            className="h-12 w-12 shrink-0 rounded-xl bg-background"
            aria-label="Thêm vào yêu thích"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button 
            onClick={handleAddToCart}
            className="flex-1 h-12 rounded-xl text-base gap-2"
          >
            <ShoppingBag className="h-5 w-5" />
            Thêm Vào Giỏ ({quantity})
          </Button>
        </div>
      </div>
      
      {/* Mobile spacing adjustment for sticky bar */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </div>
  );
}
