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

### Docker / Custom Server
If deploying to a custom VPS (e.g., EC2, DigitalOcean):
```bash
### command
docker build <projectname> .
docker run -p 3000:3000 <projectname>
## ex: 
docker build helicorp .
docker run -p 3000:3000 helicorp
```

### this is the url of the deploy app

https://helicorp-test-ph4t89c9s-capoocapos-projects.vercel.app/


