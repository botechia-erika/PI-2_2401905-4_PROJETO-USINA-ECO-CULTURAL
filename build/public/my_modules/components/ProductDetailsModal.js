import React from 'react';
import Modal from 'react-modal';
import LoginForm from './LoginForm';
import PurchaseForm from './PurchaseForm';

const ProductDetailsModal = ({ isOpen, onRequestClose, product }) => {
  const token = localStorage.getItem('token');
  const [step, setStep] = React.useState(token ? 'purchase' : 'login');

  const handleLoginSuccess = () => {
    setStep('purchase');
  };

  const handlePurchaseComplete = () => {
    onRequestClose();
    // Additional logic for completing the purchase can be added here
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Preço: <strong>{product.price}</strong></p>

      {step === 'login' && (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}

      {step === 'purchase' && (
        <PurchaseForm product={product} onPurchaseComplete={handlePurchaseComplete} />
      )}

      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default ProductDetailsModal;