import { useBooking } from "../context/BookingContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export default function MyBookingPage() {
  const { bookings } = useBooking();

  return (
    <main>
      <Navbar />
      <div className="pt-28 pb-20 min-h-screen bg-light px-6">
        <div className="max-w-lg mx-auto">
          <h1 className="font-heading text-4xl text-dark font-bold mb-2 text-center">Reserved Tables 📋</h1>
          <p className="text-muted text-center mb-10">Your active table reservation details.</p>

          {!bookings || bookings.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl shadow-sm">
              <div className="text-6xl mb-4">🪑</div>
              <h3 className="font-heading text-2xl text-dark mb-2">No booking found</h3>
              <p className="text-muted mb-6">You have not reserved a table yet.</p>
              <Link href="/reservations" className="btn-primary">Book a Table</Link>
            </div>
          ) : (
            <div className="space-y-8">
              {bookings.map((ticket, index) => (
                <div key={ticket.bookingId || index} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="bg-primary px-8 py-8 text-white text-center">
                    <div className="text-5xl mb-3">🎟️</div>
                    <h2 className="font-heading text-3xl font-bold mb-1">Booking Confirmed!</h2>
                    <p className="text-white/70 text-sm">Your table has been reserved successfully.</p>
                  </div>

                  <div className="px-8 py-2">
                    <div className="flex items-center py-1">
                      <div className="w-6 h-6 rounded-full bg-light border-2 border-gray-200 -ml-11 shrink-0" />
                      <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-4" />
                      <div className="w-6 h-6 rounded-full bg-light border-2 border-gray-200 -mr-11 shrink-0" />
                    </div>
                  </div>

                  <div className="px-8 py-6">
                    <div className="text-center mb-6">
                      <p className="text-muted text-xs uppercase tracking-widest mb-1">Booking ID</p>
                      <p className="font-heading text-2xl font-bold text-primary tracking-wider">{ticket.bookingId}</p>
                    </div>
                    {[
                      { label: "Guest Name", value: ticket.name,                                                       icon: "👤" },
                      { label: "Email",      value: ticket.email,                                                      icon: "✉️" },
                      { label: "Phone",      value: ticket.phone || "Not provided",                                    icon: "📞" },
                      { label: "Date",       value: ticket.date,                                                       icon: "📅" },
                      { label: "Time",       value: ticket.time,                                                       icon: "🕐" },
                      { label: "Guests",     value: `${ticket.guests} ${ticket.guests === "1" ? "Person" : "People"}`, icon: "👥" },
                    ].map(row => (
                      <div key={row.label} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{row.icon}</span>
                          <span className="text-muted text-sm">{row.label}</span>
                        </div>
                        <span className="text-dark font-medium text-sm">{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="px-8 py-2">
                    <div className="flex items-center py-1">
                      <div className="w-6 h-6 rounded-full bg-light border-2 border-gray-200 -ml-11 shrink-0" />
                      <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-4" />
                      <div className="w-6 h-6 rounded-full bg-light border-2 border-gray-200 -mr-11 shrink-0" />
                    </div>
                  </div>

                  <div className="px-8 py-6 bg-light text-center">
                    <p className="text-muted text-xs mb-1">Booked on {ticket.bookedAt}</p>
                    <p className="text-dark text-sm font-medium">📍 123 Food Street, Hyderabad</p>
                    <p className="text-muted text-xs mt-1">Please arrive 10 minutes before your reservation.</p>
                  </div>
                </div>
              ))}
              
              <div className="px-8 py-6 text-center">
                <Link href="/reservations" className="btn-primary">Book Another Table</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}