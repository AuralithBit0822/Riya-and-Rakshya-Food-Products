import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Trash2, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useApp();
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=1200&q=80)' }} />
        <div className="page-hero-content">
          <div className="breadcrumb"><Home size={13} /><a href="/">HOME</a><span>›</span><span>Wishlist</span></div>
          <h1>Your Wishlist</h1>
          <div className="hero-underline" />
          <p>Keep track of your favorite snacks and treats, discover new flavors you'll love, and never miss out.</p>
        </div>
      </div>

      <section className="section" style={{ background: '#F4F4F4', minHeight: 380 }}>
        <div className="container">
          {wishlist.length === 0 ? (
            <div style={s.emptyCard}>
              <div style={s.emptyIcon}><Heart size={36} color="#C8102E" /></div>
              <h2 style={s.emptyTitle}>Your wishlist is empty</h2>
              <p style={s.emptySub}>We haven't saved any items yet. Browse our products and click the heart icon to add them here.</p>
              <button className="btn-primary" style={{ borderRadius: 30, padding: '12px 28px', fontSize: 14 }}
                onClick={() => navigate('/products')}>
                Browse Products →
              </button>
            </div>
          ) : (
            <>
              <div style={s.header}>
                <h2 style={s.heading}>Your Wishlist</h2>
                <p style={{ color: '#666', fontSize: 14 }}>Showing <strong>{wishlist.length}</strong> products</p>
              </div>
              <div className="products-grid">
                {wishlist.map(item => (
                  <div key={item.id} className="product-card" onClick={() => navigate(`/products/${item.id}`)}>
                    <div className="product-card-img">
                      <img src={item.image} alt={item.name} />
                      <span className="product-card-badge">{item.category}</span>
                      <button
                        className="product-card-heart active"
                        title="Remove from wishlist"
                        onClick={e => { e.stopPropagation(); toggleWishlist(item); }}
                      >
                        <Trash2 size={13} color="#C8102E" />
                      </button>
                    </div>
                    <div className="product-card-body">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <div style={{ color: '#C8102E', fontWeight: 700, fontSize: 14, margin: '4px 0 8px' }}>
                        Rs.{item.price} <span style={{ color: '#888', fontWeight: 400, fontSize: 12 }}>/ {item.unit}</span>
                      </div>
                      <button
                        className="btn-add-cart"
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={e => { e.stopPropagation(); addToCart(item); }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

const s = {
  emptyCard: {
    background: '#fff',
    borderRadius: 16,
    padding: '70px 40px',
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto',
    boxShadow: '0 2px 16px rgba(0,0,0,0.07)'
  },
  emptyIcon: {
    width: 72, height: 72,
    background: '#FFF0F0',
    borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 20px'
  },
  emptyTitle: { fontSize: 22, fontWeight: 800, marginBottom: 10 },
  emptySub: { color: '#888', fontSize: 14, lineHeight: 1.7, marginBottom: 28, maxWidth: 380, margin: '0 auto 28px' },
  header: { marginBottom: 24 },
  heading: { fontSize: 22, fontWeight: 800, marginBottom: 4 },
};
