import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  metadataBase: new URL('https://arikil-eldercare.vercel.app'),
  title: 'Arikil Eldercare & Companionship (അരികിൽ) | Presence Over Distance - Kerala',
  description: 'Heartfelt elder companionship, warm tea conversations, peaceful veranda strolls, and regular photo updates for elderly parents in Palakkad and Thrissur while children live abroad.',
  keywords: 'elderly companionship Kerala, elder care Palakkad, elder companionship Thrissur, Arikil companionship, Niveda Babu, NRI parents eldercare Kerala',
  openGraph: {
    title: 'Arikil Eldercare & Companionship (അരികിൽ)',
    description: 'Presence over distance. Bringing heartfelt companionship and genuine peace of mind to parents across Kerala.',
    url: 'https://arikil-eldercare.vercel.app',
    siteName: 'Arikil Eldercare',
    images: [
      {
        url: '/assets/couple_joy.jpg',
        width: 1200,
        height: 630,
        alt: 'Happy Kerala Elderly Couple Smiling - Arikil Companionship',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
