import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart, clearCart, totalItems, totalPrice } = useCart();
  const tax   = Math.round(totalPrice * 0.05);
  const grand = totalPrice + tax;

  return (
    <main>
      <Navbar />
      <div className="pt-28 pb-20 min-h-screen bg-light px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading text-4xl text-dark font-bold mb-2">Your Cart 🛒</h1>
          <p className="text-muted mb-10">{totalItems > 0 ? `${totalItems} item(s) added` : "Nothing added yet"}</p>

          {cartItems.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl shadow-sm">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="font-heading text-2xl text-dark mb-2">Your cart is empty</h3>
              <p className="text-muted mb-6">Add dishes from the menu first!</p>
              <Link href="/menu" className="btn-primary">Browse Menu</Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm">
                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-lg text-dark font-semibold">{item.name}</p>
                      <p className="text-muted text-xs mb-1">{item.category}</p>
                      <p className="text-primary font-bold">₹{item.price} each</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="flex items-center gap-2 border border-primary rounded-full px-2 py-1">
                        <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 text-primary hover:bg-primary hover:text-white rounded-full transition-all font-bold flex items-center justify-center">−</button>
                        <span className="text-dark font-bold w-5 text-center">{item.qty}</span>
                        <button onClick={() => addToCart(item)}         className="w-7 h-7 text-primary hover:bg-primary hover:text-white rounded-full transition-all font-bold flex items-center justify-center">+</button>
                      </div>
                      <p className="text-dark font-semibold text-sm">₹{item.price * item.qty}</p>
                    </div>
                  </div>
                ))}
                <button onClick={clearCart} className="text-muted text-sm hover:text-primary transition-colors">🗑️ Clear Cart</button>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="font-heading text-xl text-dark font-bold mb-4">Order Summary</h3>
                  <div className="space-y-2 mb-4">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted truncate mr-2">{item.name} × {item.qty}</span>
                        <span className="text-dark font-medium shrink-0">₹{item.price * item.qty}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Subtotal</span>
                      <span className="text-dark font-medium">₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Tax (5%)</span>
                      <span className="text-dark font-medium">₹{tax}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-100">
                      <span className="font-heading text-lg font-bold text-dark">Total</span>
                      <span className="font-heading text-xl font-bold text-primary">₹{grand}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="font-heading text-lg text-dark font-bold mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    {[
                      { id: "upi",  label: "UPI Payment",        icon: "📱", desc: "GPay, PhonePe, Paytm"    },
                      { id: "card", label: "Credit / Debit Card", icon: "💳", desc: "Visa, Mastercard, Rupay" },
                      { id: "cod",  label: "Cash on Delivery",    icon: "💵", desc: "Pay at the restaurant"   },
                    ].map((method, i) => (
                      <label key={method.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-primary transition-colors">
                        <input type="radio" name="payment" defaultChecked={i === 0} className="accent-primary" />
                        <span className="text-xl">{method.icon}</span>
                        <div>
                          <p className="text-dark text-sm font-medium">{method.label}</p>
                          <p className="text-muted text-xs">{method.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <button className="btn-primary w-full text-center mt-5 py-3">Pay ₹{grand}</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}