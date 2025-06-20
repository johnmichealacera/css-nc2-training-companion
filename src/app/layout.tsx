import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSS NC II Training Companion App",
  description: "A comprehensive training companion for Computer Systems Servicing NC II assessment preparation. Master computer hardware, networking, server configuration, and system maintenance with our interactive learning modules.",
  keywords: "CSS NC II, Computer Systems Servicing, TESDA, Training, Assessment, Computer Hardware, Networking, Server Configuration, System Maintenance",
  authors: [{ name: "CSS NC II Training Team" }],
  creator: "CSS NC II Training Team",
  publisher: "CSS NC II Training Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://css-nc2-companion.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://css-nc2-companion.vercel.app/',
    siteName: 'CSS NC II Training Companion App',
    title: 'CSS NC II Training Companion App',
    description: 'A comprehensive training companion for Computer Systems Servicing NC II assessment preparation. Master computer hardware, networking, server configuration, and system maintenance.',
    images: [
      {
        url: '/img/facebook_meta_bg.jpg',
        width: 1200,
        height: 630,
        alt: 'CSS NC II Training Companion App - Master Computer Systems Servicing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@AceraJm',
    title: 'CSS NC II Training Companion App',
    description: 'A comprehensive training companion for Computer Systems Servicing NC II assessment preparation. Master computer hardware, networking, server configuration, and system maintenance.',
    images: ['/img/facebook_meta_bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'BJOaPYD50-Y0azsTIXcYP5IDhtM0g_XdXbDc9Hvouoc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1B58WX8K2R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1B58WX8K2R', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
            
            // Debug logging
            console.log('Google Analytics initialized with ID: G-1B58WX8K2R');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
