import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "الجنينة | Café & Bistro",
  description: "الجنينة كافيه وبسترو - أجواء طبيعية مريحة ومشروبات مميزة في قلب القاهرة. أكثر من كافيه.. دي حالة.",
  keywords: ["كافيه الجنينة", "Al Janeena Cafe", "Café & Bistro", "شيشة", "مشروبات باردة", "مشروبات ساخنة", "كافيهات القاهرة"],
  openGraph: {
    title: "الجنينة | Café & Bistro",
    description: "أكثر من كافيه.. دي حالة.. الجنينة مكانك الطبيعي",
    images: ["/images/Logo.png"],
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/images/Logo.png" />
      </head>
      <body className="bg-brand-darkGreen text-brand-cream antialiased font-arabic selection:bg-brand-gold selection:text-brand-darkGreen">
        {children}
      </body>
    </html>
  );
}
