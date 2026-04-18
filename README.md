# R&R Food Products - React Website

A complete e-commerce website for **Riya & Rakshya Food Products**, built with React.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate to project folder
cd rnr-website

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
rnr-website/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx                  # Main app with routing
│   ├── index.jsx                # React entry point
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navbar with search, cart, wishlist
│   │   └── Footer.jsx           # Footer with subscribe form
│   ├── context/
│   │   └── AppContext.jsx       # Global state (cart, wishlist, toasts)
│   ├── data/
│   │   └── products.js          # Product data, categories, teams, testimonials
│   ├── pages/
│   │   ├── Home.jsx             # Homepage with hero, bestsellers, story, CTA
│   │   ├── Products.jsx         # Product listing with category filters
│   │   ├── ProductDetails.jsx   # Product detail page
│   │   ├── Varieties.jsx        # Varieties/categories grid page
│   │   ├── About.jsx            # About us page
│   │   ├── Contact.jsx          # Contact page with validated form
│   │   ├── Cart.jsx             # Cart & checkout with WhatsApp ordering
│   │   └── Wishlist.jsx         # Wishlist page (empty + filled states)
│   └── styles/
│       └── global.css           # Global CSS, variables, utilities
└── package.json
```

---

## ✅ Pages & Features

| Page | Route | Features |
|------|-------|---------|
| Home | `/` | Hero, bestsellers grid, feature strip, story, CTA, testimonials, quality section |
| Products | `/products` | Category filter tabs, search, product grid, add to cart |
| Product Detail | `/products/:id` | Size selector, reviews, ingredients, allergy info, related products |
| Varieties | `/varieties` | Varieties grid, featured banner, CTA section |
| About | `/about` | Story, mission/vision, what we manufacture, quality, stats, team |
| Contact | `/contact` | Validated contact form, FAQ accordion, map, WhatsApp button |
| Cart | `/cart` | Cart items, qty update, remove, delivery form, WhatsApp ordering, eSewa payment |
| Wishlist | `/wishlist` | Empty state, product grid with remove & add-to-cart |

---

## 🎯 Functionality

- **Cart**: Add/remove items, quantity control, clear all, order via WhatsApp
- **Wishlist**: Toggle heart icon on any product, persist during session
- **Search**: Search bar in navbar, filters product listing
- **Form Validation**: Contact form + checkout form with real-time error messages
- **WhatsApp Integration**: Order details auto-formatted and sent via WhatsApp
- **Toast Notifications**: Add to cart/wishlist feedback
- **FAQ Accordion**: Expandable questions on Contact page
- **Category Filtering**: Filter products by variety on Products page

---

## 🔧 Customization

### Update WhatsApp Number
In `src/components/Navbar.jsx`, `src/pages/Cart.jsx`, and `src/pages/Contact.jsx`:
```js
href="https://wa.me/YOUR_NUMBER_HERE"
```

### Add Products
In `src/data/products.js`, add to the `PRODUCTS` array:
```js
{ id: 17, name: 'Your Product', category: 'Varities-1', price: 99, unit: '100g', ... }
```

### Change Colors
In `src/styles/global.css`:
```css
:root {
  --primary: #C8102E;   /* Red */
  --green: #28A745;     /* WhatsApp/buttons */
  --accent: #FFC107;    /* Yellow accent */
}
```

---

## 📦 Dependencies

- `react` + `react-dom` — UI framework
- `react-router-dom` — Client-side routing
- `lucide-react` — Icon library

---

## 🏗 Build for Production

```bash
npm run build
```

Output in `/build` folder, ready to deploy on Netlify, Vercel, or any static host.
