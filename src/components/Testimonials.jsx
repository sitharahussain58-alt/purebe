import React, { useState } from 'react';
import { Star, PlusCircle } from 'lucide-react';

export const Testimonials = ({ onAddReview }) => {
  const [activeDot, setActiveDot] = useState(0);

  const reviewsList = [
    {
      id: 1,
      stars: 5,
      text: '"The banana chips are so light and crispy — not oily at all. You can actually taste the freshness. Finally a healthy snack I can enjoy guilt-free!"',
      author: 'Neha R.'
    },
    {
      id: 2,
      stars: 5,
      text: '"Tried the Jackfruit Chips and they\'re naturally sweet and perfectly crunchy. My kids are obsessed."',
      author: 'Rahul M.'
    },
    {
      id: 3,
      stars: 5,
      text: '"Kabuli Chana is a great high-protein snack for office munching. Wish the pack was a bit bigger though!"',
      author: 'Anjali S.'
    }
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="container" style={{ position: 'relative' }}>
        {/* Leaf decor elements matching reference 1 */}
        <div className="reviews-decor-left">🌱</div>
        <div className="reviews-decor-right">🌿</div>

        <div className="section-header">
          <h2>What Our Customers Say 🌾</h2>
        </div>

        <div className="reviews-grid">
          {reviewsList.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="stars-row">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="#F4B327" color="#F4B327" />
                ))}
              </div>
              <p className="review-text">{rev.text}</p>
              <div className="review-author">— {rev.author}</div>
            </div>
          ))}
        </div>

        {/* 4 Pagination Dots matching reference 1 */}
        <div className="reviews-pagination">
          {[0, 1, 2, 3].map((idx) => (
            <span 
              key={idx} 
              className={`dot ${activeDot === idx ? 'active' : ''}`}
              onClick={() => setActiveDot(idx)}
            ></span>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button className="btn-outline" onClick={onAddReview}>
            <PlusCircle size={16} /> Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};
