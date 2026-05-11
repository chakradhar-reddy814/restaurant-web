import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <div className="relative pt-40 pb-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600')" }}>
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-accent uppercase tracking-widest text-sm font-medium mb-2">Our Story</p>
          <h1 className="font-heading text-5xl font-bold mb-4">About Spice Garden</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">Passion, tradition and flavors that tell a story.</p>
        </div>
      </div>

      <section className="bg-white">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary uppercase tracking-widest text-sm font-medium mb-2">Who We Are</p>
              <h2 className="font-heading text-4xl text-dark font-bold mb-6">A Legacy of Authentic Flavors</h2>
              <p className="text-muted leading-relaxed mb-4">Founded in 2010, Spice Garden was born from a simple dream — to bring the rich, authentic flavors of Indian cuisine to every table. Our founders grew up in kitchens filled with the aroma of freshly ground spices and slow-cooked gravies.</p>
              <p className="text-muted leading-relaxed mb-8">Today, we continue that legacy with a team of passionate chefs who treat every dish as a work of art. Every recipe is a tribute to generations of culinary tradition.</p>
              <Link href="/reservations" className="btn-primary">Book a Table</Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800" alt="Our Kitchen" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="section-wrapper">
          <h2 className="section-heading">Opening Hours</h2>
          <p className="section-subheading">We are open all week. Walk in or book a table in advance.</p>
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
            {[
              { day: "Monday – Friday", time: "11:00 AM – 11:00 PM" },
              { day: "Saturday",        time: "10:00 AM – 11:30 PM" },
              { day: "Sunday",          time: "10:00 AM – 10:00 PM" },
            ].map((row, i) => (
              <div key={i} className={`flex justify-between px-8 py-4 ${i % 2 === 0 ? "bg-white" : "bg-light"}`}>
                <span className="font-medium text-dark">{row.day}</span>
                <span className="text-primary font-semibold">{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-wrapper">
          <h2 className="section-heading">Find Us</h2>
          <p className="section-subheading">We are located in the heart of Hyderabad. Come visit us!</p>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Spice Garden Location"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: "📍", title: "Address",  info: "123 Food Street, Banjara Hills, Hyderabad, Telangana 500034" },
              { icon: "📞", title: "Phone",    info: "+91 98765 43210"           },
              { icon: "✉️", title: "Email",    info: "hello@spicegarden.com"     },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 bg-light rounded-2xl">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-heading text-lg font-semibold text-dark mb-2">{item.title}</h4>
                <p className="text-muted text-sm">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
