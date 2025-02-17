import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
	<>
        {cart.map((product) => (
          <div key={product.cartId} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
	    <button onClick={() => removeFromCart(product.cartId)}>Remove</button>
          </div>
        ))}
	<h3>Total Price: ${totalPrice.toFixed(2)}</h3>
	<button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
	</>
      )}
    </div>
  );
}

export default Cart;
