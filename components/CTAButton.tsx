type Props = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export default function CTAButton({
  href,
  label,
  variant = "primary",
}: Props) {
  const base =
    "px-6 py-3 rounded-md font-medium transition-colors";

  const styles =
    variant === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : "border border-orange-500 text-orange-500 hover:bg-orange-50";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {label}
    </a>
  );
}
