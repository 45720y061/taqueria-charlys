/**
 * Specials section showcasing key offerings.  Uses an anchor id "menu" for internal navigation.
 */
export default function Specials() {
  const items = [
    {
      title: "Birria & Barbacoa",
      description:
        "Slow‑cooked beef simmered in rich adobo sauce until melt‑in‑your‑mouth tender."
    },
    {
      title: "Street‑Style Tacos",
      description:
        "Choose from al pastor, carnitas, asada, vegetarian or seafood. Served on hand‑made tortillas."
    },
    {
      title: "Quesabirria",
      description:
        "Shredded meat and melted cheese grilled into a crispy corn tortilla, served with consommé."
    }
  ];

  return (
    <section id="menu" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-neutralDark font-heading">
          Our Specialties
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 border border-gray-200 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary font-heading">
                {item.title}
              </h3>
              <p className="text-neutralDark">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
