import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';

export const ReviewModal = ({ isOpen, onClose, onSubmitReview }) => {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      onSubmitReview({ name, comment, rating });
      setName('');
      setComment('');
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <h3 style={{ fontSize: '22px', color: '#0F4028', marginBottom: '8px' }}>Write a Customer Review</h3>
        <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>
          Share your PureBë snack experience with fellow foodies!
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px' }}>Rating</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  type="button" 
                  key={star} 
                  onClick={() => setRating(star)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
                >
                  <Star size={26} fill={star <= rating ? '#F4B327' : 'none'} color="#F4B327" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>Your Name *</label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Priya M." 
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>Your Review *</label>
            <textarea 
              required 
              rows={3} 
              placeholder="What did you love about PureBë chips?" 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', fontFamily: 'inherit' }}
            ></textarea>
          </div>

          <button className="btn-primary" type="submit" style={{ justifyContent: 'center' }}>
            <Send size={16} /> Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};
