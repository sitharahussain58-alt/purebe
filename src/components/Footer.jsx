import React from 'react';
import { Instagram, Facebook, Youtube, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrap">
              <span className="footer-logo-title">PureBë</span>
              <span className="footer-logo-tag">Snacking made healthy</span>
            </div>
            <p className="footer-desc">
              Wholesome, vacuum fried snacks made with real ingredients and lots of care.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram"><Instagram size={15} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook"><Facebook size={15} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Youtube"><Youtube size={15} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter"><Twitter size={15} /></a>
            </div>
          </div>

          {/* Col 2: Shop */}
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="#products" onClick={() => onNavigate('products')}>All Products</a></li>
              <li><a href="#products" onClick={() => onNavigate('products')}>Banana Chips</a></li>
              <li><a href="#products" onClick={() => onNavigate('products')}>Jackfruit Chips</a></li>
              <li><a href="#products" onClick={() => onNavigate('products')}>Kabuli Chana</a></li>
              <li><a href="#products" onClick={() => onNavigate('products')}>Combo Packs</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about" onClick={() => onNavigate('our-story')}>About Us</a></li>
              <li><a href="#story" onClick={() => onNavigate('our-story')}>Our Story</a></li>
              <li><a href="#blogs" onClick={() => onNavigate('blogs')}>Blogs</a></li>
              <li><a href="#contact" onClick={() => onNavigate('contact')}>Contact Us</a></li>
              <li><a href="#faqs" onClick={() => onNavigate('faqs')}>FAQs</a></li>
            </ul>
          </div>

          {/* Col 4: Help */}
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li><a href="#shipping" onClick={() => onNavigate('shipping')}>Shipping Policy</a></li>
              <li><a href="#returns" onClick={() => onNavigate('returns')}>Return Policy</a></li>
              <li><a href="#terms" onClick={() => onNavigate('terms')}>Terms &amp; Conditions</a></li>
              <li><a href="#privacy" onClick={() => onNavigate('privacy')}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div className="footer-col contact-col">
            <h4>Contact</h4>
            <div className="contact-item">
              <Mail size={15} />
              <span>hello@purebe.in</span>
            </div>
            <div className="contact-item">
              <Phone size={15} />
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <MapPin size={15} />
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 PureBë. All rights reserved.</div>
          <div className="made-in-india">
            Made with <Heart size={14} fill="#EF4444" color="#EF4444" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
};
