import Providers from '@/config/Providers';
import { fontSans } from '@/config/fonts';
import { customMetadata, site } from '@/config/site';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
export const metadata: Metadata = customMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.lang}>
      <body
        className={cn(
          'min-h-screen bg-muted/40 font-sans antialiased ',
          fontSans.variable
        )}>
        <NextTopLoader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
