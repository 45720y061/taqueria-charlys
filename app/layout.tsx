import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";
import { SITE } from "./lib/site";

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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE.name,
    url: SITE.url,
    servesCuisine: "Mexican",
    priceRange: "$",
    telephone: SITE.phoneE164,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santa Maria",
      addressRegion: "CA",
      addressCountry: "US",
      ...(SITE.addressLine1 ? { streetAddress: SITE.addressLine1 } : {}),
      ...(SITE.postalCode ? { postalCode: SITE.postalCode } : {}),
    },
    ...(SITE.sameAs?.length ? { sameAs: SITE.sameAs } : {}),
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </body>
    </html>
  );
}
