import React from 'react';
import { X, Heart, Leaf, Shield, Award, Sparkles } from 'lucide-react';

export const InfoModal = ({ type, isOpen, onClose }) => {
  if (!isOpen) return null;

  const contentMap = {
    'our-story': {
      title: 'Our Story 🌿',
      subtitle: 'Reinventing Indian Snacking with Vacuum Technology',
      body: (
        <div>
          <p style={{ marginBottom: '14px', lineHeight: 1.6 }}>
            PureBë was born out of a simple craving: enjoying traditional Indian snacks like crispy banana chips and seasoned chickpeas without feeling sluggish or guilty from excess oil and heavy preservatives.
          </p>
          <p style={{ marginBottom: '14px', lineHeight: 1.6 }}>
            By adopting low-temperature <strong>vacuum frying technology</strong>, we fry real raw fruits and legumes at reduced atmospheric pressure and much lower temperatures. This process locks in natural colors, original nutrients, and irresistible crunch while absorbing up to <strong>90% less oil</strong>.
          </p>
          <div style={{ background: '#EAF6EE', padding: '16px', borderRadius: '12px', color: '#0F4028', fontWeight: 600, fontSize: '13px' }}>
            ✨ Pure Ingredients • 0% Added Preservatives • Crafted with Love in India
          </div>
        </div>
      )
    },
    'why-purebe': {
      title: 'Why PureBë? 🌟',
      subtitle: 'The Healthy Vacuum Fried Difference',
      body: (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
            <div style={{ background: '#f9fafb', padding: '14px', borderRadius: '10px' }}>
              <strong style={{ color: '#0F4028' }}>🔥 Vacuum Fried vs Deep Fried</strong>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Cooked under vacuum pressure at ~90°C instead of scorching 180°C oil. Less oil, more nutrition!</p>
            </div>
            <div style={{ background: '#f9fafb', padding: '14px', borderRadius: '10px' }}>
              <strong style={{ color: '#0F4028' }}>🍃 100% Real Ingredients</strong>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Real raw Nendran bananas, jackfruit pods, and Kabuli chana sourced directly from local farmers.</p>
            </div>
          </div>
        </div>
      )
    },
    'blogs': {
      title: 'PureBë Health Journal 📰',
      subtitle: 'Tips for mindful snacking & active living',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '10px' }}>
            <div style={{ fontSize: '11px', color: '#E97D25', fontWeight: 700 }}>SNACK SCIENCE</div>
            <div style={{ fontWeight: 700, fontSize: '15px', color: '#0F4028' }}>What is Vacuum Frying & Why is it Healthier?</div>
            <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Discover how frying in a vacuum chamber retains vitamins and natural flavors.</p>
          </div>
          <div style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '10px' }}>
            <div style={{ fontSize: '11px', color: '#E97D25', fontWeight: 700 }}>NUTRITION</div>
            <div style={{ fontWeight: 700, fontSize: '15px', color: '#0F4028' }}>5 Guilt-Free Evening Office Snacks</div>
            <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Say goodbye to post-snack sluggishness with high-protein Kabuli Chana.</p>
          </div>
        </div>
      )
    },
    'account': {
      title: 'My PureBë Account 👤',
      subtitle: 'Manage your profile and track orders',
      body: (
        <div>
          <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '12px', marginBottom: '16px' }}>
            <div style={{ fontWeight: 700, fontSize: '15px', color: '#0F4028' }}>Welcome back, Snack Lover!</div>
            <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Member Tier: <strong>PureBë Gold</strong> • Reward Points: <strong>250 pts</strong></div>
          </div>
          <button className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>View Order History</button>
        </div>
      )
    }
  };

  const data = contentMap[type] || contentMap['our-story'];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '560px' }}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <h3 style={{ fontSize: '24px', color: '#0F4028', marginBottom: '4px' }}>{data.title}</h3>
        <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '20px' }}>{data.subtitle}</div>

        {data.body}
      </div>
    </div>
  );
};
