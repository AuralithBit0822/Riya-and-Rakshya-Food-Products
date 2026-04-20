import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, TESTIMONIALS } from '../data/products';
import './Home.css';

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
          <svg width="14" height="14" viewBox="0 0 24 24"
            fill={wishlisted ? '#C8102E' : 'none'}
            stroke={wishlisted ? '#C8102E' : '#999'} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div style={{ color: '#C8102E', fontWeight: 700, fontSize: 14, margin: '4px 0 8px' }}>
          Rs.{product.price} <span style={{ color: '#888', fontWeight: 400, fontSize: 12 }}>/ {product.unit}</span>
        </div>
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

const HERO_ITEMS = [
  { img: '/images/products/Potato.jpg',                     bg: '#f0ece4' },
  { img: '/images/products/Korean_Hot_Spicy.png',           bg: '#3a1f10' },
  { img: '/images/products/kushal_all_in_opne_namkeen.png', bg: '#1f2c1f' },
  { img: '/images/products/Palak_paneer_Fryums.png',        bg: '#e6f2e6' },
];

export default function Home() {
  const navigate  = useNavigate();
  const [tPage, setTPage] = useState(0);
  const bestsellers = PRODUCTS.slice(0, 8);

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero__content">
          <div className="home-hero__badge">🏔 नेपालका स्वाद</div>
          <h1 className="home-hero__h1">
            One Bite &amp; You Won't<br />
            Stop <span style={{ color: '#FFC107' }}>Craving</span>
          </h1>
          <p className="home-hero__sub">
            Instant noodles, crunchy snacks &amp; bulk packs delivered
            straight to your door. Freshness guaranteed in every bite.
          </p>
          <div className="home-hero__btns">
            <button className="home-hero__btn-shop" onClick={() => navigate('/products')}>
              🛒 Shop Now
            </button>
            <button className="home-hero__btn-dist" onClick={() => navigate('/contact')}>
              Become a Distributor →
            </button>
          </div>
          <div className="home-hero__stats">
            {[['500+','Happy Retailers'],['10+','Product Lines'],['77','Districts']].map(([n,l]) => (
              <div key={l} className="home-hero__stat">
                <span className="home-hero__stat-num">{n}</span>
                <span className="home-hero__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2×2 product grid */}
        <div className="home-hero__grid">
          {HERO_ITEMS.map((item, i) => (
            <div key={i} className="home-hero__cell" style={{ background: item.bg }}>
              <img src={item.img} alt={`Product ${i+1}`} className="home-hero__cell-img" />
            </div>
          ))}
        </div>
      </section>

      {/* ── BESTSELLERS ───────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="label-tag" style={{ marginBottom: 4 }}>FEATURED PRODUCT</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#222' }}>Our Bestsellers</h2>
          </div>
          <div className="products-grid">
            {bestsellers.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button className="btn-outline" style={{ padding: '12px 36px' }}
              onClick={() => navigate('/products')}>View All Products →</button>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ────────────────────────────────── */}
      <section className="home-features">
        <div className="container">
          <div className="home-features__row">
            {[
              { icon: '🍽', label: 'Delicious Taste',     sub: 'Authentic Nepal flavours by all ages' },
              { icon: '🛡', label: 'Trusted Brand',        sub: 'Tested by thousands of customers' },
              { icon: '🌿', label: 'Fresh Ingredients',    sub: '100% safe and chemical free' },
              { icon: '🧼', label: 'Hygienic Preparation', sub: '100% safe and clean environment' },
              { icon: '🚚', label: 'Fast Delivery',        sub: 'Same day dispatch guaranteed' },
            ].map(f => (
              <div key={f.label} className="home-features__item">
                <div className="home-features__icon">{f.icon}</div>
                <div>
                  <div className="home-features__label">{f.label}</div>
                  <div className="home-features__sub">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="home-story">
            <div className="home-story__img">
              <img src="/images/products/kushal_all_in_opne_namkeen.png" alt="R&R Story" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className="home-story__text">
              <div className="label-tag">ABOUT US</div>
              <h2 style={{ fontSize: 26, fontWeight: 800, margin: '10px 0 16px' }}>The R&amp;R Story</h2>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
                We Started with one goal: make snacks that are fast, tasty, and satisfying. From our kitchen to your table, every bite is crafted with care, using quality ingredients and traditional recipes. We believe that great taste comes from consistency and passion in every step of the process.
              </p>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
                Today, Riya and Rakshya Food Products manufactures over 50 varieties of Instant noodles, namkeen, dalmot, chips and bhujiya — loved by thousands across Nepal.
              </p>
              <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => navigate('/about')}>
                Learn more about us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="home-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="home-cta__h2">Ready to stock up on Nepal's favorite snacks?</h2>
          <p className="home-cta__p">Whether you're treating yourself or stocking your store, ordering is just a message away. Fast dispatch guaranteed.</p>
          <div className="home-cta__btns">
            <button className="home-cta__btn-outline" onClick={() => navigate('/products')}>View Full Menu</button>
            <a href="https://wa.me/9779857021032" target="_blank" rel="noreferrer" className="home-cta__btn-wa">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="label-tag">CUSTOMER'S LOVE</div>
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>Loved By Our Customers</h2>
          </div>
          <div className="home-testi">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="home-testi__card">
                <div style={{ fontWeight: 800, fontSize: 15, color: '#222', marginBottom: 10 }}>"One of very delicious snacks"</div>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7, marginBottom: 18 }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="home-testi__avatar">{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: '#888' }}>{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 24 }}>
            <button className="home-pag__btn" onClick={() => setTPage(p => Math.max(0, p-1))}><ChevronLeft size={16} /></button>
            {[1,2,3].map((n,i) => (
              <button key={i} className={`home-pag__dot${i===tPage?' home-pag__dot--active':''}`}
                onClick={() => setTPage(i)}>{n}</button>
            ))}
            <button className="home-pag__btn" onClick={() => setTPage(p => Math.min(2, p+1))}><ChevronRight size={16} /></button>
          </div>
        </div>
      </section>

      {/* ── QUALITY ───────────────────────────────────────── */}
      <section className="section" style={{ background: '#F9F6F0' }}>
        <div className="container">
          <div className="home-quality">
            <div className="home-quality__text">
              <div className="label-tag">QUALITY FIRST</div>
              <h2 style={{ fontSize: 26, fontWeight: 800, margin: '10px 0 16px' }}>Safe, Clean &amp; Delicious</h2>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>
                Our snacks are prepared in a clean, hygienic environment with strict quality checks, ensuring every bite is safe and tasty. From sourcing to packaging, we never compromise.
              </p>
              <div className="home-quality__badges">
                {['✅ FSSAI Compliant','🏆 ISO Standards','🔬 Quality Tested','🌱 No Preservatives'].map(b => (
                  <div key={b} className="home-quality__badge">{b}</div>
                ))}
              </div>
              <div className="home-quality__stats">
                {[['10K+','Happy Customers'],['50+','Products'],['100%','Hygienic']].map(([n,l]) => (
                  <div key={l}>
                    <div style={{ fontWeight: 800, fontSize: 22, color: '#C8102E' }}>{n}</div>
                    <div style={{ fontSize: 12, color: '#888' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="home-quality__img">
              <img src="/images/products/bnOONDI_MIXTURE_STAND.png" alt="Quality"
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 16 }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
