import React from 'react';
import { Flame, Heart, Smile, ShieldAlert } from 'lucide-react';

export const USPBanner = () => {
  const usps = [
    {
      icon: <Flame size={22} />,
      title: "Vacuum Fried",
      desc: "For better taste and nutrition retention"
    },
    {
      icon: <Heart size={22} />,
      title: "Real Ingredients",
      desc: "Made with real fruits, spices & love"
    },
    {
      icon: <ShieldAlert size={22} />,
      title: "No Nasties",
      desc: "No preservatives, no artificial stuff"
    },
    {
      icon: <Smile size={22} />,
      title: "Good for You",
      desc: "Light, crispy & guilt-free snacks"
    }
  ];

  return (
    <section className="usp-bar-section">
      <div className="container">
        <div className="usp-grid">
          {usps.map((usp, idx) => (
            <div key={idx} className="usp-card">
              <div className="usp-icon">
                {usp.icon}
              </div>
              <div className="usp-text">
                <h4>{usp.title}</h4>
                <p>{usp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
