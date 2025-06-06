import React from 'react';

const GlobalCart = () => {
    const [cartItems, setCartItems] = React.useState([]);

    const handleRemoveItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const handleCheckout = () => {
        // Logic for proceeding to checkout
        alert('Proceeding to checkout...');
    };

    return (
        <div className="global-cart">
            <h2>Seu Carrinho</h2>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <div>
                                <h5>{item.title}</h5>
                                <p>Preço: <strong>R$ {item.price}</strong></p>
                                <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={handleCheckout} disabled={cartItems.length === 0}>
                Finalizar Compra
            </button>
        </div>
    );
};

export default GlobalCart;