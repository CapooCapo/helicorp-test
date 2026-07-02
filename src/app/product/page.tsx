import { Metadata } from "next";
import { Breadcrumb } from "@/components/product/Breadcrumb";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductSidebar } from "@/components/product/ProductSidebar";
import { Highlights } from "@/components/product/Highlights";
import { SpecificationTable } from "@/components/product/SpecificationTable";

export const metadata: Metadata = {
  title: "NovaBand X1 | Vòng đeo sức khỏe thông minh",
  description: "NovaBand X1 với màn hình AMOLED 1.4 inch, theo dõi nhịp tim, SpO2, giấc ngủ và chống nước 5ATM.",
};

export default function ProductPage() {
  // Placeholder images for NovaBand X1
  const images = [
    "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800&h=800",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800&h=800",
    "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&q=80&w=800&h=800",
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800&h=800",
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <main className="container mx-auto px-4 md:px-6 max-w-7xl">
        <Breadcrumb />
        
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column - Gallery (45% -> roughly 5/12) */}
          <div className="lg:col-span-5">
            <ProductGallery images={images} productName="NovaBand X1" />
          </div>

          {/* Right Column - Product Info & Actions (55% -> roughly 7/12) */}
          <div className="lg:col-span-7">
            <ProductSidebar />
          </div>
        </div>

        {/* Highlights Section */}
        <Highlights />

        {/* Specifications Section */}
        <SpecificationTable />
      </main>
    </div>
  );
}
