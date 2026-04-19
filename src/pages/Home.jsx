import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ChevronRight, MessageCircle, ShieldCheck, Truck, Leaf, Star, Award, ChevronLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, TESTIMONIALS } from '../data/products';

function StarRating({ n = 5 }) {
  return <span style={{ color: '#FFC107', fontSize: 14 }}>{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>;
}

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
          {['50g', '100g', '250g', '500g'].map(s => <span className="size-pill" key={s}>{s}</span>)}
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

export default function Home() {
  const navigate = useNavigate();
  const [testiPage, setTestiPage] = useState(0);
  const bestsellers = PRODUCTS.slice(0, 8);

  return (
    <div>
      {/* HERO */}
      <section style={hero.section}>
        <div style={hero.content}>
          <div style={hero.badge}>🏔 नेपालका स्वाद</div>
          <h1 style={hero.h1}>
            One Bite &amp; You Won't<br />
            Stop <span style={{ color: '#FFC107' }}>Craving</span>
          </h1>
          <p style={hero.sub}>Instant noodles, crunchy snacks &amp; bulk packs delivered straight to your door. Freshness guaranteed in every bite.</p>
          <div style={hero.btns}>
            <button className="btn-outline" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }} onClick={() => navigate('/products')}>
              🛒 Shop Now
            </button>
            <button style={hero.distBtn} onClick={() => navigate('/contact')}>Become a Distributor →</button>
          </div>
          <div style={hero.stats}>
            {[['500+', 'Happy Retailers'], ['10+', 'Product Lines'], ['77', 'Districts']].map(([n, l]) => (
              <div key={l} style={hero.stat}>
                <span style={hero.statNum}>{n}</span>
                <span style={hero.statLabel}>{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={hero.imgGrid}>
  {[
    { img: '/images/products/Potato.jpg',                        bg: '#f0ece4', radius: '20px 0 0 0' },
    { img: '/images/products/Korean_Hot_Spicy.png',              bg: '#6b6b2e', radius: '0 20px 0 0' },
    { img: '/images/products/kushal_all_in_opne_namkeen.png',    bg: '#2c2c2c', radius: '0 0 0 20px' },
    { img: '/images/products/Palak_paneer_Fryums.png',           bg: '#f5f5f0', radius: '0 0 20px 0' },
  ].map((item, i) => (
    <div key={i} style={{ ...hero.gridItem, background: item.bg }}>
      <img src={item.img} alt={`Product ${i + 1}`} style={hero.gridImg} />
    </div>
  ))}
</div>
      </section>

      {/* BESTSELLERS */}
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
            <button className="btn-outline" style={{ padding: '12px 32px', fontSize: 14 }} onClick={() => navigate('/products')}>
              View All Products →
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section style={{ background: '#F9F6F0', padding: '30px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            {[
              { icon: '🍽', label: 'Delicious Taste', sub: 'Authentic Nepal flavours by all ages' },
              { icon: '🛡', label: 'Trusted Brand', sub: 'Tested by thousands of customers' },
              { icon: '🌿', label: 'Fresh Ingredients', sub: '100% safe and chemical free' },
              { icon: '🧼', label: 'Hygienic Preparation', sub: '100% safe and clean environment' },
              { icon: '🚚', label: 'Fast Delivery', sub: 'Same day dispatch guaranteed' },
            ].map(f => (
              <div key={f.label} style={feat.item}>
                <div style={feat.icon}>{f.icon}</div>
                <div>
                  <div style={feat.label}>{f.label}</div>
                  <div style={feat.sub}>{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div style={story.wrapper}>
            <div style={story.imgWrap}>
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80" alt="Kitchen" style={story.img} />
            </div>
            <div style={story.text}>
              <div className="label-tag">ABOUT US</div>
              <h2 style={story.h2}>The R&amp;R Story</h2>
              <p style={story.p}>We Started with one goal: make snacks that are fast, tasty, and satisfying. From our kitchen to your table, every bite is crafted with care, using quality ingredients and traditional recipes. We believe that great taste comes from consistency and passion in every step of the process.</p>
              <p style={story.p}>Today, Riya and Rakshya Food Products manufactures over 50 varieties of Instant noodles, namkeen, dalmot, chips and bhujiya - loved by thousands across the Nepal. We are committed to maintaining consistency, hygiene, and authentic flavours in every product we deliver.</p>
              <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => navigate('/about')}>
                Learn more about us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={cta.section}>
        <h2 style={cta.h2}>Ready to stock up on Nepal's favorite snacks?</h2>
        <p style={cta.p}>Whether you're treating yourself or stocking your store, ordering is just a message away. Fast dispatch guaranteed.</p>
        <div style={cta.btns}>
          <button style={cta.btnOutline} onClick={() => navigate('/products')}>View Full Menu</button>
          <a href="https://wa.me/9779857021032" target="_blank" rel="noreferrer" style={cta.btnWa}>
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="label-tag">CUSTOMER'S LOVE</div>
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>Loved By Our Customers</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.id} style={testi.card}>
                <div style={testi.quote}>"One of very delicious snacks"</div>
                <p style={testi.text}>{t.text}</p>
                <div style={testi.user}>
                  <div style={testi.avatar}>{t.name[0]}</div>
                  <div>
                    <div style={testi.name}>{t.name}</div>
                    <div style={testi.loc}>{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 28 }}>
            <button style={pag.btn} onClick={() => setTestiPage(p => Math.max(0, p - 1))}><ChevronLeft size={16} /></button>
            {[1, 2, 3, '...', 10].map((n, i) => (
              <button key={i} style={{ ...pag.dot, ...(i === testiPage ? pag.dotActive : {}) }} onClick={() => typeof n === 'number' && setTestiPage(i)}>{n}</button>
            ))}
            <button style={pag.btn} onClick={() => setTestiPage(p => p + 1)}><ChevronRight size={16} /></button>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="section" style={{ background: '#F9F6F0' }}>
        <div className="container">
          <div style={qual.wrapper}>
            <div style={qual.text}>
              <div className="label-tag">QUALITY FIRST</div>
              <h2 style={{ fontSize: 26, fontWeight: 800, margin: '10px 0 16px' }}>Safe, Clean &amp; Delicious</h2>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>
                Our snacks are prepared in a clean, hygienic environment with strict quality checks, ensuring every bite is safe and tasty. From sourcing to packaging, we never compromise.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {['✅ FSSAI Compliant', '🏆 ISO Standards', '🔬 Quality Tested', '🌱 No Preservatives'].map(b => (
                  <div key={b} style={qual.badge}>{b}</div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 24, marginTop: 24 }}>
                {[['10K+', 'Happy Customers'], ['50+', 'Products'], ['100%', 'Hygienic']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontWeight: 800, fontSize: 20, color: '#C8102E' }}>{n}</div>
                    <div style={{ fontSize: 12, color: '#888' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={qual.img}>
              <img src="https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=500&q=80" alt="Quality" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const hero = {
  section: {
    background: 'linear-gradient(135deg,#C8102E 0%,#e85d20 55%,#f5a623 100%)',
    padding: '50px 80px',
    display: 'flex',
    alignItems: 'center',
    gap: 60,
    minHeight: 420,
    overflow: 'hidden',
  },
  content: { flex: 1 },
  badge: {
    background: 'rgba(255,255,255,0.2)',
    display: 'inline-block',
    color: '#fff',
    fontSize: 12,
    padding: '4px 12px',
    borderRadius: 20,
    marginBottom: 14,
    fontWeight: 600,
  },
  h1: { fontSize: 42, fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 14 },
  sub: { color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 1.7, maxWidth: 440, marginBottom: 24 },
  btns: { display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 30 },
  distBtn: {
    background: 'rgba(255,255,255,0.15)',
    border: '1.5px solid rgba(255,255,255,0.5)',
    color: '#fff',
    padding: '10px 22px',
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
  },
  stats: { display: 'flex', gap: 32 },
  stat: { display: 'flex', flexDirection: 'column' },
  statNum: { fontSize: 22, fontWeight: 900, color: '#fff' },
  statLabel: { fontSize: 11, color: 'rgba(255,255,255,0.75)', fontWeight: 500 },

  /* ── 2×2 product grid ── */
  imgGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: 0,             // ← removed gap
    width: 480,
    height: 420,
    flexShrink: 0,
    borderRadius: 24,   // ← slightly bigger radius
    overflow: 'hidden', // ← this alone handles all 4 outer corners
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 12,
  },
  gridImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',   /* show full packet — no cropping */
    filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.18))',
  },
};

const feat = {
  item: { display: 'flex', alignItems: 'center', gap: 12, flex: '1 1 160px' },
  icon: { fontSize: 28, flexShrink: 0 },
  label: { fontWeight: 700, fontSize: 13, color: '#222' },
  sub: { fontSize: 11, color: '#888' },
};

const story = {
  wrapper: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' },
  imgWrap: { borderRadius: 12, overflow: 'hidden', height: 340 },
  img: { width: '100%', height: '100%', objectFit: 'cover' },
  text: {},
  h2: { fontSize: 26, fontWeight: 800, margin: '10px 0 16px' },
  p: { color: '#666', fontSize: 14, lineHeight: 1.8, marginBottom: 12 },
};

const cta = {
  section: { background: '#1a1a1a', padding: '60px 24px', textAlign: 'center' },
  h2: { fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 12 },
  p: { color: '#aaa', fontSize: 14, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' },
  btns: { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' },
  btnOutline: { background: 'transparent', border: '1.5px solid rgba(255,255,255,0.4)', color: '#fff', padding: '11px 24px', borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  btnWa: { background: '#28A745', color: '#fff', padding: '11px 24px', borderRadius: 6, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none' },
};

const testi = {
  card: { background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 16px rgba(0,0,0,0.07)' },
  quote: { fontWeight: 800, fontSize: 15, color: '#222', marginBottom: 10 },
  text: { fontSize: 13, color: '#666', lineHeight: 1.7, marginBottom: 18 },
  user: { display: 'flex', alignItems: 'center', gap: 10 },
  avatar: { width: 36, height: 36, borderRadius: '50%', background: '#C8102E', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, flexShrink: 0 },
  name: { fontWeight: 700, fontSize: 13 },
  loc: { fontSize: 11, color: '#888' },
};

const pag = {
  btn: { background: '#fff', border: '1px solid #ddd', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
  dot: { background: '#fff', border: '1px solid #ddd', borderRadius: 6, width: 30, height: 30, fontSize: 13, cursor: 'pointer' },
  dotActive: { background: '#C8102E', border: '1px solid #C8102E', color: '#fff' },
};

const qual = {
  wrapper: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' },
  text: {},
  badge: { background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, padding: '8px 12px', fontSize: 12, fontWeight: 600 },
  img: { borderRadius: 12, overflow: 'hidden', height: 340 },
};
