import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h2 className="font-heading text-3xl text-primary font-bold mb-4">Spice Garden</h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Authentic flavors crafted with passion. We bring you the finest dining experience with ingredients sourced fresh every day.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/"             className="text-white/60 hover:text-primary transition-colors text-sm">Home</Link></li>
            <li><Link href="/menu"         className="text-white/60 hover:text-primary transition-colors text-sm">Menu</Link></li>
            <li><Link href="/reservations" className="text-white/60 hover:text-primary transition-colors text-sm">Reservations</Link></li>
            <li><Link href="/about"        className="text-white/60 hover:text-primary transition-colors text-sm">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li>📍 123 Food Street, Hyderabad</li>
            <li>📞 +91 98765 43210</li>
            <li>🕐 Mon–Sun: 11AM – 11PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Spice Garden. All rights reserved.
      </div>
    </footer>
  );
}
