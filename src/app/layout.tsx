import { Inter, IBM_Plex_Mono, Syne } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-syne',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
