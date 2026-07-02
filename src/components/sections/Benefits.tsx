"use client";

import * as React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BENEFITS = [
  "Không gian làm việc vô hạn với đa màn hình ảo.",
  "Trải nghiệm xem phim rạp IMAX ngay tại nhà.",
  "Tích hợp trợ lý AI thông minh xử lý mọi tác vụ.",
  "Thiết kế công thái học thoải mái khi đeo lâu.",
  "Bảo mật quyền riêng tư với công nghệ quét mống mắt.",
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-3xl -z-10"></div>

            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] border border-border">
              <Image
                src="/images/images.jpg"
                alt="Aura Vision AR"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stat */}
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-8 -right-4 sm:-right-8 bg-background p-6 rounded-2xl shadow-xl border border-border"
            >
              <div className="text-4xl font-bold text-primary mb-1">99%</div>
              <p className="text-sm text-muted-foreground font-medium">Người dùng hài lòng<br />với trải nghiệm AR</p>
            </m.div>
          </m.div>

          {/* Content Side */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Khai Phóng <span className="text-primary">Sức Mạnh</span>,<br /> Nâng Tầm Trải Nghiệm
              </h2>
              <p className="text-lg text-muted-foreground">
                Aura Vision không chỉ là một thiết bị, nó là cánh cửa mở ra thế giới thực tế tăng cường
                nơi năng suất làm việc và giải trí không còn giới hạn.
              </p>
            </div>

            <ul className="space-y-4">
              {BENEFITS.map((benefit, index) => (
                <m.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium text-lg">{benefit}</span>
                </m.li>
              ))}
            </ul>

            <Button size="lg" className="mt-8">
              Khám Phá Kỷ Nguyên Mới
            </Button>
          </m.div>

        </div>
      </div>
    </section>
  );
}
