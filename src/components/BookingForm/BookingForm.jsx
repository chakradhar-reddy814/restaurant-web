import { useState } from "react";
import { useBooking } from "../../context/BookingContext";
import { useRouter } from "next/router";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "2" });
  const { addBooking } = useBooking();
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = "SG" + Math.random().toString(36).substring(2, 8).toUpperCase();
    addBooking({ ...form, bookingId, bookedAt: new Date().toLocaleString() });
    router.push("/my-booking");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-10">
      <h2 className="font-heading text-3xl text-dark text-center mb-2">Reserve a Table</h2>
      <p className="text-muted text-center mb-8">Fill in the details and we will confirm your booking.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Full Name", name: "name",  type: "text",  placeholder: "Your full name"  },
          { label: "Email",     name: "email", type: "email", placeholder: "your@email.com"  },
          { label: "Phone",     name: "phone", type: "tel",   placeholder: "+91 98765 43210" },
        ].map(f => (
          <div key={f.name}>
            <label className="block text-sm font-medium text-dark mb-2">{f.label}</label>
            <input
              type={f.type} name={f.name} value={form[f.name]}
              onChange={handleChange} placeholder={f.placeholder}
              required={f.name !== "phone"}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-dark mb-2">Number of Guests</label>
          <select name="guests" value={form.guests} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors">
            {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-2">Date</label>
          <input type="date" name="date" required value={form.date} onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-2">Time</label>
          <select name="time" required value={form.time} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors">
            <option value="">Select time</option>
            {["11:00 AM","12:00 PM","1:00 PM","2:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM"].map(t =>
              <option key={t} value={t}>{t}</option>
            )}
          </select>
        </div>
      </div>
      <button type="submit" className="btn-primary w-full text-center mt-8 py-4 text-base">
        Confirm Reservation
      </button>
    </form>
  );
}