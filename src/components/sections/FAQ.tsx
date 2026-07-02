"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Aura Vision có tương thích với kính cận không?",
    answer: "Có, Aura Vision được thiết kế linh hoạt. Chúng tôi cung cấp phụ kiện Aura Prescription Lenses tích hợp nam châm từ tính, giúp bạn dễ dàng gắn tròng kính cận/viễn của riêng mình.",
  },
  {
    question: "Thời lượng pin thực tế là bao nhiêu?",
    answer: "Với phiên bản Aura Vision Pro, thời lượng pin sử dụng liên tục lên đến 12 giờ. Phiên bản Aura Vision Air hỗ trợ 8 giờ sử dụng. Cả hai đều hỗ trợ sạc nhanh 65W.",
  },
  {
    question: "Kính có thể kết nối với điện thoại thông minh nào?",
    answer: "Aura Vision tương thích với hầu hết các điện thoại thông minh chạy iOS 15 trở lên và Android 12 trở lên thông qua kết nối Wi-Fi 7 và Bluetooth 5.3 độ trễ thấp.",
  },
  {
    question: "Chính sách bảo hành của NexGen Tech như thế nào?",
    answer: "Chúng tôi bảo hành chính hãng 24 tháng cho toàn bộ phần cứng. Hỗ trợ đổi trả 1-1 trong 30 ngày đầu tiên nếu có bất kỳ lỗi nào từ nhà sản xuất.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Câu Hỏi <span className="text-primary">Thường Gặp</span>
          </m.h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "border rounded-xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-primary/5 border-primary/20" : "bg-background border-border hover:border-primary/50"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-left cursor-pointer"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180 text-primary"
                    )} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
