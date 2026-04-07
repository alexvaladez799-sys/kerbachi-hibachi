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
  title: 'Kerbachi Hibachi · Kerman, CA',
  description: 'Kerbachi Hibachi — Fresh hibachi made to order in Kerman, CA. Pickup ready in minutes.',
  icons: { icon: '/images/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
