import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import './Footer.css';

const CATS = [
  ['All Products', 'All Products'],
  ['Spicy Namkeen', 'Spicy Namkeen'],
  ['Instant Noodles', 'Instant Noodles'],
  ['Chips & Crisps', 'Chips & Crisps'],
  ['Diet & Health', 'Diet & Health'],
  ['Kids Snacks', 'Kids Snacks'],
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email) {
      setDone(true);
      setEmail('');
      setTimeout(() => setDone(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__top footer-top-grid container">
        <div className="footer-brand-col">
          <div className="footer__brand-row">
            <img
              src="/images/Logo.png"
              alt="R&R"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div>
              <div className="footer__brand-name">Riya &amp; Rakshya</div>
              <div className="footer__brand-sub">Food products</div>
            </div>
          </div>
          <p className="footer__brand-desc">
            Bringing the authentic taste of Nepal to your home with our premium quality snacks,
            tasty noodles and namkeen.
          </p>
          <div className="footer__socials">
            {[
              [Facebook, 'Facebook'],
              [Instagram, 'Instagram'],
              [Twitter, 'Twitter'],
            ].map(([Icon, t]) => (
              <a key={t} href="#!" className="footer__social" title={t} aria-label={t}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          {[
            ['/', 'Home'],
            ['/products', 'Products'],
            ['/varieties', 'Varieties'],
            ['/about', 'About Us'],
            ['/contact', 'Contact Us'],
          ].map(([to, label]) => (
            <Link key={to} to={to} className="footer__link">
              {label}
            </Link>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Categories</h4>
          {CATS.map(([label, cat]) => (
            <Link key={cat} to={`/products?cat=${encodeURIComponent(cat)}`} className="footer__link">
              {label}
            </Link>
          ))}
        </div>

        <div className="footer__col footer__contact-col">
          <h4 className="footer__col-title">Contact Us</h4>
          <div className="footer__contact-row">
            <MapPin size={14} />
            <span className="footer__contact-txt">
              S.No.-4, SugarMill, Bhairahwa,
              <br />
              Rupandehi, Nepal
            </span>
          </div>
          <div className="footer__contact-row">
            <Phone size={14} />
            <div className="footer__contact-txt">
              +977 982-0299711
              <br />
              <span>Customer Support</span>
              <br />
              +977 985-7021032
              <br />
              <span>Business / Wholesale</span>
            </div>
          </div>
          <div className="footer__contact-row">
            <Mail size={14} />
            <span className="footer__contact-txt">
              Support@riyarakshya.com.np
              <br />
              Sales@riyarakshya.com.np
            </span>
          </div>
          <div className="footer__contact-row">
            <Clock size={14} />
            <span className="footer__contact-txt">Sun-Fri: 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        <div className="footer-subscribe-col">
          <h4 className="footer__col-title">Subscribe</h4>
          <form onSubmit={submit} className="footer__sub-form">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="footer__sub-input"
            />
            <button type="submit" className="footer__sub-btn" aria-label="Subscribe">
              <Send size={14} />
            </button>
          </form>
          {done && <div className="footer__sub-success">Subscribed!</div>}
          <p className="footer__sub-text">
            Get fresh product updates, wholesale information, and seasonal offers from Riya &amp;
            Rakshya Food Products.
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; 2026 Riya &amp; Rakshya Food Products. All rights reserved.</span>
        <br />
        <small>Designed, Developed and Delivered by Auralith Bit</small>
      </div>
    </footer>
  );
}
