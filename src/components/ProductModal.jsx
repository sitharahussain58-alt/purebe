import React, { useState } from 'react';
import { X, Star, ShoppingCart, Sparkles } from 'lucide-react';

export const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedWeight] = useState(product?.weight || '80gms');
  const [qty] = useState(1);

  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '28px', alignItems: 'center' }}>
          {/* Left image */}
          <div className={`product-image-box bg-${product.type}`} style={{ height: '280px', margin: 0, padding: '16px' }}>
            <img 
              src={product.image} 
              alt={product.name}
              style={{
                maxHeight: '240px',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.15))'
              }}
            />
          </div>

          {/* Right info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', color: '#F4B327' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#F4B327" color="#F4B327" />
                ))}
              </div>
              <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: 600 }}>{product.rating} ({product.reviewsCount} reviews)</span>
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0F4028', marginBottom: '6px' }}>{product.name}</h2>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#0F4028', marginBottom: '14px' }}>₹{product.price}.00</div>

            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.5, marginBottom: '16px' }}>
              {product.description}
            </p>

            {/* Nutrition highlight */}
            <div style={{ background: '#f9fafb', padding: '12px', borderRadius: '10px', marginBottom: '16px', fontSize: '12px' }}>
              <div style={{ fontWeight: 700, color: '#0F4028', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles size={14} color="#E97D25" /> Nutritional Info (Per Serve):
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', textAlign: 'center' }}>
                <div style={{ background: 'white', padding: '6px', borderRadius: '6px' }}><strong>{product.nutrition.calories}</strong><br/><span style={{ color: '#888' }}>Energy</span></div>
                <div style={{ background: 'white', padding: '6px', borderRadius: '6px' }}><strong>{product.nutrition.protein}</strong><br/><span style={{ color: '#888' }}>Protein</span></div>
                <div style={{ background: 'white', padding: '6px', borderRadius: '6px' }}><strong>{product.nutrition.carbs}</strong><br/><span style={{ color: '#888' }}>Carbs</span></div>
                <div style={{ background: 'white', padding: '6px', borderRadius: '6px' }}><strong>{product.nutrition.fats}</strong><br/><span style={{ color: '#888' }}>Fat</span></div>
              </div>
            </div>

            {/* Ingredients */}
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '20px' }}>
              <strong>Ingredients:</strong> {product.ingredients}
            </div>

            {/* Action button */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="btn-primary" 
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => {
                  onAddToCart(product, qty);
                  onClose();
                }}
              >
                <ShoppingCart size={18} /> Add to Cart (₹{product.price * qty})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
