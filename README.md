# 🍴 R&R Food Products - React Website

A complete modern e-commerce website for **Riya & Rakshya Food Products**, built using **React.js** with responsive UI, product showcase, cart system, wishlist, WhatsApp ordering, and Vercel deployment.

---

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js 16+ installed
- npm or yarn

---

## ⚙️ Installation

```bash
# 1️⃣ Clone the Repository
git clone https://github.com/AuralithBit0822/Riya-and-Rakshya-Food-Products.git

# 2️⃣ Navigate to Project Folder

```bash
cd rnr-website
```

# 3️⃣ Install Dependencies

```bash
npm install
```

# 4️⃣ Build the Project

```bash
npm run build
```

---

# 🚀 Run Production Build Locally

Install serve package globally:

```bash
npm install -g serve
```

Run the build folder:

```bash
serve -s build
```

Open in browser:

```bash
http://localhost:3000
```

---

## 📁 Project Structure

```bash
Riya-and-Rakshya-Food-Products/
├── public/
│   └── index.html
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── context/
│   │   └── AppContext.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Varieties.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Cart.jsx
│   │   └── Wishlist.jsx
│   │
│   └── styles/
│       └── global.css
│
├── package.json
└── README.md
```

---

## ✅ Pages & Features

| Page | Route | Features |
|------|-------|---------|
| Home | `/` | Hero section, featured products, testimonials, CTA |
| Products | `/products` | Product listing, filters, search, add to cart |
| Product Detail | `/products/:id` | Product details, reviews, related products |
| Varieties | `/varieties` | Food varieties/categories showcase |
| About | `/about` | Company details, mission, vision, team |
| Contact | `/contact` | Contact form, FAQ, WhatsApp support |
| Cart | `/cart` | Cart management, checkout, WhatsApp ordering |
| Wishlist | `/wishlist` | Wishlist management system |

---

## 🎯 Functionality

- 🛒 Add to Cart System
- ❤️ Wishlist Functionality
- 🔍 Product Search & Filters
- 📱 Fully Responsive Design
- ✅ Form Validation
- 💬 WhatsApp Order Integration
- 🔔 Toast Notifications
- 📂 Category Filtering
- ⚡ Fast Performance using Vite
- 🌐 Vercel Deployment

---

## 🔧 Customization

### 📞 Update WhatsApp Number

Update in:

```bash
src/components/Navbar.jsx
src/pages/Cart.jsx
src/pages/Contact.jsx
```

Replace:

```js
href="https://wa.me/YOUR_NUMBER_HERE"
```

---

### ➕ Add Products

In:

```bash
src/data/products.js
```

Add new product object:

```js
{
  id: 17,
  name: 'Your Product',
  category: 'Varieties',
  price: 99,
  unit: '100g'
}
```

---

### 🎨 Change Theme Colors

In:

```bash
src/styles/global.css
```

Edit:

```css
:root {
  --primary: #C8102E;
  --green: #28A745;
  --accent: #FFC107;
}
```

---

## 📦 Dependencies

- React.js
- React DOM
- React Router DOM
- Lucide React
- Vite

---

## 🏗️ Build for Production

```bash
npm run build
```

Production-ready files will be generated inside:

```bash
dist/
```

---

## 🚀 Deployment

This project is deployed on **Vercel**.

### 🌐 Live Website

https://riya-and-rakshya-food-products.vercel.app/

---

## 👨‍💻 Developed By

### Supriya Dwivedi

Full Stack Java Developer & Web Developer

### GitHub

https://github.com/AuralithBit0822

---

## 📄 License

This project is developed for educational and business purposes.

© 2026 Riya and Rakshya Food Products. All rights reserved.