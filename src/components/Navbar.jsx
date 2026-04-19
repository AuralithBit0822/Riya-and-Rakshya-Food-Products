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
    { to: '/',          label: 'Home' },
    { to: '/products',  label: 'Products' },
    { to: '/varieties', label: 'Varities' },
    { to: '/about',     label: 'About' },
    { to: '/contact',   label: 'Contact' },
  ];

  return (
    <nav style={s.nav}>
      <div style={s.inner}>

        {/* Logo */}
        <Link to="/" style={s.logo}>
          <img
            src="/images/Logo.png"
            alt="R&R Logo"
            style={{ width: 44, height: 44, objectFit: 'contain' }}
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ display: 'none', ...s.logoFallback }}>
            <span style={s.logoText}>R&R</span>
          </div>
          <div style={s.logoText2}>
            <div style={s.logoName}>Riya &amp; Rakshya</div>
            <div style={s.logoSub}>Food products</div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul style={s.navLinks} className="nav-links-desktop">
          {navLinks.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                style={{ ...s.navLink, ...(isActive(l.to) ? s.navLinkActive : {}) }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div style={s.right}>
          {/* Search — hidden on mobile */}
          <form onSubmit={handleSearch} style={s.searchForm} className="nav-search-desktop">
            <input
              type="text"
              placeholder="Search items"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={s.searchInput}
            />
            <button type="submit" style={s.searchBtn}>
              <Search size={16} color="#888" />
            </button>
          </form>

          {/* Wishlist */}
          <Link to="/wishlist" style={s.iconBtn}>
            <Heart size={20} color={wishlist.length ? '#C8102E' : '#555'} fill={wishlist.length ? '#C8102E' : 'none'} />
            {wishlist.length > 0 && <span style={s.badge}>{wishlist.length}</span>}
          </Link>

          {/* Cart */}
          <Link to="/cart" style={s.iconBtn}>
            <ShoppingCart size={20} color="#555" />
            {cartCount > 0 && <span style={s.badge}>{cartCount}</span>}
          </Link>

          {/* WhatsApp — hidden on small mobile */}
          <a
            href="https://wa.me/9779857021032"
            target="_blank"
            rel="noreferrer"
            style={s.waBtn}
            className="nav-wa-desktop"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>

          {/* Hamburger — shown on mobile via CSS */}
          <button
            style={s.hamburger}
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={s.mobileDrawer}>
          {/* Mobile Search */}
          <form onSubmit={handleSearch} style={s.mobileSearch}>
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={s.mobileSearchInput}
            />
            <button type="submit" style={s.mobileSearchBtn}>
              <Search size={16} color="#fff" />
            </button>
          </form>

          {/* Mobile Nav Links */}
          {navLinks.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                ...s.mobileLink,
                ...(isActive(l.to) ? s.mobileLinkActive : {}),
              }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile WhatsApp */}
          <a
            href="https://wa.me/9779857021032"
            target="_blank"
            rel="noreferrer"
            style={s.mobileWa}
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

const s = {
  nav: {
    background: '#FFFDE7',
    borderBottom: '1px solid #f0e6b2',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    height: 66,
  },
  logo: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 },
  logoFallback: {
    background: 'linear-gradient(135deg,#C8102E,#e85d20)',
    borderRadius: 8, width: 42, height: 42,
    alignItems: 'center', justifyContent: 'center',
  },
  logoText:  { color: '#fff', fontWeight: 900, fontSize: 12 },
  logoText2: {},
  logoName:  { fontWeight: 800, fontSize: 15, color: '#C8102E', lineHeight: 1.2 },
  logoSub:   { fontSize: 11, color: '#e85d20', fontWeight: 500 },

  navLinks: {
    display: 'flex', gap: 2,
    listStyle: 'none', margin: 0, padding: 0,
    flex: 1, justifyContent: 'center',
  },
  navLink: {
    padding: '6px 13px', borderRadius: 6,
    fontSize: 14, fontWeight: 500, color: '#333',
    textDecoration: 'none', transition: 'color 0.2s',
    whiteSpace: 'nowrap',
  },
  navLinkActive: { color: '#C8102E', fontWeight: 700, borderBottom: '2px solid #C8102E', borderRadius: 0 },

  right: { display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 },
  searchForm: {
    display: 'flex', alignItems: 'center',
    border: '1.5px solid #ddd', borderRadius: 8,
    background: '#fff', overflow: 'hidden',
  },
  searchInput: {
    border: 'none', outline: 'none',
    padding: '7px 12px', fontSize: 13,
    width: 130, background: 'transparent',
  },
  searchBtn: {
    background: 'none', border: 'none',
    padding: '7px 10px', cursor: 'pointer',
    display: 'flex', alignItems: 'center',
  },
  iconBtn: {
    position: 'relative', display: 'flex',
    alignItems: 'center', padding: 7,
    borderRadius: 8, color: '#555', textDecoration: 'none',
  },
  badge: {
    position: 'absolute', top: 1, right: 1,
    background: '#C8102E', color: '#fff',
    fontSize: 9, fontWeight: 700,
    width: 15, height: 15, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  waBtn: {
    background: '#28A745', color: '#fff',
    border: 'none', borderRadius: 20,
    padding: '8px 16px', fontSize: 13, fontWeight: 600,
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: 6,
    textDecoration: 'none', whiteSpace: 'nowrap',
  },
  hamburger: {
    display: 'none',   /* shown via .nav-hamburger CSS class */
    background: 'none', border: 'none',
    cursor: 'pointer', padding: 6,
    alignItems: 'center', justifyContent: 'center',
    borderRadius: 8,
  },

  /* Mobile Drawer */
  mobileDrawer: {
    background: '#FFFDE7',
    borderTop: '1px solid #f0e6b2',
    padding: '16px 20px 20px',
    display: 'flex', flexDirection: 'column', gap: 4,
  },
  mobileSearch: {
    display: 'flex', marginBottom: 8,
    border: '1.5px solid #ddd', borderRadius: 8,
    overflow: 'hidden', background: '#fff',
  },
  mobileSearchInput: {
    flex: 1, border: 'none', outline: 'none',
    padding: '10px 14px', fontSize: 14,
    background: 'transparent',
  },
  mobileSearchBtn: {
    background: '#C8102E', border: 'none',
    padding: '10px 14px', cursor: 'pointer',
    display: 'flex', alignItems: 'center',
  },
  mobileLink: {
    padding: '11px 4px', fontSize: 15, fontWeight: 500,
    color: '#333', textDecoration: 'none',
    borderBottom: '1px solid #f0e6b2',
    display: 'block',
  },
  mobileLinkActive: { color: '#C8102E', fontWeight: 700 },
  mobileWa: {
    marginTop: 12,
    background: '#28A745', color: '#fff',
    borderRadius: 8, padding: '12px 16px',
    fontWeight: 600, fontSize: 14,
    display: 'flex', alignItems: 'center',
    justifyContent: 'center', gap: 8,
    textDecoration: 'none',
  },
};
