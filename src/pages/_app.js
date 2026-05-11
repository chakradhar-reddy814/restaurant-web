import "../styles/globals.css";
import { CartProvider } from "../context/CartContext";
import { BookingProvider } from "../context/BookingContext";
import Cart from "../components/Cart/Cart";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    // If not logged in and trying to access a page other than login
    if (!isLoggedIn && router.pathname !== "/login") {
      router.push("/login");
    } else {
      setIsChecking(false);
    }
  }, [router.pathname]);

  if (isChecking) {
    return <div className="min-h-screen bg-light flex items-center justify-center">Loading...</div>; // Prevent flash of unprotected content
  }

  return (
    <BookingProvider>
      <CartProvider>
        <Component {...pageProps} />
        {/* Only show Cart if not on login page */}
        {router.pathname !== "/login" && <Cart />}
      </CartProvider>
    </BookingProvider>
  );
}