import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { ChatWidget } from '../components/chat';

export const metadata: Metadata = {
  title: 'AImatic | Secure AI Automation & Custom Software Engineering',
  description:
    'AImatic builds custom, secure AI business automation systems you own 100%. We specialize in private n8n workflows, secure API integrations, and developer-backed AI agents that cut costs and increase efficiency without data privacy risks.',
  keywords: [
    'AI Automation Agency',
    'Custom AI Development',
    'Private AI Chatbots',
    'n8n Workflow Engineering',
    'Business Process Automation',
    'Secure AI Integration',
    'Data Sovereignty',
    'Self-hosted AI Agents',
    'AImatic Dev Solutions',
  ],
  authors: [{ name: 'AImatic Team', url: 'https://aimatic.dev' }],
  creator: 'AImatic Dev Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'AImatic | Private AI Automation & Custom Engineering',
    description: 'Own your automation. Protect your data. Secure, self-hosted code that stays within your business walls.',
    url: 'https://aimatic.dev',
    siteName: 'AImatic Dev Solutions',
    images: [
      {
        url: 'https://picsum.photos/seed/aimatic-og/1200/630',
        width: 1200,
        height: 630,
        alt: 'AImatic Professional AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AImatic | Secure AI Automation',
    description: 'Professional engineering for modern businesses. Own your code, secure your data.',
    images: ['https://picsum.photos/seed/aimatic-twitter/1200/630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://aimatic.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://aimatic.dev/#organization',
        name: 'AImatic Dev Solutions',
        url: 'https://aimatic.dev',
        logo: 'https://aimatic.dev/logo.png',
        description: 'A developer-backed AI automation agency focusing on security, data sovereignty, and custom engineering for businesses.',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'CA',
          addressCountry: 'US'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'hello@aimatic.dev'
        },
        priceRange: '$$',
        knowsAbout: [
          'AI Automation',
          'n8n Workflows',
          'Python Scripting',
          'API Integration',
          'Cybersecurity',
          'Cloud Architecture'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://aimatic.dev/#website',
        url: 'https://aimatic.dev',
        name: 'AImatic Dev Solutions',
        publisher: { '@id': 'https://aimatic.dev/#organization' }
      }
    ],
  };

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Source+Code+Pro:wght@400;600&family=Merriweather:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('font-body antialiased overflow-x-hidden')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ChatWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
