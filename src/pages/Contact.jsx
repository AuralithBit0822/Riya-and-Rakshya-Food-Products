import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, MessageCircle, ChevronDown, ChevronUp, Send } from 'lucide-react';

const FAQS = [
  // ── GENERAL QUESTIONS ──
  { q: 'What products does Riya & Rakshya Food Products manufacture?', a: 'We manufacture over 50 varieties of snacks including Spicy Namkeen, Instant Noodles, Chips & Crisps, Diet & Health snacks, and Kids Snacks. Our popular products include Kushal Namkeen, Korean Hot & Spicy Noodles, Potato Chips, Bhujia, Mixture, Boondi, and many more.' },
  { q: 'Where is Riya & Rakshya Food Products located?', a: 'Our manufacturing facility is located in Bhairahwa, Nepal. We operate from S.No.-4, SugarMill area and serve customers across all 77 districts of Nepal.' },
  { q: 'What are your business hours?', a: 'We are open Sunday through Friday from 9:00 AM to 6:00 PM. Our customer support team is available during these hours to assist you with any inquiries.' },
  
  // ── PRODUCT QUESTIONS ──
  { q: 'Are your snacks vegetarian?', a: 'Yes, all our snacks are 100% vegetarian. We use only plant-based ingredients and no animal products in our manufacturing process. Every product is certified vegetarian.' },
  { q: 'What pack sizes are available?', a: 'We offer packs ranging from 15g to 2kg depending on the product. Our smallest packs start at Rs.10 (15g-30g) for kids snacks, while our family-size packs go up to 1kg and 2kg for retail and bulk buyers.' },
  { q: 'Do your products contain any preservatives?', a: 'No, we are committed to quality and do not use preservatives in our products. Our snacks are made from fresh, natural ingredients with no artificial additives.' },
  { q: 'Are your products halal certified?', a: 'Our products are 100% vegetarian and we follow strict quality standards. For specific certification requirements, please contact our sales team.' },
  { q: 'What allergens should I be aware of?', a: 'Some products may contain allergens such as peanuts, wheat (gluten), soy, dairy traces, or mustard. Please check the packaging or product details for specific allergen information. We clearly label all potential allergens on our products.' },
  
  // ── QUALITY & SAFETY ──
  { q: 'What quality standards do you follow?', a: 'We follow strict quality standards including FSSAI compliance and ISO standards. Our manufacturing facility follows rigorous hygiene protocols with our team wearing gloves, helmets, and protective gear at all times. Every batch undergoes quality testing before reaching customers.' },
  { q: 'How do you ensure product freshness?', a: 'We maintain strict quality checks from sourcing to packaging. Our products are manufactured in small batches to ensure freshness, and we use modern machinery with standardized processes to deliver the best quality snacks.' },
  { q: 'Where do you source your ingredients from?', a: 'We source our spices locally from Nepal and carefully select all raw materials. We never compromise on the quality of ingredients and believe great taste starts with great components.' },
  
  // ── ORDERS & DISTRIBUTION ──
  { q: 'How can I become a distributor?', a: 'Please reach out via our contact form or call our business line at +977 880-0000000000. We will guide you through the distributor onboarding process with competitive pricing and dedicated support. We are always looking for retail partners and distributors across Nepal.' },
  { q: 'Do you offer bulk order discounts?', a: 'Yes, we offer factory-direct pricing for bulk orders and have dedicated support for retailers and distributors. Contact our sales team at Sales@riyarakshya.com.np for custom quotes based on your order volume.' },
  { q: 'How can I place a wholesale order?', a: 'You can contact our wholesale team at +977 880-0000000000 or email Sales@riyarakshya.com.np. We provide dedicated support for all wholesale and bulk order inquiries.' },
  { q: 'What areas do you deliver to?', a: 'We serve all 77 districts across Nepal through our network of 500+ retail partners. Our products are available throughout the nation.' },
  
  // ── CUSTOMER SUPPORT ──
  { q: 'How can I contact customer support?', a: 'You can reach us at +977 980-0000000 for customer support, email us at Support@riyarakshya.com.np, or chat with us on WhatsApp at +977 9800000000. We are available Sunday-Friday, 9:00 AM to 6:00 PM.' },
  { q: 'How can I report a product issue or quality concern?', a: 'We take quality concerns seriously. Please contact our customer support team immediately with your batch number and product details. You can reach us via phone, email, or WhatsApp.' },
  { q: 'What information is on the product packaging?', a: 'Our packaging includes product name, ingredients, allergen information, net weight, manufacturing date, expiry date, batch number, and MRP. For detailed ingredient and allergy information, always check the packaging.' },
  
  // ── STORAGE & PRODUCT INFO ──
  { q: 'How should I store your snacks?', a: 'Store in a cool, dry place away from direct sunlight. Once opened, consume within a few days for best taste and crunchiness. Keep the pack sealed tightly to maintain freshness.' },
  { q: 'What is the shelf life of your products?', a: 'Shelf life varies by product. Please refer to the expiry date printed on the packaging. Our products are manufactured fresh and we recommend consuming before the best-before date for optimal taste.' },
  { q: 'Where can I find the batch number and expiry date?', a: 'The batch number and expiry date are printed on the back of each product pack. You can find this information along with other manufacturing details on the packaging label.' },
];

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', inquiry: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', inquiry: '', message: '' }); }, 4000);
  };

  return (
    <div>
      {/* Hero */}
      <div className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: 'url(/images/contacthero.png)' }} />
        <div className="page-hero-content">
          <div className="breadcrumb"><Home size={13} /><a href="/">HOME</a><span>›</span><span>CONTACT</span></div>
          <h1>Let's Get in Touch</h1>
          <div className="hero-underline" />
          <p>Got a question about your favorite snack? Want to become a distributor? We'd love hear from you</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div style={s.contactGrid}>
            {/* Left panel */}
            <div>
              <div style={s.infoCard}>
                <h3 style={s.infoTitle}>Get in Touch</h3>
                <div style={s.infoRow}><Phone size={15} color="#C8102E" /><div><div style={s.infoLabel}>Customer Support :</div><div style={s.infoVal}>+977 980-0000000</div></div></div>
                <div style={s.infoRow}><Phone size={15} color="#C8102E" /><div><div style={s.infoLabel}>Business/Wholesale:</div><div style={s.infoVal}>+977 880-0000000000</div></div></div>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', margin: '10px 0' }} />
                <div style={s.infoRow}><Mail size={15} color="#C8102E" /><div><div style={s.infoLabel}>Support</div><div style={s.infoVal}>Support@riyarakshya.com.np</div><div style={s.infoLabel} id="mt4">sales/Distributors:</div><div style={s.infoVal}>Sales@riyarakshya.com.np</div></div></div>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', margin: '10px 0' }} />
                <div style={s.infoRow}><MapPin size={15} color="#C8102E" /><div><div style={s.infoLabel}>Address:</div><div style={s.infoVal}>S.No.-4, SugarMill</div></div></div>
                <div style={s.infoRow}><span style={{ fontSize: 15 }}>🕐</span><div><div style={s.infoLabel}>Business Hours:</div><div style={s.infoVal}>Sunday-Friday (9:00 AM - 6:00 PM)</div></div></div>
              </div>

              <div style={s.waCard}>
                <MessageCircle size={22} color="#28A745" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Need Quick Help?</div>
                  <p style={{ color: '#666', fontSize: 12, lineHeight: 1.5, marginBottom: 12 }}>Message us directly on whatsapp for immediate assistance.</p>
                  <a href="https://wa.me/9779857021032" target="_blank" rel="noreferrer" className="btn-green" style={{ textDecoration: 'none', padding: '9px 18px', fontSize: 13, borderRadius: 20 }}>
                    <MessageCircle size={14} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div style={s.formCard}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#C8102E', marginBottom: 6 }}>Send us a Message</h3>
              <p style={{ color: '#777', fontSize: 13, marginBottom: 20 }}>Fill out the form below and we'll get back to you as soon as possible.</p>

              {submitted && (
                <div style={s.successMsg}>
                  ✅ Thank you! Your message has been sent. We'll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label">Name <span className="req">*</span></label>
                  <input className={`form-input${errors.name ? ' error' : ''}`} name="name" placeholder="Your full name" value={form.name} onChange={handleChange} />
                  {errors.name && <div className="error-msg">{errors.name}</div>}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className={`form-input${errors.email ? ' error' : ''}`} name="email" type="email" placeholder="Your full name" value={form.email} onChange={handleChange} />
                    {errors.email && <div className="error-msg">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input className="form-input" name="phone" placeholder="How can we reach you ?" value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Inquiry Types</label>
                  <select className="form-input" name="inquiry" value={form.inquiry} onChange={handleChange} style={{ cursor: 'pointer' }}>
                    <option value="">Select an Option</option>
                    <option>General Inquiry</option>
                    <option>Product Question</option>
                    <option>Bulk Order</option>
                    <option>Distributor Inquiry</option>
                    <option>Complaint</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message <span className="req">*</span></label>
                  <textarea className={`form-input${errors.message ? ' error' : ''}`} name="message" placeholder="Write your message here..." rows={5} value={form.message} onChange={handleChange} style={{ resize: 'vertical' }} />
                  {errors.message && <div className="error-msg">{errors.message}</div>}
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '13px', fontSize: 15 }}>
                  <Send size={15} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section style={{ background: '#F4F4F4', padding: '40px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div className="label-tag">SUPPORT CENTRE</div>
            <h2 style={{ fontSize: 22, fontWeight: 800 }}>Quick Help &amp; Answers</h2>
          </div>
          <div style={s.helpGrid}>
            {[
              { icon: '⚠', color: '#FFF3E0', iconColor: '#E65100', title: 'Report a Product Issue', desc: 'Nice a quality concern? Let us know immediately.' },
              { icon: '🌿', color: '#E8F5E9', iconColor: '#2E7D32', title: 'Ingredient & Allergy Info', desc: 'Check packaging for detailed allergen information.' },
              { icon: '📦', color: '#FFFDE7', iconColor: '#F57F17', title: 'Storage Instructions', desc: 'Store in a cool, dry place away from direct sunlight.' },
              { icon: '📋', color: '#FCE4EC', iconColor: '#C62828', title: 'Expiry & Batch Details', desc: 'Find batch numbers and expiry dates on the back of the pack.' },
            ].map(h => (
              <div key={h.title} style={{ ...s.helpCard, background: h.color }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{h.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{h.title}</div>
                <div style={{ color: '#666', fontSize: 12 }}>{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution CTA */}
      <section style={{ background: '#fff', padding: '40px 0' }}>
        <div className="container">
          <div style={s.distRow}>
            <div style={s.distLeft}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Ready to explore our snacks ?</h3>
              <p style={{ color: '#666', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>Browse our wide collection of freshly crafted snacks, made with quality ingredients and authentic recipes. From crispy bites to rich flavorful treats, find the perfect treat for every moment.</p>
              <button className="btn-outline" onClick={() => navigate('/products')}>Explore Menu</button>
            </div>
            <div style={s.distRight}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#C8102E', marginBottom: 8 }}>Interested in Bulk Orders or Distribution?</h3>
              <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>We're always looking for retail partners and distributors acrossNepal. Get factory-direct pricing and dedicated support.</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <button className="btn-outline" onClick={() => navigate('/about')}>Learn more about us →</button>
                <button className="btn-green" onClick={() => window.scrollTo(0, 0)}><MessageCircle size={14} /> Contact Sales team</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: '#F4F4F4', padding: '50px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 6 }}>
              <div style={{ background: '#C8102E', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16 }}>?</div>
              <div className="label-tag">FREQUENTLY ASKED QUESTIONS</div>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800 }}>Quick Help &amp; Answers</h2>
          </div>
          <div style={s.faqList}>
            {FAQS.map((faq, i) => (
              <div key={i} style={s.faqItem}>
                <button style={s.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>
                    <span style={{ color: '#C8102E', marginRight: 8 }}>⊙</span>
                    {faq.q}
                  </span>
                  {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openFaq === i && <div style={s.faqA}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div style={s.map}>
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.0!2d83.45!3d27.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBhairahwa+Nepal!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
          style={{ width: '100%', height: '100%', border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

const s = {
  contactGrid: { display: 'grid', gridTemplateColumns: '280px 1fr', gap: 28 },
  infoCard: { background: '#1a1a1a', borderRadius: 12, padding: 24, marginBottom: 16 },
  infoTitle: { color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 18 },
  infoRow: { display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 },
  infoLabel: { color: '#888', fontSize: 11, fontWeight: 600 },
  infoVal: { color: '#ddd', fontSize: 12, lineHeight: 1.5 },
  waCard: { background: '#F0FFF4', border: '1px solid #c3e6cb', borderRadius: 12, padding: 20, display: 'flex', gap: 14, alignItems: 'flex-start' },
  formCard: { background: '#fff', borderRadius: 12, padding: 28, boxShadow: '0 2px 16px rgba(0,0,0,0.07)' },
  successMsg: { background: '#E8F5E9', border: '1px solid #c3e6cb', borderRadius: 8, padding: '12px 16px', color: '#2E7D32', fontSize: 14, fontWeight: 500, marginBottom: 20 },
  helpGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 },
  helpCard: { borderRadius: 12, padding: 20, border: '1px solid rgba(0,0,0,0.06)' },
  distRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 },
  distLeft: { background: '#F4F4F4', borderRadius: 12, padding: 28 },
  distRight: { background: '#FFF5F5', borderRadius: 12, padding: 28, border: '1px solid #ffd6d6' },
  faqList: { maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 0 },
  faqItem: { background: '#fff', borderRadius: 8, marginBottom: 8, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' },
  faqQ: { width: '100%', background: 'none', border: 'none', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: 14, fontWeight: 500, color: '#333', textAlign: 'left' },
  faqA: { padding: '0 20px 16px', fontSize: 13, color: '#666', lineHeight: 1.7 },
  map: { height: 360, background: '#eee' },
};
