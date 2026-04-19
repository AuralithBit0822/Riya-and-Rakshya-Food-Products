import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, MessageCircle, ShieldCheck, Award, Leaf, Star } from 'lucide-react';
import { TEAM, TESTIMONIALS } from '../data/products';

const MANUFACTURE_PRODUCTS = [
  { img: '/images/products/kushal_all_in_opne_namkeen.png',          label: 'Namkeen',        sub: 'Crunchy, authentic spicy, and irresistibly addictive' },
  { img: '/images/products/Korean_Hot_Spicy.png',                     label: 'Noodles',        sub: 'Crunchy, authentic spicy, and irresistibly addictive' },
  { img: '/images/products/Potato.jpg',                               label: 'Chips',          sub: 'Crunchy, authentic spicy, and irresistibly addictive' },
  { img: '/images/products/bikaneri_bhujia.jpg',                      label: 'Bhujia',         sub: 'Crunchy, authentic spicy, and irresistibly addictive' },
  { img: '/images/products/mixture_namkeen_jpg.jpeg',                  label: 'Mixture',        sub: 'Crunchy, authentic spicy, and irresistibly addictive' },
  { img: '/images/products/Diet_Mixture.png',                         label: 'Diet Mix',       sub: 'Crunchy, authentic spicy, and irresistibly addictive' },
  { img: '/images/products/ABCD.png',                                 label: 'Kids Snacks',    sub: 'Crunchy, authentic spicy, and irresistibly addictive' },
  { img: '/images/products/Rnr_Krunchy_Sticks_Rs_20_Nov_2022.png',   label: 'Krunchy Sticks', sub: 'Crunchy, authentic spicy, and irresistibly addictive' },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <div className="page-hero" style={{ background: '#222' }}>
        <div className="page-hero-bg" style={{ backgroundImage: 'url(/images/abouthero.png)' }} />
        <div className="page-hero-content">
          <div className="breadcrumb">
            <Home size={13} /><a href="/">HOME</a><span>›</span><span>ABOUT</span>
          </div>
          <h1>About Riya &amp; Rakshya Food Products</h1>
          <p>From a small kitchen dream to Nepal's beloved snack brand — here's our story.</p>
        </div>
      </div>

      <div style={{ background: '#fff' }}>

        {/* THE R&R STORY */}
        <section className="section">
          <div className="container">
            <div style={s.storyGrid}>
              <div>
                <div className="label-tag">ABOUT US</div>
                <h2 style={s.h2}>The R&amp;R Story</h2>
                <p style={s.p}>We started with one goal: make snacks that are fast, tasty, and satisfying. From our kitchen to your table, every bite is crafted with care, using quality ingredients and traditional recipes. We believe that great taste comes from consistency and passion in every step of the process.</p>
                <p style={s.p}>Our manufacturing journey began in a small kitchen in Bhairahwa, Nepal. We started as a family project, carefully crafting everything by hand. We used traditional recipes, blending age-old flavors with modern convenience. Word started spreading about the snacks, local shops started asking for more, and before we knew it, Riya &amp; Rakshya Food Products was born.</p>
                <p style={s.p}>Today, Riya and Rakshya Food Products manufactures over 50 varieties of instant noodles, namkeen, dalmot, chips and bhujiya — loved by thousands across Nepal. We are committed to maintaining consistency, hygiene, and authentic flavours in every product we deliver.</p>
              </div>
              <div style={s.storyImgWrap}>
                <img src="/images/products/kushal_all_in_opne_namkeen.png" alt="R&R Products" style={s.storyImg} />
                <div style={s.storyBadge}>
                  <div style={s.storyBadgeNum}>50+</div>
                  <div style={s.storyBadgeTxt}>Products Manufactured</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
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
                  {['Innovative', 'Loved', 'Trusted'].map(t => (
                    <span key={t} style={{ ...s.mvTag, background: 'rgba(255,255,255,0.25)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE MANUFACTURE */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <div className="label-tag">OUR PRODUCTS</div>
              <h2 style={s.h2}>What We Manufacture</h2>
            </div>
            <div style={s.productsGrid}>
              {MANUFACTURE_PRODUCTS.map((p, i) => (
                <div key={i} style={s.productThumb} onClick={() => navigate('/products')}>
                  <img src={p.img} alt={p.label} style={s.thumbImg} />
                  <div style={s.thumbOverlay} />
                  <div style={s.thumbContent}>
                    <div style={s.thumbLabel}>{p.label}</div>
                    <div style={s.thumbSub}>{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap' }}>
              {['⭐ Great Taste', '🌿 Quality Ingredients', '🏆 Ultimate Convenience'].map(b => (
                <span key={b} style={s.featureBadge}>{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* QUALITY & SAFETY */}
        <section style={{ background: '#F4F4F4', padding: '50px 0' }}>
          <div className="container">
            <div style={s.qualGrid}>
              <div style={s.qualImgWrap}>
                <img src="/images/products/bnOONDI_MIXTURE_STAND.png" alt="Quality" style={s.qualImgMain} />
                <img src="/images/products/sadhabahar.png" alt="Premium" style={s.qualImgOverlay} />
              </div>
              <div>
                <div className="label-tag">QUALITY FIRST</div>
                <h2 style={s.h2}>Our Commitment To Quality &amp; Safety</h2>
                <p style={s.p}>Our snacks are prepared in a clean, hygienic environment with strict quality checks, ensuring every bite is safe and tasty. From sourcing to packaging, we never compromise.</p>
                <p style={s.p}>Our manufacturing facility follows strict hygiene protocols — our team wears gloves, helmets, and protective gear at all times. We use modern machinery and follow standardized processes to ensure every pack meets our high standards.</p>
                <p style={s.p}>We believe that great taste starts with great ingredients. That's why we source our spices locally and never compromise on the quality of raw materials.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
                  {[
                    { icon: <ShieldCheck size={13} color="#28A745" />, text: 'FSSAI Compliant' },
                    { icon: <Award size={13} color="#1565C0" />,       text: 'ISO Standards' },
                    { icon: '🔬',                                       text: 'Quality Tested' },
                    { icon: <Leaf size={13} color="#2E7D32" />,        text: 'No Preservatives' },
                  ].map(b => (
                    <span key={b.text} style={s.qualBadge}>{b.icon} {b.text}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ background: '#2a2a2a', padding: '48px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <div className="label-tag" style={{ color: '#FFC107' }}>OUR SCALE</div>
              <h2 style={{ color: '#fff', fontSize: 24, fontWeight: 800 }}>Manufacturing At Scale</h2>
              <p style={{ color: '#aaa', fontSize: 13, marginTop: 6 }}>Delivering quality snacks across the nation every single day.</p>
            </div>
            <div style={s.statsRow}>
              {[['50+','Product Manufactured'],['77','Districts Covered'],['500+','Retail Partners'],['10K+','Daily Production (Kg)']].map(([n, l]) => (
                <div key={l} style={s.statItem}>
                  <div style={s.statNum}>{n}</div>
                  <div style={s.statLabel}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <div className="label-tag">OUR ADVANTAGES</div>
              <h2 style={s.h2}>Why Choose Riya &amp; Rakshya?</h2>
            </div>
            <div style={s.whyGrid}>
              {[
                { icon: '❤️', title: 'Delicious Taste',      desc: 'Authentic Nepal flavours loved by people from all ages.' },
                { icon: '📦', title: 'Multiple Size',         desc: 'From 50g to 1 kg — a size for every need.' },
                { icon: '💰', title: 'Affordable Pricing',    desc: 'Premium quality snacks at prices everyone can afford.' },
                { icon: '🛡️', title: 'Trusted Quality',      desc: 'Stringent quality checks ensure every pack is perfect.' },
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

        {/* TEAM */}
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

        {/* TESTIMONIALS */}
        <section style={{ background: '#fff', padding: '50px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <div className="label-tag">CUSTOMER REVIEWS</div>
              <h2 style={s.h2}>What Our Customers Say</h2>
              <p style={{ color: '#777', fontSize: 14 }}>Real feedback from happy customers across Nepal</p>
            </div>
            <div style={s.testiGrid}>
              {TESTIMONIALS.map(t => (
                <div key={t.id} style={s.testiCard}>
                  <div style={s.testiStars}>
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="#FFC107" color="#FFC107" />)}
                  </div>
                  <p style={s.testiText}>"{t.text}"</p>
                  <div style={s.testiAuthor}>
                    <div style={s.testiName}>{t.name}</div>
                    <div style={s.testiLocation}>📍 {t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTAs */}
        <section style={{ background: '#fff', padding: '40px 24px' }}>
          <div className="container">
            <div style={s.ctaRow}>
              <div style={s.ctaLeft}>
                <h3 style={s.ctaTitle}>Ready to explore our snacks?</h3>
                <p style={s.ctaDesc}>Browse our wide collection of freshly crafted snacks, made with quality ingredients and authentic recipes. From crispy bites to rich, flavorful treats, find the perfect treat for every moment.</p>
                <button className="btn-primary" onClick={() => navigate('/products')}>Explore Menu</button>
              </div>
              <div style={s.ctaRight}>
                <h3 style={{ ...s.ctaTitle, color: '#C8102E' }}>Interested in Bulk Orders or Distribution?</h3>
                <p style={s.ctaDesc}>We're always looking for retail partners and distributors across Nepal. Get factory-direct pricing and dedicated support.</p>
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
  h2:  { fontSize: 24, fontWeight: 800, margin: '10px 0 16px' },
  p:   { color: '#666', fontSize: 14, lineHeight: 1.8, marginBottom: 12 },
  storyGrid:     { display: 'grid', gridTemplateColumns: '1fr 420px', gap: 50, alignItems: 'center' },
  storyImgWrap:  { position: 'relative', height: 380 },
  storyImg:      { width: '100%', height: '100%', objectFit: 'contain', borderRadius: 16 },
  storyBadge:    { position: 'absolute', bottom: -16, left: -16, background: '#C8102E', color: '#fff', borderRadius: 12, padding: '14px 20px', boxShadow: '0 8px 24px rgba(200,16,46,0.35)', textAlign: 'center' },
  storyBadgeNum: { fontSize: 28, fontWeight: 900, lineHeight: 1 },
  storyBadgeTxt: { fontSize: 11, fontWeight: 600, opacity: 0.9, marginTop: 4 },
  mvGrid:        { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 },
  missionCard:   { background: '#C8102E', borderRadius: 12, padding: 30, color: '#fff' },
  visionCard:    { background: '#1a1a1a', borderRadius: 12, padding: 30, color: '#fff' },
  mvIcon:        { fontSize: 32, marginBottom: 10 },
  mvLabel:       { fontSize: 12, fontWeight: 700, letterSpacing: 1, opacity: 0.7, marginBottom: 8, textTransform: 'uppercase' },
  mvTitle:       { fontSize: 16, fontWeight: 700, lineHeight: 1.6, marginBottom: 16 },
  mvTags:        { display: 'flex', gap: 8, flexWrap: 'wrap' },
  mvTag:         { background: 'rgba(255,255,255,0.25)', color: '#fff', fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 20 },
  productsGrid:  { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 },
  productThumb:  { position: 'relative', borderRadius: 10, overflow: 'hidden', height: 130, cursor: 'pointer' },
  thumbImg:      { width: '100%', height: '100%', objectFit: 'cover' },
  thumbOverlay:  { position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' },
  thumbContent:  { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 12, zIndex: 2 },
  thumbLabel:    { color: '#fff', fontWeight: 700, fontSize: 13 },
  thumbSub:      { color: 'rgba(255,255,255,0.75)', fontSize: 10 },
  featureBadge:  { background: '#F4F4F4', border: '1px solid #e0e0e0', padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600, color: '#555' },
  qualGrid:      { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'center' },
  qualImgWrap:   { position: 'relative', height: 360 },
  qualImgMain:   { width: '85%', height: '100%', objectFit: 'contain', borderRadius: 12 },
  qualImgOverlay:{ position: 'absolute', bottom: 0, right: 0, width: '50%', height: '55%', objectFit: 'contain', borderRadius: 10, border: '4px solid #fff', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' },
  qualBadge:     { background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: '7px 13px', fontSize: 12, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 5 },
  statsRow:      { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' },
  statItem:      {},
  statNum:       { fontSize: 40, fontWeight: 900, color: '#FFC107', marginBottom: 6 },
  statLabel:     { color: '#aaa', fontSize: 13 },
  whyGrid:       { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 },
  whyItem:       { textAlign: 'center', padding: '24px 16px', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  whyIcon:       { fontSize: 32, marginBottom: 12 },
  whyTitle:      { fontWeight: 700, fontSize: 14, marginBottom: 8 },
  whySub:        { color: '#888', fontSize: 12, lineHeight: 1.6 },
  teamGrid:      { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 },
  teamCard:      { background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', textAlign: 'center', paddingBottom: 16 },
  teamImg:       { height: 200, overflow: 'hidden' },
  teamName:      { fontWeight: 700, fontSize: 15, marginTop: 14 },
  teamRole:      { color: '#888', fontSize: 12, marginTop: 4 },
  ctaRow:        { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 },
  ctaLeft:       { background: '#F9F6F0', borderRadius: 12, padding: 28 },
  ctaRight:      { background: '#FFF5F5', borderRadius: 12, padding: 28, border: '1px solid #ffd6d6' },
  ctaTitle:      { fontSize: 18, fontWeight: 700, marginBottom: 10, color: '#1a1a1a' },
  ctaDesc:       { color: '#666', fontSize: 13, lineHeight: 1.7, marginBottom: 18 },
  testiGrid:     { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 },
  testiCard:     { background: '#F9F6F0', borderRadius: 12, padding: 24, position: 'relative' },
  testiStars:    { display: 'flex', gap: 2, marginBottom: 12 },
  testiText:     { color: '#555', fontSize: 13, lineHeight: 1.7, marginBottom: 16, fontStyle: 'italic' },
  testiAuthor:   { borderTop: '1px solid #e0e0e0', paddingTop: 12 },
  testiName:     { fontWeight: 700, fontSize: 14, color: '#1a1a1a' },
  testiLocation: { fontSize: 12, color: '#888', marginTop: 4 },
};