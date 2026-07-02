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
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
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

### demo images

<img width="1719" height="804" alt="2026-07-02-234007_hyprshot" src="https://github.com/user-attachments/assets/d0c4b0a4-f780-44b8-bdf3-afd817b2da1d" />
<img width="1694" height="781" alt="2026-07-02-233955_hyprshot" src="https://github.com/user-attachments/assets/0d6fa503-5011-4509-a212-1e1dcf81eae0" />
<img width="1282" height="924" alt="2026-07-02-235637_hyprshot" src="https://github.com/user-attachments/assets/c9339d96-aa39-46c5-9767-0005d362e3ee" />
<img width="293" height="399" alt="2026-07-02-234246_hyprshot" src="https://github.com/user-attachments/assets/ee23da2f-7bbd-422a-8683-cdde5e09d206" />
<img width="283" height="405" alt="2026-07-02-234255_hyprshot" src="https://github.com/user-attachments/assets/bd92b683-5ad1-4ba7-9609-d897dc273d13" />
<img width="509" height="770" alt="2026-07-02-234327_hyprshot" src="https://github.com/user-attachments/assets/cf6a50b2-7580-477c-8021-7334ae47dcf3" />

### check performance
https://pagespeed.web.dev/
<img width="1106" height="781" alt="2026-07-03-002241_hyprshot" src="https://github.com/user-attachments/assets/4409f371-5895-4a33-8ed1-96bae8d4339c" />
<img width="1195" height="772" alt="2026-07-03-002233_hyprshot" src="https://github.com/user-attachments/assets/7e1c3a96-5e9a-42dd-8a2c-65141c928ee3" />
