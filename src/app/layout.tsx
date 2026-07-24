import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { fontVariables } from '@/lib/fonts'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const viewport: Viewport = { themeColor: '#4F46E5' }

export const metadata: Metadata = {
  title: 'Rozalix — Websites that turn visitors into customers',
  description: 'Rozalix designs and builds fast, custom websites that get your business found, build trust, and turn visitors into paying customers — and grow with you as you scale.',
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  openGraph: {
    type: 'website',
    title: 'Rozalix — Websites that turn visitors into customers',
    description: 'Fast, custom websites that get your business found, build trust, and turn visitors into paying customers.',
    siteName: 'Rozalix',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <Nav />
        {children}
        <Footer />
        {/* Rozalix AI chat widget — loads from the dashboard app.
        Pointed at the local rozalix-web-app dev server for testing;
        swap back to https://app.rozalix.com/embed.js before deploying. */}
        <Script
          src="http://localhost:3002/embed.js"
          data-rozalix-key="rozalix-landing"
          strategy="afterInteractive"
        />

        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '995960453253438');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=995960453253438&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
