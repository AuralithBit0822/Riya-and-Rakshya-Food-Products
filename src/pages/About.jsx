import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, CheckCircle, MessageCircle } from 'lucide-react';
import { TEAM } from '../data/products';

export default function About() {
  const navigate = useNavigate();
  const products = [1, 2, 3, 4, 5, 6, 7, 8].map(i => ({
    img: `https://images.unsplash.com/photo-${['1621939514649-280e2ee25f60', '1576618148400-f54bed99fcfd', '1566478989037-eec170784d0b', '1599490659213-e2b9527bd087', '1603569283847-aa295f0d016a', '1619221882220-947b3d3c8861', '1569718212165-3a8278d5f624', '1612278675615-7b093b07772d'][i - 1]}?w=160&q=80`,
    label: 'Namkeen',
  }));

  return (
    <div>
      {/* Hero */}
      <div className="page-hero" style={{ background: '#222' }}>
      <div className="page-hero-bg" style={{ backgroundImage: 'url(/images/abouthero.png)' }} />
        <div className="page-hero-content">
          <div className="breadcrumb"><Home size={13} /><a href="/">HOME</a><span>›</span><span>ABOUT</span></div>
          <h1>About Riya &amp; Rakshya Food Products</h1>
          <p>From a small kitchen dream to Nepal's beloved snack brand — here's our story.</p>
        </div>
      </div>

      <div style={{ background: '#fff' }}>
        {/* Story */}
        <section className="section">
          <div className="container">
            <div style={s.storyGrid}>
              <div>
                <div className="label-tag">ABOUT US</div>
                <h2 style={s.h2}>The R&amp;R Story</h2>
                <p style={s.p}>We Started with one goal: make snacks that are fast, tasty, and satisfying. From our kitchen to your table, every bite is crafted with care, using quality ingredients and traditional recipes. We believe that great taste comes from consistency and passion in every step of the process.</p>
                <p style={s.p}>Our manufacturing journey began in a small kitchen in Bhairahwa, Nepal. We started as a family project, carefully crafting everything by hand. We used traditional recipes, blending age old flavors with modern convenience. Word started spreading about the snacks, local shops started asking for more, and before we knew it, Riya &amp; Rakshya Food Products was born.</p>
                <p style={s.p}>Today, Riya and Rakshya Food Products manufactures over 50 varieties of instant noodles, namkeen, dalmot, chips and bhujiya - loved by thousands across the Nepal. We are committed to maintaining consistency, hygiene, and authentic flavours in every product we deliver.</p>
              </div>
              <div style={{ borderRadius: 12, overflow: 'hidden', height: 360 }}>
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80" alt="Kitchen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section style={{ background: '#FFFDE7', padding: '50px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <div className="label-tag">WHAT DRIVES US</div>
              <h2 style={s.h2}>The Core Purpose And Future Aspirations Of Our Company</h2>
            </div>
            <div style={s.mvGrid}>
              <div style={s.missionCard}>
                <div style={s.mvIcon}>🎯</div>
                <div style={s.mvLabel}>Our Mission</div>
                <h3 style={s.mvTitle}>To become Nepal's most trusted and widely traded snack brand, bringing happiness in every bite.</h3>
                <div style={s.mvTags}>
                  {['Tasty', 'Convenient', 'Affordable'].map(t => <span key={t} style={s.mvTag}>{t}</span>)}
                </div>
              </div>
              <div style={s.visionCard}>
                <div style={s.mvIcon}>🔭</div>
                <div style={s.mvLabel}>Our Vision</div>
                <h3 style={s.mvTitle}>To become Nepal's most loved and widely loved snack brand, spreading love and happiness we bring to our customers.</h3>
                <div style={s.mvTags}>
                  {['Innovative', 'Loved', 'Trusted'].map(t => <span key={t} style={{ ...s.mvTag, background: 'rgba(255,255,255,0.25)' }}>{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Manufacture */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <div className="label-tag">OUR PRODUCTS</div>
              <h2 style={s.h2}>What We Manufacture</h2>
            </div>
            <div style={s.productsGrid}>
              {products.map((p, i) => (
                <div key={i} style={s.productThumb}>
                  <img src={p.img} alt={p.label} style={s.thumbImg} />
                  <div style={s.thumbOverlay} />
                  <div style={s.thumbContent}>
                    <div style={s.thumbLabel}>{p.label}</div>
                    <div style={s.thumbSub}>Crunchy, authentic spicy, and irresistibly addictive</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap' }}>
              {['⭐ Great Taste', '🌿 Quality Ingredients', '🏆 Ultimate Convenience'].map(b => (
                <span key={b} style={s.featureBadge}>{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Quality */}
        <section style={{ background: '#F4F4F4', padding: '50px 0' }}>
          <div className="container">
            <div style={s.qualGrid}>
              <div style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=500&q=80" alt="Quality" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 300 }} />
              </div>
              <div>
                <div className="label-tag">QUALITY FIRST</div>
                <h2 style={s.h2}>Our Commitment To Quality &amp; Safety</h2>
                <p style={s.p}>Our snacks are prepared in a clean, hygienic environment with strict quality checks, ensuring every bite is safe and tasty. From sourcing to packaging, we never compromise.</p>
                <p style={s.p}>Our manufacturing facility follows strict hygiene protocols - our team wears gloves, helmets, and protective gear at all times. We use modern machinery and follow standardized processes to ensure every pack meets our high standards.</p>
                <p style={s.p}>We believe that great taste starts with great ingredients. That's why we source our spices locally and never compromise on the quality of raw materials.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
                  {['✅ FSSAI Compliant', '🏆 ISO Standards', '🔬 Quality Tested', '🌱 No Preservatives'].map(b => (
                    <span key={b} style={s.qualBadge}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: '#2a2a2a', padding: '40px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <div className="label-tag" style={{ color: '#FFC107' }}>OUR SCALE</div>
              <h2 style={{ color: '#fff', fontSize: 22 }}>Manufacturing At Scale</h2>
              <p style={{ color: '#aaa', fontSize: 13 }}>Delivering quality snacks across the nation every single day.</p>
            </div>
            <div style={s.statsRow}>
              {[['50+', 'Product Manufactured'], ['77', 'Districts Covered'], ['500+', 'Retail Partners'], ['10K+', 'Daily Production (Kg)']].map(([n, l]) => (
                <div key={l} style={s.statItem}>
                  <div style={s.statNum}>{n}</div>
                  <div style={s.statLabel}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <div className="label-tag">OUR ADVANTAGES</div>
              <h2 style={s.h2}>Why Choose Riya &amp; Rakshya?</h2>
            </div>
            <div style={s.whyGrid}>
              {[
                { icon: '❤', title: 'Delicious Taste', desc: 'Authentic Nepal flavours loved by people from all ages' },
                { icon: '📦', title: 'Multiple Size', desc: 'From 50g to 1 kg — a size for every need.' },
                { icon: '💰', title: 'Affordable Pricing', desc: 'Premium quality snacks at prices everyone can afford.' },
                { icon: '🛡', title: 'Trusted Quality', desc: 'Stringent quality checks ensure every pack is perfect.' },
                { icon: '🔄', title: 'Consistent Experience', desc: 'Same great taste in every single pack.' },
              ].map(w => (
                <div key={w.title} style={s.whyItem}>
                  <div style={s.whyIcon}>{w.icon}</div>
                  <div style={s.whyTitle}>{w.title}</div>
                  <div style={s.whySub}>{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ background: '#F9F6F0', padding: '50px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <div className="label-tag">OUR TEAM</div>
              <h2 style={s.h2}>The People Behind the Brand</h2>
              <p style={{ color: '#777', fontSize: 14 }}>Meet the passionate team that brings your favorite snacks to life.</p>
            </div>
            <div style={s.teamGrid}>
              {TEAM.map(m => (
                <div key={m.id} style={s.teamCard}>
                  <div style={s.teamImg}>
                    <img src={m.image} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={s.teamName}>{m.name}</div>
                  <div style={s.teamRole}>{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section style={{ background: '#fff', padding: '40px 24px' }}>
          <div className="container">
            <div style={s.ctaRow}>
              <div style={s.ctaLeft}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Ready to explore our snacks?</h3>
                <p style={{ color: '#777', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>Browse our wide collection of freshly crafted snacks, made with quality ingredients and authentic recipes. From crispy bites to rich, flavorful treats, find the perfect treat for every moment.</p>
                <button className="btn-primary" onClick={() => navigate('/products')}>Explore Menu</button>
              </div>
              <div style={s.ctaRight}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#C8102E', marginBottom: 8 }}>Interested in Bulk Orders or Distribution?</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>We're always looking for retail partners and distributors acrossNepal. Get factory-direct pricing and dedicated support.</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <button className="btn-outline" onClick={() => navigate('/varieties')}>Explore Varities →</button>
                  <button className="btn-green" onClick={() => navigate('/contact')}><MessageCircle size={14} /> Contact Sales team</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const s = {
  h2: { fontSize: 24, fontWeight: 800, margin: '10px 0 16px' },
  p: { color: '#666', fontSize: 14, lineHeight: 1.8, marginBottom: 12 },
  storyGrid: { display: 'grid', gridTemplateColumns: '1fr 420px', gap: 50, alignItems: 'center' },
  mvGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 },
  missionCard: { background: '#C8102E', borderRadius: 12, padding: 30, color: '#fff' },
  visionCard: { background: '#1a1a1a', borderRadius: 12, padding: 30, color: '#fff' },
  mvIcon: { fontSize: 32, marginBottom: 10 },
  mvLabel: { fontSize: 12, fontWeight: 700, letterSpacing: 1, opacity: 0.7, marginBottom: 8, textTransform: 'uppercase' },
  mvTitle: { fontSize: 16, fontWeight: 700, lineHeight: 1.6, marginBottom: 16 },
  mvTags: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  mvTag: { background: 'rgba(255,255,255,0.25)', color: '#fff', fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 20 },
  productsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 },
  productThumb: { position: 'relative', borderRadius: 10, overflow: 'hidden', height: 120 },
  thumbImg: { width: '100%', height: '100%', objectFit: 'cover' },
  thumbOverlay: { position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' },
  thumbContent: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 12, zIndex: 2 },
  thumbLabel: { color: '#fff', fontWeight: 700, fontSize: 13 },
  thumbSub: { color: 'rgba(255,255,255,0.8)', fontSize: 10 },
  featureBadge: { background: '#F4F4F4', border: '1px solid #e0e0e0', padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600, color: '#555' },
  qualGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'center' },
  qualBadge: { background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 600 },
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' },
  statItem: {},
  statNum: { fontSize: 36, fontWeight: 900, color: '#FFC107', marginBottom: 6 },
  statLabel: { color: '#aaa', fontSize: 13 },
  whyGrid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 },
  whyItem: { textAlign: 'center', padding: '24px 16px', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  whyIcon: { fontSize: 32, marginBottom: 12 },
  whyTitle: { fontWeight: 700, fontSize: 14, marginBottom: 8 },
  whySub: { color: '#888', fontSize: 12, lineHeight: 1.6 },
  teamGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 },
  teamCard: { background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', textAlign: 'center', padding: '0 0 16px' },
  teamImg: { height: 200, overflow: 'hidden' },
  teamName: { fontWeight: 700, fontSize: 15, marginTop: 14 },
  teamRole: { color: '#888', fontSize: 12, marginTop: 4 },
  ctaRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 },
  ctaLeft: { background: '#F9F6F0', borderRadius: 12, padding: 28 },
  ctaRight: { background: '#FFF5F5', borderRadius: 12, padding: 28, border: '1px solid #ffd6d6' },
};
