import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { alert('Subscribed successfully!'); setEmail(''); }
  };

  return (
    <footer style={s.footer}>
      <div style={s.top}>
        {/* Brand */}
        <div style={s.brand}>
          <div style={s.logoRow}>
          <img src="/images/Logo.png" alt="R&R Logo" style={{ width: 42, height: 42, objectFit: 'contain' }}/>
            <div>
              <div style={s.brandName}>Riya &amp; Rakshya</div>
              <div style={s.brandSub}>Food products</div>
            </div>
          </div>
          <p style={s.brandDesc}>Brining the authentic taste of Nepal to your home with our premium quality snacks, tastey noodles and namkeen.</p>
          <div style={s.socials}>
            {[Facebook, Instagram, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#!" style={s.social}><Icon size={15} /></a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div style={s.col}>
          <h4 style={s.colTitle}>Quick Links</h4>
          {[['/', 'Home'], ['/products', 'Products'], ['/varieties', 'Varieties'], ['/about', 'About Us'], ['/contact', 'Contact Us']].map(([to, l]) => (
            <Link key={to} to={to} style={s.link}>{l}</Link>
          ))}
        </div>

        {/* Categories */}
        <div style={s.col}>
          <h4 style={s.colTitle}>Categories</h4>
          {['All', 'Instant Noodles', 'Chips & Crisps', 'Ready-to-eat Snacks', 'Spicy Namkeen'].map(c => (
            <Link key={c} to={`/products?cat=${encodeURIComponent(c)}`} style={s.link}>{c}</Link>
          ))}
        </div>

        {/* Contact */}
        <div style={s.col}>
          <h4 style={s.colTitle}>Contact Us</h4>
          <div style={s.contactRow}><MapPin size={14} color="#FFC107" /><span style={s.contactTxt}>Bhairahwa, Nepal S.na.p : XX</span></div>
          <div style={s.contactRow}><Phone size={14} color="#FFC107" /><div><div style={s.contactTxt}>+9779800000000</div><div style={s.contactTxt}>+9779800000000</div></div></div>
          <div style={s.contactRow}><Mail size={14} color="#FFC107" /><span style={s.contactTxt}>info@randr.com.np</span></div>
        </div>

        {/* Subscribe */}
        <div style={s.subscribe}>
          <h4 style={s.subTitle}>Subscribe</h4>
          <form onSubmit={handleSubscribe} style={s.subForm}>
            <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required style={s.subInput} />
            <button type="submit" style={s.subBtn}><Send size={14} /></button>
          </form>
          <p style={s.subText}>Hello, we are Lift Media. Our goal is to translate loves in the extreme positive effects from worldly revolutionizing companies engaged with their clients &amp; their team.</p>
        </div>
      </div>

      <div style={s.bottom}>
        <span style={s.copyright}>© 2026 &nbsp; Riya &amp; Rakshya Food Products. All rights reserved.</span>
      </div>
    </footer>
  );
}

const s = {
  footer: { background: '#1c1c1c', color: '#ccc' },
  top: { maxWidth: 1200, margin: '0 auto', padding: '50px 24px 40px', display: 'grid', gridTemplateColumns: '220px 150px 180px 200px 230px', gap: 30 },
  brand: {},
  logoRow: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 },
  logoIcon: { background: 'linear-gradient(135deg,#C8102E,#e85d20)', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  logoTxt: { color: '#fff', fontWeight: 900, fontSize: 12 },
  brandName: { fontWeight: 800, fontSize: 14, color: '#fff' },
  brandSub: { fontSize: 11, color: '#e85d20' },
  brandDesc: { fontSize: 12, color: '#aaa', lineHeight: 1.7, marginBottom: 16 },
  socials: { display: 'flex', gap: 8 },
  social: { background: '#333', color: '#ccc', width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s' },
  col: { display: 'flex', flexDirection: 'column', gap: 4 },
  colTitle: { color: '#FFC107', fontSize: 13, fontWeight: 700, marginBottom: 10, letterSpacing: 0.3 },
  link: { color: '#aaa', fontSize: 13, textDecoration: 'none', padding: '3px 0', transition: 'color 0.2s' },
  contactRow: { display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10 },
  contactTxt: { fontSize: 12, color: '#aaa', lineHeight: 1.5 },
  subscribe: {},
  subTitle: { color: '#FFC107', fontSize: 13, fontWeight: 700, marginBottom: 10 },
  subForm: { display: 'flex', marginBottom: 14 },
  subInput: { flex: 1, border: '1px solid #444', background: '#2a2a2a', color: '#fff', padding: '8px 12px', fontSize: 12, borderRadius: '6px 0 0 6px', outline: 'none', fontFamily: 'Poppins, sans-serif' },
  subBtn: { background: '#1e6ee8', border: 'none', color: '#fff', padding: '8px 14px', cursor: 'pointer', borderRadius: '0 6px 6px 0', display: 'flex', alignItems: 'center' },
  subText: { fontSize: 11, color: '#888', lineHeight: 1.6 },
  bottom: { borderTop: '1px solid #333', padding: '16px 24px', textAlign: 'center' },
  copyright: { fontSize: 12, color: '#666' },
};
