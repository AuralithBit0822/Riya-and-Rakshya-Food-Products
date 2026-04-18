import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, MessageCircle, Home, ShieldCheck, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isWishlisted } = useApp();
  const product = PRODUCTS.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '50g');

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 0' }}>
        <h2>Product not found</h2>
        <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  const reviews = [
    { name: 'Aakriti Bista', rating: 4, text: '"Absolutely love these! The Flavor is authentic and it\'s my go-to evening snack. Always keep a few packets in the pantry."' },
    { name: 'Aakriti Bista', rating: 4, text: '"Absolutely love these! The Flavor is authentic and it\'s my go-to evening snack. Always keep a few packets in the pantry."' },
  ];

  return (
    <div style={{ background: '#F4F4F4', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div style={s.breadWrapper}>
        <div className="container">
          <div style={s.breadcrumb}>
            <Home size={13} /><Link to="/" style={s.breadLink}>HOME</Link>
            <ChevronRight size={12} /><Link to="/products" style={s.breadLink}>PRODUCT</Link>
            <ChevronRight size={12} /><Link to="/varieties" style={s.breadLink}>VARITITES1</Link>
            <ChevronRight size={12} /><span style={{ color: '#333', textTransform: 'uppercase' }}>{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '24px 24px 40px' }}>
        {/* Main product card */}
        <div style={s.productCard}>
          <div style={s.imgSection}>
            <img src={product.image} alt={product.name} style={s.productImg} />
          </div>
          <div style={s.infoSection}>
            <span style={s.categoryBadge}>{product.category}</span>
            <h1 style={s.productTitle}>{product.name}</h1>
            <div style={s.ratingRow}>
              <span style={{ color: '#FFC107', fontSize: 16 }}>{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</span>
              <span style={{ fontSize: 13, color: '#888', marginLeft: 8 }}>({product.reviews} Customer Reviews)</span>
            </div>
            <p style={s.productDesc}>{product.description}. Carefully crafted using the finest ingredients to deliver the perfect crunch and flavor in every bite. No cooking needed – just open the pack and enjoy!</p>
            <div style={s.price}>Rs. <span style={s.priceNum}>{product.price}</span> <span style={s.priceUnit}>/ {product.unit}</span></div>

            {/* Size selector */}
            <div style={s.sizeSection}>
              <div style={s.sizeLabel}>Select Size</div>
              <div style={s.sizes}>
                {(product.sizes || ['50g', '100g', '250g', '500g', '1kg']).map(sz => (
                  <button key={sz} onClick={() => setSelectedSize(sz)}
                    style={{ ...s.sizeBtn, ...(selectedSize === sz ? s.sizeBtnActive : {}) }}>
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <div style={s.actions}>
              <button className="btn-primary" style={{ padding: '12px 28px', fontSize: 14 }}
                onClick={() => addToCart(product, selectedSize)}>
                <ShoppingCart size={16} /> Add to Cart
              </button>
              <a href="https://wa.me/9779800000000" target="_blank" rel="noreferrer" className="btn-green" style={{ padding: '12px 24px', fontSize: 14, textDecoration: 'none' }}>
                <MessageCircle size={16} /> Chat via WhatsApp
              </a>
            </div>
            <div style={s.badges}>
              <span style={s.badge}><ShieldCheck size={13} color="#28A745" /> Secure Checkout</span>
              <span style={s.badge}>⚡ Fast Delivery</span>
            </div>
          </div>
        </div>

        {/* Reviews + Ingredients */}
        <div style={s.reviewsGrid}>
          <div style={s.reviewsCard}>
            <h3 style={s.sectionTitle}>Customer Reviews</h3>
            {reviews.map((r, i) => (
              <div key={i} style={s.review}>
                <div style={s.reviewName}>{'★'.repeat(r.rating)}<span style={{ color: '#333', marginLeft: 8 }}>{r.name}</span></div>
                <p style={s.reviewText}>{r.text}</p>
              </div>
            ))}
          </div>
          <div style={s.ingredientsCard}>
            <h3 style={s.sectionTitle}>Ingredients</h3>
            <p style={s.ingredientsText}>Wheat flour, Edible Vegetable Oil, Salt, Spices &amp; Condiments (Chili, Coriander, cumin, Turmeric), Onion Powder, Garlic Powder, Flavor Enhancers.</p>
            <h3 style={{ ...s.sectionTitle, marginTop: 20 }}>Allergy Information</h3>
            <div style={s.allergyBox}>Contains <strong>Wheat (Gluten)</strong>. May contain fine traces of <strong>beautiful peanuts, soy, and mustard</strong>.</div>
          </div>
        </div>

        {/* Why you'll love it */}
        <div style={s.whyGrid}>
          <div style={s.qualityCard}>
            <div style={s.qualityIcon}><ShieldCheck size={28} color="#fff" /></div>
            <h4 style={s.qualityTitle}>Quality Assured</h4>
            <p style={s.qualityText}>Manufactured in our state-of-the ISO certified facility. We adhere to the highest standards of food safety and hygiene to ensure every pack delivers premium quality.</p>
          </div>
          <div style={s.whyCard}>
            <h3 style={s.whyTitle}>Why You'll Love It</h3>
            <div style={s.whyItems}>
              {[
                { icon: '⭐', t: 'Authentic Flavor', d: 'Crafted with care using time-tested flavor profiles.' },
                { icon: '🕐', t: 'Handmade Touch', d: 'Each item is carefully handcrafted for unique character.' },
                { icon: '🌿', t: 'Fresh Ingredients', d: 'Sourced locally to ensure peak freshness and quality.' },
                { icon: '🛡', t: 'Sustainable Practices', d: 'Committed to eco-friendly methods throughout production.' },
              ].map(w => (
                <div key={w.t} style={s.whyItem}>
                  <div style={s.whyItemIcon}>{w.icon}</div>
                  <div>
                    <div style={s.whyItemTitle}>{w.t}</div>
                    <div style={s.whyItemText}>{w.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: 40 }}>
          <div style={{ marginBottom: 20 }}>
            <div className="label-tag">EXPLORE MORE</div>
            <h2 style={{ fontSize: 24, fontWeight: 800 }}>You Might Also Like</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {related.map(p => (
              <div key={p.id} className="product-card" onClick={() => navigate(`/products/${p.id}`)}>
                <div className="product-card-img">
                  <img src={p.image} alt={p.name} />
                  <span className="product-card-badge">{p.category}</span>
                  <button className="product-card-heart" onClick={e => { e.stopPropagation(); toggleWishlist(p); }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </button>
                </div>
                <div className="product-card-body">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div style={{ color: '#C8102E', fontWeight: 700, fontSize: 13 }}>Rs.{p.price} <span style={{ color: '#888', fontWeight: 400 }}>/ {p.unit}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const s = {
  breadWrapper: { background: '#fff', borderBottom: '1px solid #eee', padding: '10px 0' },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#888' },
  breadLink: { color: '#888', textDecoration: 'none' },
  productCard: { background: '#fff', borderRadius: 12, padding: 24, display: 'grid', gridTemplateColumns: '380px 1fr', gap: 40, marginBottom: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  imgSection: { borderRadius: 10, overflow: 'hidden', height: 320, background: '#f5f0e8' },
  productImg: { width: '100%', height: '100%', objectFit: 'cover' },
  infoSection: {},
  categoryBadge: { background: '#FFF3E0', color: '#E65100', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 },
  productTitle: { fontSize: 26, fontWeight: 800, margin: '10px 0 6px', color: '#1a1a1a' },
  ratingRow: { display: 'flex', alignItems: 'center', marginBottom: 12 },
  productDesc: { color: '#666', fontSize: 13, lineHeight: 1.8, marginBottom: 16 },
  price: { fontSize: 16, color: '#C8102E', fontWeight: 700, marginBottom: 16 },
  priceNum: { fontSize: 26 },
  priceUnit: { color: '#888', fontWeight: 400, fontSize: 14 },
  sizeSection: { marginBottom: 20 },
  sizeLabel: { fontWeight: 700, fontSize: 14, marginBottom: 10 },
  sizes: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  sizeBtn: { background: '#fff', border: '1.5px solid #ddd', borderRadius: 6, padding: '7px 16px', fontSize: 13, fontWeight: 500, cursor: 'pointer' },
  sizeBtnActive: { background: '#C8102E', border: '1.5px solid #C8102E', color: '#fff', fontWeight: 700 },
  actions: { display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 14 },
  badges: { display: 'flex', gap: 16, flexWrap: 'wrap' },
  badge: { display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#555' },
  reviewsGrid: { display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, marginBottom: 20 },
  reviewsCard: { background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  ingredientsCard: { background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  sectionTitle: { fontSize: 16, fontWeight: 700, marginBottom: 16 },
  review: { borderBottom: '1px solid #f0f0f0', paddingBottom: 16, marginBottom: 16 },
  reviewName: { fontSize: 13, color: '#FFC107', fontWeight: 600, marginBottom: 6 },
  reviewText: { fontSize: 13, color: '#666', lineHeight: 1.7 },
  ingredientsText: { fontSize: 13, color: '#555', lineHeight: 1.8 },
  allergyBox: { background: '#FFF3E0', border: '1px solid #FFB74D', borderRadius: 8, padding: 12, fontSize: 13, color: '#E65100' },
  whyGrid: { display: 'grid', gridTemplateColumns: '260px 1fr', gap: 20, marginBottom: 20 },
  qualityCard: { background: '#1a1a1a', borderRadius: 12, padding: 24, textAlign: 'center' },
  qualityIcon: { width: 56, height: 56, borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' },
  qualityTitle: { color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 10 },
  qualityText: { color: '#aaa', fontSize: 12, lineHeight: 1.7 },
  whyCard: { background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  whyTitle: { fontSize: 18, fontWeight: 800, marginBottom: 20 },
  whyItems: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 },
  whyItem: { display: 'flex', gap: 12 },
  whyItemIcon: { fontSize: 24, flexShrink: 0 },
  whyItemTitle: { fontWeight: 700, fontSize: 13, marginBottom: 4 },
  whyItemText: { fontSize: 12, color: '#777', lineHeight: 1.6 },
};
