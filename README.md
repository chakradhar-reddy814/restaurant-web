# 🍽️ Spice Garden — Restaurant Website

A fully functional restaurant website built with **Next.js** and **Tailwind CSS**, featuring an interactive menu, table reservations, shopping cart, and order management.

---

## 🌐 Live Demo

> Coming soon — deploy on Vercel

---

## 📸 Screenshots

| Homepage | Menu | Cart | Booking |
|----------|------|------|---------|
| Hero section with restaurant ambience | 32 dishes with Veg/Non-Veg filter | Add items, view total & pay | Reserve table & view ticket |

---

## ✨ Features

- 🏠 **Homepage** — Hero section, featured dishes, booking CTA
- 🍛 **Menu Page** — 32 dishes split into Vegetarian & Non-Vegetarian with search and category filter
- 🛒 **Shopping Cart** — Add/remove items, quantity control, subtotal, tax, total, payment methods
- 📋 **Table Reservations** — Book a table with name, email, date, time, guests
- 🎟️ **Booking Ticket** — Auto-generated booking ID shown as a ticket after reservation
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- ⚡ **Fast Loading** — Built with Next.js for SEO and performance

---

## 🛠️ Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 14 |
| Styling | Tailwind CSS |
| State Management | React Context API |
| Fonts | Google Fonts (Playfair Display + Inter) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/         → Top navigation with all page links
│   ├── Hero/           → Homepage hero section
│   ├── MenuCard/       → Reusable dish card with Add to Cart
│   ├── BookingForm/    → Table reservation form
│   ├── Cart/           → Floating cart sidebar
│   └── Footer/         → Site footer
├── context/
│   ├── CartContext.js  → Global cart state
│   └── BookingContext.js → Global booking state
├── pages/
│   ├── index.js        → Homepage
│   ├── menu.js         → Full menu page
│   ├── reservations.js → Booking page
│   ├── cart.js         → Cart page with payment
│   ├── my-booking.js   → All reserved tables
│   └── about.js        → About + contact + map
└── styles/
    └── globals.css     → Global styles + Tailwind
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or above)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/spice-garden.git

# 2. Go into the project folder
cd spice-garden

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open your browser and go to **http://localhost:3000**

---

## 📄 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, featured dishes, booking CTA |
| Menu | `/menu` | All 32 dishes with filter & search |
| Reservations | `/reservations` | Book a table form |
| View Cart | `/cart` | Cart items, summary, payment |
| Reserved Table | `/my-booking` | All your booked tables as tickets |
| About | `/about` | Story, hours, map, contact |

---

## 🍛 Menu

### 🥦 Vegetarian (16 dishes)
Paneer Butter Masala, Masala Dosa, Vegetable Biryani, Chole Bhature, Palak Paneer, Aloo Gobi, Veg Fried Rice, Hakka Noodles, Margherita Pizza, Veg Pulao, Dal Tadka, Rajma Chawal, Vegetable Manchurian, Stuffed Paratha, Idli Sambar, Veg Spring Rolls

### 🍗 Non-Vegetarian (16 dishes)
Chicken Biryani, Butter Chicken, Mutton Rogan Josh, Fish Curry, Chicken Tikka, Egg Curry, Prawn Masala, Grilled Chicken, Chicken Fried Rice, Chicken Noodles, Lamb Kebabs, Fish Fry, Chicken 65, Mutton Biryani, Egg Fried Rice, Chicken Curry

---

## 🌍 Deployment

### Deploy on Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly at **vercel.com** for auto-deployment on every push.

---

## 📞 Restaurant Info

- 📍 **Address:** 123 Food Street, Banjara Hills, Hyderabad, Telangana 500034
- 📞 **Phone:** +91 98765 43210
- ✉️ **Email:** hello@spicegarden.com
- 🕐 **Hours:** Monday – Sunday: 11:00 AM – 11:00 PM

---

## 👨‍💻 Developer

Built by **Chakradar Reddy**

---

## 📝 License

This project is for personal/client use. All rights reserved.
