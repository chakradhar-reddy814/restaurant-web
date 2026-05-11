import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import MenuCard from "../components/MenuCard/MenuCard";
import Link from "next/link";

const featuredDishes = [
  { id: 1, name: "Butter Chicken",  description: "Tender chicken in a rich, creamy tomato-based sauce with aromatic spices.", price: 320, category: "Mains",    imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600" },
  { id: 2, name: "Paneer Tikka",    description: "Soft paneer marinated in spiced yogurt and grilled to perfection.",          price: 260, category: "Starters", imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600" },
  { id: 3, name: "Gulab Jamun",     description: "Soft milk dumplings soaked in rose-flavored sugar syrup.",                   price: 120, category: "Desserts", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600" },
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section className="bg-light">
        <div className="section-wrapper">
          <p className="text-primary uppercase tracking-widest text-sm font-medium text-center mb-2">Our Story</p>
          <h2 className="section-heading">Why Spice Garden?</h2>
          <p className="section-subheading">We believe great food brings people together. Every dish is prepared with love, fresh ingredients, and authentic recipes passed down through generations.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { icon: "🌿", title: "Fresh Ingredients", desc: "We source all ingredients fresh daily from local farmers and markets."   },
              { icon: "👨‍🍳", title: "Expert Chefs",     desc: "Our chefs bring decades of experience and passion to every single dish." },
              { icon: "⭐", title: "5-Star Experience", desc: "From ambience to service, we ensure every visit is truly memorable."     },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-wrapper">
          <p className="text-primary uppercase tracking-widest text-sm font-medium text-center mb-2">Our Menu</p>
          <h2 className="section-heading">Featured Dishes</h2>
          <p className="section-subheading">A taste of what awaits you. Explore our full menu for more delicious options.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => <MenuCard key={dish.id} dish={dish} />)}
          </div>
          <div className="text-center mt-12">
            <Link href="/menu" className="btn-primary">View Full Menu</Link>
          </div>
        </div>
      </section>

      <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600')" }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-accent uppercase tracking-widest text-sm font-medium mb-4">Reservations</p>
          <h2 className="font-heading text-5xl font-bold mb-6">Reserve Your Table Today</h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">Whether it's a romantic dinner or a family gathering, we have the perfect table waiting for you.</p>
          <Link href="/reservations" className="btn-primary">Book a Table</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
