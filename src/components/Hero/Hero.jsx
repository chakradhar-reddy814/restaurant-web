import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600')" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-accent uppercase tracking-widest text-sm font-medium mb-4">Welcome to</p>
        <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 leading-tight">Spice Garden</h1>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Authentic flavors crafted with passion. Experience the finest dining in the heart of the city.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/reservations" className="btn-primary">Reserve a Table</Link>
          <Link href="/menu"         className="btn-outline">View Menu</Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
