import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MenuCard from "../components/MenuCard/MenuCard";
import { useState } from "react";

const vegDishes = [
  { id: 1,  name: "Paneer Butter Masala",   description: "Soft paneer cubes in a rich, buttery tomato gravy with aromatic spices.",         price: 280, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600" },
  { id: 2,  name: "Masala Dosa",            description: "Crispy rice crepe filled with spiced potato masala, served with chutney.",         price: 120, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600" },
  { id: 3,  name: "Vegetable Biryani",      description: "Fragrant basmati rice cooked with fresh vegetables and whole spices.",             price: 240, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600" },
  { id: 4,  name: "Chole Bhature",          description: "Fluffy deep-fried bread served with spiced chickpea curry.",                       price: 160, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600" },
  { id: 5,  name: "Palak Paneer",           description: "Fresh cottage cheese in a smooth, spiced spinach gravy.",                          price: 260, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=600" },
  { id: 6,  name: "Aloo Gobi",              description: "Stir-fried potatoes and cauliflower tossed with turmeric and cumin.",              price: 180, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600" },
  { id: 7,  name: "Veg Fried Rice",         description: "Wok-tossed basmati rice with fresh vegetables and soy sauce.",                    price: 160, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600" },
  { id: 8,  name: "Hakka Noodles",          description: "Stir-fried noodles with vegetables in Indo-Chinese style sauces.",                 price: 180, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600" },
  { id: 9,  name: "Margherita Pizza",       description: "Classic thin-crust pizza with tomato sauce, fresh mozzarella and basil.",          price: 320, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600" },
  { id: 10, name: "Veg Pulao",              description: "Lightly spiced basmati rice cooked with mixed vegetables and whole spices.",       price: 200, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600" },
  { id: 11, name: "Dal Tadka",              description: "Yellow lentils tempered with ghee, cumin, garlic and dried red chillies.",         price: 160, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600" },
  { id: 12, name: "Rajma Chawal",           description: "Hearty kidney bean curry served over steamed basmati rice.",                       price: 180, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600" },
  { id: 13, name: "Vegetable Manchurian",   description: "Crispy veggie balls tossed in a tangy Indo-Chinese Manchurian sauce.",             price: 200, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600" },
  { id: 14, name: "Stuffed Paratha",        description: "Whole wheat flatbread stuffed with spiced potato, served with butter and pickle.", price: 100, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600" },
  { id: 15, name: "Idli Sambar",            description: "Soft steamed rice cakes served with lentil sambar and coconut chutney.",           price: 80,  category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600" },
  { id: 16, name: "Veg Spring Rolls",       description: "Crispy golden rolls stuffed with stir-fried vegetables and glass noodles.",        price: 140, category: "Vegetarian", imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600" },
];

const nonVegDishes = [
  { id: 17, name: "Chicken Biryani",    description: "Aromatic basmati rice layered with tender spiced chicken and caramelized onions.",   price: 380, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600" },
  { id: 18, name: "Butter Chicken",     description: "Tender chicken in a rich, creamy tomato-based sauce with aromatic spices.",          price: 320, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600" },
  { id: 19, name: "Mutton Rogan Josh",  description: "Slow-cooked Kashmiri mutton in a bold, deeply spiced red gravy.",                    price: 420, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600" },
  { id: 20, name: "Fish Curry",         description: "Fresh fish simmered in a tangy coconut and tamarind-based curry.",                   price: 360, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600" },
  { id: 21, name: "Chicken Tikka",      description: "Juicy chicken marinated in yogurt and spices, grilled in a tandoor oven.",           price: 300, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600" },
  { id: 22, name: "Egg Curry",          description: "Boiled eggs cooked in a spiced onion-tomato masala gravy.",                          price: 200, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600" },
  { id: 23, name: "Prawn Masala",       description: "Succulent prawns cooked in a fiery, tangy masala sauce.",                            price: 440, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600" },
  { id: 24, name: "Grilled Chicken",    description: "Herb-marinated whole chicken grilled to juicy perfection.",                          price: 340, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600" },
  { id: 25, name: "Chicken Fried Rice", description: "Wok-tossed rice with egg, chicken strips and vegetables in soy sauce.",              price: 240, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600" },
  { id: 26, name: "Chicken Noodles",    description: "Stir-fried noodles with tender chicken strips in Indo-Chinese sauces.",               price: 260, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600" },
  { id: 27, name: "Lamb Kebabs",        description: "Minced lamb mixed with spices and herbs, skewered and grilled over charcoal.",       price: 380, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600" },
  { id: 28, name: "Fish Fry",           description: "Crispy fried fish marinated in spiced batter, served with mint chutney.",            price: 320, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600" },
  { id: 29, name: "Chicken 65",         description: "Deep-fried spicy chicken tossed with curry leaves and green chillies.",              price: 280, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600" },
  { id: 30, name: "Mutton Biryani",     description: "Slow-cooked mutton layered with saffron-infused basmati rice.",                      price: 450, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600" },
  { id: 31, name: "Egg Fried Rice",     description: "Fluffy wok-tossed rice with scrambled eggs, spring onions and soy sauce.",           price: 180, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600" },
  { id: 32, name: "Chicken Curry",      description: "Classic home-style chicken curry cooked in a rich onion-tomato masala.",             price: 300, category: "Non-Veg", imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600" },
];

const tabs = ["All", "Vegetarian", "Non-Veg"];

export default function MenuPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const allDishes = [...vegDishes, ...nonVegDishes];

  const filtered = allDishes
    .filter(d => active === "All" || d.category === active)
    .filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <Navbar />

      <div className="pt-24 pb-10 bg-light text-center px-6">
        <p className="text-primary uppercase tracking-widest text-sm font-medium mb-2">Explore</p>
        <h1 className="font-heading text-5xl text-dark font-bold mb-4">Our Menu</h1>
        <p className="text-muted text-lg max-w-xl mx-auto mb-8">
          Fresh ingredients, authentic recipes, unforgettable flavors.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary transition-colors shadow-sm"
          />
        </div>

        <div className="flex justify-center gap-3 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === tab
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-dark border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {tab === "Vegetarian" ? "🥦 Vegetarian" : tab === "Non-Veg" ? "🍗 Non-Vegetarian" : "🍽️ All Dishes"}
            </button>
          ))}
        </div>
      </div>

      {(active === "All" || active === "Vegetarian") && (
        <section className="bg-white">
          <div className="section-wrapper pt-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🥦</span>
              <h2 className="font-heading text-3xl text-dark font-bold">Vegetarian</h2>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full ml-2">
                {vegDishes.filter(d => d.name.toLowerCase().includes(search.toLowerCase())).length} dishes
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {vegDishes
                .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
                .map(dish => <MenuCard key={dish.id} dish={dish} />)
              }
            </div>
          </div>
        </section>
      )}

      {(active === "All" || active === "Non-Veg") && (
        <section className="bg-light">
          <div className="section-wrapper pt-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🍗</span>
              <h2 className="font-heading text-3xl text-dark font-bold">Non-Vegetarian</h2>
              <span className="bg-red-100 text-red-700 text-xs font-medium px-3 py-1 rounded-full ml-2">
                {nonVegDishes.filter(d => d.name.toLowerCase().includes(search.toLowerCase())).length} dishes
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {nonVegDishes
                .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
                .map(dish => <MenuCard key={dish.id} dish={dish} />)
              }
            </div>
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="font-heading text-2xl text-dark mb-2">No dishes found</h3>
          <p className="text-muted">Try searching for something else.</p>
        </div>
      )}

      <Footer />
    </main>
  );
}
