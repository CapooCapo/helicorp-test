"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, FlaskConical, Clock, HeartPulse, Recycle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const FEATURES = [
  {
    title: "Chứng Nhận FDA",
    description: "Tất cả sản phẩm đều được kiểm định nghiêm ngặt và đạt chứng nhận an toàn từ FDA Hoa Kỳ.",
    icon: ShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "100% Hữu Cơ",
    description: "Thành phần tự nhiên, không chứa chất bảo quản hay phụ gia hóa học độc hại.",
    icon: Leaf,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Công Nghệ Nano",
    description: "Ứng dụng công nghệ Nano giúp cơ thể hấp thụ dưỡng chất nhanh gấp 10 lần.",
    icon: FlaskConical,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Tác Dụng Nhanh",
    description: "Cảm nhận sự thay đổi rõ rệt của cơ thể chỉ sau 7 ngày sử dụng liên tục.",
    icon: Clock,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Hỗ Trợ Tim Mạch",
    description: "Công thức đặc biệt giúp bảo vệ và tăng cường sức khỏe tim mạch toàn diện.",
    icon: HeartPulse,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    title: "Bao Bì Tái Chế",
    description: "Chúng tôi cam kết bảo vệ môi trường với 100% bao bì có thể tái chế sinh học.",
    icon: Recycle,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Tại Sao Chọn <span className="text-primary">Helicorp</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Chúng tôi không chỉ bán sản phẩm, chúng tôi mang đến một giải pháp chăm sóc sức khỏe toàn diện với những tiêu chuẩn khắt khe nhất.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border hover:border-primary/50 transition-colors duration-300 hover:shadow-md group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-7 w-7 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
