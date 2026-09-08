import React, { useState } from 'react';
import { X, Search, ShoppingCart, Eye } from 'lucide-react';
import { productsData } from './Bestsellers';

export const SearchModal = ({ isOpen, onClose, onQuickView, onAddToCart }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = productsData.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.ingredients.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button className="close-btn" onClick={onClose} aria-label="Close search">
          <X size={20} />
        </button>

        <h3 style={{ fontSize: '20px', color: '#0F4028', marginBottom: '16px' }}>Search Snacks</h3>

        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <Search size={20} color="#9ca3af" style={{ position: 'absolute', left: '16px', top: '14px' }} />
          <input 
            type="text" 
            placeholder="Search banana chips, jackfruit, chana..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              width: '100%',
              padding: '12px 16px 12px 48px',
              borderRadius: '12px',
              border: '2px solid #e5e7eb',
              fontSize: '15px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ maxHeight: '360px', overflowY: 'auto' }}>
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px', color: '#6b7280' }}>
              No snacks found matching "{query}"
            </div>
          ) : (
            filteredProducts.map(product => (
              <div 
                key={product.id} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '12px',
                  borderRadius: '12px',
                  marginBottom: '10px',
                  background: '#f9fafb',
                  transition: 'background 0.2s'
                }}
              >
                <div style={{ width: '48px', height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={product.image} alt={product.name} style={{ maxHeight: '48px', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#1f2937' }}>{product.name}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>{product.weight} • ₹{product.price}</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="icon-btn" onClick={() => { onQuickView(product); onClose(); }} title="Quick View">
                    <Eye size={16} color="#0F4028" />
                  </button>
                  <button className="btn-primary" style={{ padding: '6px 14px', fontSize: '13px' }} onClick={() => { onAddToCart(product); onClose(); }}>
                    <ShoppingCart size={14} /> Add
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
