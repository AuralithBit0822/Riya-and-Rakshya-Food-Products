import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, MessageCircle, Home, ShieldCheck, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import './Pages.css';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isWishlisted } = useApp();
  const product = PRODUCTS.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '50g');

  if (!product) return (
    <div style={{ textAlign: 'center', padding: '80px 24px' }}>
      <h2>Product not found</h2>
      <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => navigate('/products')}>Back to Products</button>
    </div>
  );

  const wishlisted = isWishlisted(product.id);
  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
  const reviews = [
    { name: 'Prakash Bhatta', rating: 5, text: '"Best namkeen in Nepal! My family loves the Kushal All In One. Crunchy, spicy, and full of authentic Nepali flavor. Order received within 2 days in Pokhara!"' },
    { name: 'Niraj Shrestha', rating: 5, text: '"Love the traditional flavors! The Bhujia reminds me of my grandmother\'s recipe. Delivered to my hostel in Pokhara. Highly recommended!"' },
  ];

  return (
    <div style={{ background: '#F4F4F4', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div className="breadwrap">
        <div className="container">
          <div className="pd-breadcrumb">
            <Home size={13} /><Link to="/" className="pd-bc-link">HOME</Link>
            <ChevronRight size={12} /><Link to="/products" className="pd-bc-link">PRODUCTS</Link>
            <ChevronRight size={12} /><span>{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container pd-wrap">
        {/* Main card */}
        <div className="pd-card">
          <div className="pd-img-wrap">
            <img src={product.image} alt={product.name} className="pd-img" />
          </div>
          <div className="pd-info">
            <span className="pd-cat-badge">{product.category}</span>
            <h1 className="pd-title">{product.name}</h1>
            <div className="pd-rating">
              <span style={{ color: '#FFC107', fontSize: 16 }}>{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</span>
              <span style={{ fontSize: 13, color: '#888', marginLeft: 8 }}>({product.reviews} Customer Reviews)</span>
            </div>
            <p className="pd-desc">{product.description}. Carefully crafted using the finest ingredients to deliver the perfect crunch and flavor in every bite.</p>
            <div className="pd-price">Rs. <span className="pd-price-num">{product.price}</span> <span className="pd-price-unit">/ {product.unit}</span></div>
            <div className="pd-sizes-wrap">
              <div className="pd-size-label">Select Size</div>
              <div className="pd-sizes">
                {(product.sizes || ['50g','100g','250g','500g','1kg']).map(sz => (
                  <button key={sz} onClick={() => setSelectedSize(sz)}
                    className={`pd-size-btn${selectedSize === sz ? ' pd-size-btn--active' : ''}`}>{sz}</button>
                ))}
              </div>
            </div>
            <div className="pd-actions">
              <button className="btn-primary" onClick={() => addToCart(product, selectedSize)}>
                <ShoppingCart size={16} /> Add to Cart
              </button>
              <a href="https://wa.me/9779857021032" target="_blank" rel="noreferrer" className="btn-green" style={{ textDecoration: 'none' }}>
                <MessageCircle size={16} /> Chat via WhatsApp
              </a>
            </div>
            <div className="pd-trust">
              <span><ShieldCheck size={13} color="#28A745" /> Secure Checkout</span>
              <span>⚡ Fast Delivery</span>
            </div>
          </div>
        </div>

        {/* Reviews + Ingredients */}
        <div className="pd-reviews-grid">
          <div className="pd-white-card">
            <h3 className="pd-sec-title">Customer Reviews</h3>
            {reviews.map((r, i) => (
              <div key={i} className="pd-review">
                <div className="pd-review-name">{'★'.repeat(r.rating)}<span style={{ color: '#333', marginLeft: 8 }}>{r.name}</span></div>
                <p className="pd-review-text">{r.text}</p>
              </div>
            ))}
          </div>
          <div className="pd-white-card">
            <h3 className="pd-sec-title">Ingredients</h3>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.8 }}>{product.ingredients}</p>
            <h3 className="pd-sec-title" style={{ marginTop: 20 }}>Allergy Information</h3>
            <div className="pd-allergy">{product.allergy}</div>
          </div>
        </div>

        {/* Why grid */}
        <div className="pd-why-grid">
          <div className="pd-quality-card">
            <div className="pd-quality-icon"><ShieldCheck size={28} color="#fff" /></div>
            <h4 className="pd-quality-title">Quality Assured</h4>
            <p className="pd-quality-text">Manufactured in our ISO certified facility with the highest standards of food safety and hygiene.</p>
          </div>
          <div className="pd-white-card">
            <h3 className="pd-sec-title">Why You'll Love It</h3>
            <div className="pd-why-items">
              {[
                { icon: '⭐', t: 'Authentic Flavor', d: 'Crafted with care using time-tested flavor profiles.' },
                { icon: '🕐', t: 'Handmade Touch',  d: 'Each item is carefully handcrafted for unique character.' },
                { icon: '🌿', t: 'Fresh Ingredients',d: 'Sourced locally to ensure peak freshness and quality.' },
                { icon: '🛡', t: 'Sustainable',      d: 'Committed to eco-friendly methods throughout production.' },
              ].map(w => (
                <div key={w.t} className="pd-why-item">
                  <div style={{ fontSize: 24, flexShrink: 0 }}>{w.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{w.t}</div>
                    <div style={{ fontSize: 12, color: '#777', lineHeight: 1.6 }}>{w.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="pd-related">
          <div className="label-tag">EXPLORE MORE</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: '8px 0 20px' }}>You Might Also Like</h2>
          <div className="pd-related-grid">
            {related.map(p => (
              <div key={p.id} className="product-card" onClick={() => navigate(`/products/${p.id}`)}>
                <div className="product-card-img">
                  <img src={p.image} alt={p.name} />
                  <span className="product-card-badge">{p.category}</span>
                  <button className="product-card-heart" onClick={e => { e.stopPropagation(); toggleWishlist(p); }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="product-card-body">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="pc-price">Rs.{p.price} <span className="pc-unit">/ {p.unit}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
