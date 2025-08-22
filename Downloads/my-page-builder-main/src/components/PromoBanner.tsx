import React from 'react';

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="container mx-auto px-4">
        <div className="banner-content">
          <p className="banner-text">
            ¡Envío <strong>GRATIS</strong> en compras mayores a $999!
          </p>
          <a href="#" className="banner-button">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;