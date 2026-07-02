"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Sản phẩm Helicorp có tác dụng phụ không?",
    answer: "Tất cả sản phẩm của Helicorp đều được chiết xuất 100% từ thiên nhiên và đã qua kiểm định lâm sàng khắt khe, hoàn toàn không gây tác dụng phụ nếu sử dụng đúng liều lượng chỉ định.",
  },
  {
    question: "Bao lâu thì thấy được hiệu quả?",
    answer: "Tùy vào cơ địa mỗi người, tuy nhiên với công nghệ hấp thụ Nano, hầu hết khách hàng của chúng tôi cảm nhận được sự thay đổi tích cực rõ rệt chỉ sau 7-14 ngày sử dụng liên tục.",
  },
  {
    question: "Sản phẩm có dùng được cho phụ nữ có thai không?",
    answer: "Đối với phụ nữ có thai và cho con bú, chúng tôi khuyên bạn nên tham khảo ý kiến bác sĩ trước khi sử dụng bất kỳ loại thực phẩm bổ sung nào để đảm bảo an toàn tuyệt đối.",
  },
  {
    question: "Chính sách đổi trả của Helicorp như thế nào?",
    answer: "Chúng tôi áp dụng chính sách hoàn tiền 100% trong vòng 30 ngày nếu bạn không hài lòng với chất lượng sản phẩm. Bạn chỉ cần giữ lại bao bì và liên hệ hotline hỗ trợ.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Câu Hỏi <span className="text-primary">Thường Gặp</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "border rounded-xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-primary/5 border-primary/20" : "bg-background border-border hover:border-primary/50"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-left"
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
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
