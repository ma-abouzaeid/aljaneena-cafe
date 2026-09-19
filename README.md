# الجنينة Café & Bistro (El Genena) - Official Website

![الجنينة Logo](public/images/Logo.png)

Official promotional and interactive menu website for **الجنينة Café & Bistro (El Genena)**. Built with Next.js 14, React 18, TypeScript, and Tailwind CSS following strict RTL Arabic-first architecture, botanical aesthetic, and production-ready static export.

---

## 🍃 Project Features

- **Mockup Accuracy**: Built to match the brand identity, color tokens, and visual layout.
- **RTL Arabic-First UI**: Arabic typography (`Tajawal`), layout directions, padding, and flex alignment.
- **Interactive Tabbed Menu**: Seamless category switching between **المشروبات الساخنة (Hot Drinks)**, **المشروبات الباردة (Cold Drinks)**, and **الشيشة (Shisha)** with exact prices in Egyptian Pounds (`ج.م`).
- **Configurable Location Map**: Google Maps integration with custom marker pin and direct directions link.
- **Responsive Design**: Custom mobile menu drawer and single-column touch target layouts for mobile devices (320px–1440px+).
- **Zero Backend Required**: Fully static architecture (`output: 'export'`) ready for instant deployment on Vercel, Render, or GitHub Pages.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **UI Library**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Local Development Setup

1. **Clone or navigate to the project directory**:
   ```bash
   cd "d:/WORK/El Genena Cafe"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Run production build**:
   ```bash
   npm run build
   ```
   The static export HTML/CSS/JS output will be generated inside the `out/` folder.

---

## 🌐 Deployment Instructions

### 1. Deploying to Vercel (Recommended)
1. Push your repository to **GitHub**.
2. Go to [Vercel Dashboard](https://vercel.com/new) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset: **Next.js**.
5. Click **Deploy**. Vercel automatically detects Next.js static output and builds the site instantly.

### 2. Deploying to Render
1. Create a new **Static Site** on [Render.com](https://render.com/).
2. Connect your GitHub repository.
3. Build Command: `npm run build`
4. Publish Directory: `out`
5. Click **Create Static Site**.

### 3. Deploying to GitHub Pages
1. In `next.config.mjs`, if deploying under a repository subpath (e.g. `user.github.io/repo-name`), add:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
     basePath: process.env.NODE_ENV === 'production' ? '/repo-name' : '',
   };
   ```
2. Build static files:
   ```bash
   npm run build
   ```
3. Deploy the contents of the `out` folder to the `gh-pages` branch.

---

## ✏️ How to Modify Content

### 1. Updating Menu Items & Prices
Open `src/data/menuData.ts`. All items are centralized by category (`hot`, `cold`, `shisha`):
```typescript
{ id: 'h4', name: 'قهوه', price: 25, popular: true },
```
Simply edit the `name`, `price`, or `popular` flag. Changes reflect immediately across all tabs and cards.

### 2. Updating Café Location & Map
Open `src/config/cafeConfig.ts`. Modify address or map links:
```typescript
export const cafeConfig = {
  location: {
    name: "الجنينة كافيه",
    address: "القاهرة، مصر",
    googleMapsUrl: "https://maps.app.goo.gl/MqYLg96U2HqYnpJ19",
    embedMapUrl: "...",
  }
};
```

### 3. Replacing Images or Logo
- **Official Logo**: Replace `public/images/Logo.png`.
- **Café Photography**: Replace or add photos in `public/images/1.png` through `public/images/5.png`.

---

## 📁 Project Architecture

```
d:/WORK/El Genena Cafe/
├── public/
│   └── images/          # Official logo & photography
├── src/
│   ├── app/
│   │   ├── globals.css  # Custom CSS variables, Tajawal font & gold glow effects
│   │   ├── layout.tsx   # RTL dir="rtl" & SEO Metadata
│   │   └── page.tsx     # Main single-page application
│   ├── components/
│   │   ├── layout/      # Navbar & Footer
│   │   ├── home/        # Hero section & Atmosphere pills
│   │   ├── menu/        # Interactive menu tabs & cream card layout
│   │   ├── about/       # About "من نحن" section & feature badges
│   │   ├── gallery/     # Photo grid & Lightbox modal
│   │   └── location/    # Configurable map section & directions button
│   ├── config/          # Central cafeConfig (Location, Map URL, Taglines)
│   └── data/            # Menu items, prices & categories
├── next.config.mjs      # Next.js static export config
├── tailwind.config.ts   # Design tokens & color palette
├── package.json
└── README.md
```
