import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Taqueria Charly’s | Best Birria & Tacos in Santa Maria",
  description:
    "Authentic Mexican street tacos, birria and barbacoa in Santa Maria, CA. Order online for pickup or delivery.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          {children}

          {/* 📍 Local Business Schema for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Restaurant",
                name: "Taqueria Charly’s",
                servesCuisine: "Mexican",
                priceRange: "$",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Santa Maria",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
                sameAs: [
                  "https://www.doordash.com/en/business/charly-taqueria-785131",
                ],
              }),
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
