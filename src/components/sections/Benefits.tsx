"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BENEFITS = [
  "Cải thiện chất lượng giấc ngủ và giảm căng thẳng.",
  "Tăng cường hệ miễn dịch tự nhiên của cơ thể.",
  "Bảo vệ và duy trì sức khỏe tim mạch.",
  "Làm chậm quá trình lão hóa cấp tế bào.",
  "Tăng cường năng lượng và khả năng tập trung.",
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] border border-border">
              <Image
                src="/images/hero.png" // Reusing hero image or another placeholder
                alt="Health Benefits"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-8 -right-4 sm:-right-8 bg-background p-6 rounded-2xl shadow-xl border border-border"
            >
              <div className="text-4xl font-bold text-primary mb-1">98%</div>
              <p className="text-sm text-muted-foreground font-medium">Khách hàng cảm thấy<br/>khỏe hơn sau 1 tháng</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Đầu Tư Cho <span className="text-primary">Sức Khỏe</span>,<br /> Đầu Tư Cho Tương Lai
              </h2>
              <p className="text-lg text-muted-foreground">
                Chúng tôi tin rằng sức khỏe là tài sản quý giá nhất. Các sản phẩm của Helicorp 
                được thiết kế để mang lại những lợi ích thiết thực và lâu dài cho cơ thể bạn.
              </p>
            </div>

            <ul className="space-y-4">
              {BENEFITS.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium text-lg">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button size="lg" className="mt-8">
              Bắt Đầu Hành Trình Khỏe Mạnh
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
