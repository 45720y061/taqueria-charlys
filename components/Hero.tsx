import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <Image
        src="/logo.png"
        alt="Taqueria Charlys logo"
        width={260}
        height={260}
        priority
        className="mb-6"
      />

      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Taste the Best Birria & Tacos in Santa Maria
      </h1>

      <p className="max-w-xl text-gray-600 mb-8">
        Fresh, handmade street tacos, birria and barbacoa cooked with love and
        served with a smile.
      </p>

      <div className="flex gap-4">
        <CTAButton href="#menu" label="View Menu" />
        <CTAButton
          href="https://www.doordash.com/en/business/charly-taqueria-785131/menu?srsltid=AfmBOoroZ4KwCPnsnXzpLwzxzq8p-1pCu8UhQJ8MKYUU2q8xfyEOYraB"
          label="Order Online"
          variant="secondary"
        />
      </div>
    </section>
  );
}
