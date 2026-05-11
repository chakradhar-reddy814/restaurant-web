import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl text-primary font-bold">Spice Garden</Link>

        <ul className="hidden md:flex items-center gap-6">
          <li><Link href="/"             className="text-dark hover:text-primary transition-colors font-medium">Home</Link></li>
          <li><Link href="/menu"         className="text-dark hover:text-primary transition-colors font-medium">Menu</Link></li>
          <li><Link href="/reservations" className="text-dark hover:text-primary transition-colors font-medium">Reservations</Link></li>
          <li><Link href="/about"        className="text-dark hover:text-primary transition-colors font-medium">About</Link></li>
          <li><Link href="/cart"         className="text-dark hover:text-primary transition-colors font-medium">🛒 View Cart</Link></li>
          <li><Link href="/my-booking"   className="text-dark hover:text-primary transition-colors font-medium">📋 Reserved Table</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              localStorage.removeItem("spice-garden-username");
              window.location.href = "/login";
            }}
            className="text-sm text-dark hover:text-red-500 font-medium transition-colors"
          >
            Logout
          </button>
          <Link href="/reservations" className="btn-primary">Book a Table</Link>
        </div>

        <button className="md:hidden text-dark" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 shadow-md">
          <Link href="/"             className="text-dark hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/menu"         className="text-dark hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link href="/reservations" className="text-dark hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>Reservations</Link>
          <Link href="/about"        className="text-dark hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/cart"         className="text-dark hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>🛒 View Cart</Link>
          <Link href="/my-booking"   className="text-dark hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>📋 Reserved Table</Link>
          <Link href="/reservations" className="btn-primary text-center"                  onClick={() => setMenuOpen(false)}>Book a Table</Link>
        </div>
      )}
    </nav>
  );
}