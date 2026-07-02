import { useEffect } from "react";
import { toast } from "sonner";

export type EventName = 
  | "click_cta"
  | "scroll_depth"
  | "newsletter_submit"
  | "favorite_product"
  | "add_to_cart"
  | "chatbot_open"
  | "chatbot_message";

export const trackEvent = async (eventName: EventName, payload?: Record<string, unknown>) => {
  console.log(`[Analytics Tracking] Event: ${eventName}`, payload || "");
  
  // Send data to Webhook
  try {
    const res = await fetch("/api/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ eventName, payload }),
    });

    if (res.ok) {
      // Trigger notifications for specific user actions to make the page feel alive
      if (eventName === "add_to_cart") {
        toast.success("Sản phẩm đã được thêm vào giỏ hàng");
      } else if (eventName === "click_cta") {
        toast.info("Đang chuyển hướng đến chi tiết sản phẩm...");
      } else if (eventName === "scroll_depth" && payload?.percentage === 100) {
        toast("Tuyệt vời! Bạn đã xem hết thông tin sản phẩm.", {
          description: "Đừng ngần ngại liên hệ nếu cần hỗ trợ nhé.",
          icon: "🎉",
        });
      }
    }
  } catch (error) {
    console.error("Failed to send analytics event", error);
  }
};

export const useScrollAnalytics = () => {
  useEffect(() => {
    let maxScroll = 0;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercentage = Math.round((scrollPosition / (documentHeight - windowHeight)) * 100);
      
      if (scrollPercentage > maxScroll && scrollPercentage % 25 === 0) {
        maxScroll = scrollPercentage;
        trackEvent("scroll_depth", { percentage: maxScroll });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
