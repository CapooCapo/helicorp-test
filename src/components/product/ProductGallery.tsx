"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [loaded, setLoaded] = React.useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Mobile: Carousel, Desktop: Main Image */}
      <div 
        className="relative flex overflow-x-auto snap-x snap-mandatory md:overflow-visible no-scrollbar pb-4 md:pb-0"
        aria-label="Hình ảnh sản phẩm"
      >
        {/* Desktop Main Image (Hidden on Mobile) */}
        <div className="hidden md:block w-full relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden border border-border">
          {!loaded[selectedImage] && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <Image
            src={images[selectedImage]}
            alt={`${productName} - Ảnh chính`}
            fill
            priority
            className={cn(
              "object-cover transition-opacity duration-500",
              !loaded[selectedImage] ? "opacity-0" : "opacity-100"
            )}
            onLoad={() => handleImageLoad(selectedImage)}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Mobile Carousel (Hidden on Desktop) */}
        {images.map((img, index) => (
          <div 
            key={index}
            className="md:hidden shrink-0 w-full snap-center snap-always relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden mr-4 last:mr-0"
          >
            {!loaded[index] && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            <Image
              src={img}
              alt={`${productName} - Ảnh ${index + 1}`}
              fill
              priority={index === 0}
              className={cn(
                "object-cover transition-opacity duration-500",
                !loaded[index] ? "opacity-0" : "opacity-100"
              )}
              onLoad={() => handleImageLoad(index)}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Mobile Pagination Dots */}
      <div className="flex md:hidden justify-center gap-2 mt-2" aria-hidden="true">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              selectedImage === index ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"
            )} 
          />
        ))}
      </div>

      {/* Desktop Thumbnails */}
      <div className="hidden md:grid grid-cols-4 gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            aria-label={`Xem ảnh ${index + 1}`}
            aria-current={selectedImage === index ? "true" : "false"}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 transition-all hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              selectedImage === index ? "border-primary" : "border-transparent"
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="20vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
