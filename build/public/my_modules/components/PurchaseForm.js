import React, { useState } from 'react';

const PurchaseForm = ({ onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle purchase logic here
        console.log('Purchase submitted:', { quantity, address, paymentMethod });
        onClose(); // Close the form after submission
    };

    return (
        <div className="purchase-form">
            <h2>Complete Your Purchase</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Shipping Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method:</label>
                    <select
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="credit">Credit Card</option>
                        <option value="debit">Debit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Confirm Purchase</button>
            </form>
        </div>
    );
};

export default PurchaseForm;