"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Activity, Shield, Box, Zap, Heart, Star } from "lucide-react";

const LOGOS = [
  { name: "MediCare", icon: Activity },
  { name: "HealthGuard", icon: Shield },
  { name: "NutriBox", icon: Box },
  { name: "VitaZap", icon: Zap },
  { name: "LifeHeart", icon: Heart },
  { name: "StarPharma", icon: Star },
];

export function LogoCloud() {
  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          ĐỐI TÁC TIN CẬY CỦA HƠN 500+ PHÒNG KHÁM VÀ BỆNH VIỆN
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {LOGOS.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <Icon className="h-6 w-6 text-slate-500" />
                <span className="text-lg font-bold text-slate-500">{logo.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
