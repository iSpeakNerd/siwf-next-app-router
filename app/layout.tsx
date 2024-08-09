import type { Metadata } from 'next';
import '@/globals.css';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: {
    template: '%s  | tabletop.xyz',
    default: 'siwf-next-app-router',
  },
  description: 'A cross-platform app for managing tabletop games.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
