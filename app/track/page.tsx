import { redirect } from "next/navigation";

/**
 * DoorDash Drive tracking links should be surfaced on YOUR domain after checkout.
 * This page provides a safe redirect wrapper so you can send customers to:
 *   /track?url=<delivery_tracking_url>
 */

const ALLOWED_HOSTS = new Set(["track.doordash.com", "drd.sh"]);

export default function TrackPage({
  searchParams,
}: {
  searchParams: { url?: string };
}) {
  const raw = searchParams?.url;

  if (!raw) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-2xl font-bold text-gray-900">Track your delivery</h1>
        <p className="mt-3 text-sm text-gray-600">
          Missing tracking link.
        </p>
      </main>
    );
  }

  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-2xl font-bold text-gray-900">Track your delivery</h1>
        <p className="mt-3 text-sm text-gray-600">Invalid tracking link.</p>
      </main>
    );
  }

  if (!ALLOWED_HOSTS.has(u.hostname)) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-2xl font-bold text-gray-900">Track your delivery</h1>
        <p className="mt-3 text-sm text-gray-600">
          Unapproved tracking domain.
        </p>
      </main>
    );
  }

  redirect(u.toString());
}
