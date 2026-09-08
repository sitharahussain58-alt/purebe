import React from 'react';
import { ArrowRight, Sparkles, Smile, Clock, Heart } from 'lucide-react';

export const BannerSection = ({ onExplore }) => {
  return (
    <section className="promo-banner-section">
      <div className="container">
        <div className="promo-banner-card">
          {/* Decorative left food bowl background graphic */}
          <div className="promo-left-decor">
            <div className="decor-bowl-circle">
              <span style={{ fontSize: '38px' }}>🍌</span>
            </div>
          </div>

          <div className="promo-content">
            <h3>Snack Smart.<br />Live Well.</h3>
            <p>Wholesome snacks for every mood and moment. Because you deserve better.</p>
            <button className="btn-primary" onClick={onExplore}>
              Explore Now <ArrowRight size={18} />
            </button>
          </div>

          {/* 4 Yellow Circular Badges Row on Right matching Reference 1 */}
          <div className="promo-badges-row">
            <div className="promo-badge-circle-item">
              <div className="badge-yellow-circle">
                <Sparkles size={20} color="#382103" />
              </div>
              <span>Rich in Nutrients</span>
            </div>

            <div className="promo-badge-circle-item">
              <div className="badge-yellow-circle">
                <Smile size={20} color="#382103" />
              </div>
              <span>Great Taste</span>
            </div>

            <div className="promo-badge-circle-item">
              <div className="badge-yellow-circle">
                <Clock size={20} color="#382103" />
              </div>
              <span>Perfect Anytime</span>
            </div>

            <div className="promo-badge-circle-item">
              <div className="badge-yellow-circle">
                <Heart size={20} color="#382103" />
              </div>
              <span>Made in India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
