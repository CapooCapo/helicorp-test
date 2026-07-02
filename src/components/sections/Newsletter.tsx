"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const newsletterSchema = z.object({
  email: z.string().min(1, { message: "Vui lòng nhập email" }).email({
    message: "Email không đúng định dạng",
  }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function Newsletter() {
  const [isSuccess, setIsSuccess] = React.useState(false);
  
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Newsletter subscribed:", data.email);
    setIsSuccess(true);
    form.reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden text-primary-foreground">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Nhận Thông Tin Sức Khỏe Mới Nhất
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 mb-8"
          >
            Đăng ký bản tin của chúng tôi để nhận các cẩm nang chăm sóc sức khỏe và ưu đãi độc quyền hàng tháng.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="relative max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Input
                    {...form.register("email")}
                    placeholder="Nhập email của bạn..."
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white focus-visible:border-transparent rounded-xl"
                  />
                  {form.formState.errors.email && (
                    <p className="absolute -bottom-6 left-2 text-sm text-red-200">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  disabled={form.formState.isSubmitting}
                  className="h-12 px-6 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {form.formState.isSubmitting ? (
                    "Đang gửi..."
                  ) : (
                    <>
                      Đăng Ký <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-10 left-0 right-0 flex items-center justify-center gap-2 text-green-200 font-medium"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Đăng ký thành công!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
