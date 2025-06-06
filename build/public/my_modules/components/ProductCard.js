import React, { useState } from 'react';
import ProductDetailsModal from './ProductDetailsModal';
import StepModal from './StepModal';

const ProductCard = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const handlePurchaseClick = () => {
    setShowPurchase(true);
  };

  const closeDetailsModal = () => {
    setShowDetails(false);
  };

  const closePurchaseModal = () => {
    setShowPurchase(false);
  };

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card product-card h-100">
        <div className="card-body">
          <h5 className="card-title ml-2">Produto Exemplo</h5>
          <div className="card-text">
            <p className="card-text">Breve descrição exemplo do produto para compra</p>
            <img src="/assets/brand/logoAdaptado.svg" className="card-img-top" alt="Imagem do Produto" />
            <p>Preço: <strong>R$ 50,00</strong> <span className="badge badge-success">10%</span></p>
          </div>
        </div>
        <div className="d-flex justify-content-evenly align-items-center mb-3">
          <button className="btn btn-small btn-primary" onClick={handleDetailsClick}>Detalhes</button>
          <button className="btn btn-small btn-primary" onClick={handlePurchaseClick}>Comprar</button>
        </div>
      </div>

      <ProductDetailsModal show={showDetails} onClose={closeDetailsModal} />
      <StepModal show={showPurchase} onClose={closePurchaseModal} />
    </div>
  );
};

export default ProductCard;