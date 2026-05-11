import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BookingForm from "../components/BookingForm/BookingForm";

export default function ReservationsPage() {
  return (
    <main>
      <Navbar />
      <div
        className="relative pt-40 pb-24 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-accent uppercase tracking-widest text-sm font-medium mb-2">Reservations</p>
          <h1 className="font-heading text-5xl font-bold mb-4">Book Your Table</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">We look forward to welcoming you. Reserve your spot in just a few clicks.</p>
        </div>
      </div>
      <section className="bg-light py-20 px-6">
        <BookingForm />
      </section>
      <Footer />
    </main>
  );
}
