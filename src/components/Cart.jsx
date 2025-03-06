import { useState } from "react";
import "./Cart.css";

const Cart = ({ cart = [], setCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getCartSummary = () => {
    const summary = {};
    cart.forEach((item) => {
      if (summary[item.name]) {
        summary[item.name].quantity += 1;
      } else {
        summary[item.name] = { ...item, quantity: 1 };
      }
    });
    return Object.values(summary);
  };

  const removeFromCart = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  const decreaseQuantity = (name) => {
    const index = cart.findIndex((item) => item.name === name);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-wrapper">
      <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>
        🛒 ({cart.length})
      </button>

      {isOpen && (
        <div className="cart-container">
          <h2>Carrito de Compras</h2>
          <ul>
            {getCartSummary().map((item) => (
              <li key={item.name}>
                {item.name} x{item.quantity} - ${item.price * item.quantity}
                <button onClick={() => decreaseQuantity(item.name)}>-</button>
                <button onClick={() => removeFromCart(item.name)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={clearCart} className="cart-general">Vaciar Carrito</button>
          <button onClick={() => setIsOpen(false)} className="cart-general">Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
