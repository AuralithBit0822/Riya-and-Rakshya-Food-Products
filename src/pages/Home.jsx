import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShoppingCart,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Flame,
  ShieldCheck,
  Leaf,
  Truck,
  Utensils,
  Sparkles,
  PlayCircle,
  CheckCircle2,
  Award,
  Microscope,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, TESTIMONIALS } from '../data/products';
import './Home.css';

function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useApp();
  const navigate = useNavigate();
  const wishlisted = isWishlisted(product.id);
  const hasPrices = product.sizeOptions && product.sizeOptions.length > 0;
  const isNew = product.price === 0;

  return (
    <div className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
      <div className="product-card-img">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.style.opacity = '0.4';
          }}
        />
        <span className="product-card-badge">{product.category}</span>
        {product.badge && (
          <span className="product-card-badge product-card-badge--top-right">{product.badge}</span>
        )}
        <button
          className={`product-card-heart${wishlisted ? ' active' : ''}`}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={wishlisted ? '#C8102E' : 'none'}
            stroke={wishlisted ? '#C8102E' : '#999'}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        {isNew ? (
          <div className="pc-coming-soon">
            <Flame size={13} /> Coming Soon - Price TBD
          </div>
        ) : hasPrices ? (
          <div className="pc-size-price-list">
            {product.sizeOptions.map((s) => (
              <span key={s.size} className="pc-size-pill">
                {s.size}
              </span>
            ))}
          </div>
        ) : (
          <div className="pc-size-price-list">
            <span className="pc-size-pill">{product.unit}</span>
          </div>
        )}

        <div className="product-card-actions">
          {!isNew ? (
            <>
              <button
                className="btn-add-cart"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                <ShoppingCart size={13} /> Add to Cart
              </button>
              <a
                href="https://wa.me/9779820299711"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-whatsapp-sm"
                aria-label={`Ask about ${product.name} on WhatsApp`}
              >
                <MessageCircle size={16} />
              </a>
            </>
          ) : (
            <a
              href="https://wa.me/9779820299711"
              target="_blank"
              rel="noreferrer"
              className="btn-add-cart btn-add-cart--whatsapp"
              onClick={(e) => e.stopPropagation()}
            >
              <MessageCircle size={13} /> Enquire on WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const HERO_ITEMS = [
  { img: '/images/products/cheese_balls.jpeg', bg: '#fff8f0', label: 'Cheese Balls' },
  { img: '/images/products/Jungle_Janawar.png', bg: '#e8f5e8', label: 'Kids Snacks' },
  { img: '/images/products/chatpate_bhuja_bag.jpeg', bg: '#fff8f0', label: 'Chatpate Bhuja' },
  { img: '/images/products/aone_chips_green.jpeg', bg: '#e8f5e0', label: 'A-One Chips' },
];

const FEATURED_PRODUCT_IDS = [37, 39, 13, 38];
const TESTIMONIALS_PER_PAGE = 6;

const FEATURES = [
  { icon: Utensils, label: 'Delicious Taste', sub: 'Authentic Nepali flavours for every age' },
  { icon: ShieldCheck, label: 'Trusted Brand', sub: 'Tested and loved by regular customers' },
  { icon: Leaf, label: 'Fresh Ingredients', sub: 'Carefully sourced and safely prepared' },
  { icon: Sparkles, label: 'Hygienic Preparation', sub: 'Clean process from kitchen to pack' },
  { icon: Truck, label: 'Fast Delivery', sub: 'Quick dispatch for retail and wholesale' },
  { icon: CheckCircle2, label: 'Quality Checked', sub: 'Every batch is reviewed before dispatch' },
  { icon: Award, label: 'Retailer Friendly', sub: 'Reliable packs for shops and distributors' },
  { icon: MessageCircle, label: 'Easy Ordering', sub: 'Quick support through phone and WhatsApp' },
];

export default function Home() {
  const navigate = useNavigate();
  const [tPage, setTPage] = useState(0);
  const featuredProducts = FEATURED_PRODUCT_IDS
    .map((id) => PRODUCTS.find((product) => product.id === id))
    .filter(Boolean);
  const bestsellers = [
    ...featuredProducts,
    ...PRODUCTS.filter((product) => !FEATURED_PRODUCT_IDS.includes(product.id)),
  ].slice(0, 8);

  const testimonialPages = Math.ceil(TESTIMONIALS.length / TESTIMONIALS_PER_PAGE);
  const visibleTestimonials = TESTIMONIALS.slice(
    tPage * TESTIMONIALS_PER_PAGE,
    tPage * TESTIMONIALS_PER_PAGE + TESTIMONIALS_PER_PAGE
  );

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <div className="home-hero__badge">Taste of Nepal</div>
          <h1 className="home-hero__h1">
            One Bite &amp; You Won't Stop <span>Craving</span>
          </h1>
          <p className="home-hero__sub">
            Instant noodles, crunchy snacks, and bulk packs delivered straight to your door.
            Freshness guaranteed in every bite.
          </p>
          <div className="home-hero__btns">
            <button className="home-hero__btn-shop" onClick={() => navigate('/products')}>
              <ShoppingCart size={17} /> Shop Now
            </button>
            <button className="home-hero__btn-dist" onClick={() => navigate('/contact')}>
              Become a Distributor <ArrowRight size={16} />
            </button>
          </div>
          <div className="home-hero__stats">
            {[
              ['500+', 'Happy Retailers'],
              ['10+', 'Product Lines'],
              ['77', 'Districts'],
            ].map(([n, l]) => (
              <div key={l} className="home-hero__stat">
                <span className="home-hero__stat-num">{n}</span>
                <span className="home-hero__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="home-hero__grid" aria-label="Featured snack products">
          {HERO_ITEMS.map((item) => (
            <div key={item.label} className="home-hero__cell" style={{ background: item.bg }}>
              <img
                src={item.img}
                alt={item.label}
                className="home-hero__cell-img"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                onError={(e) => {
                  e.target.style.opacity = '0.3';
                }}
              />
              <span className="home-hero__cell-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section home-products-section">
        <div className="container">
          <div className="home-section-head">
            <div className="label-tag">Featured Product</div>
            <h2>Our Bestsellers</h2>
          </div>
          <div className="products-grid">
            {bestsellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="home-center-action">
            <button className="btn-outline home-wide-btn" onClick={() => navigate('/products')}>
              View All Products <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="container">
          <div className="home-features__viewport">
            <div className="home-features__row">
              {[...FEATURES, ...FEATURES].map(({ icon: Icon, label, sub }, index) => (
              <div key={`${label}-${index}`} className="home-features__item">
                <div className="home-features__icon">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="home-features__label">{label}</div>
                  <div className="home-features__sub">{sub}</div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="home-story">
            <div className="home-story__img">
              <img
                src="/images/RnR about.jpeg"
                alt="R&R snack products"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="home-story__text">
              <div className="label-tag">About Us</div>
              <h2>The R&amp;R Story</h2>
              <p>
                We started with one goal: make snacks that are fast, tasty, and satisfying. From
                our kitchen to your table, every bite is crafted with care, using quality ingredients
                and traditional recipes.
              </p>
              <p>
                Today, Riya and Rakshya Food Products manufactures over 50 varieties of instant
                noodles, namkeen, dalmot, chips and bhujiya, loved by thousands across Nepal.
              </p>
              <button className="btn-primary" onClick={() => navigate('/about')}>
                Learn more about us <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <h2 className="home-cta__h2">Ready to stock up on Nepal's favorite snacks?</h2>
          <p className="home-cta__p">
            Whether you're treating yourself or stocking your store, ordering is just a message away.
          </p>
          <div className="home-cta__btns">
            <button className="home-cta__btn-outline" onClick={() => navigate('/products')}>
              View Full Menu
            </button>
            <a href="https://wa.me/9779820299711" target="_blank" rel="noreferrer" className="home-cta__btn-wa">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section home-testimonials-section">
        <div className="container">
          <div className="home-section-head">
            <div className="label-tag">Customer's Love</div>
            <h2>Loved By Our Customers</h2>
          </div>
          <div className="home-testi">
            {visibleTestimonials.map((t) => (
              <div key={t.id} className="home-testi__card">
                <div className="home-testi__quote">One of very delicious snacks</div>
                <p>{t.text}</p>
                <div className="home-testi__person">
                  <div className="home-testi__avatar">{t.name[0]}</div>
                  <div>
                    <div className="home-testi__name">{t.name}</div>
                    <div className="home-testi__location">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="home-pag">
            <button className="home-pag__btn" onClick={() => setTPage((p) => Math.max(0, p - 1))}>
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: testimonialPages }, (_, i) => i + 1).map((n, i) => (
              <button
                key={n}
                className={`home-pag__dot${i === tPage ? ' home-pag__dot--active' : ''}`}
                onClick={() => setTPage(i)}
              >
                {n}
              </button>
            ))}
            <button className="home-pag__btn" onClick={() => setTPage((p) => Math.min(testimonialPages - 1, p + 1))}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="section home-quality-section">
        <div className="container">
          <div className="home-quality">
            <div className="home-quality__text">
              <div className="label-tag">Quality First</div>
              <h2>Safe, Clean &amp; Delicious</h2>
              <p>
                Our snacks are prepared in a clean, hygienic environment with strict quality checks.
                From sourcing to packaging, we never compromise.
              </p>
              <div className="home-quality__badges">
                {[
                  [CheckCircle2, 'FSSAI Compliant'],
                  [Award, 'ISO Standards'],
                  [Microscope, 'Quality Tested'],
                  [Leaf, 'No Preservatives'],
                ].map(([Icon, b]) => (
                  <div key={b} className="home-quality__badge">
                    <Icon size={16} /> {b}
                  </div>
                ))}
              </div>
              <div className="home-quality__stats">
                {[
                  ['10K+', 'Happy Customers'],
                  ['50+', 'Products'],
                  ['100%', 'Hygienic'],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="home-quality__stat-num">{n}</div>
                    <div className="home-quality__stat-label">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="home-video-wrap">
              <video
                className="home-video-player"
                src="/videos/RnR video.mp4"
                controls
                loop
                playsInline
                preload="none"
                poster="/images/products/cheese_balls.jpeg"
              >
                Your browser does not support the video tag.
              </video>
              <div className="home-video-label">
                <PlayCircle size={18} /> R&amp;R Food Products - Our Story
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
