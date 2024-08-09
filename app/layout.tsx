import type { Metadata } from 'next';
import '@/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s  | tabletop.xyz',
    default: 'siwf-next-app-router',
  },
  description: 'Sign In with Farcaster x Next.js App Router x NextAuth Demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
