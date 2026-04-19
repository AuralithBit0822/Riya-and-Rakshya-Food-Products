import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, MessageCircle, ChevronRight } from 'lucide-react';
import { VARIETIES } from '../data/products';

export default function Varieties() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <div className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: 'url(/images/varitieshero.png)' }} />
        <div className="page-hero-content">
          <div className="breadcrumb"><Home size={13} /><a href="/">HOME</a><span>›</span><span>VARITIES</span></div>
          <h1>Our Snack Varieties</h1>
          <div className="hero-underline" />
          <p>Explore our wide range of authentic, mouth-watering snacks crafted to satisfy every mood.</p>
        </div>
      </div>

      {/* Varieties Grid */}
      <section className="section" style={{ background: '#FFFDE7' }}>
        <div className="container">
          <div style={s.grid}>
            {/* Big first card */}
            <div style={s.bigCard} onClick={() => navigate('/products?cat=Spicy Namkeen')}>
              <img src={VARIETIES[0].image} alt={VARIETIES[0].name} style={s.cardImg} />
              <div style={s.overlay} />
              <div style={s.cardContent}>
                <h3 style={s.cardTitle}>{VARIETIES[0].name}</h3>
                <p style={s.cardSub}>{VARIETIES[0].description}</p>
                <button style={s.exploreBtn}>Explore <ChevronRight size={14} /></button>
              </div>
            </div>
            {/* Second card */}
            <div style={s.medCard} onClick={() => navigate('/products?cat=Instant Noodles')}>
              <img src={VARIETIES[1].image} alt={VARIETIES[1].name} style={s.cardImg} />
              <div style={s.overlay} />
              <div style={s.cardContent}>
                <h3 style={s.cardTitle}>{VARIETIES[1].name}</h3>
                <p style={s.cardSub}>{VARIETIES[1].description}</p>
                <button style={s.exploreBtn}>Explore <ChevronRight size={14} /></button>
              </div>
            </div>
            {/* Small cards row */}
            {VARIETIES.slice(2).map(v => (
              <div key={v.id} style={s.smallCard} onClick={() => navigate(`/products?cat=${getCategory(v.name)}`)}>
                <img src={v.image} alt={v.name} style={s.cardImg} />
                <div style={s.overlay} />
                <div style={s.cardContent}>
                  <h3 style={s.cardTitle}>{v.name}</h3>
                  <p style={s.cardSub}>{v.description}</p>
                  <button style={s.exploreBtn}>Explore <ChevronRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section style={{ padding: '0 24px 40px' }}>
        <div className="container">
          <div style={s.featuredBanner}>
            <div style={s.featuredBadge}>Featured</div>
            <h2 style={s.featuredTitle}>The Ultimate Crunchy Chips Experience</h2>
            <p style={s.featuredSub}>Discover our best-selling instant chips. Perfect texture, bold flavours, ready to enjoy anytimes</p>
            <button className="btn-primary" style={{ borderRadius: 24, padding: '11px 28px' }}
              onClick={() => navigate('/products')}>
              View COllection →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={s.cta}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <h2 style={s.ctaTitle}>Not Sure What to Try?</h2>
            <p style={s.ctaSub}>Explore our full catalog and discover a wide variety of snacks crafted for every taste. From crispy bites to rich, flavorful treats, we offer something for everyone.</p>
          </div>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <button style={s.ctaBtnOutline} onClick={() => navigate('/products')}>Explore all Products</button>
            <a href="https://wa.me/9779800000000" target="_blank" rel="noreferrer" style={s.ctaBtnWa}>
              <MessageCircle size={15} /> Chat on WhatsApp
            </a>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🚚 Free Delivery', '🌿 Quality Ingredients', '⭐ Great Taste'].map(b => (
              <span key={b} style={s.featureBadge}>{b}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const s = {
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto auto', gap: 16 },
  bigCard: { gridColumn: '1', gridRow: '1', ...cardBase(280), cursor: 'pointer', position: 'relative', borderRadius: 12, overflow: 'hidden' },
  medCard: { gridColumn: '2 / 4', gridRow: '1', ...cardBase(280), cursor: 'pointer', position: 'relative', borderRadius: 12, overflow: 'hidden' },
  smallCard: { ...cardBase(200), cursor: 'pointer', position: 'relative', borderRadius: 12, overflow: 'hidden' },
  cardImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' },
  overlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)' },
  cardContent: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 20px', zIndex: 2 },
  cardTitle: { color: '#fff', fontWeight: 800, fontSize: 18, marginBottom: 4 },
  cardSub: { color: 'rgba(255,255,255,0.8)', fontSize: 12, marginBottom: 10 },
  exploreBtn: { background: 'none', border: 'none', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, padding: 0 },
  featuredBanner: { background: '#1a1a1a', borderRadius: 16, padding: '50px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&q=60)', backgroundSize: 'cover', backgroundPosition: 'center' },
  featuredBadge: { position: 'absolute', top: 20, right: 20, background: '#FFC107', color: '#222', fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 20 },
  featuredTitle: { color: '#fff', fontSize: 28, fontWeight: 900, marginBottom: 14, position: 'relative', zIndex: 1 },
  featuredSub: { color: 'rgba(255,255,255,0.8)', fontSize: 14, marginBottom: 24, position: 'relative', zIndex: 1 },
  cta: { background: 'linear-gradient(135deg,#C8102E 0%,#e85d20 60%,#f5a623 100%)', padding: '50px 0' },
  ctaTitle: { fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 12 },
  ctaSub: { color: 'rgba(255,255,255,0.9)', fontSize: 14, maxWidth: 560, margin: '0 auto' },
  ctaBtnOutline: { background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff', padding: '11px 24px', borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  ctaBtnWa: { background: '#1e7e34', color: '#fff', padding: '11px 24px', borderRadius: 6, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none' },
  featureBadge: { background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600 },
};

const getCategory = (name) => {
  const map = {
    'Bhujia': 'Spicy Namkeen',
    'Mixture Namkeen': 'Spicy Namkeen',
    'Boondi': 'Spicy Namkeen',
  };
  return map[name] || name;
};

function cardBase(h) { return { height: h }; }
