import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { USPBanner } from './components/USPBanner';
import { Bestsellers, productsData } from './components/Bestsellers';
import { BannerSection } from './components/BannerSection';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ReviewModal } from './components/ReviewModal';
import { InfoModal } from './components/InfoModal';
import { Toast } from './components/Toast';

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cartItems, setCartItems] = useState([
    { ...productsData[0], quantity: 1 } // Pre-load 1 item for immediate interactivity demonstration
  ]);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState(null); // 'our-story', 'why-purebe', 'blogs', 'account'
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
    addToast(`Added ${product.name} to cart!`);
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    addToast('Item removed from cart');
  };

  const handleCheckoutTrigger = (total) => {
    setCheckoutTotal(total);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSuccess = () => {
    setCartItems([]);
    addToast('🎉 Order placed successfully!');
  };

  const handleSubscribe = (email) => {
    addToast(`Subscribed ${email}! Check your inbox for 10% off coupon code PUREBE10.`);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (['our-story', 'why-purebe', 'blogs', 'account'].includes(tab)) {
      setInfoModalType(tab);
    } else {
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (tab === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="app-root">
      {/* Toast Notifications */}
      <Toast toasts={toasts} />

      {/* Header */}
      <Header
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setInfoModalType('account')}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* Main Page Layout matching Reference 1 */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onShopNow={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* 2. Key USPs Bar */}
        <USPBanner />

        {/* 3. Our Bestsellers */}
        <Bestsellers
          onAddToCart={handleAddToCart}
          onQuickView={(product) => setQuickViewProduct(product)}
          onSeeAllProducts={() => {
            addToast('Viewing all 12 healthy snack collections!');
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Promo Banner */}
        <BannerSection
          onExplore={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Customer Testimonials */}
        <Testimonials
          onAddReview={() => setIsReviewModalOpen(true)}
        />

        {/* 6. Email Subscription Bar */}
        <Newsletter onSubscribe={handleSubscribe} />
      </main>

      {/* 7. Footer */}
      <Footer onNavigate={handleTabChange} />

      {/* Interactive Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckoutTrigger}
      />

      <ProductModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={(p) => setQuickViewProduct(p)}
        onAddToCart={handleAddToCart}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalAmount={checkoutTotal}
        onSuccess={handleCheckoutSuccess}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmitReview={({ name }) => addToast(`Thank you ${name}! Your review has been submitted.`)}
      />

      <InfoModal
        type={infoModalType}
        isOpen={!!infoModalType}
        onClose={() => setInfoModalType(null)}
      />
    </div>
  );
}

export default App;
