import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Trash2, Minus, Plus, MessageCircle, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Pages.css';

export default function Cart() {
  const { cart, removeFromCart, updateQty, clearCart, cartTotal } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName:'', phone:'', address:'', notes:'', payment:'whatsapp' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

  const buildMsg = () => {
    const items = cart.map(i => `- ${i.name} (${i.selectedSize}) x${i.qty} = Rs.${i.price * i.qty}`).join('\n');
    return encodeURIComponent(`🛒 *New Order*\n\n*Items:*\n${items}\n\n*Total: Rs.${cartTotal}*\n\nName: ${form.fullName}\nPhone: ${form.phone}\nAddress: ${form.address}${form.notes ? `\nNotes: ${form.notes}` : ''}\nPayment: ${form.payment === 'whatsapp' ? 'Cash/Bank Transfer' : 'eSewa'}`);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    if (form.payment === 'whatsapp') {
      window.open(`https://wa.me/9779857021032?text=${buildMsg()}`, '_blank');
    } else {
      setSubmitted(true);
      setTimeout(() => { clearCart(); navigate('/products'); }, 3000);
    }
  };

  if (cart.length === 0) return (
    <div>
      <div className="breadwrap">
        <div className="container">
          <div className="pd-breadcrumb"><Home size={13} /><Link to="/" className="pd-bc-link">HOME</Link><ChevronRight size={12} /><span>Cart</span></div>
        </div>
      </div>
      <div className="empty-state" style={{ padding: '80px 24px' }}>
        <div style={{ fontSize: 60, marginBottom: 16 }}>🛒</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 10 }}>Your cart is empty</h2>
        <p style={{ color: '#888', marginBottom: 28 }}>Browse our products and add something delicious!</p>
        <button className="btn-primary" style={{ padding: '12px 32px' }} onClick={() => navigate('/products')}>Browse Products →</button>
      </div>
    </div>
  );

  return (
    <div style={{ background: '#F4F4F4', minHeight: '100vh' }}>
      <div className="breadwrap">
        <div className="container">
          <div className="pd-breadcrumb">
            <Home size={13} /><Link to="/" className="pd-bc-link">HOME</Link>
            <ChevronRight size={12} /><span>Review Your Cart</span>
          </div>
        </div>
      </div>
      <div className="cart-banner"><h1 className="cart-banner-title">Review Your Cart</h1></div>

      <div className="container" style={{ padding: '28px 24px 48px' }}>
        {submitted && <div className="success-banner">✅ Order placed! Redirecting...</div>}
        <div className="cart-layout">
          {/* Cart items */}
          <div className="cart-card">
            <div className="cart-header">
              <span className="cart-header-title">Your Cart (<strong>{cart.length}</strong>)</span>
              <button className="cart-clear-btn" onClick={clearCart}>Clear All</button>
            </div>
            {cart.map(item => (
              <div key={item.cartKey} className="cart-item">
                <div className="cart-item-img">
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name} <span style={{ color: '#888', fontSize: 12 }}>({item.selectedSize})</span></div>
                  <div className="cart-item-each">Rs.{item.price} each</div>
                  <div className="cart-qty">
                    <button className="cart-qty-btn" onClick={() => updateQty(item.cartKey, -1)}><Minus size={12} /></button>
                    <span className="cart-qty-num">{item.qty}</span>
                    <button className="cart-qty-btn" onClick={() => updateQty(item.cartKey, 1)}><Plus size={12} /></button>
                  </div>
                </div>
                <div className="cart-item-right">
                  <div className="cart-item-total">Rs.{item.price * item.qty}</div>
                  <button className="cart-remove-btn" onClick={() => removeFromCart(item.cartKey)}><Trash2 size={14} /> Remove</button>
                </div>
              </div>
            ))}
            <Link to="/products" className="cart-continue">← Continue Shopping</Link>
          </div>

          {/* Summary + Delivery */}
          <div className="cart-right-col">
            <div className="cart-summary">
              <h3 className="cart-sec-title">Order Summary</h3>
              <div className="cart-sum-row"><span>Subtotal</span><span>Rs. {cartTotal}</span></div>
              <div className="cart-sum-row"><span>Delivery fee</span><span style={{ color: '#28A745', fontWeight: 600 }}>To be Calculated</span></div>
              <div className="cart-sum-row cart-sum-total"><span>Total</span><span style={{ color: '#C8102E', fontWeight: 800, fontSize: 16 }}>Rs. {cartTotal}</span></div>
            </div>

            <form onSubmit={handleOrder} className="cart-delivery">
              <h3 className="cart-sec-title">Delivery Details</h3>
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
                <input className={`form-input${errors.address ? ' error' : ''}`} name="address" placeholder="Street, City, Landmark" value={form.address} onChange={handleChange} />
                {errors.address && <div className="error-msg">{errors.address}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Order Notes (Optional)</label>
                <input className="form-input" name="notes" placeholder="Any special instructions?" value={form.notes} onChange={handleChange} />
              </div>

              <h3 className="cart-sec-title" style={{ marginTop: 20 }}>Payment Method</h3>
              <label className={`pay-option${form.payment === 'whatsapp' ? ' pay-option--active' : ''}`}>
                <input type="radio" name="payment" value="whatsapp" checked={form.payment === 'whatsapp'} onChange={handleChange} />
                <MessageCircle size={16} color="#28A745" />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>Order via WhatsApp</div>
                  <div style={{ fontSize: 11, color: '#666', marginTop: 2 }}>Pay via cash on delivery or bank transfer</div>
                </div>
              </label>
              <label className={`pay-option${form.payment === 'esewa' ? ' pay-option--active' : ''}`} style={{ marginTop: 10 }}>
                <input type="radio" name="payment" value="esewa" checked={form.payment === 'esewa'} onChange={handleChange} />
                <span style={{ fontSize: 16 }}>💳</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>Pay with eSewa</div>
                  <div style={{ fontSize: 11, color: '#666', marginTop: 2 }}>Pay instantly using your eSewa wallet</div>
                </div>
              </label>

              <button type="submit" className="btn-green" style={{ width: '100%', justifyContent: 'center', padding: 14, fontSize: 15, borderRadius: 8, marginTop: 20 }}>
                <MessageCircle size={16} /> Place order via WhatsApp
              </button>
              <p style={{ textAlign: 'center', fontSize: 12, color: '#888', marginTop: 10 }}>You will be redirected to WhatsApp to confirm your order</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
