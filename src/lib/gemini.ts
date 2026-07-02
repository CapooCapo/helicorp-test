export type ChatRole = "user" | "model" | "system";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

export interface GeminiPart {
  text: string;
}

export interface GeminiContent {
  role: "user" | "model";
  parts: GeminiPart[];
}

export interface GeminiRequest {
  system_instruction?: {
    parts: GeminiPart[];
  };
  contents: GeminiContent[];
}

const SYSTEM_PROMPT = `Bạn là AI Assistant chính thức của NexGen Tech.

Vai trò:
• Tư vấn cấu hình thiết bị.
• Giới thiệu thương hiệu.
• Trả lời FAQ.
• Hỗ trợ kỹ thuật.
• Chính sách mua hàng.
• Chính sách giao hàng.
• Chính sách đổi trả.
• Thông tin liên hệ.

Thông tin dữ liệu:
1. Aura Vision Pro: Màn 4K Micro-OLED, Chip Neural Processing, giá 34.990.000đ.
2. Aura Vision Air: Thiết kế nhẹ 130g, giải trí mượt mà, giá 21.990.000đ.
3. NexGen Smart Controller: Điều khiển xúc giác không dây, giá 3.500.000đ.
4. Aura Prescription Lenses: Tròng kính cận/viễn từ tính, giá 2.500.000đ.
5. Liên hệ: 1900 8888, email: support@nexgentech.vn.

Quy tắc:
- Trả lời bằng tiếng Việt.
- Ngắn gọn, súc tích.
- Chính xác về mặt công nghệ.
- Thân thiện.
- Không bịa đặt.
- Không trả lời ngoài phạm vi NexGen Tech và Aura Vision.

Nếu không biết câu trả lời thì lịch sự từ chối và khuyên khách hàng gọi hotline.`;

export async function askGemini(history: ChatMessage[]): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("We are apologize, the AI assistant is currently unavailable. Please try again later.");
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  // Map history to Gemini contents format
  const contents: GeminiContent[] = history
    .filter(msg => msg.role !== "system")
    .map(msg => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    }));

  const requestBody: GeminiRequest = {
    system_instruction: {
      parts: [{ text: SYSTEM_PROMPT }]
    },
    contents: contents,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        throw new Error("Lỗi xác thực API Key (403/401). Vui lòng kiểm tra lại NEXT_PUBLIC_GEMINI_API_KEY.");
      }
      if (response.status === 429) {
        throw new Error("Quá nhiều yêu cầu (429). Vui lòng chờ một lát rồi thử lại.");
      }
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    // Parse the response based on Gemini API spec
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      return "Xin lỗi, hiện tại tôi chưa thể trả lời do lỗi định dạng dữ liệu.";
    }

    return textResponse;
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);
    if (error instanceof Error && (error.name === "TypeError" || error.message.includes("Network"))) {
      throw new Error("Lỗi mạng. Vui lòng kiểm tra kết nối internet của bạn.");
    }
    throw error;
  }
}
