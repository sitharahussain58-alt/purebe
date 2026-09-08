import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Leaf, Feather } from 'lucide-react';

export const Hero = ({ onShopNow }) => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Content */}
        <div className="hero-content">
          <h1>
            Crispy. Healthy.
            <span className="highlight">Absolutely Pure.</span>
          </h1>

          <p className="hero-subtitle">
            Vacuum fried snacks made with real ingredients and a whole lot of care.
          </p>

          {/* 4 Feature Circles */}
          <div className="hero-features-list">
            <div className="hero-feature-item">
              <div className="feature-icon-circle">
                <Sparkles size={22} />
              </div>
              <span className="feature-title">Vacuum<br/>Fried</span>
            </div>

            <div className="hero-feature-item">
              <div className="feature-icon-circle">
                <ShieldCheck size={22} />
              </div>
              <span className="feature-title">No Added<br/>Preservatives</span>
            </div>

            <div className="hero-feature-item">
              <div className="feature-icon-circle">
                <Leaf size={22} />
              </div>
              <span className="feature-title">100% Natural<br/>Ingredients</span>
            </div>

            <div className="hero-feature-item">
              <div className="feature-icon-circle">
                <Feather size={22} />
              </div>
              <span className="feature-title">Light &amp;<br/>Crispy</span>
            </div>
          </div>

          {/* CTA */}
          <div className="hero-cta-wrap">
            <button className="btn-primary" onClick={onShopNow}>
              Shop Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
