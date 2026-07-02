# Healthy Living Corporation (Helicorp) Landing Page

A modern, high-performance, and SEO-optimized landing page built for Healthy Living Corporation.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand (with Local Storage Persistence)
- **Animations:** Framer Motion
- **Forms & Validation:** React Hook Form + Zod
- **Icons:** Lucide React
- **Dark Mode:** `next-themes`
- **Language:** TypeScript

## ✨ Key Features

1. **Modern UI/UX:** Premium, minimal, and corporate design with a green/emerald/orange palette. Responsive on all devices.
2. **Mini E-Commerce:** 
   - Add to Cart with Sidebar Modal.
   - Favorite Products logic.
   - Quick View Modal for products.
   - Data persists across reloads (LocalStorage).
3. **Floating Chatbot:** Interactive widget with typing animations, chat history, and simulated automated responses.
4. **Performance & SEO:** 
   - 100 SEO Score (Metadata, Open Graph, Sitemap, Robots.txt).
   - Dynamic imports and optimal font/image loading.
   - Semantic HTML and ARIA accessibility.
5. **Dark Mode:** Seamless light/dark mode switching.

## 🛠️ Local Development

1. **Get a Gemini API Key:**
   Get a free API key from [Google AI Studio](https://aistudio.google.com/). Create a `.env.local` file in the root directory and add:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment Instructions

The application is optimized and ready to be deployed to **Vercel**, **Netlify**, or **Cloudflare Pages**.

### Vercel (Recommended)
1. Push the code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your GitHub repository.
4. Framework Preset will automatically be detected as `Next.js`.
5. Click **Deploy**. Vercel will handle the build process and serve the application globally.

### Docker / Custom Server
If deploying to a custom VPS (e.g., EC2, DigitalOcean):
```bash
npm run build
npm run start
```

## 🔮 Future Improvements (Scalability)

- **Backend Integration:** Connect the Mini E-commerce (Cart, Favorites) and Newsletter forms to a backend (Supabase, Firebase, or custom Node.js/Django API).
- **Payment Gateway:** Integrate Stripe, VNPay, or MoMo for real checkouts.
- **AI Chatbot:** Replace the simulated chatbot responses with OpenAI API or Gemini API integration for intelligent customer support.
- **Product Reviews System:** Implement a database for real user reviews and ratings.
- **i18n (Internationalization):** Add multi-language support (e.g., `next-intl`) to fully support the VN | EN toggle in the footer.
- **Analytics:** Integrate Google Analytics, Vercel Web Vitals, or PostHog to track user events (add to cart, chatbot usage, scroll depth).
