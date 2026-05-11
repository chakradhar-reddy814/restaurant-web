import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, totalItems, totalPrice } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-red-700 transition-all"
      >
        <span className="text-2xl">🛒</span>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/50" onClick={() => setOpen(false)} />
          <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl">

            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h2 className="font-heading text-2xl text-dark font-bold">Your Cart 🛒</h2>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-dark text-2xl font-bold">✕</button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="font-heading text-xl text-dark mb-2">Your cart is empty</h3>
                <p className="text-muted text-sm">Add some delicious dishes from our menu!</p>
                <button onClick={() => setOpen(false)} className="btn-primary mt-6">Browse Menu</button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4 bg-light rounded-2xl p-3">
                      <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-dark text-sm truncate">{item.name}</p>
                        <p className="text-primary font-bold text-sm">₹{item.price} × {item.qty}</p>
                        <p className="text-muted text-xs font-medium">= ₹{item.price * item.qty}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all text-sm font-bold flex items-center justify-center">−</button>
                        <span className="text-dark font-bold text-sm w-4 text-center">{item.qty}</span>
                        <button onClick={() => addToCart(item)} className="w-7 h-7 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all text-sm font-bold flex items-center justify-center">+</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-5 border-t border-gray-100 bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted text-sm">Subtotal ({totalItems} items)</span>
                    <span className="text-dark font-semibold">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted text-sm">Taxes (5%)</span>
                    <span className="text-dark font-semibold">₹{Math.round(totalPrice * 0.05)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-5 pt-3 border-t border-gray-100">
                    <span className="font-heading text-lg text-dark font-bold">Total</span>
                    <span className="font-heading text-xl text-primary font-bold">₹{totalPrice + Math.round(totalPrice * 0.05)}</span>
                  </div>
                  <button className="btn-primary w-full text-center py-3">Proceed to Checkout</button>
                  <button onClick={clearCart} className="w-full text-center text-muted text-sm mt-3 hover:text-primary transition-colors">Clear Cart</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}