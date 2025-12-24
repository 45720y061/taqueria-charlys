import Link from "next/link";

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

/**
 * Reusable call‑to‑action button component.
 */
export default function CTAButton({
  href,
  label,
  variant = "primary"
}: CTAButtonProps) {
  const baseClasses =
    "inline-block px-6 py-3 rounded-md font-semibold transition-colors duration-200";
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-secondary"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {label}
    </Link>
  );
}
