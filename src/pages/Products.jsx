import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingCart, MessageCircle, Home } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import './Pages.css';

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
        <div className="pc-price">Rs.{product.price} <span className="pc-unit">/ {product.unit}</span></div>
        <div className="product-card-actions">
          <button className="btn-add-cart" onClick={e => { e.stopPropagation(); addToCart(product); }}>
            <ShoppingCart size={13} /> Add to Cart
          </button>
          <a href="https://wa.me/9779857021032" target="_blank" rel="noreferrer"
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
  const initCat    = searchParams.get('cat')    || 'All Products';
  const initSearch = searchParams.get('search') || '';
  const [activeCat, setActiveCat] = useState(initCat);
  const { searchQuery } = useApp();

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    const q = (initSearch || searchQuery || '').toLowerCase();
    if (q) list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    if (activeCat !== 'All Products') list = list.filter(p => p.category === activeCat);
    return list;
  }, [activeCat, searchQuery, initSearch]);

  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(/images/productshero.png)' }} />
        <div className="page-hero-content">
          <div className="breadcrumb"><Home size={13} /><a href="/">HOME</a><span>›</span><span>PRODUCTS</span></div>
          <h1>Our Product Collection</h1>
          <div className="hero-underline" />
          <p>Discover our complete range of authentic, premium snacks crafted for the perfect crunch.</p>
        </div>
      </div>

      <section className="section" style={{ background: '#F4F4F4', minHeight: 400 }}>
        <div className="container">
          <div className="filter-tabs">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCat(cat)}
                className={`filter-tab${activeCat === cat ? ' filter-tab--active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>
          <p className="results-count">Showing <strong>{filtered.length}</strong> products</p>
          {filtered.length === 0 ? (
            <div className="empty-state">
              <div style={{ fontSize: 48 }}>🔍</div>
              <h3>No products found</h3>
              <p>Try a different search or category</p>
            </div>
          ) : (
            <div className="products-grid">{filtered.map(p => <ProductCard key={p.id} product={p} />)}</div>
          )}
        </div>
      </section>
    </div>
  );
}
