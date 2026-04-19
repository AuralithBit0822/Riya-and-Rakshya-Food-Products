import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, TESTIMONIALS } from '../data/products';

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
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="size-pills">
          {(product.sizes || ['50g','100g','250g','500g']).slice(0,4).map(s => (
            <span className="size-pill" key={s}>{s}</span>
          ))}
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

const HERO_PRODUCTS = [
  { img: '/images/products/Potato.jpg',                     bg: '#f0ece4' },
  { img: '/images/products/Korean_Hot_Spicy.png',           bg: '#4a3020' },
  { img: '/images/products/kushal_all_in_opne_namkeen.png', bg: '#2c2c2c' },
  { img: '/images/products/Palak_paneer_Fryums.png',        bg: '#e8f5e9' },
];

export default function Home() {
  const navigate = useNavigate();
  const [testiPage, setTestiPage] = useState(0);
  const bestsellers = PRODUCTS.slice(0, 8);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={s.heroSection}>
        <div style={s.heroContent}>
          <div style={s.heroBadge}>🏔 नेपालका स्वाद</div>
          <h1 style={s.heroH1}>
            One Bite &amp; You Won't<br />
            Stop <span style={{ color: '#FFC107' }}>Craving</span>
          </h1>
          <p style={s.heroSub}>
            Instant noodles, crunchy snacks &amp; bulk packs delivered
            straight to your door. Freshness guaranteed in every bite.
          </p>
          <div style={s.heroBtns}>
            <button style={s.heroShopBtn} onClick={() => navigate('/products')}>
              🛒 Shop Now
            </button>
            <button style={s.heroDistBtn} onClick={() => navigate('/contact')}>
              Become a Distributor →
            </button>
          </div>
          <div style={s.heroStats}>
            {[['500+','Happy Retailers'],['10+','Product Lines'],['77','Districts']].map(([n,l]) => (
              <div key={l} style={s.heroStat}>
                <span style={s.heroStatNum}>{n}</span>
                <span style={s.heroStatLabel}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product image grid */}
        <div style={s.heroGrid}>
          {HERO_PRODUCTS.map((item, i) => (
            <div key={i} style={{ ...s.heroCell, background: item.bg }}>
              <img src={item.img} alt={`Product ${i+1}`} style={s.heroCellImg} />
            </div>
          ))}
        </div>
      </section>

      {/* ── BESTSELLERS ───────────────────────────────────────── */}
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
            <button className="btn-outline" style={{ padding: '12px 32px' }} onClick={() => navigate('/products')}>
              View All Products →
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ────────────────────────────────────── */}
      <section style={{ background: '#F9F6F0', padding: '30px 0' }}>
        <div className="container">
          <div style={s.featRow}>
            {[
              { icon: '🍽', label: 'Delicious Taste',     sub: 'Authentic Nepal flavours by all ages' },
              { icon: '🛡', label: 'Trusted Brand',        sub: 'Tested by thousands of customers' },
              { icon: '🌿', label: 'Fresh Ingredients',    sub: '100% safe and chemical free' },
              { icon: '🧼', label: 'Hygienic Preparation', sub: '100% safe and clean environment' },
              { icon: '🚚', label: 'Fast Delivery',        sub: 'Same day dispatch guaranteed' },
            ].map(f => (
              <div key={f.label} style={s.featItem}>
                <div style={{ fontSize: 26 }}>{f.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#222' }}>{f.label}</div>
                  <div style={{ fontSize: 11, color: '#888' }}>{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={s.storyGrid}>
            <div style={s.storyImgWrap}>
              <img
                src="/images/products/kushal_all_in_opne_namkeen.png"
                alt="R&R Story"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div>
              <div className="label-tag">ABOUT US</div>
              <h2 style={{ fontSize: 26, fontWeight: 800, margin: '10px 0 16px' }}>The R&amp;R Story</h2>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
                We Started with one goal: make snacks that are fast, tasty, and satisfying.
                From our kitchen to your table, every bite is crafted with care, using quality
                ingredients and traditional recipes.
              </p>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
                Today, Riya and Rakshya Food Products manufactures over 50 varieties of Instant
                noodles, namkeen, dalmot, chips and bhujiya — loved by thousands across Nepal.
              </p>
              <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => navigate('/about')}>
                Learn more about us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={s.ctaSection}>
        <h2 style={s.ctaH2}>Ready to stock up on Nepal's favorite snacks?</h2>
        <p style={s.ctaP}>Whether you're treating yourself or stocking your store, ordering is just a message away.</p>
        <div style={s.ctaBtns}>
          <button style={s.ctaBtnOutline} onClick={() => navigate('/products')}>View Full Menu</button>
          <a href="https://wa.me/9779857021032" target="_blank" rel="noreferrer" style={s.ctaBtnWa}>
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="label-tag">CUSTOMER'S LOVE</div>
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>Loved By Our Customers</h2>
          </div>
          <div style={s.testiGrid}>
            {TESTIMONIALS.map(t => (
              <div key={t.id} style={s.testiCard}>
                <div style={{ fontWeight: 800, fontSize: 15, color: '#222', marginBottom: 10 }}>"One of very delicious snacks"</div>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7, marginBottom: 18 }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={s.testiAvatar}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: '#888' }}>{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 24 }}>
            <button style={s.pagBtn} onClick={() => setTestiPage(p => Math.max(0, p-1))}><ChevronLeft size={16} /></button>
            {[1,2,3].map((n,i) => (
              <button key={i} style={{ ...s.pagDot, ...(i===testiPage ? s.pagDotActive : {}) }}
                onClick={() => setTestiPage(i)}>{n}</button>
            ))}
            <button style={s.pagBtn} onClick={() => setTestiPage(p => Math.min(2, p+1))}><ChevronRight size={16} /></button>
          </div>
        </div>
      </section>

      {/* ── QUALITY ───────────────────────────────────────────── */}
      <section className="section" style={{ background: '#F9F6F0' }}>
        <div className="container">
          <div style={s.qualGrid}>
            <div>
              <div className="label-tag">QUALITY FIRST</div>
              <h2 style={{ fontSize: 26, fontWeight: 800, margin: '10px 0 16px' }}>Safe, Clean &amp; Delicious</h2>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>
                Our snacks are prepared in a clean, hygienic environment with strict quality checks.
                From sourcing to packaging, we never compromise.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                {['✅ FSSAI Compliant','🏆 ISO Standards','🔬 Quality Tested','🌱 No Preservatives'].map(b => (
                  <div key={b} style={s.qualBadge}>{b}</div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                {[['10K+','Happy Customers'],['50+','Products'],['100%','Hygienic']].map(([n,l]) => (
                  <div key={l}>
                    <div style={{ fontWeight: 800, fontSize: 20, color: '#C8102E' }}>{n}</div>
                    <div style={{ fontSize: 12, color: '#888' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={s.qualImgWrap}>
              <img
                src="/images/products/bnOONDI_MIXTURE_STAND.png"
                alt="Quality"
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 12 }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── STYLES ─────────────────────────────────────────────────── */
const s = {
  /* Hero */
  heroSection: {
    background: 'linear-gradient(135deg,#C8102E 0%,#e85d20 55%,#f5a623 100%)',
    padding: '50px 80px',
    display: 'flex',
    alignItems: 'center',
    gap: 60,
    minHeight: 420,
    overflow: 'hidden',
  },
  heroContent: { flex: 1, minWidth: 0 },
  heroBadge: {
    background: 'rgba(255,255,255,0.2)', display: 'inline-block',
    color: '#fff', fontSize: 12, padding: '4px 12px',
    borderRadius: 20, marginBottom: 14, fontWeight: 600,
  },
  heroH1: { fontSize: 42, fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 14 },
  heroSub: { color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 1.7, maxWidth: 440, marginBottom: 24 },
  heroBtns: { display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 30 },
  heroShopBtn: {
    background: 'rgba(255,255,255,0.95)', color: '#C8102E',
    border: 'none', padding: '11px 24px', borderRadius: 8,
    fontSize: 14, fontWeight: 700, cursor: 'pointer',
  },
  heroDistBtn: {
    background: 'rgba(255,255,255,0.15)',
    border: '1.5px solid rgba(255,255,255,0.6)',
    color: '#fff', padding: '11px 22px', borderRadius: 8,
    fontSize: 14, fontWeight: 600, cursor: 'pointer',
  },
  heroStats: { display: 'flex', gap: 28, flexWrap: 'wrap' },
  heroStat: { display: 'flex', flexDirection: 'column' },
  heroStatNum: { fontSize: 22, fontWeight: 900, color: '#fff' },
  heroStatLabel: { fontSize: 11, color: 'rgba(255,255,255,0.75)', fontWeight: 500 },

  /* Hero product grid */
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: 0,
    width: 460,
    height: 400,
    flexShrink: 0,
    borderRadius: 24,
    overflow: 'hidden',
  },
  heroCell: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'center', padding: 12,
  },
  heroCellImg: {
    width: '100%', height: '100%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.2))',
  },

  /* Features */
  featRow: {
    display: 'flex', justifyContent: 'space-between',
    flexWrap: 'wrap', gap: 16,
  },
  featItem: { display: 'flex', alignItems: 'center', gap: 12, flex: '1 1 160px' },

  /* Story */
  storyGrid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: 60, alignItems: 'center',
  },
  storyImgWrap: { height: 340 },

  /* CTA */
  ctaSection: { background: '#1a1a1a', padding: '60px 24px', textAlign: 'center' },
  ctaH2: { fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 12 },
  ctaP: { color: '#aaa', fontSize: 14, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' },
  ctaBtns: { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' },
  ctaBtnOutline: {
    background: 'transparent', border: '1.5px solid rgba(255,255,255,0.4)',
    color: '#fff', padding: '11px 24px', borderRadius: 6,
    fontSize: 14, fontWeight: 600, cursor: 'pointer',
  },
  ctaBtnWa: {
    background: '#28A745', color: '#fff', padding: '11px 24px',
    borderRadius: 6, fontSize: 14, fontWeight: 600,
    display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none',
  },

  /* Testimonials */
  testiGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 },
  testiCard: { background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 16px rgba(0,0,0,0.07)' },
  testiAvatar: {
    width: 36, height: 36, borderRadius: '50%',
    background: '#C8102E', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontWeight: 700, fontSize: 16, flexShrink: 0,
  },
  pagBtn: {
    background: '#fff', border: '1px solid #ddd', borderRadius: '50%',
    width: 32, height: 32, display: 'flex', alignItems: 'center',
    justifyContent: 'center', cursor: 'pointer',
  },
  pagDot: {
    background: '#fff', border: '1px solid #ddd', borderRadius: 6,
    width: 30, height: 30, fontSize: 13, cursor: 'pointer',
  },
  pagDotActive: { background: '#C8102E', border: '1px solid #C8102E', color: '#fff' },

  /* Quality */
  qualGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' },
  qualBadge: { background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, padding: '8px 12px', fontSize: 12, fontWeight: 600 },
  qualImgWrap: { height: 340 },
};
