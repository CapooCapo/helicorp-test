import { NextResponse } from "next/server";
import * as z from "zod";

// Schema for generic analytics events
const eventSchema = z.object({
  eventName: z.string(),
  payload: z.any().optional(),
});

// Schema for newsletter
const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check if it's a newsletter submission
    if (body.email) {
      const parsed = newsletterSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ error: "Email không hợp lệ" }, { status: 400 });
      }
      
      // Simulate processing (e.g., adding to Mailchimp)
      console.log("[Webhook] Received Newsletter Subscription:", parsed.data.email);
      
      return NextResponse.json({ 
        success: true, 
        message: "Đăng ký thành công!" 
      }, { status: 200 });
    }

    // Check if it's an analytics event
    if (body.eventName) {
      const parsed = eventSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ error: "Sự kiện không hợp lệ" }, { status: 400 });
      }

      console.log(`[Webhook] Analytics Event Tracked: ${parsed.data.eventName}`, parsed.data.payload);
      
      return NextResponse.json({ 
        success: true,
        message: "Ghi nhận sự kiện thành công"
      }, { status: 200 });
    }

    return NextResponse.json({ error: "Dữ liệu không được hỗ trợ" }, { status: 400 });

  } catch (error) {
    console.error("[Webhook Error]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
