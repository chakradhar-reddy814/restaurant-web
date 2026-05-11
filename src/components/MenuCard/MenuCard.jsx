import { useCart } from "../../context/CartContext";

export default function MenuCard({ dish }) {
  const { name, description, price, imageUrl, category } = dish;
  const { cartItems, addToCart, removeFromCart } = useCart();
  const item = cartItems.find(i => i.id === dish.id);
  const qty = item ? item.qty : 0;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className={`absolute top-3 left-3 text-white text-xs font-medium px-3 py-1 rounded-full ${category === "Vegetarian" ? "bg-green-600" : "bg-primary"}`}>
          {category === "Vegetarian" ? "🥦 Veg" : "🍗 Non-Veg"}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-heading text-lg text-dark font-semibold leading-tight">{name}</h3>
          <span className="text-primary font-bold text-base whitespace-nowrap">₹{price}</span>
        </div>
        <p className="text-muted text-xs leading-relaxed mb-4">{description}</p>
        {qty === 0 ? (
          <button
            onClick={() => addToCart(dish)}
            className="w-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 py-2 rounded-full text-sm font-medium"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-between border border-primary rounded-full overflow-hidden">
            <button onClick={() => removeFromCart(dish.id)} className="w-10 h-9 text-primary hover:bg-primary hover:text-white transition-all text-xl font-bold">−</button>
            <span className="text-primary font-bold text-sm">{qty}</span>
            <button onClick={() => addToCart(dish)} className="w-10 h-9 text-primary hover:bg-primary hover:text-white transition-all text-xl font-bold">+</button>
          </div>
        )}
      </div>
    </div>
  );
}