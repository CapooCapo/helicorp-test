"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Trash2, Bot, User, RefreshCcw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useChatStore } from "@/store/useChatStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { askGemini, ChatMessage } from "@/lib/gemini";

const SUGGESTED_QUESTIONS = [
  "Giá sản phẩm là bao nhiêu?",
  "Tôi muốn hỏi về chính sách bảo hành.",
  "Sản phẩm có dùng cho người già được không?",
];

export function Chatbot() {
  const { isOpen, setIsOpen } = useChatStore();

  // Local state for chat
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isOpen, error]);

  const clearHistory = () => {
    setMessages([]);
    setError(null);
  };

  const processMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const aiResponseText = await askGemini(newMessages);

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "model",
        content: aiResponseText,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      setError(err.message || "Đã xảy ra lỗi khi kết nối. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedClick = (question: string) => {
    processMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processMessage(input);
  };

  const handleRetry = () => {
    // Find the last user message to retry
    const lastUserMessage = [...messages].reverse().find(m => m.role === "user");
    if (lastUserMessage) {
      // Remove any failed AI responses if we implement that, but for now we just retry the API call
      // The current history still ends with the user message (since AI message wasn't added on error)
      processMessageRetry();
    }
  };

  const processMessageRetry = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const aiResponseText = await askGemini(messages);

      const aiMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "model",
        content: aiResponseText,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      setError(err.message || "Đã xảy ra lỗi khi kết nối. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform focus:outline-none cursor-pointer",
          isOpen && "hidden"
        )}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[550px] max-w-[calc(100vw-3rem)] flex flex-col bg-background border border-border shadow-2xl rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Helicorp AI Assistant</h3>
                  <div className="flex items-center gap-1.5 text-xs text-green-200">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Trực tuyến
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" onClick={clearHistory} className="h-8 w-8 text-primary-foreground hover:bg-white/20 hover:text-white rounded-full" title="Xóa lịch sử">
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-primary-foreground hover:bg-white/20 hover:text-white rounded-full">
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-muted/10 space-y-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Xin chào! 👋</h4>
                    <p className="text-sm text-muted-foreground">Tôi là trợ lý AI của Helicorp. Tôi có thể giúp gì cho bạn hôm nay?</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {SUGGESTED_QUESTIONS.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestedClick(q)}
                        className="text-xs bg-background border border-border rounded-full px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg) => (
                    <div key={msg.id} className={cn("flex gap-2 w-full", msg.role === "user" ? "justify-end" : "justify-start")}>
                      {msg.role !== "user" && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <Bot className="h-4 w-4" />
                        </div>
                      )}

                      <div className={cn(
                        "rounded-2xl px-4 py-2 text-sm shadow-sm max-w-[85%]",
                        msg.role === "user"
                          ? "bg-accent text-accent-foreground rounded-tr-none"
                          : "bg-card border border-border rounded-tl-none text-foreground prose prose-sm dark:prose-invert"
                      )}>
                        {msg.role === "user" ? (
                          <div className="whitespace-pre-wrap">{msg.content}</div>
                        ) : (
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        )}
                      </div>

                      {msg.role === "user" && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isLoading && (
                    <div className="flex gap-2 max-w-[85%]">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="rounded-2xl rounded-tl-none bg-card border border-border px-4 py-3 flex items-center gap-1 shadow-sm">
                        <motion.div className="h-2 w-2 bg-primary/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                        <motion.div className="h-2 w-2 bg-primary/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                        <motion.div className="h-2 w-2 bg-primary/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                      </div>
                    </div>
                  )}

                  {/* Error State */}
                  {error && (
                    <div className="flex flex-col items-center justify-center p-4 bg-red-500/10 rounded-xl border border-red-500/20 text-red-500">
                      <p className="text-sm text-center mb-2">{error}</p>
                      <Button variant="outline" size="sm" onClick={handleRetry} className="border-red-500/50 hover:bg-red-500/20 text-red-600 dark:text-red-400">
                        <RefreshCcw className="h-4 w-4 mr-2" /> Thử lại
                      </Button>
                    </div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-border bg-background flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1 rounded-full border-muted-foreground/20 focus-visible:ring-primary"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="rounded-full shrink-0" disabled={!input.trim() || isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
