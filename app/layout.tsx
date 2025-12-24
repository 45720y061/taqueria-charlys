import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Taqueria Charly’s – Authentic Tacos & Birria in Santa Maria",
  description:
    "Enjoy authentic Mexican street tacos, birria and barbacoa in Santa Maria. Order ahead via DoorDash or visit us today."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
