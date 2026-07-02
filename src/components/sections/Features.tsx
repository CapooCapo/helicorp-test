"use client";

import * as React from "react";
import { m } from "framer-motion";
import Image from "next/image";
import { MonitorPlay, Cpu, Battery, Wifi, Eye, Glasses } from "lucide-react";

const FEATURES = [
  {
    title: "Màn Hình Micro-OLED 4K",
    description: "Độ phân giải siêu nét với mật độ điểm ảnh 4000 ppi, mang lại trải nghiệm thị giác chưa từng có.",
    icon: MonitorPlay,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Chip AI Neural Processing",
    description: "Xử lý hình ảnh không gian thời gian thực với độ trễ dưới 12ms, chống chóng mặt tuyệt đối.",
    icon: Cpu,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Theo Dõi Ánh Mắt (Eye Tracking)",
    description: "Điều khiển giao diện hoàn toàn bằng ánh mắt với độ chính xác tuyệt đối nhờ cụm 4 camera hồng ngoại.",
    icon: Eye,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Thời Lượng Pin 12 Giờ",
    description: "Thiết kế pin tản nhiệt thế hệ mới, cho phép bạn làm việc và giải trí suốt cả ngày dài.",
    icon: Battery,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Kết Nối Wi-Fi 7 Tốc Độ Cao",
    description: "Trải nghiệm stream nội dung 8K không độ trễ với chuẩn kết nối không dây tiên tiến nhất.",
    icon: Wifi,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
  },
  {
    title: "Thiết Kế Siêu Nhẹ (Thấu Kính AR)",
    description: "Khung hợp kim Titanium hàng không vũ trụ, trọng lượng chỉ 150g cho cảm giác đeo như không đeo.",
    icon: Glasses,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto py-24 mb-16">
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Đột Phá Công Nghệ <span className="text-primary">Aura Vision</span>
          </m.h2>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Sự kết hợp hoàn hảo giữa thiết kế thời trang đỉnh cao và phần cứng mạnh mẽ nhất từng được tạo ra trên một thiết bị đeo thông minh.
          </m.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start relative pb-32">
          {/* Sticky Image Side */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 h-[50vh] lg:h-[70vh] w-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl relative mb-12 lg:mb-0 z-10">
            <Image 
              src="/images/images.jpg" 
              alt="Aura Vision Features" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>

          {/* Scrollable Features Content */}
          <div className="lg:w-1/2 space-y-24 lg:space-y-48 lg:pt-32">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <m.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-20% 0px -20% 0px", once: false }}
                  transition={{ duration: 0.6 }}
                  className="min-h-[30vh] flex flex-col justify-center"
                >
                  <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
