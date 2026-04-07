import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--ff-disp-next',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--ff-body-next',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kerbachi Hibachi | Fresno, CA',
  description:
    'Kerbachi Hibachi — premium hibachi plates, rice bowls, and specialty drinks. Call (559) 408-6027 to order.',
  icons: { icon: '/images/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
