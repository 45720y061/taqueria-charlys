/**
 * Footer with location and contact details.
 */
export default function Footer() {
  return (
    <footer className="bg-neutralDark text-white py-8 px-4 mt-auto">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-2">Taqueria Charly’s</h4>
          <p>Authentic Mexican street food in Santa Maria.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Locations</h4>
          <p>804 N Broadway, Santa Maria, CA</p>
          <p>510 S Broadway, Santa Maria, CA</p>
          <p>Daily 4 PM – 11 PM</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>Phone: (805) 350‑9465</p>
          <p>Phone: (805) 554‑2517</p>
          <p>Email: hello@taqueriacharlys.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Taqueria Charly’s. All rights reserved.
      </div>
    </footer>
  );
}
