import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; 
import './CSS/PaymentCheckout.css';

const PaymentCheckout = () => {
  const { cartItems, all_product, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const productsInCart = Object.keys(cartItems)
    .filter(id => cartItems[id] > 0)
    .map(id => {
      const product = all_product.find(p => p.id === Number(id));
      return {
        ...product,
        quantity: cartItems[id]
      };
    });

  const handleKhaltiPayment = async () => {
    try {
      const response = await fetch('http://localhost:4000/khalti/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth-token') || '',
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();

      if (!response.ok) {
        alert('Payment initiation failed: ' + (data.error || 'Unknown error'));
        return;
      }

      const config = {
        publicKey: 'YOUR_KHALTI_PUBLIC_KEY', //we need key for this//
        productIdentity: data.purchase_order_id,
        productName: data.purchase_order_name,
        productUrl: data.website_url,
        eventHandler: {
          onSuccess(payload) {
            console.log('Payment success payload:', payload);
            alert('Payment successful! Transaction ID: ' + payload.idx);
          },
          onError(error) {
            console.error('Payment failed:', error);
            alert('Payment failed: ' + error.message);
          },
          onClose() {
            console.log('Payment widget closed.');
          },
        },
        paymentPreference: [
          'KHALTI',
          'EBANKING',
          'MOBILE_BANKING',
          'CONNECT_IPS',
          'SCT',
        ],
      };

      const khaltiCheckout = new window.KhaltiCheckout(config);
      khaltiCheckout.show({ amount: data.amount });
    } catch (error) {
      console.error('Error during Khalti payment:', error);
      alert('Error initiating payment');
    }
  };

  return (
    <div className="paymentcheckout">
      <h2>Payment Checkout</h2>
      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {productsInCart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          productsInCart.map(product => (
            <p key={product.id}>
              {product.name} x {product.quantity} = Rs. {product.new_price * product.quantity}
            </p>
          ))
        )}
        <p><strong>Total: Rs. {totalAmount}</strong></p>
      </div>
      <div className="payment-methods">
        <h4>Choose Payment Method</h4>
        <button id="khalti-pay-button" onClick={handleKhaltiPayment} disabled={productsInCart.length === 0}>
          Pay with Khalti
        </button>
      </div>
    </div>
  );
};

export default PaymentCheckout;
