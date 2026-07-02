"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">
                Giải Pháp Sức Khỏe Toàn Diện
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                Nâng Tầm Lối Sống <br />
                <span className="text-primary">Khỏe Mạnh</span> & <span className="text-accent">Hiện Đại</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-[500px]"
            >
              Helicorp mang đến những sản phẩm chăm sóc sức khỏe cao cấp nhất, 
              được nghiên cứu bởi các chuyên gia hàng đầu, giúp bạn có một cơ thể khỏe mạnh và tinh thần minh mẫn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="h-12 px-8 text-base group">
                Khám Phá Ngay
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                Tìm Hiểu Thêm
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-6 pt-4 border-t border-border"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-orange-400">
                  {"★★★★★"}
                </div>
                <span className="font-medium">10,000+</span> khách hàng tin dùng
              </div>
            </motion.div>
          </div>

          {/* Image with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full"
          >
            <div className="absolute inset-0 rounded-2xl md:rounded-[40px] overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="Helicorp Premium Health Products"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-8 left-8 sm:-left-6 bg-background p-4 rounded-xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold">100% An Toàn</p>
                <p className="text-xs text-muted-foreground">Chứng nhận FDA</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-8 right-8 sm:-right-6 bg-background p-4 rounded-xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full text-secondary">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold">Tự Nhiên</p>
                <p className="text-xs text-muted-foreground">Thành phần hữu cơ</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
