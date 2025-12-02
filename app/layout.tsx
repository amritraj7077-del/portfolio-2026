import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Amritraj – Full Stack Developer",
  description: 'Full Stack Developer & AI/ML Enthusiast – Portfolio site.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-slate-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
