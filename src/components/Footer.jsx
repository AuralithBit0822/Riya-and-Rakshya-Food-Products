import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Clock, Send } from 'lucide-react';

const FOOTER_CATEGORIES = [
  { label: 'All Products',    cat: 'All Products' },
  { label: 'Spicy Namkeen',   cat: 'Spicy Namkeen' },
  { label: 'Instant Noodles', cat: 'Instant Noodles' },
  { label: 'Chips & Crisps',  cat: 'Chips & Crisps' },
  { label: 'Diet & Health',   cat: 'Diet & Health' },
  { label: 'Kids Snacks',     cat: 'Kids Snacks' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer style={s.footer}>
      {/* Top grid — uses CSS class for responsive */}
      <div className="footer-grid" style={s.top}>

        {/* Brand */}
        <div className="footer-brand-col">
          <div style={s.logoRow}>
            <img
              src="/images/Logo.png"
              alt="R&R Logo"
              style={{ width: 46, height: 46, objectFit: 'contain' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div>
              <div style={s.brandName}>Riya &amp; Rakshya</div>
              <div style={s.brandSub}>Food products</div>
            </div>
          </div>
          <p style={s.brandDesc}>
            Bringing the authentic taste of Nepal to your home with our premium
            quality snacks, tasty noodles and namkeen.
          </p>
          <div style={s.socials}>
            {[
              { href: 'https://facebook.com',  Icon: Facebook,  title: 'Facebook'  },
              { href: 'https://instagram.com', Icon: Instagram, title: 'Instagram' },
              { href: 'https://twitter.com',   Icon: Twitter,   title: 'Twitter'   },
            ].map(({ href, Icon, title }) => (
              <a key={title} href={href} target="_blank" rel="noreferrer" style={s.social} title={title}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div style={s.col}>
          <h4 style={s.colTitle}>Quick Links</h4>
          {[
            ['/',          'Home'],
            ['/products',  'Products'],
            ['/varieties', 'Varieties'],
            ['/about',     'About Us'],
            ['/contact',   'Contact Us'],
          ].map(([to, label]) => (
            <Link key={to} to={to} style={s.link}>{label}</Link>
          ))}
        </div>

        {/* Categories */}
        <div style={s.col}>
          <h4 style={s.colTitle}>Categories</h4>
          {FOOTER_CATEGORIES.map(({ label, cat }) => (
            <Link
              key={cat}
              to={`/products?cat=${encodeURIComponent(cat)}`}
              style={s.link}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div style={s.col}>
          <h4 style={s.colTitle}>Contact Us</h4>
          <div style={s.contactRow}>
            <MapPin size={14} color="#FFC107" style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={s.contactTxt}>
              S.No.-4, SugarMill (Gallmandi)<br />
              Bhairahwa, Rupandehi, Nepal
            </div>
          </div>
          <div style={s.contactRow}>
            <Phone size={14} color="#FFC107" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={s.contactTxt}>+977 985-7021032</div>
              <div style={{ ...s.contactTxt, color: '#666', fontSize: 10 }}>Customer Support</div>
              <div style={{ ...s.contactTxt, marginTop: 4 }}>+977 880-0000000000</div>
              <div style={{ ...s.contactTxt, color: '#666', fontSize: 10 }}>Business / Wholesale</div>
            </div>
          </div>
          <div style={s.contactRow}>
            <Mail size={14} color="#FFC107" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={s.contactTxt}>Support@riyarakshya.com.np</div>
              <div style={{ ...s.contactTxt, marginTop: 3 }}>Sales@riyarakshya.com.np</div>
            </div>
          </div>
          <div style={s.contactRow}>
            <Clock size={14} color="#FFC107" style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={s.contactTxt}>
              Sun – Fri: 9:00 AM – 6:00 PM<br />
              <span style={{ color: '#555', fontSize: 10 }}>Saturday Closed</span>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div className="footer-subscribe-col">
          <h4 style={s.subTitle}>Subscribe</h4>
          <form onSubmit={handleSubscribe} style={s.subForm}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={s.subInput}
            />
            <button type="submit" style={s.subBtn}><Send size={14} /></button>
          </form>
          {subscribed && <div style={s.successMsg}>✅ Subscribed successfully!</div>}
          <p style={s.subText}>
            Hello, we are Lift Media. Our goal is to translate loves in the
            extreme positive effects from worldly revolutionizing companies
            engaged with their clients &amp; their team.
          </p>
        </div>
      </div>

      <div style={s.bottom}>
        <span style={s.copyright}>
          © 2026 &nbsp; Riya &amp; Rakshya Food Products. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

const s = {
  footer: { background: '#1c1c1c', color: '#ccc' },
  top: {
    maxWidth: 1200, margin: '0 auto',
    padding: '50px 24px 40px',
    display: 'grid',
    gridTemplateColumns: '200px 140px 160px 200px 210px',
    gap: 28,
  },
  logoRow:   { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 },
  brandName: { fontWeight: 800, fontSize: 14, color: '#fff' },
  brandSub:  { fontSize: 11, color: '#e85d20' },
  brandDesc: { fontSize: 12, color: '#aaa', lineHeight: 1.7, marginBottom: 16 },
  socials:   { display: 'flex', gap: 8 },
  social: {
    background: '#333', color: '#ccc',
    width: 30, height: 30, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textDecoration: 'none',
  },
  col:      { display: 'flex', flexDirection: 'column', gap: 4 },
  colTitle: { color: '#FFC107', fontSize: 13, fontWeight: 700, marginBottom: 10, letterSpacing: 0.3 },
  link:     { color: '#aaa', fontSize: 13, textDecoration: 'none', padding: '3px 0' },
  contactRow: { display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 12 },
  contactTxt: { fontSize: 12, color: '#aaa', lineHeight: 1.6 },
  subTitle: { color: '#FFC107', fontSize: 13, fontWeight: 700, marginBottom: 10 },
  subForm:  { display: 'flex', marginBottom: 10 },
  subInput: {
    flex: 1, border: '1px solid #444', background: '#2a2a2a',
    color: '#fff', padding: '8px 12px', fontSize: 12,
    borderRadius: '6px 0 0 6px', outline: 'none', fontFamily: 'Poppins,sans-serif',
  },
  subBtn: {
    background: '#1e6ee8', border: 'none', color: '#fff',
    padding: '8px 14px', cursor: 'pointer',
    borderRadius: '0 6px 6px 0', display: 'flex', alignItems: 'center',
  },
  successMsg: {
    background: '#1a3a1a', color: '#5cb85c',
    fontSize: 11, padding: '6px 10px', borderRadius: 6, marginBottom: 10,
  },
  subText: { fontSize: 11, color: '#888', lineHeight: 1.6 },
  bottom:    { borderTop: '1px solid #333', padding: '16px 24px', textAlign: 'center' },
  copyright: { fontSize: 12, color: '#666' },
};
