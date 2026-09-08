import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronDown, Instagram, Facebook, Twitter, Phone, Mail } from 'lucide-react';

export const Header = ({ cartCount, onOpenCart, onOpenSearch, onOpenAccount, activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header-wrapper">
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <div className="announcement-text">
            <span>🚚</span>
            <span>Free shipping for orders above <strong>₹389</strong></span>
            <span>🚚</span>
          </div>

          <div className="announcement-links">
            <a href="#about" onClick={() => handleNavClick('our-story')}>About Us</a>
            <span className="divider">|</span>
            <a href="#contact" onClick={() => handleNavClick('contact')}>Contact Us</a>
            <span className="divider">|</span>
            <a href="#blogs" onClick={() => handleNavClick('blogs')}>Blogs</a>
            <span className="divider">|</span>
            <div className="social-mini">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={13} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={13} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={13} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="header-main">
        <div className="container header-inner">
          {/* Logo */}
          <a href="#" className="logo-container" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <img src="/assets/logo.jpg" alt="PureBë Logo" className="logo-img" />
            <div className="brand-titles">
              <span className="brand-name">PureBë</span>
              <span className="brand-tagline">Snacking made healthy</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li>
                <a href="#" className={activeTab === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
              </li>
              <li style={{ position: 'relative' }} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <a href="#products" className={activeTab === 'products' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>
                  Products <ChevronDown size={14} style={{ display: 'inline', marginLeft: '2px' }} />
                </a>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <a href="#products" onClick={() => handleNavClick('products')}>Banana Chips Classic</a>
                    <a href="#products" onClick={() => handleNavClick('products')}>Ripe Jackfruit Chips</a>
                    <a href="#products" onClick={() => handleNavClick('products')}>Kabuli Chana</a>
                    <a href="#products" onClick={() => handleNavClick('products')}>Combo Value Packs</a>
                  </div>
                )}
              </li>
              <li>
                <a href="#story" className={activeTab === 'our-story' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('our-story'); }}>Our Story</a>
              </li>
              <li>
                <a href="#why" className={activeTab === 'why-purebe' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('why-purebe'); }}>Why PureBë?</a>
              </li>
              <li>
                <a href="#reviews" className={activeTab === 'reviews' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('reviews'); }}>Reviews</a>
              </li>
              <li>
                <a href="#blogs" className={activeTab === 'blogs' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('blogs'); }}>Blogs</a>
              </li>
            </ul>
          </nav>

          {/* Action Icons */}
          <div className="header-actions">
            <button className="icon-btn" title="Search products" onClick={onOpenSearch} aria-label="Search">
              <Search size={20} />
            </button>
            <button className="icon-btn" title="My Account" onClick={onOpenAccount} aria-label="Account">
              <User size={20} />
            </button>
            <button className="icon-btn cart-btn-wrap" title="View Cart" onClick={onOpenCart} aria-label="Cart">
              <ShoppingBag size={20} />
              <span className="cart-badge">{cartCount}</span>
            </button>

            {/* Mobile hamburger menu toggle */}
            <button 
              className="icon-btn mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="logo-container">
                <img src="/assets/logo.jpg" alt="PureBë Logo" style={{ height: '32px' }} />
                <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '20px', color: '#0F4028' }}>PureBë</span>
              </div>
              <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <nav className="mobile-nav-list">
              <a href="#" className={activeTab === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
              <a href="#products" className={activeTab === 'products' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>All Products</a>
              <a href="#story" className={activeTab === 'our-story' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('our-story'); }}>Our Story</a>
              <a href="#why" className={activeTab === 'why-purebe' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('why-purebe'); }}>Why PureBë?</a>
              <a href="#reviews" className={activeTab === 'reviews' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('reviews'); }}>Customer Reviews</a>
              <a href="#blogs" className={activeTab === 'blogs' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('blogs'); }}>Blogs &amp; Health</a>
            </nav>

            <div className="mobile-menu-footer">
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F4028', marginBottom: '8px' }}>Contact Us</div>
              <div style={{ fontSize: '13px', color: '#666', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <Mail size={14} /> hello@purebe.in
              </div>
              <div style={{ fontSize: '13px', color: '#666', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} /> +91 98765 43210
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
