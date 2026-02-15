import "./Cart.css"; 

export const Cart = () => {
  const cartItems = [
    { id: 1, title: "Produto Exemplo", price: 25.99, quantity: 1 }
  ];

  return (
    <div className="cart-container">
      <h2>O Teu Carrinho</h2>

      {cartItems.length === 0 ? (
        <p>O teu carrinho está vazio! 🛒</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.title}</span>
              <span>{item.price}€</span>
              <button>Remover</button>
            </div>
          ))}
          
          <div className="cart-summary">
            <h3>Total: 25.99€</h3>
            <button className="checkout-btn">Finalizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
};