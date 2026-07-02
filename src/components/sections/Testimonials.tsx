"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Marques Brownlee",
    role: "Tech Reviewer",
    content: "Aura Vision Pro đã thay đổi hoàn toàn cách tôi định nghĩa về thực tế tăng cường. Màn hình 4K sắc nét đến mức bạn quên mất mình đang đeo kính.",
    rating: 5,
  },
  {
    name: "Nguyễn Lê Vy",
    role: "UI/UX Designer",
    content: "Tôi có thể mở 3 màn hình ảo cùng lúc để làm việc mà không hề cảm thấy độ trễ. Thiết kế cực kỳ nhẹ và thoải mái cho cả ngày dài.",
    rating: 5,
  },
  {
    name: "Phạm Hoàng Vũ",
    role: "Game Developer",
    content: "Khả năng tracking mắt và cử chỉ tay chính xác đáng kinh ngạc. Đây chính là thiết bị mà giới lập trình viên chúng tôi luôn chờ đợi.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Khách Hàng Nói Gì Về <span className="text-primary">Aura Vision</span>?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-border bg-background relative overflow-hidden group hover:border-primary/50 transition-colors">
                <Quote className="absolute top-4 right-4 h-16 w-16 text-muted/50 -rotate-12 transition-transform group-hover:rotate-0 group-hover:text-primary/10" />
                <CardContent className="p-8 pt-10">
                  <div className="flex gap-1 text-orange-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4" 
                        fill={i < testimonial.rating ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>
                  <p className="text-foreground/90 italic mb-8 relative z-10 text-lg">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 bg-primary/10 rounded-full overflow-hidden border border-primary/20">
                      <Image 
                        src={`https://i.pravatar.cc/150?img=${index + 15}`} 
                        alt={testimonial.name} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
