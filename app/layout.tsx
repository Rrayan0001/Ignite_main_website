import type { Metadata } from "next";
import WelcomeAnimationWrapper from "@/components/WelcomeAnimationWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "IGNITE FITNESS — Premier Fitness Club & Gym | Dharwad",
  description:
    "Ignite Fitness is Dharwad's premier high-performance gym on PB Road. Elite personal trainers, heavy iron strength zones, CrossFit functional arena, and biomechanics-based transformation programs.",
  keywords: "gym Dharwad, Ignite Fitness Dharwad, Ignite Prime, personal trainer Dharwad, fitness club Dharwad, PB Road gym",
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [{ url: '/logo.png' }],
    shortcut: '/logo.png',
  },
  openGraph: {
    title: "IGNITE FITNESS — Premier Fitness Club Dharwad",
    description: "Ignite Your Potential. Experience Dharwad's top-rated fitness gym.",
    url: "https://theignitefitness.com",
    siteName: "IGNITE FITNESS",
    locale: "en_IN",
    type: "website",
    images: [{ url: '/bg_remove_logo.png', width: 512, height: 512, alt: 'IGNITE FITNESS Logo' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <WelcomeAnimationWrapper />
        {children}
      </body>
    </html>
  );
}
