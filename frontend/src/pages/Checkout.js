import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!customerName || !email) {
      alert('Please enter your name and email.');
      return;
    }

    // Simulate order submission
    const order = {
      customerName,
      email,
      items: cart,
      total: totalPrice.toFixed(2),
      date: new Date().toLocaleString(),
    };

    console.log('Order Placed:', order);

    // Clear cart after order
    clearCart([]);

    setOrderPlaced(true);
    setTimeout(() => {
      navigate('/'); // Redirect to homepage after 3 seconds
    }, 3000);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {orderPlaced ? (
        <h3>Thank you for your order, {customerName}! 🎉</h3>
      ) : (
        <>
          <p>Total Price: <strong>${totalPrice.toFixed(2)}</strong></p>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={customerName} 
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleCheckout}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default Checkout;
