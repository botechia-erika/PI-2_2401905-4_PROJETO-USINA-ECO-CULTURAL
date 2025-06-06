import React, { useState } from 'react';
import LoginForm from './LoginForm';
import PurchaseForm from './PurchaseForm';
import { Modal, Button } from 'react-bootstrap';

const StepModal = ({ show, handleClose }) => {
    const [step, setStep] = useState(1);
    const token = localStorage.getItem('token');

    const handleNextStep = () => {
        if (step === 1) {
            if (token) {
                setStep(2); // Go to PurchaseForm
            } else {
                setStep(3); // Go to LoginForm
            }
        } else if (step === 3) {
            // Logic to handle login success can be added here
            setStep(1); // Reset to initial step after login
        }
    };

    const handleLoginSuccess = () => {
        setStep(2); // Go to PurchaseForm after successful login
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{step === 1 ? 'Iniciar Compra' : step === 2 ? 'Finalizar Compra' : 'Login'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {step === 1 && <p>Você está prestes a iniciar a compra. Clique em continuar para prosseguir.</p>}
                {step === 2 && <PurchaseForm />}
                {step === 3 && <LoginForm onLoginSuccess={handleLoginSuccess} />}
            </Modal.Body>
            <Modal.Footer>
                {step !== 2 && <Button variant="secondary" onClick={handleClose}>Fechar</Button>}
                <Button variant="primary" onClick={handleNextStep}>
                    {step === 1 ? 'Continuar' : step === 2 ? 'Finalizar Compra' : 'Entrar'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default StepModal;