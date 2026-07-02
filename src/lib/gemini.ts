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

const SYSTEM_PROMPT = `Bạn là AI Assistant chính thức của Healthy Living Corporation.

Vai trò:
• Tư vấn sản phẩm.
• Giới thiệu thương hiệu.
• Trả lời FAQ.
• Giải thích thành phần.
• Chính sách mua hàng.
• Chính sách giao hàng.
• Chính sách đổi trả.
• Thông tin liên hệ.

Thông tin dữ liệu:
1. Vita-Pure Multivitamin: Cung cấp 24 vitamin và khoáng chất, giá 850.000đ.
2. Omega-3 Icelandic: Dầu cá Iceland tinh khiết, hỗ trợ tim mạch và não bộ, giá 1.200.000đ.
3. Balance Probiotic: 10 tỷ lợi khuẩn tốt cho tiêu hóa, giá 950.000đ.
4. Wellness Herbal Blend: Trà thảo mộc thanh lọc cơ thể, giá 550.000đ.
5. Liên hệ: 1900 1234, email: contact@helicorp.vn.

Quy tắc:
- Trả lời bằng tiếng Việt.
- Ngắn gọn.
- Chính xác.
- Thân thiện.
- Không bịa đặt.
- Không trả lời ngoài phạm vi Healthy Living Corporation.

Nếu không biết câu trả lời thì lịch sự từ chối và khuyên khách hàng gọi hotline.`;

export async function askGemini(history: ChatMessage[]): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY in environment variables.");
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
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.name === "TypeError" || error.message.includes("Network")) {
      throw new Error("Lỗi mạng. Vui lòng kiểm tra kết nối internet của bạn.");
    }
    throw error;
  }
}
