"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const SPECS_DATA = [
  {
    feature: "Chứng nhận FDA",
    helicorp: true,
    others: false,
  },
  {
    feature: "Thành phần 100% hữu cơ",
    helicorp: true,
    others: false,
  },
  {
    feature: "Không chứa Gluten & Non-GMO",
    helicorp: true,
    others: true,
  },
  {
    feature: "Công nghệ hấp thụ Nano",
    helicorp: true,
    others: false,
  },
  {
    feature: "Bao bì tái chế sinh học",
    helicorp: true,
    others: false,
  },
  {
    feature: "Sản xuất tại nhà máy GMP",
    helicorp: true,
    others: true,
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
            Sự Khác Biệt <span className="text-primary">Vượt Trội</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            So sánh tiêu chuẩn kỹ thuật và chất lượng giữa các sản phẩm Helicorp so với thị trường.
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
                  Helicorp
                </th>
                <th className="py-4 px-6 bg-muted/50 rounded-tr-xl border-b border-border font-semibold text-center text-lg w-1/4">
                  Khác
                </th>
              </tr>
            </thead>
            <tbody>
              {SPECS_DATA.map((spec, index) => (
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
