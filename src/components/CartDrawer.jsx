import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, CheckCircle } from 'lucide-react';

export const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onCheckout }) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 389;
  const rawSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = Math.round(rawSubtotal * appliedDiscount);
  const subtotal = rawSubtotal - discountAmount;

  const progress = Math.min(100, Math.round((rawSubtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountNeeded = FREE_SHIPPING_THRESHOLD - rawSubtotal;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'PUREBE10') {
      setAppliedDiscount(0.10);
      setCouponMessage('🎉 10% Discount Applied!');
    } else if (couponCode.trim().toUpperCase() === 'FREESHIP') {
      setAppliedDiscount(0.05);
      setCouponMessage('🎉 Extra 5% Off Applied!');
    } else {
      setCouponMessage('❌ Invalid coupon code');
    }
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} color="#0F4028" />
            <h3>Your Snack Basket ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</h3>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="free-shipping-progress">
          {progress >= 100 ? (
            <div style={{ color: '#0F4028', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={16} color="#27AE60" /> Congratulations! You unlocked <strong>FREE Shipping!</strong> 🚚
            </div>
          ) : (
            <div>
              Add <strong>₹{amountNeeded}</strong> more to unlock <strong>FREE Shipping!</strong> 🚚
            </div>
          )}
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <div style={{ textTransform: 'none', textAlign: 'center', padding: '60px 20px', color: '#6b7280' }}>
              <ShoppingBag size={48} color="#d1d5db" style={{ marginBottom: '16px' }} />
              <p style={{ fontWeight: 600, fontSize: '16px', color: '#374151' }}>Your cart is empty</p>
              <p style={{ fontSize: '13px', marginTop: '6px' }}>Looks like you haven't added any healthy snacks yet!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div style={{ width: '56px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={item.image} alt={item.name} style={{ maxHeight: '56px', objectFit: 'contain' }} />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.name}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>{item.weight}</div>
                  <div className="cart-item-price">₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</div>
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity - 1)}><Minus size={12} /></button>
                    <span style={{ fontSize: '13px', fontWeight: 'bold', padding: '0 4px' }}>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity + 1)}><Plus size={12} /></button>
                  </div>
                </div>
                <button 
                  onClick={() => onRemoveItem(item.id)} 
                  style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '4px' }}
                  title="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            {/* Promo Code */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <input 
                type="text" 
                placeholder="Coupon (e.g. PUREBE10)" 
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '13px'
                }}
              />
              <button type="submit" className="btn-outline" style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '13px' }}>
                <Tag size={14} /> Apply
              </button>
            </form>
            {couponMessage && (
              <div style={{ fontSize: '12px', fontWeight: 600, color: couponMessage.includes('❌') ? '#dc2626' : '#059669', marginBottom: '12px' }}>
                {couponMessage}
              </div>
            )}

            <div className="subtotal-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            {appliedDiscount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#059669', marginBottom: '10px' }}>
                <span>Discount ({(appliedDiscount * 100)}%)</span>
                <span>-₹{discountAmount}</span>
              </div>
            )}

            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '16px' }}>
              Taxes and shipping calculated at checkout.
            </div>

            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => onCheckout(subtotal)}>
              Proceed to Checkout <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
