import { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("spice-garden-bookings");
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load bookings");
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("spice-garden-bookings", JSON.stringify(bookings));
    }
  }, [bookings, isLoaded]);

  const addBooking = (booking) => {
    setBookings((prev) => [booking, ...prev]);
  };

  return (
    <BookingContext.Provider value={{ bookings, setBookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be inside BookingProvider");
  return ctx;
}