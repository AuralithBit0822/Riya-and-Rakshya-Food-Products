import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingCart, MessageCircle, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { wishlist, cartCount, searchQuery, setSearchQuery } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/varieties', label: 'Varities' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
        <img src="/images/Logo.png" alt="R&R Logo" style={{ width: 48, height: 48, objectFit: 'contain' }}/>
          <div>
            <div style={styles.logoName}>Riya &amp; Rakshya</div>
            <div style={styles.logoSub}>Food products</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul style={styles.navLinks}>
          {navLinks.map(l => (
            <li key={l.to}>
              <Link to={l.to} style={{ ...styles.navLink, ...(isActive(l.to) ? styles.navLinkActive : {}) }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div style={styles.right}>
          <form onSubmit={handleSearch} style={styles.searchForm}>
            <input
              type="text"
              placeholder="Search items"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
            <button type="submit" style={styles.searchBtn}>
              <Search size={16} color="#888" />
            </button>
          </form>

          <Link to="/wishlist" style={styles.iconBtn}>
            <Heart size={20} color={wishlist.length ? '#C8102E' : '#555'} fill={wishlist.length ? '#C8102E' : 'none'} />
            {wishlist.length > 0 && <span style={styles.badge}>{wishlist.length}</span>}
          </Link>

          <Link to="/cart" style={styles.iconBtn}>
            <ShoppingCart size={20} color="#555" />
            {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
          </Link>

          <a href="https://wa.me/9779857021032" target="_blank" rel="noreferrer" style={styles.waBtn}>
            <MessageCircle size={15} />
            WhatsApp
          </a>

          <button style={styles.mobileMenu} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={styles.mobileNav}>
          {navLinks.map(l => (
            <Link
              key={l.to} to={l.to}
              style={{ ...styles.mobileLink, ...(isActive(l.to) ? { color: '#C8102E', fontWeight: 700 } : {}) }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <input type="text" placeholder="Search items" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} style={{ ...styles.searchInput, flex: 1 }} />
            <button type="submit" style={styles.searchBtn}><Search size={16} color="#888" /></button>
          </form>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: { background: '#FFFDE7', borderBottom: '1px solid #f0e6b2', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 24, height: 66 },
  logo: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 },
  logoIcon: { background: 'linear-gradient(135deg,#C8102E,#e85d20)', borderRadius: 8, width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#fff', fontWeight: 900, fontSize: 13, letterSpacing: 0.5 },
  logoName: { fontWeight: 800, fontSize: 15, color: '#C8102E', lineHeight: 1.2 },
  logoSub: { fontSize: 11, color: '#e85d20', fontWeight: 500 },
  navLinks: { display: 'flex', gap: 4, listStyle: 'none', margin: 0, padding: 0, flex: 1, justifyContent: 'center' },
  navLink: { padding: '6px 14px', borderRadius: 6, fontSize: 14, fontWeight: 500, color: '#333', textDecoration: 'none', transition: 'color 0.2s' },
  navLinkActive: { color: '#C8102E', fontWeight: 700, borderBottom: '2px solid #C8102E', borderRadius: 0 },
  right: { display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 },
  searchForm: { display: 'flex', alignItems: 'center', border: '1.5px solid #ddd', borderRadius: 8, background: '#fff', overflow: 'hidden' },
  searchInput: { border: 'none', outline: 'none', padding: '7px 12px', fontSize: 13, width: 140, background: 'transparent' },
  searchBtn: { background: 'none', border: 'none', padding: '7px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center' },
  iconBtn: { position: 'relative', display: 'flex', alignItems: 'center', padding: 6, borderRadius: 8, transition: 'background 0.2s', color: '#555', textDecoration: 'none' },
  badge: { position: 'absolute', top: 0, right: 0, background: '#C8102E', color: '#fff', fontSize: 9, fontWeight: 700, width: 16, height: 16, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  waBtn: { background: '#28A745', color: '#fff', border: 'none', borderRadius: 20, padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' },
  mobileMenu: { display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6 },
  mobileNav: { background: '#FFFDE7', borderTop: '1px solid #f0e6b2', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 8 },
  mobileLink: { padding: '8px 0', fontSize: 15, fontWeight: 500, color: '#333', textDecoration: 'none', borderBottom: '1px solid #f0e6b2' },
};
