import React from 'react';
import { ShoppingCart, ArrowRight, Eye } from 'lucide-react';

export const productsData = [
  {
    id: 'banana-classic',
    name: 'Banana Chips Classic',
    weight: '80gms',
    price: 100,
    type: 'yellow',
    image: '/assets/pouch_banana_classic.jpg',
    isBestseller: false,
    rating: 4.9,
    reviewsCount: 142,
    description: 'Thinly sliced raw bananas vacuum fried to crispy perfection with light sea salt. 90% less oil absorbed compared to conventional chips.',
    ingredients: 'Raw Banana, Rice Bran Oil (Vacuum Fried), Salt.',
    nutrition: { calories: '135 kcal', protein: '1.2g', carbs: '18g', fats: '6g' }
  },
  {
    id: 'jackfruit-chips',
    name: 'Ripe Jackfruit Chips',
    weight: '70gms',
    price: 150,
    type: 'green',
    image: '/assets/pouch_jackfruit.jpg',
    isBestseller: false,
    rating: 4.8,
    reviewsCount: 98,
    description: 'Naturally sweet ripe jackfruit slices vacuum fried into golden crunchy chips. Rich in fiber and vitamins without any added sugar.',
    ingredients: 'Ripe Jackfruit, Vacuum Fried Oil.',
    nutrition: { calories: '140 kcal', protein: '1.5g', carbs: '22g', fats: '5g' }
  },
  {
    id: 'kabuli-chana',
    name: 'Kabuli Chana Salt & Pepper',
    weight: '80gms',
    price: 110,
    type: 'orange',
    image: '/assets/pouch_chana.jpg',
    isBestseller: true,
    rating: 5.0,
    reviewsCount: 215,
    description: 'High-protein crunchy Kabuli chickpeas seasoned with freshly ground black pepper and Himalayan pink salt. The perfect healthy power snack.',
    ingredients: 'Kabuli Chana (Chickpeas), Salt, Black Pepper, Spices.',
    nutrition: { calories: '150 kcal', protein: '7.8g', carbs: '20g', fats: '4g' }
  },
  {
    id: 'banana-salt-pepper',
    name: 'Banana Chips Salt & Pepper',
    weight: '80gms',
    price: 110,
    type: 'teal',
    image: '/assets/pouch_banana_teal.jpg',
    isBestseller: false,
    rating: 4.9,
    reviewsCount: 116,
    description: 'Zesty combination of coarse sea salt and cracked black pepper on vacuum-fried crisp banana slices.',
    ingredients: 'Raw Banana, Vacuum Fried Oil, Black Pepper, Salt, Spices.',
    nutrition: { calories: '138 kcal', protein: '1.2g', carbs: '18g', fats: '6.2g' }
  }
];

export const Bestsellers = ({ onAddToCart, onQuickView, onSeeAllProducts }) => {
  return (
    <section className="bestsellers-section" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Bestsellers 🌾</h2>
          <p>Handpicked favorites, loved by everyone!</p>
        </div>

        <div className="product-grid">
          {productsData.map((product) => (
            <div key={product.id} className="product-card">
              {product.isBestseller && (
                <span className="badge-bestseller">Bestseller</span>
              )}

              <div 
                className={`product-image-box bg-${product.type}`}
                onClick={() => onQuickView(product)}
                style={{ cursor: 'pointer', padding: '12px' }}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{
                    height: '100%',
                    maxHeight: '195px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.12))',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <button 
                  className="icon-btn" 
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    background: 'rgba(255,255,255,0.9)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  title="Quick View"
                  onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
                >
                  <Eye size={16} color="#0F4028" />
                </button>
              </div>

              <h3 className="product-title" onClick={() => onQuickView(product)} style={{ cursor: 'pointer' }}>
                {product.name}
              </h3>
              <div className="product-weight">({product.weight})</div>
              
              <div className="product-price">₹{product.price}.00</div>

              <button className="add-cart-btn" onClick={() => onAddToCart(product)}>
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="view-all-wrapper">
          <button className="btn-secondary" onClick={onSeeAllProducts}>
            View All Products <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
