"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const SPECS_DATA = [
  {
    feature: "Màn hình 4K Micro-OLED",
    helicorp: true,
    others: false,
  },
  {
    feature: "Tần số quét 120Hz",
    helicorp: true,
    others: false,
  },
  {
    feature: "Trọng lượng dưới 150g",
    helicorp: true,
    others: false,
  },
  {
    feature: "Theo dõi chuyển động mắt (Eye Tracking)",
    helicorp: true,
    others: false,
  },
  {
    feature: "Hỗ trợ kết nối Wi-Fi 7",
    helicorp: true,
    others: false,
  },
  {
    feature: "Pin hoạt động liên tục 12h",
    helicorp: true,
    others: false,
  },
];

export function Specs() {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Thông Số Kỹ Thuật <span className="text-primary">Vượt Trội</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            So sánh tiêu chuẩn phần cứng và tính năng của Aura Vision so với các dòng kính AR khác trên thị trường.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-muted/50 rounded-tl-xl border-b border-border font-semibold text-lg w-1/2">
                  Tiêu Chuẩn / Tính Năng
                </th>
                <th className="py-4 px-6 bg-primary/10 border-b border-primary/20 font-bold text-primary text-center text-lg w-1/4">
                  Aura Vision
                </th>
                <th className="py-4 px-6 bg-muted/50 rounded-tr-xl border-b border-border font-semibold text-center text-lg w-1/4">
                  Khác
                </th>
              </tr>
            </thead>
            <tbody>
              {SPECS_DATA.map((spec) => (
                <tr key={spec.feature} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 text-foreground font-medium">
                    {spec.feature}
                  </td>
                  <td className="py-4 px-6 bg-primary/5 text-center">
                    {spec.helicorp ? (
                      <Check className="h-6 w-6 text-primary mx-auto" />
                    ) : (
                      <Minus className="h-6 w-6 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {spec.others ? (
                      <Check className="h-6 w-6 text-muted-foreground mx-auto" />
                    ) : (
                      <Minus className="h-6 w-6 text-muted-foreground mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
