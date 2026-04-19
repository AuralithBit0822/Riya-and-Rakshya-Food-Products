import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Trash2, Minus, Plus, MessageCircle, ChevronRight, ShoppingCart, X, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Cart() {
  const { cart, removeFromCart, updateQty, clearCart, cartTotal } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: '', phone: '', address: '', notes: '', payment: 'whatsapp' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showESewaModal, setShowESewaModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^[+]?[\d\s\-]{9,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (!form.address.trim()) e.address = 'Delivery address is required';
    return e;
  };

  const buildWhatsAppMsg = () => {
    const items = cart.map(i => `- ${i.name} (${i.selectedSize}) x${i.qty} = Rs.${i.price * i.qty}`).join('\n');
    return encodeURIComponent(
      `🛒 *New Order from R&R Food Products*\n\n*Items:*\n${items}\n\n*Total: Rs.${cartTotal}*\n\n*Customer Details:*\nName: ${form.fullName}\nPhone: ${form.phone}\nAddress: ${form.address}${form.notes ? `\nNotes: ${form.notes}` : ''}\n\n*Payment:* ${form.payment === 'whatsapp' ? 'Cash on Delivery / Bank Transfer' : 'eSewa'}`
    );
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    if (form.payment === 'whatsapp') {
      window.open(`https://wa.me/9779857021032?text=${buildWhatsAppMsg()}`, '_blank');
    } else {
      setShowESewaModal(true);
    }
  };

  const handleProceedToWhatsApp = () => {
    setShowESewaModal(false);
    setForm(f => ({ ...f, payment: 'whatsapp' }));
    setTimeout(() => {
      window.open(`https://wa.me/9779857021032?text=${buildWhatsAppMsg()}`, '_blank');
    }, 100);
  };

  if (cart.length === 0) {
    return (
      <div>
        <div style={s.breadWrap}>
          <div className="container">
            <div style={s.breadcrumb}><Home size={13} /><Link to="/" style={s.bc}>HOME</Link><ChevronRight size={12} /><span>Your Cart</span><ChevronRight size={12} /><span style={{ color: '#333' }}>Review Your Cart</span></div>
          </div>
        </div>
        <div style={{ textAlign: 'center', padding: '80px 24px' }}>
          <div style={{ fontSize: 60, marginBottom: 20 }}>🛒</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Your cart is empty</h2>
          <p style={{ color: '#888', marginBottom: 28 }}>Browse our products and add something delicious!</p>
          <button className="btn-primary" style={{ padding: '12px 32px' }} onClick={() => navigate('/products')}>Browse Products →</button>
        </div>
        {/* eSewa Modal */}
        {showESewaModal && (
          <div style={s.modalOverlay} onClick={() => setShowESewaModal(false)}>
            <div style={s.modalContent} onClick={e => e.stopPropagation()}>
              <button style={s.modalClose} onClick={() => setShowESewaModal(false)}><X size={20} /></button>
              <div style={s.modalIcon}>⏳</div>
              <h3 style={s.modalTitle}>Coming Soon!</h3>
              <p style={s.modalText}>We're working hard to bring you eSewa payment option. This feature will be available very soon.</p>
              <div style={s.modalHighlight}>
                <Clock size={16} /> For now, please proceed with WhatsApp payment
              </div>
              <button className="btn-green" style={{ width: '100%', justifyContent: 'center', padding: 14, fontSize: 15, borderRadius: 8, marginTop: 20 }} onClick={handleProceedToWhatsApp}>
                <MessageCircle size={16} /> Proceed via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ background: '#F4F4F4', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div style={s.breadWrap}>
        <div className="container">
          <div style={s.breadcrumb}><Home size={13} /><Link to="/" style={s.bc}>HOME</Link><ChevronRight size={12} /><Link to="/cart" style={s.bc}>Your Cart</Link><ChevronRight size={12} /><span style={{ color: '#333' }}>Review Your Cart</span></div>
        </div>
      </div>
      <div style={s.banner}><h1 style={s.bannerH1}>Review Your Cart</h1></div>

      {/* eSewa Modal */}
      {showESewaModal && (
        <div style={s.modalOverlay} onClick={() => setShowESewaModal(false)}>
          <div style={s.modalContent} onClick={e => e.stopPropagation()}>
            <button style={s.modalClose} onClick={() => setShowESewaModal(false)}><X size={20} /></button>
            <div style={s.modalIcon}>⏳</div>
            <h3 style={s.modalTitle}>Coming Soon!</h3>
            <p style={s.modalText}>We're working hard to bring you eSewa payment option. This feature will be available very soon.</p>
            <div style={s.modalHighlight}>
              <Clock size={16} /> For now, please proceed with WhatsApp payment
            </div>
            <button className="btn-green" style={{ width: '100%', justifyContent: 'center', padding: 14, fontSize: 15, borderRadius: 8, marginTop: 20 }} onClick={handleProceedToWhatsApp}>
              <MessageCircle size={16} /> Proceed via WhatsApp
            </button>
          </div>
        </div>
      )}

      <div className="container" style={{ padding: '32px 24px' }}>
        {submitted && (
          <div style={s.successBanner}>✅ Order placed successfully! Redirecting...</div>
        )}
        <div style={s.layout}>
          {/* Cart Items */}
          <div style={s.cartCard}>
            <div style={s.cartHeader}>
              <span style={s.cartTitle}>Your Cart (<strong>{cart.length}</strong>)</span>
              <button style={s.clearBtn} onClick={clearCart}>Clear All</button>
            </div>

            {cart.map(item => (
              <div key={item.cartKey} style={s.cartItem}>
                <div style={s.itemImg}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={s.itemInfo}>
                  <div style={s.itemName}>{item.name} ({item.selectedSize})</div>
                  <div style={s.itemPriceEach}>Rs.{item.price} each</div>
                  <div style={s.qtyRow}>
                    <button style={s.qtyBtn} onClick={() => updateQty(item.cartKey, -1)}><Minus size={12} /></button>
                    <span style={s.qtyNum}>{item.qty}</span>
                    <button style={s.qtyBtn} onClick={() => updateQty(item.cartKey, 1)}><Plus size={12} /></button>
                  </div>
                </div>
                <div style={s.itemRight}>
                  <div style={s.itemTotal}>Rs.{item.price * item.qty}</div>
                  <button style={s.removeBtn} onClick={() => removeFromCart(item.cartKey)}><Trash2 size={14} /> Remove</button>
                </div>
              </div>
            ))}

            <Link to="/products" style={s.continueLink}>← Continue Shopping</Link>
          </div>

          {/* Order Summary + Delivery */}
          <div style={s.summaryCol}>
            <div style={s.summaryCard}>
              <h3 style={s.summaryTitle}>Order Summary</h3>
              <div style={s.sumRow}><span>Subtotal</span><span>Rs. {cartTotal}</span></div>
              <div style={s.sumRow}><span>Delivery fee</span><span style={{ color: '#28A745', fontWeight: 600 }}>To be Calculated</span></div>
              <div style={{ ...s.sumRow, fontWeight: 700, borderTop: '1px solid #eee', paddingTop: 10, marginTop: 4 }}>
                <span>Total</span><span style={{ color: '#C8102E', fontWeight: 800, fontSize: 16 }}>Rs. {cartTotal}</span>
              </div>
            </div>

            <form onSubmit={handleOrder}>
              <div style={s.deliveryCard}>
                <h3 style={s.deliveryTitle}>Delivery Details</h3>

                <div className="form-group">
                  <label className="form-label">Full Name <span className="req">*</span></label>
                  <input className={`form-input${errors.fullName ? ' error' : ''}`} name="fullName" placeholder="Your full name" value={form.fullName} onChange={handleChange} />
                  {errors.fullName && <div className="error-msg">{errors.fullName}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number <span className="req">*</span></label>
                  <input className={`form-input${errors.phone ? ' error' : ''}`} name="phone" placeholder="+977 9XXXXXXXXX" value={form.phone} onChange={handleChange} />
                  {errors.phone && <div className="error-msg">{errors.phone}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Delivery Address <span className="req">*</span></label>
                  <input className={`form-input${errors.address ? ' error' : ''}`} name="address" placeholder="Street, City , Landmark" value={form.address} onChange={handleChange} />
                  {errors.address && <div className="error-msg">{errors.address}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Order Notes (Optional)</label>
                  <input className="form-input" name="notes" placeholder="Any Special Instrucutoins?" value={form.notes} onChange={handleChange} />
                </div>

                <h3 style={{ ...s.deliveryTitle, marginBottom: 14 }}>Payment Method</h3>

                <label style={{ ...s.payOption, ...(form.payment === 'whatsapp' ? s.payActive : {}) }}>
                  <input type="radio" name="payment" value="whatsapp" checked={form.payment === 'whatsapp'} onChange={handleChange} style={{ marginRight: 10, accentColor: '#1d6ae8' }} />
                  <MessageCircle size={16} color="#28A745" style={{ marginRight: 6, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>Order via WhatsApp</div>
                    <div style={{ fontSize: 11, color: '#666', marginTop: 2 }}>Pay via cash on delivery or secure bank transfer after confirming with our team</div>
                  </div>
                </label>

                <label style={{ ...s.payOption, marginTop: 10, ...(form.payment === 'esewa' ? s.payActive : {}) }}>
                  <input type="radio" name="payment" value="esewa" checked={form.payment === 'esewa'} onChange={handleChange} style={{ marginRight: 10, accentColor: '#1d6ae8' }} />
                  <span style={{ fontSize: 16, marginRight: 6 }}>💳</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>Pay with eSewa</div>
                    <div style={{ fontSize: 11, color: '#666', marginTop: 2 }}>Pay instantly and securely using your eSewa digital wallet.</div>
                  </div>
                </label>

                <button type="submit" className="btn-green" style={{ width: '100%', justifyContent: 'center', padding: 14, fontSize: 15, borderRadius: 8, marginTop: 20 }}>
                  <MessageCircle size={16} /> Place order via WhatsApp
                </button>
                <p style={{ textAlign: 'center', fontSize: 12, color: '#888', marginTop: 10 }}>You will be redirected to WhatsApp to confirm your order details with our team</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const s = {
  breadWrap: { background: '#fff', borderBottom: '1px solid #eee', padding: '10px 0' },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#888' },
  bc: { color: '#888', textDecoration: 'none' },
  banner: { background: '#555', padding: '28px 0', textAlign: 'center' },
  bannerH1: { color: '#fff', fontSize: 28, fontWeight: 800 },
  layout: { display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24, alignItems: 'start' },
  cartCard: { background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  cartHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  cartTitle: { fontWeight: 600, fontSize: 15 },
  clearBtn: { background: '#C8102E', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', fontSize: 12, fontWeight: 600, cursor: 'pointer' },
  cartItem: { display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid #f0f0f0', alignItems: 'center' },
  itemImg: { width: 80, height: 80, borderRadius: 8, overflow: 'hidden', flexShrink: 0, background: '#f5f0e8' },
  itemInfo: { flex: 1 },
  itemName: { fontWeight: 700, fontSize: 14 },
  itemPriceEach: { color: '#888', fontSize: 12, margin: '3px 0 8px' },
  qtyRow: { display: 'flex', alignItems: 'center', gap: 10 },
  qtyBtn: { background: '#F4F4F4', border: '1px solid #ddd', borderRadius: 5, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
  qtyNum: { fontWeight: 700, fontSize: 14, minWidth: 20, textAlign: 'center' },
  itemRight: { textAlign: 'right', flexShrink: 0 },
  itemTotal: { fontWeight: 700, fontSize: 15, color: '#333', marginBottom: 8 },
  removeBtn: { background: 'none', border: 'none', color: '#C8102E', fontSize: 12, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 },
  continueLink: { display: 'inline-flex', alignItems: 'center', gap: 6, color: '#555', fontSize: 13, fontWeight: 500, marginTop: 20, textDecoration: 'none' },
  summaryCol: {},
  summaryCard: { background: '#fff', borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  summaryTitle: { fontWeight: 700, fontSize: 16, marginBottom: 16 },
  sumRow: { display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 14 },
  deliveryCard: { background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  deliveryTitle: { fontWeight: 700, fontSize: 15, marginBottom: 18 },
  payOption: { display: 'flex', alignItems: 'flex-start', background: '#F9F9F9', border: '1.5px solid #eee', borderRadius: 10, padding: 14, cursor: 'pointer' },
  payActive: { background: '#F0F9FF', border: '1.5px solid #90CAF9' },
  successBanner: { background: '#E8F5E9', border: '1px solid #c3e6cb', borderRadius: 8, padding: '12px 20px', color: '#2E7D32', fontWeight: 600, marginBottom: 20 },
  modalOverlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 20 },
  modalContent: { background: '#fff', borderRadius: 16, padding: 32, maxWidth: 400, width: '100%', position: 'relative', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' },
  modalClose: { position: 'absolute', top: 12, right: 12, background: '#f5f5f5', border: 'none', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
  modalIcon: { fontSize: 56, marginBottom: 16 },
  modalTitle: { fontSize: 24, fontWeight: 800, color: '#1a1a1a', marginBottom: 12 },
  modalText: { color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 16 },
  modalHighlight: { background: '#FFF5F5', border: '1px solid #ffcdd2', borderRadius: 8, padding: '12px 16px', color: '#C8102E', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 },
};
