import { NextResponse } from "next/server";
import { SITE } from "../lib/site";

/**
 * Stable on-domain ordering URL.
 * Keeps marketing CTAs consistent while letting you change the external provider.
 */
export function GET() {
  return NextResponse.redirect(SITE.orderUrl, 307);
}
