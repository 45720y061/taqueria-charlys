import CTAButton from "./CTAButton";

/**
 * Hero section with heading, subheading and primary calls to action.
 * Replace the background image in /public/hero.jpg for a custom look.
 */
export default function Hero() {
  return (
    <section className="bg-[url('/hero.jpg')] bg-cover bg-center text-white min-h-[80vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-heading drop-shadow-lg">
        Taste the Best Birria &amp; Tacos in Santa&nbsp;Maria
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
        Fresh, hand‑made street tacos, birria and barbacoa cooked with love and
        served with a smile.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Replace href with your DoorDash link */}
        <CTAButton href="https://www.doordash.com/en/business/charly-taqueria-785131/menu?srsltid=AfmBOoroZ4KwCPnsnXzpLwzxzq8p-1pCu8UhQJ8MKYUU2q8xfyEOYraB" label="Order Ahead" />
        <CTAButton href="#menu" label="View Menu" variant="secondary" />
      </div>
    </section>
  );
}
