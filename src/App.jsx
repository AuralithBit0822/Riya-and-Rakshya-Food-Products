import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Varieties from './pages/Varieties';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import './styles/global.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/varieties" element={<Varieties />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={
              <div style={{ textAlign: 'center', padding: '80px 24px' }}>
                <h1 style={{ fontSize: 60, fontWeight: 900, color: '#C8102E' }}>404</h1>
                <h2>Page Not Found</h2>
                <a href="/" style={{ color: '#C8102E', fontWeight: 600, display: 'block', marginTop: 20 }}>Go Home →</a>
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}
