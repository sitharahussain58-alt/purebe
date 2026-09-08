import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, CreditCard, Truck } from 'lucide-react';

export const CheckoutModal = ({ isOpen, onClose, totalAmount, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Bangalore',
    pincode: '',
    paymentMethod: 'UPI'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onSuccess();
      setIsSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <CheckCircle2 size={64} color="#27AE60" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '24px', color: '#0F4028', marginBottom: '8px' }}>Order Placed Successfully!</h3>
            <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '16px' }}>
              Thank you, <strong>{formData.name || 'Valued Customer'}</strong>! Your fresh vacuum fried snacks are being packed with care.
            </p>
            <div style={{ background: '#EAF6EE', padding: '12px', borderRadius: '10px', fontSize: '13px', color: '#0F4028', fontWeight: 600 }}>
              Order ID: #PB-{Math.floor(100000 + Math.random() * 900000)} • Amount Paid: ₹{totalAmount}
            </div>
          </div>
        ) : (
          <div>
            <h3 style={{ fontSize: '22px', color: '#0F4028', marginBottom: '6px' }}>Express Checkout</h3>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>
              Total Payable: <strong style={{ color: '#0F4028', fontSize: '16px' }}>₹{totalAmount}</strong> (Free Shipping included)
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>Full Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Neha Sharma" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>Phone *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="9876543210" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>Pincode *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="560001" 
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>Delivery Address *</label>
                <textarea 
                  required 
                  rows={2}
                  placeholder="Flat, House no., Building, Street address" 
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', fontFamily: 'inherit' }}
                ></textarea>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px' }}>Payment Mode</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                  {['UPI', 'Card', 'COD'].map((method) => (
                    <button 
                      type="button" 
                      key={method}
                      onClick={() => setFormData({ ...formData, paymentMethod: method })}
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        border: formData.paymentMethod === method ? '2px solid #0F4028' : '1px solid #d1d5db',
                        background: formData.paymentMethod === method ? '#EAF6EE' : 'white',
                        fontWeight: 700,
                        fontSize: '13px',
                        color: formData.paymentMethod === method ? '#0F4028' : '#4b5563',
                        cursor: 'pointer'
                      }}
                    >
                      {method === 'COD' ? 'Cash on Delivery' : method}
                    </button>
                  ))}
                </div>
              </div>

              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }} type="submit">
                <ShieldCheck size={18} /> Place Order (₹{totalAmount})
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
