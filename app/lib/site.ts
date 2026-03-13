/**
 * Single source of truth for business identity + ordering links.
 * Used across server + client components.
 *
 * ✅ DoorDash Drive-friendly: keeps "Order" CTAs on-domain via SITE.orderPath (/order),
 * while /order server route redirects to SITE.orderUrl (external provider).
 */
export const SITE = {
  name: "Taquería Charly’s",
  url: "https://taqueriacharlys.com",

  // Keep CTAs on your domain (recommended for integrations/onboarding)
  orderPath: "/order",

  // External ordering provider (configure via .env.local)
  // Example: https://order.online/business/taqueria-charly-15590343
  orderUrl:
    process.env.NEXT_PUBLIC_ORDER_URL ??
    "https://order.online/business/taqueria-charly-15590343",

  // Contact
  phoneDisplay: "(805) 350-9465",
  phoneE164: "+18053509465",
  phoneTel: "tel:+18053509465",

  // Optional but recommended for legitimacy + local SEO (fill these in)
  addressLine1: "", // e.g. "123 Main St"
  postalCode: "", // e.g. "93458"
  locationShort: "Santa Maria, CA",
  hours: "", // e.g. "Daily 10:00 AM – 9:00 PM"
  supportEmail: "", // e.g. "support@taqueriacharlys.com"

  // Social proof / business profiles (optional)
  sameAs: [] as string[],
} as const;