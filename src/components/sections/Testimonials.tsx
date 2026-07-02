"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Trần Anh Tuấn",
    role: "Doanh Nhân",
    content: "Từ khi sử dụng bộ sản phẩm Vita-Pure, sức khỏe của tôi cải thiện rõ rệt. Không còn cảm giác mệt mỏi vào cuối ngày dù công việc áp lực cao.",
    rating: 5,
  },
  {
    name: "Nguyễn Lê Vy",
    role: "Giáo Viên",
    content: "Tôi rất thích thành phần 100% hữu cơ của Helicorp. Omega-3 của hãng giúp mắt tôi sáng hơn và giảm hẳn tình trạng khô mắt do nhìn màn hình nhiều.",
    rating: 5,
  },
  {
    name: "Phạm Hoàng Vũ",
    role: "Kỹ Sư Phần Mềm",
    content: "Sản phẩm tốt, giao hàng nhanh. Trà thảo mộc Wellness giúp tôi ngủ ngon và sâu giấc hơn. Chắc chắn sẽ ủng hộ lâu dài.",
    rating: 4,
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
            Khách Hàng Nói Gì Về <span className="text-primary">Helicorp</span>?
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
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full overflow-hidden border border-primary/20">
                      <img 
                        src={`https://i.pravatar.cc/150?img=${index + 15}`} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
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
