import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingCart, MessageCircle, Home } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, CATEGORIES } from '../data/products';

function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useApp();
  const navigate = useNavigate();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
      <div className="product-card-img">
        <img src={product.image} alt={product.name} />
        <span className="product-card-badge">{product.category}</span>
        <button className={`product-card-heart${wishlisted ? ' active' : ''}`}
          onClick={e => { e.stopPropagation(); toggleWishlist(product); }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill={wishlisted ? '#C8102E' : 'none'} stroke={wishlisted ? '#C8102E' : '#999'} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div style={{ color: '#C8102E', fontWeight: 700, fontSize: 14, margin: '4px 0' }}>
          Rs.{product.price} <span style={{ color: '#888', fontWeight: 400, fontSize: 12 }}>/ {product.unit}</span>
        </div>
        <div className="product-card-actions">
          <button className="btn-add-cart" onClick={e => { e.stopPropagation(); addToCart(product); }}>
            <ShoppingCart size={13} /> Add to Cart
          </button>
          <a href="https://wa.me/9779800000000" target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()} className="btn-whatsapp-sm">
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [searchParams] = useSearchParams();
  const initCat = searchParams.get('cat') || 'All Products';
  const initSearch = searchParams.get('search') || '';
  const [activeCategory, setActiveCategory] = useState(initCat);
  const { searchQuery } = useApp();

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    const q = (initSearch || searchQuery || '').toLowerCase();
    if (q) list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    if (activeCategory !== 'All Products') list = list.filter(p => p.category === activeCategory);
    return list;
  }, [activeCategory, searchQuery, initSearch]);

  return (
    <div>
      {/* Hero */}
      <div className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: 'url(/images/productshero.png)' }} />
        <div className="page-hero-content">
          <div className="breadcrumb">
            <Home size={13} /><a href="/">HOME</a><span>›</span><span>PRODUCTS</span>
          </div>
          <h1>Our Product Collection</h1>
          <div className="hero-underline" />
          <p>Discover our complete range of authentic, premium snacks crafted for the perfect crunch.</p>
        </div>
      </div>

      {/* Content */}
      <section className="section" style={{ background: '#F4F4F4', minHeight: 400 }}>
        <div className="container">
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: 'none',
                  background: activeCategory === cat ? '#C8102E' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#555',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
                }}>
                {cat}
              </button>
            ))}
          </div>

          <div style={{ marginBottom: 20, color: '#666', fontSize: 13 }}>
            Showing <strong>{filtered.length}</strong> products
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#999' }}>
              <div style={{ fontSize: 48 }}>🔍</div>
              <h3 style={{ marginTop: 16 }}>No products found</h3>
              <p style={{ marginTop: 8 }}>Try a different search or category</p>
            </div>
          ) : (
            <div className="products-grid">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
