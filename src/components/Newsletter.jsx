import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Newsletter = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe(email);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container newsletter-inner">
        <div className="newsletter-decor-left">🍃</div>

        <div className="newsletter-content">
          <h3>Subscribe to our emails</h3>
          <p>Be the first to know about new collections and special offers.</p>
        </div>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit" aria-label="Subscribe">
            <ArrowRight size={18} color="#382103" />
          </button>
        </form>

        <div className="newsletter-decor-right">🍃</div>
      </div>
    </section>
  );
};
